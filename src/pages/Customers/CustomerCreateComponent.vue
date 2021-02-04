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
                  :model="customer" />
              </div>

              <div class="col-3">
                <label for="price">Preço</label>
                <Money
                  v-model="customer.price"
                  v-bind="money"
                  class="form-control"
                  id="price"
                  name="price"
                  value="price" />
              </div>
            </div>
          </form>
        </div>

        <div class="content-footer">
          <router-link :to="{name: 'customers'}" class="btn btn-primary btn-sm" title="voltar">
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
import CustomersService from './services/CustomersService';
import DashboardComponent from '../Dashboard/DashboardComponent';
import InputComponent from '@/components/InputComponent';

export default {
  name: 'CustomerCreate',

  mixins: [mixins],
  props: {
    action: {
      type: String,
      default: 'create'
    }
  },
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
      customer: {},
    }
  },
  mounted(){
    if(this.action != 'create')
      this.find();
  },
  methods: {
    find(){
      const customer_id = this.$route.params.id;

      if(!customer_id)
        return;
     
      CustomersService.show(customer_id).then(res => {
        this.customer = res.data.customer;
      }).catch(err => {
        console.log(err);
      });
    },
    confirm(){
      console.log(this.action)
      this[this.action]();
    },
    create(){
      CustomersService.store(this.customer).then(() => {
        this.toastMessage("Realizado com sucesso.", "success");
        this.$router.push({name: 'customers'});
      }).catch(err => {
        if(err.response.status === 422){
          this.toastMessage(err.response.data.errors);
        }else{
          this.toastMessage("Ocorreu um erro. Tente novamente!");
        }
      });
    },
    update(){
      const customer = {
        id: this.customer.id,
        description: this.customer.description,
        price: this.customer.price
      }

      CustomersService.update(customer).then(() => {
        this.toastMessage("Realizadom com sucesso.", "success");
        this.$router.push({name: 'customers'});
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