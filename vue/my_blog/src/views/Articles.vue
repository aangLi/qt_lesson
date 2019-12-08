<template>
  <div class="left clearfix">
    <ul class="articles-list" v-if="isShowSelf">
      <transition-group name="el-fade-in">
        <li class="item" v-for="(item, index) in articlesList" :key="index">
          <a href="#">
            <img
              src="../assets/bg.jpg"
              id="list"
              class="wrap-img img-blur-done"
              :data-src="item.img_url"
              data-has-lazy-src="false"
            />
            <div class="content">
              <h1 class="title">{{item.title}}</h1>
              <div class="abstract">{{item.desc}}</div>
              <div class="meta">
                <span>查看</span>
                <span>评论</span>
                <span>赞</span>
                <span>{{item.create_time.slice(0, 19).replace('T', ' ')}}</span>
              </div>
            </div>
          </a>
        </li>
      </transition-group>
    </ul>
    <Loading v-if="isShowLoading" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Loading from "../components/loading.vue";

// 懒加载

const viewHeight = window.innerHeight || document.documentElement.clientHeight;
const imgs = document.querySelectorAll("#list");

@Component({
  components: {
    Loading
  }
})
export default class Articles extends Vue {
  // 文章列表
  private articlesList: Array<object> = [];
  // 展示自己
  private isShowSelf: boolean = false;
  // 展示加载
  private isShowLoading: boolean = true;
  // 懒加载
  private lazyload(): void {
    // console.log(imgs)
    let num = 0;
    for (let i = 0; i < imgs.length; i++) {
      let distance = viewHeight - imgs[i].getBoundingClientRect().top;
      let imgItem: any = imgs[i];

      console.log(i, distance);

      if (distance >= 100) {
        let hasLaySrc = imgItem.getAttribute("data-has-lazy-src");
        if (hasLaySrc === "false") {
          imgItem.src = imgItem.getAttribute("data-src");
          imgItem.setAttribute("data-has-lazy-src", "true");
        }
      }
      num = i + 1;
    }
    console.log("lazyload");
      // if (num === imgs.length) {
      //   // console.log("再次进入查找阶段")
      //   this.handleSearch();
      // }
  }

  mounted(): void {
    // 查找数据
    this.handleSearch();
    // 滚动的懒加载
    document.addEventListener("scroll", this.lazyload);
  }

  // 获取数据
  private async handleSearch(): Promise<void> {
    this.isShowLoading = true;
    await this.$https
      .get("http://yapi.demo.qunar.com/mock/51474/vue-ts-blog/articles")
      .then(data => {
        console.log(data);
        if (data.list.length) {
          this.articlesList = [...this.articlesList, ...data.list];
        }
        this.$nextTick(() => {
          this.lazyload();
          this.isShowLoading = false;
          this.isShowSelf = true;
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  
}
</script>

<style lang="less" scoped>
.clearfix {
  content: "";
  clear: both;
}
.clearfix::after {
  clear: both;
}
.left {
  flex: 1;
  padding-right: 20px;
  text-align: center;
  .articles-list {
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: left;
    .title {
      color: #333;
      margin: 7px 0 4px;
      display: inherit;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
    }
    .item > div {
      padding-right: 140px;
    }
    .item .wrap-img {
      position: absolute;
      top: 50%;
      margin-top: -50px;
      right: 0;
      width: 125px;
      height: 100px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        border: 1px solid #f0f0f0;
      }
    }
    li {
      line-height: 20px;
      position: relative;
      // width: 100%;
      padding: 15px 0px;
      padding-right: 150px;
      border-bottom: 1px solid #f0f0f0;
      word-wrap: break-word;
      cursor: pointer;
      a {
        text-decoration: none;
      }
      &:hover {
        .title {
          color: #000;
        }
      }
      .abstract {
        min-height: 30px;
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #555;
      }
      .meta {
        padding-right: 0 !important;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        a {
          margin-right: 10px;
          color: #b4b4b4;
          &::hover {
            transition: 0.1s ease-in;
            -webkit-transition: 0.1s ease-in;
            -moz-transition: 0.1s ease-in;
            -o-transition: 0.1s ease-in;
            -ms-transition: 0.1s ease-in;
          }
        }
        span {
          margin-right: 10px;
          color: #666;
        }
      }
    }
  }
}
</style>
