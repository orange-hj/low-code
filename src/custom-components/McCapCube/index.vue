
<template>
  <div class="content">
    <img :src="cube.imgUrl || imgUrl" alt="图片">
  </div>
</template>

<script>
export default{
  name: 'McCapCube',
  props: {
    cube: {
      type: Object,
      default: {},
    },
  },

  data(){
    return{
      imgUrl:"https://img01.yzcdn.cn/public_files/2019/03/05/2b60ed750a93a1bd6e17fc354c86fa78.png!large.webp"
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
  width: 100%;
  height: 130px;
  display: flex;
  flex-wrap: wrap;
  img{
    flex: 1;
    height: 100%;
    background-color: red;
  }
}
</style>
