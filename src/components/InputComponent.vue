<template>
  <div>
    <label :for="id">{{label}}</label>
    <input 
      :type="input_type" 
      class="form-control" 
      :name="name" 
      :id="id" 
      v-model="model_input_text">
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
      type: Object,
      default: null,
    }
  },
  watch: {
    model_input_text(){
      const data = {
        model: this.model,
        name: this.name,
        value: this.model_input_text
      }
      
      this.$emit('change', data);
    }
  },
  data(){
    return {
      model_input_text: '',
    }
  }
}
</script>

<style>

</style>