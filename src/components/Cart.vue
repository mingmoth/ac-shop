<template>
  <div class="cart">
    <div class="cart-title">購物籃</div>
    <div class="cart-item">
      <div class="cart-item-img" id="jean1"></div>
      <div class="cart-item-body">
        <div class="cart-item-body-head">
          <div class="cart-item-body-head-name">破壞補丁修身牛仔褲</div>
          <div class="cart-item-body-head-count">
            <button 
              class="btn btn-minus" 
              :disabled="user.jean1Count < 1"
              @click.stop.prevent="jean1Minus">-</button>
            <div class="cart-item-body-head-count-num">{{user.jean1Count}}</div>
            <button 
              class="btn btn-plus"
              @click.stop.prevent="jean1Plus">+</button>
          </div>
        </div>
        <div class="cart-item-body-price">${{user.jean1Cost}}</div>
      </div>
    </div>
    <div class="cart-item">
      <div class="cart-item-img" id="jean2"></div>
      <div class="cart-item-body">
        <div class="cart-item-body-head">
          <div class="cart-item-body-head-name">刷色直筒牛仔褲</div>
          <div class="cart-item-body-head-count">
            <button 
              class="btn btn-minus" 
              :disabled="user.jean2Count < 1"
              @click.stop.prevent="jean2Minus">-</button>
            <div class="cart-item-body-head-count-num">{{user.jean2Count}}</div>
            <button 
              class="btn btn-plus"
              @click.stop.prevent="jean2Plus">+</button>
          </div>
        </div>
        <div class="cart-item-body-price">${{user.jean2Cost}}</div>
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
    }
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
    jean1Minus() {
      this.$emit("jean-one-minus")
    },
    jean1Plus() {
      this.$emit("jean-one-plus")
    },
    jean2Minus() {
      this.$emit("jean-two-minus")
    },
    jean2Plus() {
      this.$emit("jean-two-plus")
    },
  }
}
</script>