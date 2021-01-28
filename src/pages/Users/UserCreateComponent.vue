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
                  :model="user" 
                  @change="changeInputText"/>
              </div>

              <div class="col-3">
                <InputComponent 
                  label="E-mail"
                  name="email"
                  id="email"
                  :model="user" 
                  @change="changeInputText"/>
              </div>

              <div class="col-3">
                <InputComponent 
                  input_type="password"
                  label="Senha"
                  name="password"
                  id="password"
                  :model="user" 
                  @change="changeInputText"/>
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
      user: {
        name: 'Renan Reis',
        email: 'reistr85@gmail.com',
        password: 're851120',
      }
    }
  },
  methods: {
    confirm(){
      UsersService.update(this.user)
      
      this.toastMessage("Realizadom com sucesso.", "success");
      this.$router.push({name: 'users'});
    },
    changeInputText(data){
      data.model[data.name] = data.value;
    }
  },
  components: {
    DashboardComponent,
    InputComponent,
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />