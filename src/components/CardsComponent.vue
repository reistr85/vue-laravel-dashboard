<template>
  <div class="my_card">
    <div class="content top">
      <div class="icon" :style="{backgroundColor: bg}">
        <i :class="['fa ico', icon, ]"></i>
      </div>

      <div class="info">
        <h3>{{ type }}</h3>
        <h4>{{ qtd }}</h4>
      </div>
      
    </div>

    <div class="content footer">
      <p class="info">Lorem ipsun test</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardsComponent',
  props: {
    type: String,
    percentage: String,
    icon: String,
    qtd: Number,
    bg: String,
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_main';

.my_card {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: $white;
  padding: 15px;
  border-radius: 3px;
  box-shadow: 0px 1px 3px 1px rgba(0,0,0,.3);
  -webkit-box-shadow: 0px 1px 3px 1px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 1px 3px 1px rgba(0,0,0,0.3);
  margin-top: 15px;

  .content {
    display: flex; 
    justify-content: space-between
  }

  .top {
    position: relative;

    .icon {
      position: absolute;
      width: 70px;
      height: 70px;
      top: -35px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 3px;
      box-shadow: 0px 1px 4px 1px rgba(0,0,0,.3);
      -webkit-box-shadow: 0px 1px 4px 1px rgba(0,0,0,0.3);
      -moz-box-shadow: 0px 1px 4px 1px rgba(0,0,0,0.3);

      .ico {
        font-size: 22px;
        color: $white;
      }
    }

    .info {
      position: absolute;
      right: 0;

      h3 {
        font-size: 16px;
        font-weight: normal;
        color: $gray3;
      }

      h4 {
        font-size: 22px;
        font-weight: 200;
        text-align: right;
      }
    }
  }

  .footer {
    margin-top: 70px;
    border-top: 1px solid $gray2;

    .info {
      font-size: 14px;
      font-weight: normal;
      margin: 10px 0 0 0;
      color: $gray4;
    }
  }
}
</style>