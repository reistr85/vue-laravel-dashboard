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
                <InputComponent 
                  label="Nome"
                  name="name"
                  id="name"
                  :model="enrollment" />
              </div>

              <div class="col-4">
                <InputComponent 
                  label="E-mail"
                  name="email"
                  id="email"
                  :model="enrollment" />
              </div>

              <div class="col-4">
                <InputComponent 
                  label="Celular"
                  name="cell_phone"
                  id="cell_phone"
                  v-mask="'(##)#####-####'"
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
import EnrollmentsService from './services/EnrollmentsService';
import DashboardComponent from '../Dashboard/DashboardComponent';
import InputComponent from '@/components/InputComponent';

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
      enrollment: {},
    }
  },
  mounted(){
    if(this.action != 'create')
      this.find();
  },
  methods: {
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
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />