<template>
  <div class="control">
    <div class="control-right">
      <button 
        class="btn btn-prev-right"
        v-if="step > 1">
        上一步
      </button>
      <button 
        v-if="step> 2"
        class="btn btn-next-right">確認下單</button>
      <button v-else class="btn btn-next-right">下一步</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightControl',
  props: {
    step: {
      type: Number,
      default: 1,
    }
  }
}
</script>