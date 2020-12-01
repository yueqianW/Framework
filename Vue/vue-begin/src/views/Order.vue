<template>
  <div class="order">
    <div class="left">
      <ul>
        <li v-for="(item, index) in lists" :key="index">
          {{ item.name }}-{{ item.price }}
          <button type="button" @click="minus(item,index)">-</button>
          <span>{{ item.num ? item.num : 0 }}</span>
          <button type="button" @click="add(item,index)">+</button>
        </li>
      </ul>
    </div>
    <div class="right">
      <ul>
        <li v-for="(item,index) in orders" :key="index">
          菜品名称:{{ item.name }}-菜品总价:{{ item.price * item.num }}
        </li>
      </ul>
      <p>菜单总价:{{ total }}</p>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: "order",
  data() {
    return {
      lists: this.$store.state.lists
    }
  },
  mounted() {
    let arr = _.filter([1, 2, 3], item => {
      return item > 1
    })
    console.log(arr)
  },
  computed: {
    orders() {
      return _.filter(this.lists, item => {
        return typeof item.num != 'undefined' && item.num > 0
      })
    },
    total() {
      let sum = 0;
      _.each(this.orders, item => {
        sum += item.num * item.price
      })
      return sum;
    }
  },
  methods: {
    minus(item, index) {
      if (typeof item.num == 'undefined') {
        item.num = 0;
      }
      item.num--;
      if (item.num < 0) {
        item.num = 0
      }
      this.$set(this.lists, index, item)
    },
    add(item, index) {
      if (typeof item.num == 'undefined') {
        item.num = 0;
      }
      item.num++;
      if (item.num > 100) {
        item.num = 100
      }
      this.$set(this.lists, index, item)
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
