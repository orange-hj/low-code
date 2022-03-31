<template>
  <div class="EditImg">
    <div class="get-img">
      图片数据源:
      <select
        name="borderStyle"
        id="borderStyle"
        v-model="value"
        >
            <option value="bd" selected>本地图片</option>
            <option value="xs">线上图片</option>
            <option value="qq">http 请求</option>
        </select>
    </div>
    <div v-if="value == 'bd'">
        <div class="add" @click="add()">+</div>
    </div>
    <div v-if="value == 'xs'" class="xs">
        <input type="text" placeholder="输入线上图片地址" v-model="xsImgUrl" >
    </div>
    <div v-if="value == 'qq'">qq</div>
    
    <div class="submit" v-if="value">
        <button @click="submit()">确认</button>
    </div>
  </div>
</template>

<script>
import { httpController } from "@/utils/httpController";

export default {
  name: "McCapCubeOption",
  data() {
    return {
      value: "",
      xsImgUrl:'',
      xsImgUrl1:'',
      httpController: httpController,
    };
  },
  props: {
    cube: {
      type: Object,
      default: undefined,
    }
  },
  mounted() {
      console.log(this.cube);
  },
  methods: {
      add(){
          console.log('add');
      },
      submit(){
          console.log('submit');
          if(this.value == 'xs'){
              this.cube.imgUrl = this.xsImgUrl
              this.xsImgUrl1 = this.xsImgUrl
              console.log(this.cube);
              this.$emit('changeImg', this.cube)
          }
      },
  },
  watch:{
      xsImgUrl1:{
          handler(val){
              console.log(val);
          }
      }
  }
};
</script>

<style lang="scss" scoped>
.EditImg {
  margin: 0 10px;
}
select{
    padding-left: 10px;
    width: 180px;
    height: 26px;
    margin-left: 15px;
    border: 1px solid #eee;
}
.get-img {
    display: flex;
    margin-bottom: 20px;
}
.add{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border: 1px solid #e1e2e3;
    border-radius: 12px;
    color: #e1e2e3;
    font-size: 40px;
    cursor: pointer;
}
.xs{
    input{
        padding-left: 10px;
        width: 100%;
        height: 26px;
        border: 1px solid #e1e2e3 !important;
    }
}
.submit{
    margin-top: 40px;
    button{
        width: 50px;
        height: 36px;
        border-radius: 12px;
        cursor: pointer;
    }
}
</style>
