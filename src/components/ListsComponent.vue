<template>
  <div class="lists">
    <div class="top">
      <p><strong>{{ description }}</strong> <span class="badge badge-info">{{ data.length }}</span></p>
    </div>

    <div class="content">
      <table class="table table-striped my_table">
        <thead>
          <tr>
            <th scope="col" v-for="(column, index) in Object.keys(columns)" :key="index">
              {{ columns[column] }}
            </th>
            <th scope="col">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="item.id">
            <td v-for="(column, i) in Object.keys(columns)" :key="i">
              <p class="m-0 my-1">{{ i == 0 ? index+1 : item[column] }}</p>
            </td>
            <td>
              <button class="btn btn-secondary btn-sm" @click="show(item.id)"><i class="fa fa-eye"></i></button>
              <button class="btn btn-danger btn-sm mx-1" @click="destroy(item.id)"><i class="fa fa-trash"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListsComponent',
  props: {
    data: Array,
    description: String,
    columns: {},
  },
  methods: {
    show(id){
      this.$emit('show', id);
    },
    destroy(id){
      this.$emit('destroy', id);
    }
  },
}
</script>

<style lang="scss" scoped>
.lists {
  width: 100%;
}
</style>