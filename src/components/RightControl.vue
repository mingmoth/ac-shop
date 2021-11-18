<template>
  <div class="control">
    <div class="control-right">
      <router-link
        :to="{path: '/' + (step-1)}"
        class="contorl-right-prev">
        <button 
        class="btn btn-prev-right"
        :style="{visibility: step > 1? 'visible' : 'hidden'}"
        @click="saveStorage">上一步</button>
      </router-link>
      <a v-if="step> 2">
        <button 
          class="btn btn-next-right"
          :disabled="!completed"
          @click="saveStorage"
          @submit="submitCart"
          >確認下單
      </button>
      </a>
      
      
      <router-link
        v-else
        :to="{path: '/' + (step+1)}"
        class="contorl-right-next"
        :disabled="!completed"
        :event="completed ? 'click': '' ">
        <button 
          class="btn btn-next-right" 
          :disabled="!completed"
          @click="saveStorage">下一步</button>
      </router-link>
        
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
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    nextStep() {
      this.$emit("next-step")
    },
    saveStorage() {
      this.$emit("save-storage")
    },
    submitCart() {
      this.$emit("submit-cart")
    }
  }
}
</script>