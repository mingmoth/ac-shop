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
          @cart-item-minus="cartItemMinus"
          @cart-item-plus="cartItemPlus" />
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
        let total = 0
        this.user.cartItems.map((cartItem) => {
          total += cartItem.sum
        })
        this.user.totalCost = total + this.user.shipPrice
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
    cartItemMinus(cartItemId) {
      this.user.cartItems = this.user.cartItems.map((cartItem) => {
        if(cartItem.id === cartItemId) {
          return {
            ...cartItem,
            count: cartItem.count -= 1,
            sum: cartItem.count * cartItem.price,
          }
        } else {
          return cartItem
        }
      })
    },
    cartItemPlus(cartItemId) {
      this.user.cartItems = this.user.cartItems.map((cartItem) => {
        if(cartItem.id === cartItemId) {
          return {
            ...cartItem,
            count: cartItem.count += 1,
            sum: cartItem.count * cartItem.price
          }
        } else {
          return cartItem
        }
      })
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