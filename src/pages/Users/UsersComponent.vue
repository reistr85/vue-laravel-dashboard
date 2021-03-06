<template>
  <DashboardComponent>
    <div slot="slot-pages" class="content-pages">
      <header class="title_pages">
        <h2>{{this.$route.meta.title}}</h2>
        <p>{{this.$route.meta.description}}</p>
      </header>

      <section class="content-main-pages">
        <ListsComponent 
          :data="users" 
          :columns="columnsList"
          :route_btn="'user_create'"
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
import UsersService from './services/UsersService';
import DashboardComponent from '../Dashboard/DashboardComponent';
import ListsComponent from '@/components/ListsComponent';

export default {
  name: 'Users',

  data(){
    return {
      data_list: [],
      users: [],
      columnsList: {
        'id': '#',
        'name': 'Nome',
        'email': 'E-mail',
      }
    }
  },
  mounted() {
    this.getAllUsers();
  },
  mixins: [mixins],
  methods: {
    getAllUsers(){
      UsersService.getAllUsers().then(res => {
        this.users = res.data.users;
        this.data_list = res.data.users;
      }).catch(err => {
        console.log(err);
      });
    },
    show(id){
      this.$router.push({name: 'users_show', params: {id, action: 'update'}, props: {action: 'update'}});
    },
    destroy(id){
      this.alertConfirmation(
        "Excluir usuário",
        "Você realmente deseja excluir este usuário?",
        "question"
      ).then((res) => {
        if (res) {
          UsersService.delete(id).then(() => {
            this.toastMessage("Excluído com sucesso.", "success");
            this.getAllUsers();
          }).catch(err => {
            if(err.response.status == 500){
              this.toastMessage(err.response.data.message);
            }else{
              this.toastMessage("Erro ao excluir o usuário.");
            }
          });
        }
      });
    },
    filter(filterSearch){
      this.filterSearch(filterSearch, 'users', ['name', 'email']);
    },
  },
  components: {
    DashboardComponent,
    ListsComponent,
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />