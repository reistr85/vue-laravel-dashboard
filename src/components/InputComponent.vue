<template>
  <div>
    <label :for="id">{{label}}</label>
    <input 
      :type="input_type" 
      class="form-control" 
      :name="name" 
      :id="id" 
      v-model="model[name]">
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    label: {
      type: String,
      default: '',
    },
    input_type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    model: {
      type: Object
    }
  },
  data(){
    return {
      
    }
  }
}
</script>

<style>

</style>