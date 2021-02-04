<template>
  <DashboardComponent>
    <div slot="slot-pages" class="content-pages">
      <header class="title_pages">
        <h2>{{this.$route.meta.title}}</h2>
        <p>{{this.$route.meta.description}}</p>
      </header>

      <section class="content-main-pages">
        <ListsComponent 
          :data="customers" 
          :columns="columnsList"
          :route_btn="'customer_create'"
          @filter="filter"
          @show="show"
          @destroy="destroy" />
      </section>
      
    </div>
  </DashboardComponent>
</template>

<script>
import mixins from '@/mixins';
import CustomersService from './services/CustomersService';
import DashboardComponent from '../Dashboard/DashboardComponent';
import ListsComponent from '@/components/ListsComponent';

export default {
  name: 'Customers',

  data(){
    return {
      data_list: [],
      customers: [],
      columnsList: {
        'id': '#',
        'description': 'Descrição',
        'price': 'Preço',
      }
    }
  },
  mounted() {
    this.getAll();
  },
  mixins: [mixins],
  methods: {
    getAll(){
      CustomersService.index().then(res => {
        this.customers = res.data.customers;
        this.data_list = res.data.customers;
      }).catch(err => {
        console.log(err);
      });
    },
    show(id){
      this.$router.push({name: 'customer_show', params: {id, action: 'update'}});
    },
    destroy(id){
      this.alertConfirmation(
        "Excluir cliente",
        "Você realmente deseja excluir este cliente?",
        "question"
      ).then((res) => {
        if (res) {
          CustomersService.delete(id).then(() => {
            this.toastMessage("Excluído com sucesso.", "success");
            this.getAll();
          }).catch(err => {
            if(err.response.status == 500){
              this.toastMessage(err.response.data.message);
            }else{
              this.toastMessage("Erro ao excluir o cliente.");
            }
          });
        }
      });
    },
    filter(filterSearch){
      this.filterSearch(filterSearch, 'customers', 'name');
    },
  },
  components: {
    DashboardComponent,
    ListsComponent,
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />