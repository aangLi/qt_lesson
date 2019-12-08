<template>
  <div class="left timeline">
    <el-timeline class="timeline-list" v-if="isShowSelf">
      <el-timeline-item :hide-timestamp="false" v-for="(item, index) in timelineList" :key="index">
        <el-card>
          <h4>{{ item.title }}</h4>
          <div class="content">{{ item.content }}</div>
          <span>{{item.start_time.slice(0, 19).replace('T', ' ')}}--{{item.end_time.slice(0, 19).replace('T', ' ')}}</span>
        </el-card>
      </el-timeline-item>
    </el-timeline>
    <Loading v-if="isShowLoading" />
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
  private timelineList: Array<object> = [];

  mounted(): void {
    this.handleSearch()
  }

  private async handleSearch(): Promise<void> {
    this.isShowLoading = true;
    await this.$https
      .get("http://yapi.demo.qunar.com/mock/52734/blog/timeline")
      .then((data) => {
        console.log(data)
        this.timelineList = [...this.timelineList, ...data.list];
        this.isShowSelf = true;
        this.isShowLoading = false;
      })
      .catch((e) => {
        console.log(e)
      })
  }
}
</script>

<style lang="less" scoped>
.left {
  flex: 1;
  padding-right: 20px;
  text-align: center;
}
.timeline {
  .timeline-list {
    text-align: left;
    .content {
      margin-bottom: 20px;
    }
  }
}
</style>