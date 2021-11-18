<template>
  <div class="main">
    <div class="main-title">結帳</div>
    <div class="main-wrapper">
      <div class="main-left">
        <Step :step="step"/>
        <FormThree 
          :user="user"/>
        <LeftControl 
          :step="step"
          :completed="completed"
          @save-storage="saveStorage"
          @submit-cart="submitCart"
          />
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
import FormThree from '../components/FormThree.vue'
import Cart from '../components/Cart.vue'
import LeftControl from '../components/LeftControl.vue'
import RightControl from '../components/RightControl.vue'
const STORAGE_KEY = 'ac-shop'

export default {
  name: 'Shop',
  components: {
    Step, FormThree, Cart, LeftControl, RightControl
  },
  data() {
    return {
      step: 3,
      completed: false,
      user: {}
    }
  },
  created() {
    this.user = JSON.parse(localStorage.getItem(STORAGE_KEY))
  },
  watch: {
    user: {
      handler: function() {
        if(this.user.cardName && this.user.cardNum && this.user.date && this.user.cvc) {
          return this.completed = true
        }
      },
      deep: true
    }
  },
  methods: {
    nextStep() {
      this.step += 1
    },
    saveStorage() {
      console.log('saveStorage')
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.user))
    },
    submitCart() {
      console.log(this.user)
    }
  }
}
</script>