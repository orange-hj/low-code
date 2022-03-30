<template>
  <div
    class="head"
    :class="className"
    :style="{
      backgroundColor: data.options.bgColor,
      borderBottomWidth: data.options.borderSize + 'px',
      borderBottomStyle: data.options.borderStyle,
      borderColor: data.options.borderColor
    }"
  >
    <div
      class="left"
      :style="{
        color: data.options.fontColor
      }"
    >
      <span class="iconfont icon-fanhui"></span>
    </div>
    <div class="center">
      <h3
        :style="{
          fontSize: data.options.titleSize + 'px',
          color: data.options.fontColor
        }"
      >
        {{ this.data.options.titleData || '页面标题' }}
      </h3>
      <slot name="search"></slot>
    </div>
    <div
      class="right"
      :style="{
        color: data.options.fontColor
      }"
    >
      <span class="iconfont icon-tupian"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['options', 'className'],
  watch: {
    data: {
      handler() {}
    }
  },
  mounted() {
    console.log(this.data)
  }
}
</script>

<style lang="scss" scoped>
.head {
  display: flex;
  align-items: center;
  width: 100%;
  height: 44px;
  font-size: 16px;
  background-color: #fff;
  border: 0px solid #ccc;
}
.center {
  flex: 1;
  height: 26px;
  margin: 9px 0;
  line-height: 26px;
  padding-left: 10px;
  text-align: center;
  border-radius: 5px;
  h3 {
    font-size: 18px;
    font-weight: 700;
  }
}
.left {
  width: 44px;
  padding: 0 10px;
  span {
    font-size: 24px;
  }
}
.right {
  width: 44px;
  padding: 0 10px;
  color: #fff;
}
.two .center {
  visibility: hidden;
}
</style>