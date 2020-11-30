<template>
  <div class="order">
    <div class="left">
      <ul>
        <li v-for="(item, index) in lists" :key="index">
          {{ item.name }}-{{ item.url }}-{{ item.type }}-{{ item.price }}
        </li>
      </ul>
    </div>
    <div class="right">222</div>
  </div>
</template>

<script>
export default {
  name: "order",
  data() {
    return {
      lists: this.$store.state.lists
    }
  }
}
</script>

<style scoped>
.left {
  float: left;
  width: 40%;
}

.right {
  float: left;
  width: 60%;
}
</style>
