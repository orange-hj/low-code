
<template>
  <div class="content">
    McCapCube
  </div>
</template>

<script>
export default{
  name: 'McCapCube',
  props: {
    cube: {
      type: Object,
      default: [],
    },
  },
}
</script>

<style lang="scss" scoped>
.content{
  width: 100%;
  height: 30px;
}
</style>
