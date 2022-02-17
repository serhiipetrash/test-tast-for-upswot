<template>
  <div class="home">
    <Navbar />
    <Hero />
    <Posts />
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Posts from "@/components/Posts.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    Posts,
  },
};

Hero;
</script>
