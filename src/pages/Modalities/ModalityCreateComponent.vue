<template>
  <DashboardComponent>
    <div slot="slot-pages" class="content-pages">
      <header class="title_pages">
        <h2>{{this.$route.meta.title}}</h2>
        <p>{{this.$route.meta.description}}</p>
      </header>

      <section class="content-main-pages">
        <div class="content-header"></div>

        <div class="content-body">
          <form>
            <div class="row">
              <div class="col-6">
                <InputComponent 
                  label="Descrição"
                  name="description"
                  id="description"
                  :model="modality" />
              </div>

              <div class="col-3">
                <label for="price">Preço</label>
                <Money
                  v-model="modality.price"
                  v-bind="money"
                  class="form-control"
                  id="price"
                  name="price"
                  :value="price" />
              </div>
            </div>
          </form>
        </div>

        <div class="content-footer">
          <router-link :to="{name: 'modalities'}" class="btn btn-primary btn-sm" title="voltar">
            <i class="fa fa-reply-all"></i> voltar
          </router-link>

          <button 
            class="btn btn-success btn-sm mx-2" 
            title="confirmar alterações"
            @click="confirm()"
            >
            <i class="fa fa-check"></i> confirmar
          </button>
        </div>
      </section>
    </div>
  </DashboardComponent>
</template>

<script>
import { Money } from "v-money";
import mixins from '@/mixins';
import ModalitiesService from './services/ModalitiesService';
import DashboardComponent from '../Dashboard/DashboardComponent';
import InputComponent from '@/components/InputComponent';

export default {
  name: 'ModalityCreate',
  mixins: [mixins],
  data(){
    return {
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
        suffix: "",
        precision: 2,
        masked: false,
      },
      modality: {
        description: '',
        price: 0,
      },
      price: 0,
    }
  },
  mounted(){
    if(this.action != 'create')
      this.find();
  },
  methods: {
    find(){
      const modality_id = this.$route.params.id;

      if(!modality_id)
        return;
     
      ModalitiesService.show(modality_id).then(res => {
        this.modality = res.data.modality;
      }).catch(err => {
        console.log(err);
      });
    },
    confirm(){
      let action = 'create'
      if(this.action === 'show')
        action = 'update';

      this[action]();
    },
    create(){
      ModalitiesService.store(this.modality).then(() => {
        this.toastMessage("Realizado com sucesso.", "success");
        this.$router.push({name: 'modalities'});
      }).catch(err => {
        if(err.response.status === 422){
          this.toastMessage(err.response.data.errors);
        }else{
          this.toastMessage("Ocorreu um erro. Tente novamente!");
        }
      });
    },
    update(){
      const modality = {
        id: this.modality.id,
        description: this.modality.description,
        price: this.modality.price
      }

      ModalitiesService.update(modality).then(() => {
        this.toastMessage("Realizadom com sucesso.", "success");
        this.$router.push({name: 'modalities'});
      }).catch(err => {
        if(err.response.status === 422){
          this.toastMessage(err.response.data.errors);
        }else{
          this.toastMessage("Ocorreu um erro. Tente novamente!");
        }
      });
    },
  },
  components: {
    Money,
    DashboardComponent,
    InputComponent,
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />