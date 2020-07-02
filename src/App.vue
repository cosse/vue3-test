<template>
  <div>
    <img src="./assets/logo.png">
    <h1>Hello Vue 3!</h1>
    <button @click="inc">Clicked {{ count }} times.</button>
    <div>{{ msg }}</div>
    <input type="text" v-model="msg">
    <br>
    <button @click="xxx">xxx</button>
    <div>{{ count }}</div>
    <ul>
      <li
        v-for="item in routers"
        :key="item.path"
      >
        <router-link :to="item.path">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  import {ref, reactive} from 'vue'

  export default {
    setup() {

      const count = ref(0);
      const cou = reactive({
        a: 1,
        b: 2,
      });

      console.log(count);
      console.log(cou);

      const inc = () => {
        count.value++
      };

      const routers = ref([
        {
          name: 'home',
          path: '/home'
        },
        {
          name: 'about',
          path: '/about'
        },
        {
          name: 'test',
          path: '/test'
        },
      ]);

      return {
        count,
        inc,
        routers,
      }
    },
    data() {
      return {
        msg: 'Hello Vue 2'
      }
    },
    methods: {
      xxx() {
        this.msg = 'xxx'
      },
    }
  }
</script>

<style scoped>

</style>
