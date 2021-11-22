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
  watch: {
    user: {
      handler: function() {
        if(this.user.delivery === "DHL") {
        this.user.shipPrice = 500
        } else if (this.user.delivery === "標準") {
          this.user.shipPrice = 0
        }
        let total = 0
        this.user.cartItems.map((cartItem) => {
          total += cartItem.sum
        })
        this.user.totalCost = total + this.user.shipPrice
      },
      deep:true
    },
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
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.user))
    },
    setDelivery(ship) {
      this.user.delivery = ship
    }
  }
}
</script>