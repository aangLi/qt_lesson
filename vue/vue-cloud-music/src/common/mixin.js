import { mapGetters, mapMutations, mapActions } from 'vuex'

export const searchMinxin = {
  data () {
    return {
      query: '',
      refreshDelay: 120
    }
  },
  computed: {

  },
  methods: {
    saveSearch (song) {
      // console.log(song)
      this.selectPlaySong
    },
    ...mapActions([
      'selectPlaySong'
    ])
  },
}
