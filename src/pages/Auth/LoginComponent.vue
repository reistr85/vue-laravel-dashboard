<template>
  <div class="main">
    <div class="login">
      <div class="content-login">
        <header>
          <h1>Login do sistema</h1>
        </header>

        <div class="form">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">E-mail</label>
              <input type="email" 
                class="form-control" 
                id="exampleInputEmail1" 
                placeholder="Enter email"
                v-model="email" />
            </div>
            <div class="form-group mt-3">
              <label for="exampleInputPassword1">Senha</label>
              <input type="password" 
                class="form-control" 
                id="exampleInputPassword1" 
                placeholder="Password"
                v-model="password" />
            </div>
            <button type="submit" class="btn btn-primary mt-2" @click.prevent="login">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from './services/AuthService';

export default {
  name: 'LoginComponent',

  data(){
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login(){

      const params = {
        email: this.email,
        password: this.password,
      }

      AuthService.login(params).then(() => {
        this.$router.push({name: 'home'});
      }).catch(err => {
        console.log(err);
      });
    }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />