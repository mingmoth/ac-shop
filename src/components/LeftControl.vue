<template>
  <div class="control">
    <div class="control-left">
      <button 
        class="btn btn-prev-left"
        :style="{visibility: step > 1? 'visible' : 'hidden'}">上一步</button>
      <button 
        v-if="step> 2"
        class="btn btn-next-left">確認下單</button>
      <button v-else class="btn btn-next-left">下一步</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftControl',
  props: {
    step: {
      type: Number,
      default: 1,
    }
  }
}
</script>