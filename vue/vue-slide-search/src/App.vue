<template>
  <div>
    <SlideSearch :showSearchPage="showSearchPage" />
    <ul class="main" :class="{'show-search': showSearchPage}" >
      <li>123456 AANGI Fighting Dreaming</li>
      <li>123456 AANGI Fighting Dreaming</li>
      <li>123456 AANGI Fighting Dreaming</li>
      <li>123456 AANGI Fighting Dreaming</li>
      <li>123456 AANGI Fighting Dreaming</li>
      <li>123456 AANGI Fighting Dreaming</li>
      <li>123456 AANGI Fighting Dreaming</li>
      <li>123456 AANGI Fighting Dreaming</li>
      <li>123456 AANGI Fighting Dreaming</li>
      <li>123456 AANGI Fighting Dreaming</li>
      <li>123456 AANGI Fighting Dreaming</li>
      <li>123456 AANGI Fighting Dreaming</li>
      <li>123456 AANGI Fighting Dreaming</li>
      <li>123456 AANGI Fighting Dreaming</li>
      <li>123456 AANGI Fighting Dreaming</li>
      <li>123456 AANGI Fighting Dreaming</li>
      <li>123456 AANGI Fighting Dreaming</li>
      <li>123456 AANGI Fighting Dreaming</li>
      <li>123456 AANGI Fighting Dreaming</li>
      <li>123456 AANGI Fighting Dreaming</li>
    </ul>
  </div>
</template>
<script>
import HelloWorld from "./components/HelloWorld";
import SlideSearch from "./components/SlideSearch/index";

export default {
  name: "App",
  components: {
    HelloWorld,
    SlideSearch
  },
  data() {
    return {
      showSearchPage: false
    };
  },
  // 已经转化为真实的 DOM 树节点
  mounted: function() {
    // ref 属性 和 这个效果一样
    const ul = document.querySelector(".main");
    ul.addEventListener("scroll", () => {
      if (ul.scrollTop === 0) {
        this.showSearchPage = false;
      }
      if (ul.scrollTop > 10) {
        this.showSearchPage = true;
      }
    });
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
ul {
  height: calc(100vh - 94px);
  transition: all 0.2s linear;
  overflow: scroll;
}
ul.show-search {
  height: calc(100vh - 52px);
}
ul li {
  padding-top: 20px;
}
</style>
