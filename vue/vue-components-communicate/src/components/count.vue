<template>
  <div class="count">
    <h2>{{msg}}</h2>
    <hr/>
    <!-- <h3>{{$store.state.count}}</h3> -->

    <h3>{{count}}</h3>

    <!-- <button @click="$store.commit('add')">+</button> -->
    <!-- <button @click="$store.commit('reduce')">-</button> -->

    <button @click="add">+</button>
    <button @click="reduce">-</button>

    <p>{{ date }}</p>
    <hr />
    <p>{{ money }}</p>
    <button @click="makeMoneyAction">+</button>
  </div>
</template>

<script>
import store from '@/store/index.js'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      msg: 'Hello Vuex'
    }
  },
  // computed: {
  //   // date () {
  //   //   return this.$store.state.date
  //   // }
  // },
  // // 使用数组的方式取数据
  // computed: mapState(['date']),

  // computed: mapState({
  //   date: state => state.date
  // }),

  computed: {
    ...mapState(['date', 'money']),

    // count () {
    //   return this.$store.getters.count
    // }
    ...mapGetters(['count'])

  },
  methods: {
    ...mapMutations([
    'add',
    'reduce'
  ]),
  ...mapActions([
    'makeMoneyAction'])
  },
  store
}
</script>

<style scoped>

</style>