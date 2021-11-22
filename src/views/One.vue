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
          @cart-item-minus="cartItemMinus"
          @cart-item-plus="cartItemPlus"
           />
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
        cartItems: [
          {
            id: 1,
            name: '破壞補釘修身牛仔褲',
            price: 3999,
            count: 1,
            sum: 3999,
            img: "https://i.imgur.com/MRdy9z2.png"
          },
          {
            id: 2,
            name: '刷色直筒牛仔褲',
            price: 1299,
            count: 1,
            sum: 1299,
            img: "https://i.imgur.com/a0BP98T.png"
          },
        ],
        shipPrice: 0,
        totalCost: 5298,
      },
      
      completed: false,
    }
  },
  watch: {
    user: {
      handler: function() {
        let total = 0
        this.user.cartItems.map((cartItem) => {
          total += cartItem.sum
        })
        this.user.totalCost = total + this.user.shipPrice
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
    }
  }
}
</script>
