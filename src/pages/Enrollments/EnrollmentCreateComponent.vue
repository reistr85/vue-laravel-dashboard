<template>
  <DashboardComponent>
    <div slot="slot-pages" class="content-pages">
      <header class="title_pages">
        <h2>{{this.$route.meta.title}}</h2>
        <p>{{this.$route.meta.description}}</p>
      </header>

      <section class="content-main-pages">
        <div class="content-header"></div>

        <div class="content-body">
          <form>
            <div class="row">
              <div class="col-4">
                <SelectComponent 
                  attribute="customer_id"
                  label="Cliente"
                  :data="data_select_customers"
                  :model="enrollment"
                  @changeSelect="changeSelect"/>
                {{enrollment}}
              </div>

              <div class="col-4">
                <SelectComponent 
                  attribute="modality_id"
                  label="Modalidades"
                  :data="data_select_modalities"
                  :model="enrollment"
                  @changeSelect="changeSelect"/>
                {{enrollment}}
              </div>

              <div class="col-4">
                <label for="price">Preço</label>
                <Money
                  v-model="enrollment.price"
                  v-bind="money"
                  class="form-control"
                  id="price"
                  name="price" />
              </div>
            </div>

            <div class="row mt-3">
              <div class="col-4">
                <label for="price">Desconto</label>
                <Money
                  v-model="enrollment.discount"
                  v-bind="money"
                  class="form-control"
                  id="discount"
                  name="discount" />
              </div>

              <div class="col-4">
                <InputComponent 
                  label="Vencimento"
                  name="maturity_day"
                  id="maturity_day"
                  input_type="number"
                  :model="enrollment" />
              </div>
            </div>
          </form>
        </div>

        <div class="content-footer">
          <router-link :to="{name: 'enrollments'}" class="btn btn-primary btn-sm" title="voltar">
            <i class="fa fa-reply-all"></i> voltar
          </router-link>

          <button 
            class="btn btn-success btn-sm mx-2" 
            title="confirmar alterações"
            @click="confirm()"
            >
            <i class="fa fa-check"></i> confirmar
          </button>
        </div>
      </section>
    </div>
  </DashboardComponent>
</template>

<script>
import mixins from '@/mixins';
import InputComponent from '@/components/InputComponent';
import SelectComponent from '@/components/SelectComponent';
import { Money } from "v-money";
import CustomersService from '@/pages/Customers/services/CustomersService';
import ModalitiesService from '@/pages/Modalities/services/ModalitiesService';
import EnrollmentsService from './services/EnrollmentsService';
import DashboardComponent from '../Dashboard/DashboardComponent';

export default {
  name: 'EnrollmentCreate',

  mixins: [mixins],
  props: {
    action: {
      type: String,
      default: 'create'
    }
  },
  data(){
    return {
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
        suffix: "",
        precision: 2,
        masked: false,
      },
      enrollment: {
        customer_id: 0,
        modality_id: 0,
        price: '',
        discount: '',
        maturity_day: '',
        payment_status: 1,
      },
      data_select_customers: [],
      data_select_modalities: [],
    }
  },
  mounted(){
    this.getCustomers();
    this.getModalities();
    if(this.action != 'create')
      this.find();
  },
  methods: {
    async getCustomers(){
      await CustomersService.index().then(res => {
        this.data_select_customers = CustomersService.formatDataInSelect(res.data.customers);
      }).catch(err => {
        console.log(err)
      });
    },
    async getModalities(){
      await ModalitiesService.index().then(res => {
        this.data_select_modalities = ModalitiesService.formatDataInSelect(res.data.modalities);
      }).catch(err => {
        console.log(err)
      });
    },
    find(){
      const enrollment_id = this.$route.params.id;

      if(!enrollment_id)
        return;
     
      EnrollmentsService.show(enrollment_id).then(res => {
        this.enrollment = res.data.enrollment;
      }).catch(err => {
        console.log(err);
      });
    },
    confirm(){
      this[this.action]();
    },
    create(){
      EnrollmentsService.store(this.enrollment).then(() => {
        this.toastMessage("Realizado com sucesso.", "success");
        this.$router.push({name: 'enrollments'});
      }).catch(err => {
        if(err.response.status === 422){
          this.toastMessage(err.response.data.errors);
        }else{
          this.toastMessage("Ocorreu um erro. Tente novamente!");
        }
      });
    },
    update(){
      const enrollment = {
        id: this.enrollment.id,
        name: this.enrollment.name,
        email: this.enrollment.email,
        cell_phone: this.enrollment.cell_phone,
      }

      EnrollmentsService.update(enrollment).then(() => {
        this.toastMessage("Realizado com sucesso.", "success");
        this.$router.push({name: 'enrollments'});
      }).catch(err => {
        if(err.response.status === 422){
          this.toastMessage(err.response.data.errors);
        }else{
          this.toastMessage("Ocorreu um erro. Tente novamente!");
        }
      });
    },
  },
  components: {
    DashboardComponent,
    InputComponent,
    SelectComponent,
    Money,
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />