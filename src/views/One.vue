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
        <Cart />
        <RightControl 
          :step="step"
          :completed="completed"/>
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
        cvc: ''
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
    }
  },
  created() {
    this.user = JSON.parse(localStorage.getItem(STORAGE_KEY)) || this.user
  },
  methods: {
    nextStep() {
      this.step += 1
    },
    saveStorage() {
      console.log('saveStorage')
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.user))
    }
  }
}
</script>
