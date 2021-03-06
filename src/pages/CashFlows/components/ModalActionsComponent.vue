<template>
  <div>
    <button type="button" ref="btnModal" class="d-none" data-toggle="modal" data-target=".bd-example-modal-lg"></button>

      <div class="modal fade bd-example-modal-lg" id="exampleModalCenter" tabindex="-1" role="dialog" 
        aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Detalhes do registro</h5>
              <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal" aria-label="Close">
                <i class="fa fa-times"></i>
              </button>
            </div>

            <div class="modal-body">
              <div class="card">
                <div class="card-header">
                  <p class="m-0"><b>Dados do cliente</b></p>
                </div>

                <div class="card-body">
                  <div class="row">
                    <div class="col-md-4">
                      <p class="m-0"><b>Nome:</b></p>
                      <p class="m-0">{{ enrollmentSelected.customer.name }}</p>
                    </div>

                    <div class="col-md-4">
                      <p class="m-0"><b>E-mail:</b></p>
                      <p class="m-0">{{ enrollmentSelected.customer.email }}</p>
                    </div>

                    <div class="col-md-4">
                      <p class="m-0"><b>Contato:</b></p>
                      <p class="m-0">{{ enrollmentSelected.customer.cell_phone }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card mt-3">
                <div class="card-header">
                  <p class="m-0"><b>Dados do registro</b></p>
                </div>
                
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-4">
                      <p class="m-0"><b>Origem do registro:</b></p>
                      <p class="m-0">{{ cashFlowSelected.cash_flow_type_formated }}</p>
                    </div>

                    <div class="col-md-4">
                      <p class="m-0"><b>Data:</b></p>
                      <p class="m-0">{{ cashFlowSelected.created_at }}</p>
                    </div>

                    <div class="col-md-4">
                      <p class="m-0"><b>Valor:</b></p>
                      <p class="m-0">{{ cashFlowSelected.value }}</p>
                    </div>
                  </div>

                  <div class="row mt-3">
                    <div class="col-md-4">
                      <p class="m-0"><b>Tipo registro:</b></p>
                      <p class="m-0">{{ cashFlowSelected.movement_type }}</p>
                    </div>

                    <div class="col-md-4">
                      <p class="m-0"><b>Forma pagamento:</b></p>
                      <p class="m-0">{{ cashFlowSelected.payment_type }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import mixins from '@/mixins';

export default {
  name: 'ModalActions',
  props: {
    cashFlowSelected: {
      type: Object,
    },
    enrollmentSelected: {
      type: Object,
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
    }
  },
  mixins: [mixins],
  methods: {
  },
  components: {
  },
}
</script>

<style>

</style>