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
              <div class="col-4">
                <InputComponent 
                  label="Nome"
                  name="name"
                  id="name"
                  :model="customer" />
              </div>

              <div class="col-4">
                <InputComponent 
                  label="E-mail"
                  name="email"
                  id="email"
                  :model="customer" />
              </div>

              <div class="col-4">
                <InputComponent 
                  label="Celular"
                  name="cell_phone"
                  id="cell_phone"
                  v-mask="'(##)#####-####'"
                  :model="customer" />
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
        name: this.customer.name,
        email: this.customer.email,
        cell_phone: this.customer.cell_phone,
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
    DashboardComponent,
    InputComponent,
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />