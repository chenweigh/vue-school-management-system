<template>
  <div class="login" :style="`background-image:url(${images.loginBg})`">
    <div class="login__container">
      <div class="login__header">
        <div class="login__header--chinese">用户登录</div>
        <div class="login__header--english">USER LOGIN</div>
      </div>
      <div class="login__row login__row--username">
        <img class="login__row__icon" :src="`${images.loginUsername}`" />
        <input
          class="login__input"
          placeholder="请输入手机号"
          name="username"
          :value="`${username}`"
          type="number"
        />
      </div>
      <div class="login__row login__row--passwrod">
        <img class="login__row__icon" :src="`${images.loginPassword}`" />
        <input
          class="login__input"
          placeholder="请输入密码"
          name="password"
          :value="`${password}`"
          type="password"
        />
      </div>
      <div class="login__footer">
        <div class="login__footer__checkboxContainer">
          <input class="login__footer__checkboxContainer__input" type="checkbox" />
          <span>记住用户名和密码</span>
        </div>
        <div class="login__footer__tipContainer">tips:官网账号即可登录</div>
      </div>
      <div class="login__btn">登录</div>
    </div>
  </div>
</template>

<script>
import { IMG_LOGINBG, IMG_LOGINUSER, IMG_LOGINPW} from '../../utils/Images'

export default {
  name: "Login",
  data() {
    return {
      images:{
        loginPassword:IMG_LOGINPW,
        loginUsername:IMG_LOGINUSER,
        loginBg:IMG_LOGINBG,
      },
      username: "",
      password: ""
    };
  },
  components: {},
  methods: {},
  create() {
  },
  mounted() {
  }
};
</script>

<style lang="less">
.login {
  width: 100%;
  height: 100%;
  background-size: auto 100%;
  background-color: #f0f3ff;
  background-repeat: no-repeat;
  position: relative;
}
.login__container {
  width: 400px;
  margin-right: 50px;
  margin-left: calc(100% - 400px - 50px);
  /* margin-left: calc(65%); */
  /* background-color: red; */

  position: absolute;
  transform: translateY(-50%);
  top: 50%;
}
.login__header {
}
.login__header--chinese {
  font-size: 30px;
  font-family: MicrosoftYaHei;
  color: rgba(95, 10, 255, 1);
}
.login__header--english {
  font-family: ArialMT;
  color: rgba(149, 149, 149, 1);
  opacity: 0.8;
  margin-bottom: 100px;
}
.login__row {
  width: 80%;
  height: 45px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(235, 235, 235, 1);
  border-radius: 5px;
  margin-bottom: 30px;
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.login__row__icon {
  width: 20px;
  height: 20px;
}
.login__row--username {
}
.login__row--password {
}
.login__input {
  width: calc(100% - 60px);
  height: 100%;
  border: none;
  padding: 0 20px;
}
.login__footer {
  margin-bottom: 100px;
  font-size: 13px;
  font-family: MicrosoftYaHei;
  color: rgba(136, 136, 136, 1);
}
.login__footer__checkboxContainer {
  margin-bottom: 6px;
}
.login__footer__checkboxContainer__input {
  margin-right: 5px;
}
.login__footer__tipContainer {
}
.login__btn {
  width: 80%;
  height: 50px;
  background: rgba(95, 10, 255, 1);
  border-radius: 40px;
  color: white;
  font-size: 22px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
