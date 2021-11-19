<template>
  <div class="nav">
    <div class="nav-logo"></div>
    <label for="nav-toggle" class="nav-toggle"></label>
    <input type="checkbox" name="nav-toggle" id="nav-toggle" />
    <div class="nav-navbar">
      <div class="nav-navbar-select">
        <ul class="nav-navbar-select-list">
          <li class="nav-navbar-select-list-link">男款</li>
          <li class="nav-navbar-select-list-link">女款</li>
          <li class="nav-navbar-select-list-link">最新消息</li>
          <li class="nav-navbar-select-list-link">客製商品</li>
          <li class="nav-navbar-select-list-link">聯絡我們</li>
        </ul>
      </div>
      <div class="nav-navbar-option">
        <div class="nav-navbar-option-wrapper">
          <div class="nav-navbar-option-wrapper-search"></div>
          <div class="nav-navbar-option-wrapper-cart"></div>
          <label for="darkmode" class="nav-navbar-option-wrapper-switch"></label>
          <input type="checkbox" class="darkmode"
            id="darkmode" @change="darkToggle">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    darkToggle(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }
    },
  }
}
</script>