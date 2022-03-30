<template>
  <keep-alive>
    <div class="edit-head-page">
      <p>修改头部导航属性</p>
      <section class="type-one">
        <div class="edit-head edit-item">
          <p>头部导航</p>
          <div class="item" @change="changeBgColor">
            <label for="bgColor">修改背景颜色</label>
            <input type="text" name="bgColor" v-model="bgColor" />
          </div>
          <div class="item" @change="changeTitle()">
            <label for="title">默认搜索内容</label>
            <input type="text" name="title" v-model="titleData" />
          </div>
          <div class="item">
            <label for="fontsize">字体大小</label>
            <select name="fontsize" id="fontsize" @change="changeFontSize()">
              <option value="12">12</option>
              <option value="14">14</option>
              <option value="16">16</option>
              <option value="18" selected>18</option>
              <option value="20">20</option>
              <option value="22">22</option>
              <option value="24">24</option>
              <option value="26">26</option>
            </select>
          </div>
          <div class="item" @change="changeFontColor()">
            <label for="fontColor">字体颜色</label>
            <input type="text" name="fontColor" v-model="fontColor" />
          </div>
          <div class="item" @change="changeSearchBgColor()" >
            <label for="searchBgColor">搜索框背景色</label>
            <input type="text" name="searchBgColor" v-model="searchBgColor" />
          </div>
        </div>
          
      </section>
    </div>
  </keep-alive>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      currentIndex:null,
      currentData:null,
      titleData: '寻找宝贝',
      size: 18,
      borderStyle: 'solid',
      borderSize: 1,
      borderColor: '#000',
      bgColor: '#fff',
      fontColor: '#000',
      isBorder: this.data.options.isBorder,
      searchBgColor:'#fff'
    }
  },
  props: {
    data: {
      type: Object
    }
  },
  computed: {
    ...mapState(['datas'])
  },
  mounted() {
    this.currentData = this.datas[this.data.index]
    console.log(this.currentData);
    if (!this.data.tabType) {
      this.$emit('changeTab', 1)
    }
  },
  methods: {
    // intiData(){
    //   this.titleData = this.currentData.options.titleData? '页面标题'
    // },
    changeTitle() {
      this.$set(this.data.options, 'titleData', this.titleData)
    },
    changeFontSize() {
      let myselect = document.getElementById('fontsize')
      let index = myselect.selectedIndex
      this.size = myselect.options[index].value
      this.$set(this.data.options, 'titleSize', this.size)
    },
    changeSearchBgColor(){
        this.$set(this.data.options, 'searchBgColor', this.searchBgColor)
    },
    changeBorderStyle() {
      let myselect = document.getElementById('borderStyle')
      let index = myselect.selectedIndex
      this.borderStyle = myselect.options[index].value
      this.$set(this.data.options, 'borderStyle', this.borderStyle)
    },
    changeBorderColor() {
      this.$set(this.data.options, 'borderColor', this.borderColor)
    },
    changeBorderSize() {
      this.$set(this.data.options, 'borderSize', this.borderSize)
    },
    changeBgColor() {
      this.$set(this.data.options, 'bgColor', this.bgColor)
    },
    changeFontColor() {
      this.$set(this.data.options, 'fontColor', this.fontColor)
    },
    borderCheckBox(e) {
      if (this.isBorder) {
        e.target.checked = this.isBorder = false
        this.borderSize = 0
      } else {
        e.target.checked = this.isBorder = true
        this.borderSize = 1
      }
      this.$set(this.data.options, 'isBorder', this.isBorder)
      this.$set(this.data.options, 'borderSize', this.borderSize)
      // this.$set(this.data.options, 'borderColor', this.borderColor)
    }
  }
}
</script>

<style lang='scss' scoped>
.edit-head-page {
  padding: 10px 20px;
  p {
    padding-bottom: 10px;
    margin-bottom: 10px;
    text-align: center;
    font-size: 12px;
    color: #666;
    border-bottom: 1px dashed #ddd;
  }
}

.edit-head {
  ._border {
    flex: 1;
    width: 16px;
    height: 16px;
  }
  .item {
    input {
      width: auto;
    }
  }
  ._border-choose {
    background-color: #eee;
    .item {
      input {
        width: 60%;
      }
      select {
        width: 60%;
      }
    }
  }
}
.edit-title {
}
.type-one {
  .edit-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 10px 20px;
    padding-bottom: 0;
    margin-top: 10px;
    border-radius: 8px;
    background-color: #eee;
    p {
      width: 100%;
    }
  }
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // flex-wrap: wrap;
    margin-bottom: 20px;
    width: 240px;
  }
  label {
    font-size: 14px;
    color: #666;
    margin-right: 10px;
  }
  input {
    width: 70%;
    height: 26px;
    padding-left: 10px;
    border-radius: 4px;
    font-size: 14px;
    color: #333;
    background-color: #fff;
  }
  select {
    width: 70%;
    height: 26px;
    padding-left: 10px;
    border-radius: 4px;
    font-size: 14px;
    color: #333;
  }
}
</style>