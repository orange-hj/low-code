<template>
  <swiper
    :options="swiperOptions"
    class="home-icons"
    :class="className"
    :style="{
      backgroundColor: data.options.bgColor,
      borderBottomWidth: data.options.borderSize + 'px',
      borderBottomStyle: data.options.borderStyle,
      borderColor: data.options.borderColor
    }"
  >
    <swiper-slide v-for="(item, key) in page" :key="key">
      <div class="icons-item" v-for="page in item" :key="page.id">
        <img :src="page.imgUrl" alt="" />
        <p>{{ page.title }}</p>
      </div>
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  props: ['data', 'className'],
  data() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination'
      },
      iconsList: [
        {
          id: '01',
          imgUrl: '/api/img/icons/1.png',
          title: '景点'
        },
        {
          id: '02',
          imgUrl: '/api/img/icons/2.png',
          title: '景点'
        },
        {
          id: '03',
          imgUrl: '/api/img/icons/3.png',
          title: '景点'
        },
        {
          id: '04',
          imgUrl: '/api/img/icons/4.png',
          title: '景点'
        }
      ]
    }
  },
  computed: {
    page() {
      let pages = []
      this.iconsList.forEach((item, index) => {
        let idx = Math.floor(index / 8)
        if (!pages[idx]) pages[idx] = []
        pages[idx].push(item)
      })
      return pages
    }
  },
  mounted() {
    console.log(this.data)
  }
}
</script>

<style lang="scss" scoped>
.home-icons {
  width: 100%;
  height: 104px;
  background-color: #fff;
  border: 0px solid #ccc;
}
.icons-item {
  width: 25%;
  float: left;
  padding-top: 10px;
  margin-bottom: 20px;
}
.icons-item img {
  width: 55px;
  height: 55px;
  display: block;
  margin: 0 auto;
}
.icons-item p {
  font-size: 14px;
  text-align: center;
  color: #212121;
}
</style>