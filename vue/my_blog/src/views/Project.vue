<template>
  <div class="left project">
    <el-row :gutter="24" v-if="isShowSelf">
      <el-col :span="12"  v-for="(item, index) in projectList" :key="index">
        <el-card class="desc project-item" shadow="hover" >
          <a :href="item.url" target="_blank">
            <img :src="item.img" />
            <h4>{{item.title}}</h4>
            <div class="content">{{item.content}}</div>
            <span>{{item.start_time.slice(0, 19).replace('T', ' ')}}--{{item.end_time.slice(0, 19).replace('T', ' ')}}</span>
          </a>
        </el-card>
      </el-col>
    </el-row>
    <Loading v-if="isShowLoading"/>
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
    await this.$https
      .get("http://yapi.demo.qunar.com/mock/52734/blog/project")
      .then((data) => {
        console.log(data)
        this.projectList = [...this.projectList, ...data.list];
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
.project {
  overflow: hidden;
  padding-top: 40px;
  .project-item {
    display: inline-block;
    text-align: left;
    margin-bottom: 20px;
    img {
      width: 100%;
      height: 250px;
    }
    a {
      text-decoration: none;
      color: black;
    }
    :hover {
      cursor: pointer;
    }
    .content {
      margin-bottom: 20px;
    }
  }
  .desc {
      margin-bottom: 20px;
    }
}
</style>