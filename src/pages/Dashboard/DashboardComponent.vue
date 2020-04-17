<template>
    <div class="main">
      <div class="sidebar">
        <SideBarComponent />
      </div>

      <div class="content-right">

        <div class="navbar">
          <NabBarConponent />
        </div>

        <div class="pages">
          <slot name="slot-pages"></slot>
        </div>
      </div>
    </div>
</template>

<script>
import SideBarComponent from './components/SideBarConponent';
import NabBarConponent from './components/NabBarConponent';

export default {
  name: 'DashBoardComponent',
  components: {
    SideBarComponent,
    NabBarConponent
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />