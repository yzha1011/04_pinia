import { defineStore } from "pinia";
import useUser from "./user";

const useCount = defineStore("counter", {
  state:() => ({
    count: 99,
    friends: [
      { id: 111, name: "zyw" },
      { id: 112, name: "why" },
      { id: 113, name: "ccc" },
    ]
  }),
  getters: {
    doubleCount(state) {
      return state.count * 2 
    },
    doubleCountAddOne() {
      return this.doubleCount + 1
    },
    getFriendById(state) {
      return function(id) {
        return state.friends.find(friend => friend.id === id )
      }
    },
    showMessage(state) {
      const userStore = useUser()

      return `name: ${userStore.name}-count: ${state.count}`
    }
  },
  actions: {
    increment() {
      this.count++
    },
    incrementNum(num) {
      this.count += num
    }
  }
})

export default useCount