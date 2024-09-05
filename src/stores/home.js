import { defineStore } from "pinia";

const useHome = defineStore("homeStore", {
  state: () => ({
    banners: [],
    recommends: []
  }),
  actions: {
    async fetchHomeMultiData() {
      const res = await fetch("http://123.207.32.32:8000/home/multidata")
      const data = await res.json()
      this.banners = data.data.banner.list
      this.recommends = data.data.recommend.list

      return "aaa"
    }
  }
})

export default useHome