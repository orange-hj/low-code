<template>
  <div class="content">
      <p>标题</p>
  </div>
</template>

<script>
export default {
  name:"Head",

  props:{
      cube:{
          type: Object,
      },
      styles:{
          type: Object,
      }
  },
  mounted(){
      
  }
  
}
</script>

<style lang="scss" scoped>
.content{
    height: 42px;
    line-height: 42px;
    text-align: center;
    background-color: #7e8286;
    p{
        font-size: 14px;
    }
}
</style>