<template>
  <div class="container">
    <!-- 物料列表 -->
    <div class="canvas-left">
      <p>物料列表</p>
      <draggable
        v-model="$initializing"
        :options="{ group: { name: 'itxst', pull: 'clone' }, sort: false }"
        animation="300"
        class="left-container"
        :clone="handleClone"
      >
        <div
          v-for="(item,index) in $initializing"
          :key="index"
          class="com-item"
        >
          <span class="iconfont" :class="item.icon"></span>
          <span class="name">{{ item.name }}</span>
        </div>
      </draggable>
    </div>

    <!-- 画布 -->
    <div class="canvas-center">
      <div class="canvas-center-drag">
          <draggable
            v-model="list"
            group="itxst"
            selector="selector"
            class="canvas"
          >
            <div v-for="(item,index) in list" :key="index" @click="click(item)" class="canvas-item">
              <component
                :is="item.component"
                v-bind="item"
              >
              </component>
            </div>
        </draggable>
      </div>
    </div>

    <!-- 物料配置 -->
    <div class="control-config">
      <p>物料配置</p>
      <div>
        <component
        :is="this.comOption"
        v-bind="this.itemOption"
        >
        </component>
      </div>
    </div>
  </div>


</template>

<script>
import draggable from 'vuedraggable'
import Content from './components/content.vue'
export default {
  components:{
    Content,draggable
  },
  data(){
    return{
      curComponent: undefined,
      list:[],
      comOption: "",
      itemOption:null
    }
  },
  computed:{
    curSchema() {
      return this.$fields[this.curComponent.component];
    },
  },
  mounted(){
  },
  watch:{
    
  },
  methods:{
    handleClone(model){
      return {
        ...this.cloneDeep(model),
        id: this.$getRandomCode(8),
      };
    },

    click(item){
      this.comOption = item.component + 'Option'
      this.itemOption = item
    },

    cloneDeep(obj) {
      let str,
        newobj = obj.constructor === Array ? [] : {};
      if (typeof obj !== "object") {
        return;
      } else if (window.JSON) {
        (str = JSON.stringify(obj)), //序列化对象
          (newobj = JSON.parse(str)); //还原
      } else {
        for (var i in obj) {
          newobj[i] = typeof obj[i] === "object" ? cloneObj(obj[i]) : obj[i];
        }
      }
      return newobj;
  }
  }
  
}
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  height: 100%;
  border-top: 1px solid #f1f1f1;
  .canvas-left{
    width: 300px;
    height: 100%;
    .left-container{
      display: flex;
      flex-wrap: wrap;
      padding: 10px;
    }
    .com-item{
      display: flex;
      flex-direction: column;
      margin-right: 10px;
      width: 60px;
      height: 80px;
      text-align: center;
      cursor: pointer;
    }
  }
  .canvas-center{
    flex: 1;
    background-color: #f1f2f3;
    .canvas-center-drag{
      margin: 60px auto;
      width: 400px;
      height: 700px;
      background-color: #fff;
    }
  }
  .control-config{
    width: 300px;
    height: 100%;
  }
  p{
    padding: 10px 0;
    text-align: center;
  }
  .canvas{
    width: 100%;
    height: 100%;
  }
  .canvas-item{
    cursor: pointer;
  }
}

</style>