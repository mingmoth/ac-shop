<template>
  <div class="modal fade" id="submit-cart" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-header-title">結帳明細</div>
        </div>
        <div class="modal-body">
          <div class="modal-body-user">
            <div class="modal-body-user-title">收件人資訊</div>
            <div class="modal-body-user-name">姓名: {{user.name}} {{user.title}}</div>
            <div class="modal-body-user-tel">電話: {{user.tel}}</div>
            <div class="modal-body-user-email">電子郵件: {{user.email}}</div>
            <div class="modal-body-user-address">收件地址: {{user.county}} {{user.address}}</div>
          </div>
          <div class="modal-body-product">
            <div class="modal-body-product-title">商品明細</div>
            <div class="modal-body-product-jean1">破壞補丁修身牛仔褲: {{user.jean1Count}}件</div>
            <div class="modal-body-product-jean2">刷色直筒牛仔褲: {{user.jean2Count}}件</div>
            <div class="modal-body-product-ship">運送方式: {{user.delivery}}運送</div>
            <div class="modal-body-product-shipPrice">運費: {{user.shipPrice}}</div>
            <div class="modal-body-product-totalCost">總金額: <span class="modal-body-product-totalCost-num">{{user.totalCost}}</span></div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            class="modal-close btn btn-secondary"
            data-bs-dismiss="modal"
            aria-label="Close">回上一步</button>
          <router-link to="/1">
            <button 
              class="btn btn-clear"
              data-bs-dismiss="modal"
              @click="endShop">送出</button>
          </router-link>
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