<template>
  <div style="background-color: antiquewhite; padding:16px 16px 16px 16px">
    <PriceItem v-for="(item,index) of price_list" :item="item" :style="index===price_list.length-1?'':'margin-bottom: 16px'"/>
  </div>
</template>

<script>
import {GoogleSheetsAPI} from "@/core/GoogleSheets";
import {ref} from "vue";
import PriceItem from "@/components/PriceItem";

export default {
  name: 'App',
  components: {PriceItem},
  setup() {
    const price_list = ref([])
    const range = 'test!A1:D6';

    GoogleSheetsAPI.getData(range)
        .then(response => {
          price_list.value = response
          console.log('Данные получены:', response);
        })
        .catch(error => {
          console.error('Ошибка при получении данных:', error);
        });

    return {
      price_list
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
</style>