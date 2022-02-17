<template>
  <div class="login-form">
    <form class="form">
      <div>
        <label for="name">name</label>
        <input type="text" required id="name" name="name" />
      </div>
      <div>
        <label for="password">password</label>
        <input type="password" required id="password" name="password" />
      </div>

      <button type="summit">login</button>
      <div class="forgot-password"><a href="#">Forgot Password</a></div>
    </form>

    <button class="register">Register now</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
.login-form {
  position: absolute;
  left: 68%;
  top: 65%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
}

.login-form form {
  width: 480px;
  height: 360px;
  padding: 1rem 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.login-form form label {
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 21px;
  letter-spacing: 0em;
  display: block;
  margin-bottom: 0.5rem;
}
.login-form form input {
  width: 100%;
  height: 3.25rem;
  margin: 0 0 1rem;
  background: #ffffff;
  border: 1px solid #9a9a9a;
  box-sizing: border-box;
  font-size: 1.5rem;
}

.login-form form button {
  width: 100%;
  height: 3.25rem;
  background: #0076c0;
  color: white;
  text-transform: uppercase;
  font-family: Roboto;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: center;
  border: 1px solid #0076c0;
}
.login-form form button:hover {
  background: #fff;
  color: #0076c0;
}
.register {
  width: 100%;
  height: 62px;
  border: none;
  background: #f6f6f6;
  font-family: Roboto;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: center;
  color: #333333;
}
.register:hover {
  color: #056dae;
}
.forgot-password {
  height: 24px;
  margin: 8px 0;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
}
.forgot-password a {
  color: #056dae;
  text-decoration: none;
}
.forgot-password a:hover {
  color: #033b5e;
  text-decoration: none;
}
</style>
