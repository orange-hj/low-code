<template>
  <div class="content">
    <div class="styles-option">
      <div  class="option-item" v-for="(item,index) in styles.child" :key="index">
        <label for="">{{item.label}}:</label>
        <input :type= "item.type" :placeholder="item.value" v-model="item.value">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"HeadOption",

  data() {
    return {
    }
  },
  watch:{
    
  },
  props:{
    styles:{
      type:Object
    }
  },
  mounted(){
    console.log(this.styles);
  }
}
</script>

<style lang='scss' scoped>
.content{
  padding: 0 10px;
}
.option-item {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  height: 32px;
  line-height: 32px;

  input {
    margin-left: 10px;
    border: 1px solid #999;
}
}

</style>