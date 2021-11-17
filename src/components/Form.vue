<template>
  <div class="form">
    <form action="">
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
    <form action="">
      <div class="form-title">運送方式</div>
      <div class="form-ship">
        <input type="radio" name="ship" id="ship" checked>
        <div class="form-ship-body">
          <div class="form-ship-body-head">
            <div class="form-ship-body-head-title">標準運送</div>
            <div class="form-ship-body-head-price">免費</div>
          </div>
          <div class="form-ship-body-info">約 3~7 個工作天</div>
        </div>
      </div>
      <div class="form-ship">
        <input type="radio" name="ship" id="ship">
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