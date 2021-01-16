<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from './store';
import HelloWorld from './components/HelloWorld.vue';
import { CLEAR, MODULE_NAME as SHOPPING_CART_MODULE_NAME, ADD_ITEM, CHECKOUT } from './store/modules/shoppingCart';
import {MODULE_NAME as WALLET_MODULE_NAME, PAY} from './store/modules/wallet';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  async setup () {
    const store = useStore();
    store.commit(`${SHOPPING_CART_MODULE_NAME}/${CLEAR}`);
    store.commit(`${SHOPPING_CART_MODULE_NAME}/${ADD_ITEM}`, { itemId: 'id' })
    store.dispatch(`${SHOPPING_CART_MODULE_NAME}/${CHECKOUT}`);
    const balance = await store.dispatch(`${WALLET_MODULE_NAME}/${PAY}`, { amount: 3 });
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
