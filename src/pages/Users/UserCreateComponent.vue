<template>
  <DashboardComponent>
    <div slot="slot-pages" class="content-pages">
      <header class="title_pages">
        <h2>{{this.$route.meta.title}}</h2>
        <p>{{this.$route.meta.description}}</p>
      </header>

      <section class="content-main-pages">
        <div class="content-header">
          <router-link :to="{name: 'users'}" class="btn btn-primary btn-sm" title="voltar">
            <i class="fa fa-reply-all"></i> voltar
          </router-link>
        </div>

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

        <div class="content-footer"></div>
      </section>
      
    </div>
  </DashboardComponent>
</template>

<script>
import DashboardComponent from '../Dashboard/DashboardComponent';
import InputComponent from '@/components/InputComponent';

export default {
  name: 'UserCreate',
  
  data(){
    return {
      user: {
        name: '',
        email: '',
        password: '',
      }
    }
  },
  methods: {
    show(id){
      this.$router.push({name: 'users_show', params: {id}});
    },
    destroy(id){
      console.log('destroy: '+id);
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