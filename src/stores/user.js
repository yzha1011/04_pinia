import { defineStore } from "pinia";

const useUser = defineStore("user", {
  state:() => ({
    name: "zyw",
    age: 24,
    level: 100
  })
})

export default useUser