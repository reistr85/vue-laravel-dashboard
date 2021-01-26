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
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td v-for="(column, index) in Object.keys(columns)" :key="index">
              <p class="users m-0 my-1">{{ item[column] }}</p>
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
  }
}
</script>

<style lang="scss" scoped>
.lists {
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #fff;

  .users {
    font-size: 12px;
  }
}
</style>