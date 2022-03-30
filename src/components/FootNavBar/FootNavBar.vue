<template>
<div class="foot-navbar-component">
  
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
    console.log(this.data.tabType)
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