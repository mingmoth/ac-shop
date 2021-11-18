<template>
  <div class="main">
    <div class="main-title">結帳</div>
    <div class="main-wrapper">
      <div class="main-left">
        <Step :step="step"/>
        <FormOne :step="step"/>
        <LeftControl :step="step"/>
      </div>
      <div class="main-right">
        <Cart />
        <RightControl :step="step"/>
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
export default {
  name: 'Shop',
  components: {
    Step, FormOne, Cart, LeftControl, RightControl
  },
  data() {
    return {
      step: 1
    }
  }
}
</script>