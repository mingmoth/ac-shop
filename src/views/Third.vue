<template>
  <div class="main">
    <div class="main-title">結帳</div>
    <div class="main-wrapper">
      <div class="main-left">
        <Step :step="step"/>
        <FormThree :step="step"/>
      </div>
      <div class="main-right">
        <Cart />
      </div>
    </div>
  </div>
</template>

<script>
import Step from '../components/Step.vue'
import FormThree from '../components/FormThree.vue'
import Cart from '../components/Cart.vue'
export default {
  name: 'Shop',
  components: {
    Step, FormThree, Cart
  },
  data() {
    return {
      step: 1
    }
  }
}
</script>