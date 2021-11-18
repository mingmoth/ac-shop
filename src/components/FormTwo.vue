<template>
  <div class="form">
    <form action="">
      <div class="form-title">運送方式</div>
      <div class="form-ship">
        <input type="radio" name="ship" id="ship" @click="setDelivery('標準')" :checked="user.delivery !== 'DHL'"/>
        <div class="form-ship-body">
          <div class="form-ship-body-head">
            <div class="form-ship-body-head-title">標準運送</div>
            <div class="form-ship-body-head-price">免費</div>
          </div>
          <div class="form-ship-body-info">約 3~7 個工作天</div>
        </div>
      </div>
      <div class="form-ship">
        <input type="radio" name="ship" id="ship" @click="setDelivery('DHL')" :checked="user.delivery === 'DHL'"/>
        <div class="form-ship-body">
          <div class="form-ship-body-head">
            <div class="form-ship-body-head-title">DHL 貨運</div>
            <div class="form-ship-body-head-price">$500</div>
          </div>
          <div class="form-ship-body-info">48 小時內送達</div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormTwo',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    setDelivery(ship) {
      this.delivery = ship
      this.$emit("set-delivery", ship)
    }
  }
}
</script>