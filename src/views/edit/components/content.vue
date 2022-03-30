
<template>
    <draggable
          v-model="list"
          group="itxst"
          selector="selector"
          class="a"
        >
            <div v-for="(item,index) in list" :key="index" @click="click">
              <component
                :is="item.component"
                v-bind="item"
              >
              </component>
            </div>
        </draggable>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable
  },
  props: {
  },
  data() {
    return {
      list: [],
    }
  },
  methods:{
    click(){
      console.log(111);
    }
  }
  
  
}
</script>

<style lang="scss" scoped>
.a{
  width: 100%;
  height: 100%;
}
</style>
