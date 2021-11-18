<template>
  <div class="main">
    <div class="main-title">結帳</div>
    <div class="main-wrapper">
      <div class="main-left">
        <Step :step="step"/>
        <FormOne 
          :user="user"/>
        <LeftControl 
          :step="step"
          :completed="completed"
          @next-step="nextStep"
          @save-storage="saveStorage"/>
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
  </div>
</template>

<script>
import Step from '../components/Step.vue'
import FormOne from '../components/FormOne.vue'
import Cart from '../components/Cart.vue'
import LeftControl from '../components/LeftControl.vue'
import RightControl from '../components/RightControl.vue'

const STORAGE_KEY = 'ac-shop'

export default {
  name: 'Shop',
  components: {
    Step, FormOne, Cart, LeftControl, RightControl
  },
  data() {
    return {
      step: 1,
      user: {
        title: '',
        name: '',
        tel: '',
        email: '',
        county: '',
        address: '',
        delivery: '標準',
        cardName: '',
        cardNum: '',
        date: '',
        cvc: '',
        jean1Count: 1,
        jean2Count: 1,
        jean1Cost: 3999,
        jean2Cost: 1299,
        shipPrice: 0,
        totalCost: 5298,
      },
      completed: false,
    }
  },
  watch: {
    user: {
      handler: function() {
        if(this.user.title && this.user.name && this.user.tel && this.user.email && this.user.county && this.user.address) {
          return this.completed = true
        }
      },
      
      deep:true
    },
    
    
  },
  
  created() {
    this.user = JSON.parse(localStorage.getItem(STORAGE_KEY)) || this.user
  },
  methods: {
    nextStep() {
      this.step += 1
    },
    jeanOneMinus() {
      this.user.jean1Count -= 1
      this.user.jean1Cost = this.user.jean1Count*3999
      this.user.totalCost = this.user.jean1Cost + this.user.jean2Cost+ this.user.shipPrice
    },
    jeanOnePlus() {
      this.user.jean1Count += 1
      this.user.jean1Cost = this.user.jean1Count*3999
      this.user.totalCost = this.user.jean1Cost + this.user.jean2Cost+ this.user.shipPrice
    },
    jeanTwoMinus() {
      this.user.jean2Count -= 1
      this.user.jean2Cost = this.user.jean2Count*1299
      this.user.totalCost = this.user.jean1Cost + this.user.jean2Cost+ this.user.shipPrice
    },
    jeanTwoPlus() {
      this.user.jean2Count += 1
      this.user.jean2Cost = this.user.jean2Count*1299
      this.user.totalCost = this.user.jean1Cost + this.user.jean2Cost + this.user.shipPrice
    },
    saveStorage() {
      console.log('saveStorage')
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.user))
    }
  }
}
</script>
