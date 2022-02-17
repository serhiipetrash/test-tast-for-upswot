<template>
  <div class="home">
    <Navbar />
    <Hero />
    <Posts />
    <Loginform />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Posts from "@/components/Posts.vue";
import Footer from "@/components/Footer.vue";
import Loginform from "@/components/Loginform.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    Posts,
    Footer,
    Loginform,
  },
};

Hero;
</script>
