<template>
  <DashboardComponent>
    <div slot="slot-pages" class="content-pages">
      <header class="title_pages">
        <h2>{{this.$route.meta.title}}</h2>
        <p>{{this.$route.meta.description}}</p>
      </header>

      <section class="content-main-pages">
        <ListsComponent 
          :data="modalities" 
          :columns="columnsList"
          :route_btn="'modality_create'"
          noActions
          @filter="filter"
          @show="show"
          @destroy="destroy" />
      </section>
      
    </div>
  </DashboardComponent>
</template>

<script>
import mixins from '@/mixins';
import ModalitiesService from './services/ModalitiesService';
import DashboardComponent from '../Dashboard/DashboardComponent';
import ListsComponent from '@/components/ListsComponent';

export default {
  name: 'Modalities',

  data(){
    return {
      data_list: [],
      modalities: [],
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
      ModalitiesService.index().then(res => {
        this.modalities = res.data.modalities;
        this.data_list = res.data.modalities;
      }).catch(err => {
        console.log(err);
      });
    },
    show(id){
      this.$router.push({name: 'modality_show', params: {id, action: 'update'}});
    },
    destroy(id){
      this.alertConfirmation(
        "Excluir modalidade",
        "Você realmente deseja excluir esta modalidade?",
        "question"
      ).then((res) => {
        if (res) {
          ModalitiesService.delete(id).then(() => {
            this.toastMessage("Excluído com sucesso.", "success");
            this.getAll();
          }).catch(err => {
            if(err.response.status == 500){
              this.toastMessage(err.response.data.message);
            }else{
              this.toastMessage("Erro ao excluir a modalidade.");
            }
          });
        }
      });
    },
    filter(filterSearch){
      this.filterSearch(filterSearch, 'modalities', 'description');
    },
  },
  components: {
    DashboardComponent,
    ListsComponent,
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />