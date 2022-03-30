<template>
  <header>
    <div class="head-logo">
      <img src="~assets/img/1.png" alt="" />
    </div>
    <div class="head-middle">
      <slot></slot>
    </div>
    <div class="head-person">
      <img src="~assets/img/1.png" alt="" />
      <p>name</p>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 54px;
  padding: 0 20px;
  .head-logo {
    img {
      width: 160px;
      height: 40px;
    }
  }
  .head-person {
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    p {
      display: inline-block;
      margin-left: 8px;
      font-size: 14px;
      color: #666;
    }
  }
}
</style>