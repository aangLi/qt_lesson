<template>
  <div class="left archive">
    <el-timeline class="archive-list" v-if="isShowSelf">
      <el-timeline-item :hide-timestamp="false" v-for="(item, index) in archiveList" :key="index">
        <h1>{{item.year}}</h1>

        <el-timeline :hide-timestamp="false">
          <el-timeline-item
            v-for="(list_item, index) in item.list"
            :key="index"
            class="archive-item"
          >
            <router-link to="#">
              <el-card>
                <h2>{{list_item.title}}</h2>
                <p>{{list_item.create_time.slice(0, 19).replace('T', ' ')}}</p>
              </el-card>
            </router-link>
          </el-timeline-item>
        </el-timeline>
      </el-timeline-item>
    </el-timeline>
    <Loading v-if="isShowLoading" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Loading from "../components/loading.vue";
@Component({
  components: {
    Loading
  }
})
export default class Archive extends Vue {
  private isShowSelf: boolean = false;
  private isShowLoading: boolean = true;
  private archiveList: Array<object> = [];

  mounted(): void {
    this.handleSearch();
  }

  private async handleSearch(): Promise<void> {
    this.isShowLoading = true;
    await this.$https
      .get("http://yapi.demo.qunar.com/mock/52734/blog/file")
      .then(data => {
        this.archiveList = [...this.archiveList, ...data.list];
        this.isShowSelf = true;
        this.isShowLoading = false;
      })
      .catch(e => {
        console.log(e);
      });
  }
}
</script>

<style lang="less" scoped>
.left {
  flex: 1;
  padding-right: 20px !important;
  text-align: center;
  padding-left: 20px !important;
}
.archive {
  .archive-list {
    text-align: left;
    a {
      text-decoration: none;
    }
    .archive-item {
      margin-bottom: 20px;
      overflow: hidden;
      box-sizing: border-box;
    }
  }
}
</style>