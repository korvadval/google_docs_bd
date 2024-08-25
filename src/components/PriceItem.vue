<template>
  <div style="padding: 16px; border-radius: 4px; background-color: white; display: flex">
    <div>
      <img v-if="item.photos[0]"
           :src="item.photos[0]"
           alt="image" width="100px"
           height="100px" style="margin-right:16px; border-radius: 4px"
      >
      <div v-else
           style="width: 100px; height: 100px; display: flex; align-items: center; justify-content: center;margin-right:16px; background-color: rgba(0,0,0,0.2);border-radius: 4px"
      >
        NO IMAGE
      </div>

      <div v-if="item.photos.length>1" style="display: flex; margin-top: 2px">
        <img v-for="(photo,index) of item.photos.slice(1,item.photos.length)"
             :src="photo"
             alt="image"
             width="48px"
             height="48px"
             style="margin-right:4px; border-radius: 4px"
             :style="{'':index!==item.photos.length-1}"
        >
      </div>
    </div>

    <div>
      <div style="padding-bottom: 16px; font-size: 16px; font-weight: bold">{{ $props.item.name }}</div>
      <div style="">{{ $props.item.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PriceItem",
  props: {
    item: Object
  },
}
</script>
