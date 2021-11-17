<template>
  <div class="form">
    <form action="" >
      <div class="form-title">寄送地址</div>
      <div class="form-calling">
        <div class="form-calling-title">
          <label for="title">稱謂</label>
          <select name="title" id="title" required>
            <option value="先生">先生</option>
            <option value="女士">女士</option>
          </select>
        </div>
        <div class="form-calling-name">
          <label for="name">姓名</label>
          <input type="text" name="name" id="name" placeholder="請輸入姓名" required>
        </div>
      </div>
      <div class="form-contact">
        <div class="form-contact-tel">
          <label for="tel">電話</label>
          <input type="tel" name="tel" id="tel" placeholder="請輸入行動電話" required>
        </div>
        <div class="form-contact-email">
          <label for="email">Email</label>
          <input type="email" name="email" id="email"  placeholder="請輸入電子郵件" required>
        </div>
      </div>
      <div class="form-location">
        <div class="form-location-county">
          <label for="county">縣市</label>
          <select name="county" id="county" required>
            <option value="" selected disabled>請選擇縣市</option>
          </select>
        </div>
        <div class="form-location-address">
          <label for="address">地址</label>
          <input type="text" name="address" id="address" placeholder="請輸入地址" required>
        </div>
      </div>
    </form>
    
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
    step: {
      type: Number,
      default: 1
    }
  }
}
</script>