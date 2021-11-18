<template>
  <div class="main">
    <div class="main-title">結帳</div>
    <div class="main-wrapper">
      <div class="main-left">
        <Step :step="step"/>
        <FormTwo 
          :user="user"
          @set-delivery="setDelivery"/>
        <LeftControl 
          :step="step"
          :completed="completed"
          @next-step="nextStep"
          @save-storage="saveStorage"/>
      </div>
      <div class="main-right">
        <Cart />
        <RightControl 
          :step="step"
          :completed="completed"
          @next-step="nextStep"
          @save-storage="saveStorage"/>
      </div>
    </div>
  </div>
</template>

<script>
import Step from '../components/Step.vue'
import FormTwo from '../components/FormTwo.vue'
import Cart from '../components/Cart.vue'
import LeftControl from '../components/LeftControl.vue'
import RightControl from '../components/RightControl.vue'
const STORAGE_KEY = 'ac-shop'

export default {
  name: 'Shop',
  components: {
    Step, FormTwo, Cart, LeftControl, RightControl
  },
  data() {
    return {
      step: 2,
      completed: true,
      user: {}
    }
  },
  created() {
    this.user = JSON.parse(localStorage.getItem(STORAGE_KEY))
  },
  methods: {
    nextStep() {
      this.step += 1
    },
    saveStorage() {
      console.log('saveStorage')
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.user))
    },
    setDelivery(ship) {
      this.user.delivery = ship
    }
  }
}
</script>