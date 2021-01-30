<template>
  <div>
    <button @click="action()" :class="[`btn btn-sm ${class_btn}`]">
      <i :class="[`fa ${icon}`]"></i> {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonSimple',
  props: {
    class_btn: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  methods: {
    action(){
      this.$emit('action')
    }
  }
}
</script>

<style>

</style>