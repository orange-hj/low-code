<template>
  <div class="nav-bar" :class="className">
    频道导航
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['data', 'className'],
  computed: {
    options() {
      return this.data.options
    },
    line() {
      return this.options.volumeStr && this.options.goodRatio ? '| ' : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar{
    height: 40px;
}
</style>