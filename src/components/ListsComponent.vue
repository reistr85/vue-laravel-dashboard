<template>
  <div class="lists">
    <div class="top mb-5">
      <ButtonSimpleComponent 
        v-if="!noCreate"
        :icon="'fa-plus'" 
        :label="'Novo'" 
        :class_btn="'btn-success'" 
        @action="action_btn_new" />

      <InputComponent 
        v-if="!noFilter"
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
            <td align="right">
              <span class="label-actions-list">Ações</span>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="item.id">
            <td v-for="(column, i) in Object.keys(columns)" :key="i">
              <p class="m-0 my-1">{{ i == 0 ? index+1 : item[column] }}</p>
            </td>
            <td align="right">
              <button class="btn btn-primary btn-sm mx-1" v-if="!noActions" @click.prevent="functionActions(item)">
                <i class="fa fa-plus-circle"></i>
              </button>
              <button class="btn btn-secondary btn-sm mx-1" v-if="!noShow" @click.prevent="show(item.id)">
                <i class="fa fa-eye"></i>
              </button>
              <button class="btn btn-danger btn-sm mx-1" v-if="!noDestroy" @click="destroy(item.id)">
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="footer mt-5">
      <div class="row">
        <div class="col-6">
          <p v-if="data">Quantidade de registros<span class="badge bg-secondary mx-2">{{ data.length }}</span></p>
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
    },
    noFilter: {
      type: Boolean,
      default: false
    },
    noCreate: {
      type: Boolean,
      default: false
    },
    noActions: {
      type: Boolean,
      default: false
    },
    noShow: {
      type: Boolean,
      default: false
    },
    noDestroy: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    'search.value'(){
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
      this.data_list = this.data;
    },
    show(id){
      this.$emit('show', id);
    },
    destroy(id){
      this.$emit('destroy', id);
    },
    action_btn_new(){
      this.$router.push({name: this.route_btn});
    },
    functionActions(item){
      const params = {
        ...item
      }
      this.$emit('functionActions', params);
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

  .label-actions-list {
    margin-right: 30px;
  }
}
</style>