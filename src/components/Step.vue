<template>
  <div class="step">
    <div class="step-container">
      <div :class="['step-progress', {'completed': step > 1}, {'active': step === 1}]">
        <div class="step-progress-circle" id="step1"></div>
        <div class="step-progress-label">寄送地址</div>
      </div>
      <div :class="['step-connect', {'completed': step > 1}]"></div>
      <div :class="['step-progress', {'completed': step > 2}, {'active': step === 2}]">
        <div class="step-progress-circle" id="step2"></div>
        <div class="step-progress-label">運送方式</div>
      </div>
      <div :class="['step-connect', {'completed': step > 2}]"></div>
      <div :class="['step-progress', {'completed': step > 3}, {'active': step === 3}]">
        <div class="step-progress-circle" id="step3"></div>
        <div class="step-progress-label">付款資訊</div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Step',
  props: {
    step: {
      type: Number,
      default: 1
    }
  }
}
</script>