<template>
  <section>
    <div class="login-bg">
      <div class="login-logo">
        <a href="#">
          <img src="../assets/logo1.svg" alt="Logo" />
        </a>
      </div>
    </div>
    <div class="login-todo">
      <h2>Thank you Admin</h2>

      <TodoList list-name="My to-dos" />
    </div>
  </section>
</template>

<script>
import TodoList from "@/components/Todolist.vue";

export default {
  name: "App",
  components: { TodoList },
};
</script>

<style>
section {
  position: relative;
}
.login-bg {
  width: 100%;
  height: 800px;
  background: linear-gradient(180deg, #00afed 0%, #00569a 100%);
}
.login-logo {
  text-align: center;
  padding: 4rem;
  margin: auto;
}
.login-logo img {
  width: 186px;
  height: 120px;
}
.login-logo a:hover img {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}
.login-todo {
  width: 900px;
  height: 660px;
  background: whitesmoke;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.login-todo h2 {
  font-family: Roboto;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 94px;
  letter-spacing: 0em;
  text-align: center;
}
</style>
