<template>
   <div class="auth">
      <v-container>
      
         <v-row justify="center">
            <v-col md="6" xl="4" align="center">
               <v-card elevation="2" class="mt-6 px-6 pb-6">
                  <v-card-title class="display-1 font-weight-bold justify-center">Lead Hit</v-card-title>
                  <v-form @submit.prevent="submit">
                     <v-text-field label="id сайта" v-model="id" @input="hideAlert"></v-text-field>
                     <v-btn color="primary" elevation="2" large type="submit">Войти</v-btn>
                     <v-alert
                        class="mt-6 mb-0"
                        color="red"
                        dense
                        type="error"
                        v-show="alertShow"
                     >{{ alertText }}</v-alert>
                  </v-form>
               </v-card>
            </v-col>
         </v-row>
         
      </v-container>
   </div>
</template>


<script>
import * as authApi from '@/api/auth.js';

export default {
   data: () => ({
      alertShow: false,
      alertText: '',
      id: ''
   }),
   methods: {
      async submit() {
         if (this.id.length != 24) {
            this.showAlert('id сайта должен содержать 24 символа');
         } else {
            try {
               let { message } = await authApi.login(this.id);
               
               if (message === 'ok') {
                  localStorage.setItem('leadhit-site-id', this.id);
                  this.$router.push({ name: 'Analytics'});
               }
            }
            catch(e) {
               this.showAlert('Ошибка ответа от сервера')
            }
         }
      },
      hideAlert() {
         this.alertShow = false;
      },
      showAlert(text) {
         this.alertShow = true;
         this.alertText = text;
      }
   }
};
</script>

