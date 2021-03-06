<template>
  <DashboardComponent>
    <div slot="slot-pages" class="content-pages">
      <header class="title_pages">
        <h2>{{this.$route.meta.title}}</h2>
        <p>{{this.$route.meta.description}}</p>
      </header>

      <section class="content-main-pages">
        <ListsComponent 
          :data="cash_flows" 
          :columns="columnsList"
          @functionActions="functionActions"
          noCreate
          noFilter
          noShow
          noDestroy />
        
        <ModalActionsComponent 
          ref="modalActions"
          :cashFlowSelected="cashFlowSelected"
          :enrollmentSelected="enrollmentSelected" />
      </section>
      
    </div>
  </DashboardComponent>
</template>

<script>
/*eslint-disable */
import mixins from '@/mixins';
import CashFlowsService from './services/CashFlowsService';
import DashboardComponent from '../Dashboard/DashboardComponent';
import ListsComponent from '@/components/ListsComponent';
import ModalActionsComponent from './components/ModalActionsComponent';
import EnrollmentsService from '@/pages/Enrollments/services/EnrollmentsService';

export default {
  name: 'CashFlows',

  data(){
    return {
      data_list: [],
      cash_flows: [],
      columnsList: {
        'id': '#',
        'created_at': 'Data',
        'cash_flow_type_formated': 'Origem',
        'movement_type': 'Tipo de Fluxo',
        'payment_type': 'Tipo de Pagamento',
        'value': 'Valor',
      },
      cashFlowSelected: {
        enrollment: '123'
      },
      enrollmentSelected: {
        customer: {
          name: '',
        }
      }
    }
  },
  mounted() {
    this.getAll();
  },
  mixins: [mixins],
  methods: {
    getAll(){
      CashFlowsService.index().then(res => {
        this.cash_flows = res.data.cash_flows;
        this.data_list = res.data.cash_flows;
      }).catch(err => {
        console.log(err);
      });
    },
    getEnrollmentInstallment(id){
      EnrollmentsService.show(id)
      .then(res => {
        this.enrollmentSelected = res.data.enrollment;
      }).catch(err => {
        console.log(err);
      });
    },
    async functionActions(item){
      this.cashFlowSelected = item;
      await this.getEnrollmentInstallment(item.cash_flow.enrollment_id)
      this.$refs.modalActions.$refs.btnModal.click()
      console.log(this.cashFlowSelected)
    },
  },
  components: {
    DashboardComponent,
    ListsComponent,
    ModalActionsComponent,
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />