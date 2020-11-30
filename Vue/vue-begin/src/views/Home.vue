<template>
  <div>
    <div class="home">{{ msg }}</div>
    <div class="left">
      <form action="" v-if="isShow">
        <div class="item">菜品名称
          <input type="text" v-model="unit.name">
        </div>
        <div class="item">菜品图片
          <input type="text" v-model="unit.url">
        </div>
        <div class="item">菜品分类
          <input type="text" v-model="unit.type">
        </div>
        <div class="item">菜品单价
          <input type="text" v-model="unit.price">
        </div>
        <button type="button" @click="submit">enter</button>
      </form>
      <div class="info" v-else>
        {{ unit.name }}-{{ unit.url }}-{{ unit.type }}-{{ unit.price }}
        <div class="ctrl">
          <button type="button" @click="add">add</button>
          <button type="button" @click="cancel">cancel</button>
        </div>
      </div>
    </div>
    <div class="right">
      <ul>
        <li v-for="(item, index) in getList" :key="index">
          {{ item.name }}-{{ item.url }}-{{ item.type }}-{{ item.price }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';
import store from '../store/index';

export default {
  name: 'Home',
  store,
  data() {
    return {
      msg: 'hello vue',
      isShow: true,
      unit: {
        name: '',
        url: '',
        type: '',
        price: '',
      },
      lists: []
    }
  },
  components: {},
  computed: {
    ...mapGetters(['getList'])
  },
  mounted() {
  },
  methods: {
    submit() {
      this.isShow = false
    },
    add() {
      this.lists.push({ ...this.unit });
      this.$store.commit('setList', this.lists)
      this.unit.name = '';
      this.unit.url = '';
      this.unit.type = '';
      this.unit.price = '';
      this.isShow = true;
    },
    cancel() {
      this.isShow = true;
    }
  }
}
</script>

<style lang="scss">
.left {
  float: left;
  width: 40%;
}

.right {
  float: left;
  width: 60%;
}
</style>
