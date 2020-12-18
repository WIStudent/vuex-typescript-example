<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from './store';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  async setup () {
    const store = useStore();

    store.commit('SHOPPING_CART/CLEAR');
    store.commit('SHOPPING_CART/ADD_ITEM', { itemId: 'id' });
    store.dispatch('SHOPPING_CART/CHECKOUT');
    const balance = await store.dispatch('WALLET/PAY', { amount: 3 });
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
