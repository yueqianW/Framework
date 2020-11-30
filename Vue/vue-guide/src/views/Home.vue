<template>
  <div>
    <div class="home">{{ msg }}</div>
    <div class="left"></div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: 'hello view'
    }
  },
  components: {},
  mounted() {
  },
  methods: {}
}
</script>

<style lang="scss">
.left {

}

.right {
}
</style>