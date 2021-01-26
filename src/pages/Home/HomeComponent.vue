<template>
  <DashboardComponent>
    <div slot="slot-pages" class="content-pages">
      <header class="title_pages">
        <h2>{{this.$route.meta.title}}</h2>
        <p>{{this.$route.meta.description}}</p>
      </header>

      <div>
        <div class="row">
          <div class="col-12 col-md-3">
            <CardsComponent :type="'Psicólogos'" :percentage="'7%'" :icon="'fa-users'" :qtd="'250'" :bg="'#4CAF4F'" />
          </div>

          <div class="col-12 col-md-3">
            <CardsComponent :type="'Pacientes'" :percentage="'7%'" :icon="'fa-users'" :qtd="'198'" :bg="'#FB9801'" />
          </div>

          <div class="col-12 col-md-3">
            <CardsComponent :type="'Consultas'" :percentage="'7%'" :icon="'fa-users'" :qtd="'788'" :bg="'#30CAE3'" />
          </div>

          <div class="col-12 col-md-3">
            <CardsComponent :type="'Cancelamentos'" :percentage="'7%'" :icon="'fa-users'" :qtd="'523'" :bg="'#7872CF'" />
          </div>
        </div>
      </div>

      <!-- <div class="mt-5">
        <div class="row">
          <div class="col-12 col-md-6">
            <ListsComponent :data="clients" description="Clientes" :columns="['Nome', 'E-mail']" />
          </div>

          <div class="col-12 col-md-6">
            <ListsComponent :data="products" description="Produtos" :columns="['Nome', 'Valor']" />
          </div>
        </div>
      </div> -->
    </div>
  </DashboardComponent>
</template>

<script>
/* eslint-disable */
import DashboardComponent from '../Dashboard/DashboardComponent';
import CardsComponent from '../../components/CardsComponent';
import ListsComponent from '../../components/ListsComponent'
const axios = require('axios');

export default {
  name: 'HomeComponent',
  data() {
    return {
      clients: [],
      products: [],
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData(){
      try{
        let response = await axios.get('/');

        this.clients = response.data.clients;
        this.products = response.data.products;
      }catch(error){
        console.error("Aconteceu um erro: "+error.response.status);
      }
    }
  },
  components: {
    DashboardComponent,
    CardsComponent,
    ListsComponent
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />