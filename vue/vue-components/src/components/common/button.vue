<template>
  <button :class="'i-button-size'+size"
    :disabled="disabled"
    @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
// 判断参数是否是其中之一
function oneOf (value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
}
export default {
  data () {
    return {
      msg: '按钮组件的数据'
    }
  },
  props: {
    size: {
      validator (value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (event) {
      console.log(321)
      this.$emit('on-click', this.msg)
    }
  }
}
</script>

<style>
  button {
    outline: navajowhite;
    border-radius: 5px;
  }
  i-button-sizelarge {
    padding: 12px;
  }
  i-button-sizedefault {
    padding: 8px;
  }
  i-button-sizesmall {
    padding: 4px;
  }
</style>
