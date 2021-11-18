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
        <Cart 
          :user="user"
          @jean-one-minus="jeanOneMinus"
          @jean-one-plus="jeanOnePlus"
          @jean-two-minus="jeanTwoMinus"
          @jean-two-plus="jeanTwoPlus" />
        <RightControl 
          :step="step"
          :completed="completed"
          @next-step="nextStep"
          @save-storage="saveStorage"/>
      </div>
    </div>
    <SubmitModal 
      :user="user"
      @end-shop="endShop" />
  </div>
</template>

<script>
import Step from '../components/Step.vue'
import FormThree from '../components/FormThree.vue'
import Cart from '../components/Cart.vue'
import LeftControl from '../components/LeftControl.vue'
import RightControl from '../components/RightControl.vue'
import SubmitModal from '../components/SubmitModal.vue'
const STORAGE_KEY = 'ac-shop'

export default {
  name: 'Shop',
  components: {
    Step, FormThree, Cart, LeftControl, RightControl, SubmitModal
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
    jeanOneMinus() {
      this.user.jean1Count -= 1
      this.user.jean1Cost = this.user.jean1Count*3999
      this.user.totalCost = this.user.jean1Cost + this.user.jean2Cost
    },
    jeanOnePlus() {
      this.user.jean1Count += 1
      this.user.jean1Cost = this.user.jean1Count*3999
      this.user.totalCost = this.user.jean1Cost + this.user.jean2Cost
    },
    jeanTwoMinus() {
      this.user.jean2Count -= 1
      this.user.jean2Cost = this.user.jean2Count*1299
      this.user.totalCost = this.user.jean1Cost + this.user.jean2Cost
    },
    jeanTwoPlus() {
      this.user.jean2Count += 1
      this.user.jean2Cost = this.user.jean2Count*1299
      this.user.totalCost = this.user.jean1Cost + this.user.jean2Cost
    },
    saveStorage() {
      const paycheck = JSON.stringify(this.user)
      console.log('saveStorage:', paycheck)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.user))
    },
    submitCart() {
      console.log(this.user)
    },
    endShop() {
      localStorage.clear()
    }
  }
}
</script>