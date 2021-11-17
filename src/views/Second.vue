<template>
  <div class="main">
    <div class="main-title">結帳</div>
    <div class="main-wrapper">
      <div class="main-left">
        <Step :step="step"/>
        <FormTwo :step="step"/>
      </div>
      <div class="main-right">
        <Cart />
      </div>
    </div>
  </div>
</template>

<script>
import Step from '../components/Step.vue'
import FormTwo from '../components/FormTwo.vue'
import Cart from '../components/Cart.vue'
export default {
  name: 'Shop',
  components: {
    Step, FormTwo, Cart
  },
  data() {
    return {
      step: 1
    }
  }
}
</script>