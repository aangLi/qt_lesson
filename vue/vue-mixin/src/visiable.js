let mixins = {
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },
    open() {
      this.dialogVisible = true;
    },
    close() {
      this.dialogVisible = false;
    }
  }
}

export default mixins;