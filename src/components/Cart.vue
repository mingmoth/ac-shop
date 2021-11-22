<template>
  <div class="cart">
    <div class="cart-title">購物籃</div>
    <div class="cart-item" v-for="cartItem in user.cartItems" :key="cartItem.id">
      <div class="cart-item-img" id="jean1"></div>
      <div class="cart-item-body">
        <div class="cart-item-body-head">
          <div class="cart-item-body-head-name">{{cartItem.name}}</div>
          <div class="cart-item-body-head-count">
            <button 
              class="btn btn-minus" 
              :disabled="cartItem.count < 1"
              @click.stop.prevent="cartItemMinus(cartItem.id)">-</button>
            <div class="cart-item-body-head-count-num">{{cartItem.count}}</div>
            <button 
              class="btn btn-plus"
              @click.stop.prevent="cartItemPlus(cartItem.id)">+</button>
          </div>
        </div>
        <div class="cart-item-body-price">${{cartItem.sum}}</div>
      </div>
    </div>
    <div class="cart-ship">
      <div class="cart-ship-title">運費</div>
      <div class="cart-ship-price">{{shipPrice}}</div>
    </div>
    <div class="cart-total">
      <div class="cart-total-title">小計</div>
      <div class="cart-total-price">${{user.totalCost}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    user: {
      type: Object,
      required: true
    },
  },
  computed: {
    shipPrice() {
      if(this.user.delivery === '標準') {
          return '免費'
        } else {
          return '$500'
        }
    }
  },
  methods: {
    cartItemMinus(cartItemId) {
      this.$emit("cart-item-minus", cartItemId)
    },
    cartItemPlus(cartItemId) {
      this.$emit("cart-item-plus", cartItemId)
    },
  }
}
</script>