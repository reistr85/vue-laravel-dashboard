<template>
  <div>
    <label :for="attribute">{{ label }}</label>
    <select name="" :id="attribute" class="form-control" 
      @change="changeSelect()"
      :ref="attribute">
      <option value=""></option>
      <option 
        v-for="(item, index) in data" 
        :key="index"
        :value="item.id"
        :selected="itemSelected && item.id == itemSelected">
        {{ item.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    label: {
      type: String,
      default: '',
    },
    attribute: {
      type: String
    },
    model: {
      type: Object
    },
    data: {
      type: Array
    },
    itemSelected: {
      type: Number,
      default: 0
    }
  },
  data(){
    return {
      
    }
  },
  methods: {
    changeSelect(){
      const params = {
        value: this.$refs[this.attribute].value,
        model: this.model,
        attribute: this.attribute
      }
      
      this.$emit('changeSelect', params)
    },
  }
}
</script>

<style>

</style>