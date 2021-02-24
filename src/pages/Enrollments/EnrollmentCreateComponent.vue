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
                  <SelectComponent 
                    attribute="customer_id"
                    label="Cliente"
                    :itemSelected="enrollment.customer_id"
                    :data="data_select_customers"
                    :model="enrollment"
                    @changeSelect="changeSelect"/>
                </div>

                <div class="col-4">
                  <SelectComponent 
                    attribute="modality_id"
                    label="Modalidades"
                    :itemSelected="enrollment.modality_id"
                    :data="data_select_modalities"
                    :model="enrollment"
                    @changeSelect="changeSelect"/>
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
                    name="due_day"
                    id="due_day"
                    input_type="number"
                    :model="enrollment" />
                </div>
              </div>
            </form>
          </div>

          <div class="content-installment" v-if="action != 'create'">
            <hr />
            <h3>Parcelas</h3>

            <ListsComponent 
              :data="enrollment.installments" 
              :columns="columnsList"
              :route_btn="'enrollment_create'"
              @functionActions="functionActions"
              noCreate
              noFilter
              noShow
               />

              <ModalActionsComponent 
                ref="modalActions"
                :installmentSelected="installmentSelected"
                @paidinstallment="paidinstallment" />
          </div>
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
import ListsComponent from '@/components/ListsComponent';
import ModalActionsComponent from './components/ModalActionsComponent';

export default {
  name: 'EnrollmentCreate',

  mixins: [mixins],
  props: {
    action: {
      type: String,
      default: 'create'
    }
  },
  watch: {
    ['installmentSelected.discount'](){
      this.installmentSelected.total_paid = (parseFloat(this.installmentSelected.price) + parseFloat(this.installmentSelected.discount))
    }
  },
  data(){
    return {
      columnsList: {
        'id': '#',
        'due_date': 'Vencimento',
        'paid_date': 'Data Pgto',
        'price_formated': 'Valor',
        'discount_formated': 'Desconto',
        'total_paid': 'Total Pago',
        'status_formated': 'Status',
      },
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
        due_day: '',
        status: 'paid',
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

      EnrollmentsService.show(enrollment_id)
      .then(res => {
        this.enrollment = res.data.enrollment;
        //console.log(this.enrollment)
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
    changeSelectLocal(params){
      const { attribute, value } = params;

      if(attribute == 'modality_id'){
        ModalitiesService.show(value).then(res => {
          this.enrollment.price = res.data.modality.price;
        }).catch(err => {
          console.log(err);
        })
      }
    },
    functionActions(item){
      this.installmentSelected = item;
      this.$refs.modalActions.$refs.btnModal.click()
    },
    paidinstallment(){
      console.log(this.installmentSelected);
    }
  },
  components: {
    DashboardComponent,
    InputComponent,
    SelectComponent,
    Money,
    ListsComponent,
    ModalActionsComponent,
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />