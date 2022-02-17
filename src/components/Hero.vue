<template>
  <section class="hero-image">
    <div class="hero-text">
      <h1 style="font-size: 55px">Welcome to Business Analytics Online</h1>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.hero-image {
  background-image: url("../assets/hero.png");
  background-color: #cccccc;
  height: 29rem;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.hero-text h1 {
  text-align: left;
  position: absolute;
  top: 60%;
  left: 45%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: 400;
  font-style: normal;
  line-height: 86px;
}
</style>
