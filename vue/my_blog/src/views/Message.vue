<template>
  <div class="left message">
    <h1>This is Message</h1>
      
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Loading from '../components/loading.vue';
@Component({
  components: {
    Loading
  }
})
export default class Project extends Vue {
  private isShowSelf: boolean = false;
  private isShowLoading: boolean = true;
  private projectList: Array<object> = [];

  mounted(): void {
    this.handleSearch()
  }

  private async handleSearch(): Promise<void> {
    this.isShowLoading = true;
    // await this.$https
    //   .get("http://yapi.demo.qunar.com/mock/52734/blog/message")
    //   .then((data) => {
    //     console.log(data)
    //     this.projectList = [...this.projectList, ...data.list];
    //     this.isShowSelf = true;
    //     this.isShowLoading = false;
    //   })
    //   .catch((e) => {
    //     console.log(e)
    //   })
  }
}
</script>

<style lang="less" scoped>
.left {
  flex: 1;
  padding-right: 20px;
  text-align: center;
}
.message {
  text-align: left;
}
</style>