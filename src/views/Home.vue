<template>
  <div class="home">
    <h2>home page</h2>
    <h2>count: {{ counterStore.count }}</h2>
    <h2>count: {{ count }}</h2>
    <h2>doubleCount: {{ counterStore.doubleCount }}</h2>
    <h2>doubleCountAddOne: {{ counterStore.doubleCountAddOne }}</h2>
    <h2>friend-111: {{ counterStore.getFriendById(111) }}</h2>
    <h2>showMessage: {{ counterStore.showMessage }}</h2>
    <button @click="incrementCount">increment</button>

    <h2>name: {{ name }}</h2>
    <h2>age: {{ age }}</h2>
    <h2>level: {{ level }}</h2>
    <button @click="changeState">changeState</button>
    <button @click="resetState">resetState</button>
  </div>
</template>

<script setup>
  import { toRefs } from 'vue';
  import { storeToRefs } from 'pinia';
  import useCount from '@/stores/counter';
  import useUser from '@/stores/user';

  const counterStore = useCount()
  const userStore = useUser()

  // const { count } = toRefs(counterStore)
  const { count } = storeToRefs(counterStore)
  const {name, age, level} = storeToRefs(userStore)

  function incrementCount() {
    counterStore.count++
  }

  function changeState() {
    // userStore.name = "why",
    // userStore.age = 18,
    // userStore.level = 50

    // userStore.$patch({
    //   name: "james",
    //   age: 35
    // })

    userStore.$state = {
      name: "curry",
      level: 200
    }
  }

  function resetState() {
    userStore.$reset()
  }
</script>

<style scoped>

</style>