<template>
  <nav>
    <div class="pre-nav"></div>
    <div class="nav">
      <div class="container">
        <div class="logo vertical">
          <img src="../assets/logo1.svg" alt="Logo" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.pre-nav {
  background: #333333;
  height: 53px;
}
.nav {
  width: 100%;
  height: 6rem;
  background: linear-gradient(180deg, #00afed 0%, #00569a 100%);
}

.vertical {
  display: flex;
  align-items: center;
}
.logo {
  height: 6rem;
}
</style>
