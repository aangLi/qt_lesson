<template>
  <div class="zoom">
    <!-- small -->
    <div class="small-box" @mouseover="mouseOver" @mouseout="mouseOut" @mousemove="mouseMove">
      <img :src="smallSrc" alt />
      <div
        class="mask"
        :style="{
        width: '210px',
        height: '210px',
        opacity: 0.6,
        backgroundColor: 'rgba(25, 122, 255, 0.5)'
      }"
      ></div>
    </div>
    <div class="big-box">
      <div :style="{
          width: '430px',
          height: '430px',
        }">
        <img :src="bigSrc" :style="{
          width: '800px',
          height: '800px',
        }" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    smallSrc: {
      type: String
    },
    bigSrc: {
      type: String
    }
  },
  methods: {
    mouseOver() {},
    mouseOut() {},
    mouseMove(e) {
      const x = e.clientX,
        y = e.clientY;
      let maskX = x - 210 / 2,
        maskY = y - 210 / 2;
      maskX = maskX < 0 ? 0 : maskX;
      maskY = maskY < 0 ? 0 : maskY;
      const mask = document.querySelector(".mask");
      const smallboxRect = document
        .querySelector(".small-box img")
        .getBoundingClientRect(); // 图片懒加载会用到
      if (maskX + 210 >= smallboxRect.width) {
        maskX = smallboxRect.width - 210;
      }
      if (maskY + 210 >= smallboxRect.height) {
        maskY = smallboxRect.height - 210;
      }
      mask.style.transform = `translate(${maskX}px, ${maskY}px)`;

      const bigboxMove = document.querySelector('.big-box div img');
      bigboxMove.style.left = -maskX * ((800 - 430) / (430 -210)) + 'px'
      bigboxMove.style.top = -maskY * ((800 - 430) / (430 -210)) + 'px'
    }
  }
};
</script>
<style lang="">
.samll-box {
  position: absolute;
}
.mask {
  position: absolute;
  left: 0;
  top: 0;
}
.big-box div {
  position: absolute;
  border: 1px solid #000;
  overflow: hidden;
}
.big-box div img {
  position: absolute;
}
</style>