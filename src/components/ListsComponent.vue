<template>
  <div class="lists">
    <div class="top">
      <p><strong>{{ description }}</strong> <span class="badge badge-info">{{ data.length }}</span></p>
    </div>

    <div class="content">
      <table class="table table-striped my_table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">{{ columns[0] }}</th>
            <th scope="col">{{ columns[1] }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <th scope="row"><p class="users">{{ item.id }}</p></th>
            <td><p class="users">{{ item.name }}</p></td>
            <td><p class="users">{{ (description == 'Clientes') ? item.email : item.value }}</p></td>
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