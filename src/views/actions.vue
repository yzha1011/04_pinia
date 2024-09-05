<template>
  <div class="home">
    <h2>home page</h2>
    <h2>count: {{ counterStore.count }}</h2>
    <button @click="changeState">changeSate</button>

    <ul>
      <template v-for="item in homeStore.banners">
        <li>{{ item.title }}</li>
      </template>
    </ul>
  </div>
</template>

<script setup>
  import useCount from '@/stores/counter';
  import useHome from '@/stores/home';

  const counterStore = useCount()

  function changeState() {
    // counterStore.increment()
    counterStore.incrementNum(3)
  }

  const homeStore = useHome()
  homeStore.fetchHomeMultiData().then(res => {
    console.log("mission complete", res)
  })

</script>

<style scoped>

</style>