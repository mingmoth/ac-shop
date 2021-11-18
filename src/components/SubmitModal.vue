<template>
  <div class="modal fade" id="submit-cart" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <div
            class="modal-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></div>
          <div class="modal-header-title">結帳</div>
        </div>
        <div class="modal-body"></div>
        <div class="modal-footer">
          <router-link to="/1">
          <button 
            class="btn btn-clear"
            data-bs-dismiss="modal"
            @click="endShop">送出</button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubmitModal',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    endShop() {
      this.$emit("end-shop")
    }
  }
}
</script>