<template>
  <section>
    <div class="tab-content">
      <h2>{{ type && list[type]['tit'] }}</h2>
      <div class="tab" v-if="type != 'info'">
        <span
          v-for="(val, key, index) in tabType"
          :key="index"
          @click="tab(key)"
          :class="{ active: val }"
          ><i class="el-icon-s-data"></i> {{ key }}</span
        >
      </div>
    </div>
    <component
      :is="type && list[type]['com']"
      :data="data"
      @changeTab="tab"
    ></component>
  </section>
</template>

<script>
import Info from '@/components/Info/edit-info'
import Images from '@/components/Images/edit-image'
import Product from '@/components/Product/edit-product'
import Head from '@/components/Head/edit-head'
import IconList from '@/components/IconList/edit-iconlist'
import TopSearch from '@/components/TopSearch/edit-topSearch'

export default {
  name: 'EditForm',
  components: {
    Info,
    Images,
    Product,
    Head
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      type: '',
      list: {
        images: {
          tit: '图片',
          com: Images
        },
        banner: {
          tit: '轮播图',
          com: Images
        },
        product: {
          tit: '商品',
          com: Product
        },
        head: {
          tit: '头部',
          com: Head
        },
        iconList: {
          tit: '图标列表',
          com: IconList
        },
        topSearch: {
          tit: '头部搜索',
          com: TopSearch
        }
    },
      tabType: {
        1: true,
        2: false,
        3: false
      }
    }
  },
  mounted() {
    console.log(this.data);
    this.type = this.data.type
    if (this.data.tabType) {
      this.tab(this.data.tabType)
    }
  },
  methods: {
    tab(key) {
      console.log(key);
      for (let i in this.tabType) {
        if (key == i) {
          this.tabType[key] = true
          this.$set(this.data, 'tabType', key)
        } else {
          this.tabType[i] = false
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
section {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
}
.tab-content {
  padding: 0 15px;
  h2 {
    padding: 10px 0;
    font-size: 16px;
    color: #333;
  }
  .tab {
    display: flex;
    justify-content: space-around;
    border: 1px solid #ddd;
    border-radius: 6px;
    span {
      width: 33.33%;
      text-align: center;
      font-size: 14px;
      color: #666;
      display: block;
      height: 36px;
      line-height: 36px;
      cursor: pointer;
      &.active {
        color: #fff;
        background: #409eff;
        border-radius: 2px;
      }
      &:nth-of-type(2) {
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
      }
    }
  }
}
</style>