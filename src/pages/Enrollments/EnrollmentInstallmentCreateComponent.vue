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
          <div class="content-form">
            <form>
              <div class="row">
                <div class="col-4">
                  <InputComponent 
                    label="Cliente"
                    name="name"
                    id="name"
                    input_type="text"
                    readonly
                    :model="customer" />
                </div>

                <div class="col-4">
                  <InputComponent 
                    label="Modalidade"
                    name="description"
                    id="description"
                    input_type="text"
                    readonly
                    :model="modality" />
                </div>

                <div class="col-4">
                  <InputComponent 
                    label="Vencimento"
                    name="due_date"
                    id="due_date"
                    input_type="date"
                    :model="installment" />
                </div>
              </div>

              <div class="row mt-3">
                <div class="col-4">
                  <label for="price">Valor</label>
                  <Money
                    v-model="installment.price"
                    v-bind="money"
                    class="form-control"
                    id="discount"
                    name="discount" />
                </div>

                <div class="col-4">
                  <label for="price">Desconto</label>
                  <Money
                    v-model="installment.discount"
                    v-bind="money"
                    class="form-control"
                    id="discount"
                    name="discount" />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="content-footer">
          <a @click.prevent="back()" class="btn btn-primary btn-sm" title="voltar">
            <i class="fa fa-reply-all"></i> voltar
          </a>

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
import { Money } from "v-money";
import EnrollmentsService from './services/EnrollmentsService';
import DashboardComponent from '../Dashboard/DashboardComponent';

export default {
  name: 'EnrollmentInstallmentCreate',

  mixins: [mixins],
  watch: {
    ['installmentSelected.discount'](){
      this.installmentSelected.total_paid = (parseFloat(this.installmentSelected.price) + parseFloat(this.installmentSelected.discount))
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
      customer: {},
      modality: {},
      installment: {
        due_date: '',
        discount: '',
        price: '0'
      },
      installmentSelected: {
        price: 0,
        discount: 0,
        total_paid: 0,
      },
      data_select_customers: [],
      data_select_modalities: [],
    }
  },
  mounted(){
    this.find();
  },
  methods: {
    find(){
      const enrollment_id = this.$route.params.id;

      if(!enrollment_id)
        return;

      EnrollmentsService.show(enrollment_id)
      .then(res => {
        this.customer = res.data.enrollment.customer;
        this.modality = res.data.enrollment.modality;
        this.installment.due_date = this.currentDate();
        this.installment.price = res.data.enrollment.price;
      }).catch(err => {
        console.log(err);
      });
    },
    confirm(){
      this[this.action]();
    },
    create(){
      EnrollmentsService.storeInstallment(this.installment).then(() => {
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
    back(){
      const { id } = this.$route.params
      this.$router.push({name: 'enrollment_show', params: {id, action: 'update'}});
    },
  },
  components: {
    DashboardComponent,
    InputComponent,
    Money,
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />