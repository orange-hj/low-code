<template>
  <div class="page-layout">
    <Header></Header>
    <edit></edit>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import edit from 'views/edit/edit.vue'
export default {
  components: {
    Header,
    edit
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.page-layout {
  height: 100%;
}
</style>
