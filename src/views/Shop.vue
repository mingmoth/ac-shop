<template>
  <div class="main">
    <div class="main-title">結帳</div>
    <div class="main-wrapper">
      <div class="main-left">
        <Step :step="step"/>
        <Form :step="step"/>
      </div>
      <div class="main-right">
        <Cart />
      </div>
    </div>
  </div>
</template>

<script>
import Step from '../components/Step.vue'
import Form from '../components/Form.vue'
import Cart from '../components/Cart.vue'
export default {
  name: 'Shop',
  components: {
    Step, Form, Cart
  },
  data() {
    return {
      step: 1
    }
  }
}
</script>