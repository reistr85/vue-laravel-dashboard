<template>
  <div>
    <label :for="id" v-if="label">{{label}}</label>
    <input 
      :type="input_type" 
      class="form-control" 
      :name="name" 
      :id="id" 
      :placeholder="placeholder"
      :readonly="readonly"
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
    placeholder: {
      type: String,
      default: '',
    },
    model: {
      type: Object
    },
    readonly: {
      type: Boolean,
      default: false,
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