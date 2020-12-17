<template>
  <div class="navbar">
    <i class="fa fa-list icon-menu"></i>
    <a href="" @click.prevent="logout" class="logout">Sair <i class="fa fa-sign-out-alt"></i></a>
  </div>
</template>

<script>
export default {
  name: 'NabBarConponent',
  methods: {
    logout(){
      this.$router.push({name: 'login'})
    }
  }
}
</script>

<style lang="scss">

.navbar {
  .icon-menu {
    color: #333;
    font-size: 22px;
    cursor: pointer;
  }

  .logout {
    color: #333;
    text-decoration: none;
  }
}
</style>