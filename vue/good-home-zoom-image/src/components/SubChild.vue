<template>
  <div :style="{
      color:theme
    }"></div>
</template>
<script>
export default {
  inject: ['theme']
}
</script>