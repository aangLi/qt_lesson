<template>
  <div id="app">
    <button @click="toggle">Show/Hide heightligthed post</button>
    <BlogPost :post="blogPost" v-for="blogPost in visiableBlogPosts" :key="blogPost.id"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BlogPost , { Post }from './components/blog.vue';
import { AxiosResponse } from 'axios'
import axios from 'axios';

@Component({
  components: {
    BlogPost
  },
})
export default class App extends Vue {
  private blogPosts: Post[] = [
    // {
		// 	title: 'My first blogpost ever!',
		// 	body: 'Lorem ipsum dolor sit amet.',
		// 	author: 'Elke',
    //   datePosted: new Date(2019, 1, 18),
		// },
		// {
		// 	title: 'Look I am blogging!',
		// 	body: 'Hurray for me, this is my second post!',
		// 	author: 'Elke',
    //   datePosted: new Date(2019, 1, 19),
		// },
		// {
		// 	title: 'Another one?!',
		// 	body: 'Another one!',
		// 	author: 'Elke',
    //   datePosted: new Date(2019, 1, 20),
    //   heighligthed: true
		// },

  ]

  public showHeighlighted: boolean = true
  
  get visiableBlogPosts() {
    return this.blogPosts.filter((post: Post) => post.heighligthed === undefined || post.heighligthed === this.showHeighlighted)
  }

  public toggle () {
    this.showHeighlighted = !this.showHeighlighted
  }

  public created () {
    axios.get('http://localhost:8080/request.json').then((res: AxiosResponse) => {
      console.log(res)
       this.blogPosts = res.data.blogposts
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
