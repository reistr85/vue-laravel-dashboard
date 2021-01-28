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
      users: [
        {
          id: 1,
          name: 'Renan Trindade dos Reis',
          email: 'reistr85@gmail.com'
        },
        {
          id: 2,
          name: 'Ester Vieira Trindade dos Reis',
          email: 'ester@gmail.com'
        },
        {
          id: 3,
          name: 'Gabriel Vieira Trindade dos Reis',
          email: 'gabriel@gmail.com'
        }
      ],
      columnsList: {
        'id': '#',
        'name': 'Nome',
        'email': 'E-mail',
      }
    }
  },
  created() {
    this.getAllUsers();
  },
  mixins: [mixins],
  methods: {
    getAllUsers(){
      UsersService.getAllUsers();
    },
    show(id){
      this.$router.push({name: 'users_show', params: {id}});
    },
    destroy(id){
      id;
      this.alertConfirmation(
        "Excluir usuário",
        "Você realmente deseja excluir este usuário?",
        "question"
      ).then((res) => {
        if (res) {
          this.toastMessage("Excluído com sucesso.", "success");
        }
      });
    }
  },
  components: {
    DashboardComponent,
    ListsComponent,
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />