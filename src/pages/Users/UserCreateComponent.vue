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

              <div class="col-3">
                <InputComponent 
                  input_type="password"
                  label="Repita a Senha"
                  name="confirm_password"
                  id="confirm_password+"
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
      let action = 'create'
      if(this.action === 'show')
        action = 'update';

      this[action]();
    },
    create(){
      this.user.type = 'D';
      
      UsersService.create(this.user).then(() => {
        this.toastMessage("Realizadom com sucesso.", "success");
        this.$router.push({name: 'users'});
      }).catch(err => {
        if(err.response.status === 422){
          this.toastMessage(err.response.data.errors);
        }else{
          this.toastMessage("Ocorreu um erro. Tente novamente!");
        }
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
        this.$router.push({name: 'users'});
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