<template>
  <div class="lists">
    <div class="top mb-5">
      <ButtonSimpleComponent 
        :icon="'fa-plus'" 
        :label="'Novo'" 
        :class_btn="'btn-success'" 
        @action="action_btn_new" />

      <InputComponent 
        label=""
        name="value"
        id="value"
        placeholder="pesquise aqui"
        :model="search" />
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
              <button class="btn btn-secondary btn-sm" @click.prevent="show(item.id)">
                <i class="fa fa-eye"></i>
                </button>
              <button class="btn btn-danger btn-sm mx-1" @click="destroy(item.id)"><i class="fa fa-trash"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="footer mt-5">
      <div class="row">
        <div class="col-6">
          <p>Quantidade de registros<span class="badge bg-secondary mx-2">{{ data_list.length }}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonSimpleComponent from '@/components/ButtonSimpleComponent';
import InputComponent from '@/components/InputComponent';

export default {
  name: 'ListsComponent',
  props: {
    data: Array,
    description: String,
    columns: {},
    route_btn: {
      type: String,
      default: ''
    }
  },
  watch: {
    'search.value'(){
      console.log(123)
      this.$emit("filter", this.search.value);
    }
  },
  data(){
    return {
      data_list: this.data,
      search: {
        value: '',
      },
    }
  },
  mounted(){
    this.listTable();
  },
  methods: {
    listTable(){
      console.log('555');
      this.data_list = this.data;
    },
    show(id){
      this.$emit('show', id);
    },
    destroy(id){
      this.$emit('destroy', id);
    },
    action_btn_new(){
      this.$router.push({name: 'user_create'});
    }
  },
  components: {
    ButtonSimpleComponent,
    InputComponent,
  }
}
</script>

<style lang="scss" scoped>
.lists {
  width: 100%;

  .top {
    display: flex;
    justify-content: space-between;
  }
}
</style>