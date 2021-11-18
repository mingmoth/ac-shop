<template>
  <div class="form">
    <form action="" >
      <div class="form-title">寄送地址</div>
      <div class="form-calling">
        <div class="form-calling-title">
          <label for="title">稱謂</label>
          <select name="title" id="title" v-model="user.title" required>
            <option value="先生" selected>先生</option>
            <option value="女士">女士</option>
          </select>
        </div>
        <div class="form-calling-name">
          <label for="name">姓名</label>
          <input type="text" name="name" id="name" placeholder="請輸入姓名" v-model="user.name" required>
        </div>
      </div>
      <div class="form-contact">
        <div class="form-contact-tel">
          <label for="tel">電話</label>
          <input type="tel" name="tel" id="tel" placeholder="請輸入行動電話" v-model="user.tel" required>
        </div>
        <div class="form-contact-email">
          <label for="email">Email</label>
          <input type="email" name="email" id="email"  placeholder="請輸入電子郵件" v-model="user.email" required>
        </div>
      </div>
      <div class="form-location">
        <div class="form-location-county">
          <label for="county">縣市</label>
          <select name="county" id="county" v-model="user.county" required>
            <option value="" selected disabled>請選擇縣市</option>
            <option v-for="county in counties" :key="county" :value="county">{{county}}</option>
          </select>
        </div>
        <div class="form-location-address">
          <label for="address">地址</label>
          <input type="text" name="address" id="address" placeholder="請輸入地址" v-model="user.address" required>
        </div>
      </div>
    </form>
    
  </div>
</template>

<script>
export default {
  name: 'FormOne',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      counties: ['基隆市','臺北市','新北市','桃園市','新竹市','新竹縣','苗栗縣','臺中市','彰化縣','南投縣','雲林縣','嘉義市','嘉義縣','臺南市','高雄市','屏東縣','宜蘭縣','花蓮縣','臺東縣','澎湖縣','金門縣','連江縣']
    }
  }
}
</script>