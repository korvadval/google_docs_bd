<template>
  <div style="padding: 16px; border-radius: 4px; background-color: white; display: flex">

    <template v-if="!is_loading_photo">
      <img v-if="photo_link" :src="photo_link" alt="image" width="100px" height="100px">
      <div v-else style="width: 100px; height: 100px; display: flex; align-items: center; justify-content: center">NO IMAGE</div>
    </template>
    <div v-else style="width: 100px; height: 100px; display: flex; align-items: center; justify-content: center">LOADING</div>

    <div>
      <div style="padding-bottom: 16px; font-size: 16px; font-weight: bold">{{ $props.item.name }}</div>
      <div style="">{{ $props.item.description }}</div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import {GoogleSheetsAPI} from "@/core/GoogleSheets";

export default {
  name: "PriceItem",
  props: {
    item: Object
  },
  setup(props) {
    const is_loading_photo = ref(true)
    const photo_link = ref(null)

    if (props.item.photos.length) {
      GoogleSheetsAPI.fetchImageFromDrive(props.item.photos[0])
          .then(data => {
            photo_link.value = data
            console.log(data)
            is_loading_photo.value = false
          })
    } else {
      is_loading_photo.value = false
    }

    return {
      is_loading_photo,
      photo_link
    }
  }
}
</script>
