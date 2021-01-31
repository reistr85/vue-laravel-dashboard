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
              <div class="col-3">
                <InputComponent 
                  label="Nome"
                  name="name"
                  id="nome"
                  :model="user" />
              </div>

              <div class="col-3">
                <InputComponent 
                  label="E-mail"
                  name="email"
                  id="email"
                  :model="user" />
              </div>

              <div class="col-3">
                <InputComponent 
                  input_type="password"
                  label="Senha"
                  name="password"
                  id="password"
                  :model="user" />
              </div>
            </div>
          </form>
        </div>

        <div class="content-footer">
          <router-link :to="{name: 'users'}" class="btn btn-primary btn-sm" title="voltar">
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
import UsersService from './services/UsersService';
import DashboardComponent from '../Dashboard/DashboardComponent';
import InputComponent from '@/components/InputComponent';

export default {
  name: 'UserCreate',
  mixins: [mixins],
  props: {
    action: {
      type: String,
      default: 'create'
    }
  },
  data(){
    return {
      user: {}
    }
  },
  mounted(){
    this.getUser();
  },
  methods: {
    getUser(){
      const user_id = this.$route.params.id;

      if(!user_id)
        return;
     
      UsersService.getUser(user_id).then(res => {
        this.user = res.data.user;
      }).catch(err => {
        console.log(err);
      });
    },
    confirm(){
      this[this.action]();
      this.$router.push({name: 'users'});
    },
    create(){
      this.user.type = 'D';
      
      UsersService.create(this.user).then(() => {
        this.toastMessage("Realizadom com sucesso.", "success");
      }).catch(err => {
        console.log(err);
        this.toastMessage("Erro ao criar o usuário.");
      });
    },
    update(){
      const user = {
        id: this.user.id,
        name: this.user.name,
        email: this.user.email,
        password: this.user.password
      }

      UsersService.update(user).then(() => {
        this.toastMessage("Realizadom com sucesso.", "success");
      }).catch(err => {
        console.log(err);
        this.toastMessage("Erro ao atualizar o usuário.");
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