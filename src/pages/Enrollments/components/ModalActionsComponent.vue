<template>
  <div>s
    <button type="button" ref="btnModal" class="d-none" data-toggle="modal" data-target=".bd-example-modal-lg"></button>

      <div class="modal fade bd-example-modal-lg" id="exampleModalCenter" tabindex="-1" role="dialog" 
        aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">O que voçê deseja fazer?</h5>
              <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal" aria-label="Close">
                <i class="fa fa-times"></i>
              </button>
            </div>
            <div class="modal-body">
              <form action="">
                <div class="row">
                  <div class="col-4">
                    <InputComponent 
                      label="Data Pagt."
                      name="paid_date"
                      id="paid_date"
                      :model="installmentSelected"
                      input_type="date" />
                  </div>

                  <div class="col-4">
                    <label for="price">Valor</label>
                    <Money
                      :value="installmentSelected.price"
                      v-bind="money"
                      class="form-control"
                      readonly />
                  </div>

                  <div class="col-4">
                    <label for="price">Diferença</label>
                    <Money
                      v-model="installmentSelected.discount"
                      v-bind="money"
                      class="form-control"
                      name="discount" />
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col-4">
                    <label for="price">Total a pagar</label>
                    <Money
                      v-model="installmentSelected.total_paid"
                      v-bind="money"
                      class="form-control"/>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary btn-sm" @click.prevent="paidinstallment()">Pagar Parcela</button>
              <button type="button" class="btn btn-danger btn-sm">Cancelar Parcela</button>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { Money } from "v-money";
import InputComponent from '@/components/InputComponent';

export default {
  name: 'ModalActions',
  props: {
    installmentSelected: {
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
  methods: {
    paidinstallment(){
      this.$emit('paidinstallment');
    }
  },
  components: {
    Money,
    InputComponent,
  },
}
</script>

<style>

</style>