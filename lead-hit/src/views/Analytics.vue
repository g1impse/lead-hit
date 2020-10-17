<template>
   <div class="home">
      <v-container class="mt-6">
         <v-row justify="space-between" class="px-3">
            <h1 class="display-2 font-weight-bold">Аналитика</h1>

            <v-btn class="my-2" @click="logout">
               Выйти
               <v-icon dark right>mdi-exit-to-app</v-icon>
            </v-btn>
         </v-row>
         
         <v-card class="mt-6 pb-4 px-4">
            <v-card-title>Аналитика по визитам</v-card-title>
            <line-chart :data="formattedData" xtitle="Время" ytitle="Визиты" :curve="false"></line-chart>
         </v-card>
         
      </v-container>
   </div>
</template>

<script>

export default {
   name: 'Analytics',
   data: () => ({
      chartData: 
         [
            {"date":"2020-07-01","visits":213}, // изначальный объект с данными
            {"date":"2020-07-02","visits":249},
            {"date":"2020-07-03","visits":179},
            {"date":"2020-07-04","visits":170},
            {"date":"2020-07-05","visits":184},
            {"date":"2020-07-06","visits":202},
            {"date":"2020-07-07","visits":198},
            {"date":"2020-07-08","visits":168},
            {"date":"2020-07-09","visits":176},
            {"date":"2020-07-10","visits":171},
            {"date":"2020-07-11","visits":190},
            {"date":"2020-07-12","visits":154},
            {"date":"2020-07-13","visits":246},
            {"date":"2020-07-14","visits":250},
            {"date":"2020-07-15","visits":227},
            {"date":"2020-07-16","visits":140},
            {"date":"2020-07-17","visits":170},
            {"date":"2020-07-18","visits":125},
            {"date":"2020-07-19","visits":106},
            {"date":"2020-07-20","visits":207},
            {"date":"2020-07-21","visits":222},
            {"date":"2020-07-22","visits":198},
            {"date":"2020-07-23","visits":204},
            {"date":"2020-07-24","visits":213},
            {"date":"2020-07-25","visits":145},
            {"date":"2020-07-26","visits":166},
            {"date":"2020-07-27","visits":163},
            {"date":"2020-07-28","visits":135},
            {"date":"2020-07-29","visits":45}
         ]
   }),
   computed: {
      formattedData() {    // преобразование изначального объекта под формат для плагина
         let newObj = {};

         for (let item of this.chartData) {
            newObj[item.date] = item.visits;
         }

         return newObj
      }
   },
   methods: {
      logout() {
         localStorage.removeItem('leadhit-site-id');
         this.$router.push({name: 'Authorization'})
      }
   }
}
</script>
