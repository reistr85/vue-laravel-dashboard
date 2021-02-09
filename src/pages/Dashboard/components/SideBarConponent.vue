<template>
  <div class="sidebar">
    <div class="top">
      <div class="info">
        <h3 class="name">Academia</h3>
      </div>
    </div>

    <div class="menu">
      <ul>
        <li :class="[{'active': menuActive(['home'])}]"><router-link :to="{name: 'home'}"><i class="fa fa-home icon"></i> Início</router-link></li>
        <li :class="[{'active': menuActive(['users', 'users_show', 'user_create'])}]"><router-link :to="{name: 'users'}"><i class="fa fa-users icon"></i> Usuários</router-link></li>
        <li :class="[{'active': menuActive(['modalities', 'modality_show', 'modality_create'])}]"><router-link :to="{name: 'modalities'}"><i class="fa fa-box icon"></i> Modalidades</router-link></li>
        <li :class="[{'active': menuActive(['customers', 'customer_show', 'customer_create'])}]"><router-link :to="{name: 'customers'}"><i class="fa fa-users icon"></i> Clientes</router-link></li>
        <li :class="[{'active': menuActive(['enrollments', 'enrollment_show', 'enrollment_create'])}]"><router-link :to="{name: 'enrollments'}"><i class="fa fa-chart-bar icon"></i> Matrículas</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBarComponent',
  
  methods: {
    menuActive(routerName){
      for(let item in routerName){
        if(routerName[item] == this.$route.name){
        return true;
        }
      }
      
      return false;
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_colors.scss';

.sidebar {
  .top {
    width: 100%;
    text-align: center;
    padding: 15px 0;
    margin-top: 0px;
    border-bottom: 1px solid rgba($color: $white, $alpha: .3);

    .info {
      h3{
        margin: 0;
        color: $white;
      }
    }
  }

  .menu {
    margin-top: 15px;
    padding: 10px 20px;

    ul { 
      padding: 0;

      li {
        margin: 15px 0;
        font-size: 14px;
        list-style: none;
        font-weight: 200;
        background: rgba($color: $white, $alpha: .2);
        padding: 10px 18px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: all .3s ease;

        a {
          color: $white;
          text-decoration: none;
          
          .icon {
            margin-right: 8px;
          }
        }
      }

      li:hover, li.active {
        background: $green;
      }
    }
  }
}
</style>