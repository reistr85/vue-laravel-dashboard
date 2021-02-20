<template>
  <DashboardComponent>
    <div slot="slot-pages" class="content-pages">
      <header class="title_pages">
        <h2>{{this.$route.meta.title}}</h2>
        <p>{{this.$route.meta.description}}</p>
      </header>

      <section class="content-main-pages">
        <ListsComponent 
          :data="enrollments" 
          :columns="columnsList"
          :route_btn="'enrollment_create'"
          @filter="filter"
          @show="show"
          @destroy="destroy" />
      </section>
      
    </div>
  </DashboardComponent>
</template>

<script>
import mixins from '@/mixins';
import EnrollmentsService from './services/EnrollmentsService';
import DashboardComponent from '../Dashboard/DashboardComponent';
import ListsComponent from '@/components/ListsComponent';

export default {
  name: 'Enrollments',

  data(){
    return {
      data_list: [],
      enrollments: [],
      columnsList: {
        'id': '#',
        'customer_name': 'Cliente',
        'modality_description': 'Modalidade',
        'price': 'Valor',
        'maturity_day': 'Venc.',
      }
    }
  },
  mounted() {
    this.getAll();
  },
  mixins: [mixins],
  methods: {
    getAll(){
      EnrollmentsService.index().then(res => {
        this.enrollments = res.data.enrollments;
        this.data_list = res.data.enrollments;
      }).catch(err => {
        console.log(err);
      });
    },
    show(id){
      this.$router.push({name: 'enrollment_show', params: {id, action: 'update'}});
    },
    destroy(id){
      this.alertConfirmation(
        "Excluir matrícula",
        "Você realmente deseja excluir esta matrícula?",
        "question"
      ).then((res) => {
        if (res) {
          EnrollmentsService.delete(id).then(() => {
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
      this.filterSearch(filterSearch, 'enrollments', ['customer_name', 'modality_description']);
    },
  },
  components: {
    DashboardComponent,
    ListsComponent,
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />