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
    <div class="left">
      <img src="~assets/img/1.png" alt="">
    </div>
    <div class="center" :style="{
                backgroundColor: data.options.searchBgColor,
            }">
        <a class="placeholder" href="https://main.m.taobao.com/search/index.html">
            <span class="text iconfont icon-search"
            :style="{
                fontSize: data.options.titleSize + 'px',
                color: data.options.fontColor,
            }"
        >{{ this.data.options.titleData   || "寻找宝贝店铺"}}</span>
        </a>
    </div>
    
  </div>
</template>

<script>
export default {
  props: ['data', 'className'],
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
  padding: 8px 9px;
  width: 100%;
  height: 44px;
  line-height: 18px;
  font-size: 16px;
  background-color: #fff;
  border: 0px solid #ccc;
}
.center {
  flex: 1;
  text-align: center;
  border-radius: 5px;
  .placeholder {
    display: block;
    padding-top: 2px;
    text-align: center;
    font-size: 0px;
    color: #000;
    border: 1px solid #999;
    border-radius: 4px;
}
}
.left {
    margin-right: 10px;
  img{
      width: 52px;
      height: 28px;
      border-radius: 12px;
  }
}
.two .center {
  visibility: hidden;
}
</style>