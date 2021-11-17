<template>
  <div class="form">
    <form action="">
      <div class="form-title">付款資訊</div>
      <div class="form-cardName">
        <label for="cardName">持卡人姓名</label>
        <input
          type="text"
          name="cardName"
          id="cardName"
          placeholder="John Doe"
          required
        />
      </div>
      <div class="form-cardNum">
        <label for="cardNum">卡號</label>
        <input
          type="text"
          name="cardNum"
          id="cardNum"
          placeholder="1111 2222 3333 4444"
          required
        />
      </div>
      <div class="form-validate">
        <div class="form-validate-date">
          <label for="date">有效期限</label>
          <input
            type="text"
            name="date"
            id="date"
            placeholder="MM/YY"
            required
          />
        </div>
        <div class="form-validate-cvc">
          <label for="cvc">CVC / CCV</label>
          <input type="number" name="cvc" id="cvc" placeholder="123" required />
        </div>
      </div>
    </form>
  </div>
</template>