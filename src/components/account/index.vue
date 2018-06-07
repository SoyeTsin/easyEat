<template>
  <div class="account">
    <div class="accountInfo"></div>
    <div class="login" v-if="accountState==2">
      <div class="login-title">LOG IN</div>
      <div class="login-user-name">
        <div>User name</div>
        <div>
          <input/>
          <span>Enter one user name</span>
        </div>
      </div>
      <div class="login-password">
        <div>Password</div>
        <div>
          <input/>
          <span>Please input a password</span>
        </div>
      </div>
      <div class="forget-the-password">
        <a>Forget the password</a>
      </div>
      <div class="login-button">
        <a>LOGIN</a>
      </div>

    </div>
    <div class="register" v-if="accountState==3">
      <div class="login-title">SIGN UP</div>
      <div class="login-user-name">
        <div>E-mail</div>
        <div>
          <input v-model="username"/>
          <span>Please input a e-mail</span>
        </div>
      </div>
      <div class="login-password">
        <div>Password</div>
        <div>
          <input v-model="password"/>
          <span>Please input a password</span>
        </div>
      </div>
      <!--<div class="login-password">-->
      <!--<div>Password</div>-->
      <!--<div>-->
      <!--<input v-model="password"/>-->
      <!--<span>Please input a password</span>-->
      <!--</div>-->
      <!--</div>-->
      <div class="login-password">
        <div style="line-height: 20px;">Confirm Password</div>
        <div>
          <input/>
          <span>Please input confirm password</span>
        </div>
      </div>
      <div class="login-button" @click="accountRegister()">
        <a>LOGIN</a>
      </div>
    </div>
  </div>
</template>

<script>
  import http from '../../lib/http'
  import ApiSetting from '../../lib/apiSetting'
  import bus from '@/lib/eventBus.js'

  export default {
    name: 'index',
    data() {
      return {
        username: '',
        password: '',
        accountState: 0 // login==2,register==3
      }
    },
    created() {

    },
    mounted: function () {
      const that = this
      bus.$on('accountStateEvent', function (e) {
        console.log('onAccountStateEvent:' + e || 0)
        let accountState = e || 0
        if (accountState === that.accountState) {
          that.accountState = 0
        } else {
          that.accountState = accountState
        }
      })
    },
    methods: {
      openLogin() {
      },
      openRegister() {
      },
      changeState(e) {
        this.accountState = e || 0
      },
      accountLogin() {
        let data = {
          'action': 'Login',
          'param': {
            'username': this.username,
            'password': this.password
          }
        }
        http(ApiSetting.api, data).then(
          (res) => {
            let result = res.data
            if (result.code === '0') {
            }
          }, res => {

          }
        )
      },
      accountRegister() {
        let data = {
          'action': 'Register',
          'param': {
            'username': this.username,
            'password': this.password
          }
        }
        http(ApiSetting.api, data).then(res => {
          let result = res.data
          if (result.code === '0') {
          }
        }, res => {

        })
      }
    }
  }
</script>

<style scoped lang="less">
  .login, .register {
    position: absolute;
    text-align: center;
    margin: auto;
    left: 50%;
    z-index: 5;
    background-color: #ffffff;
    height: 380px;
    width: 480px;
    transform: translate(-15px, 18px);
    box-shadow: rgba(65, 54, 77, 0.08) 3px 3px 10px 5px; //边框阴影
    .login-title {
      font-size: 16px;
      font-weight: 600;
      height: 75px;
      width: 360px;
      text-align: center;
      margin: auto;
      line-height: 75px;
      border-bottom: solid 2px #e0e0e0;
    }
    .login-user-name, .login-password {
      width: 360px;
      height: 70px;
      margin: auto;
      font-size: 14px;
      text-align: left;
      margin-top: 36px;
      > div:first-child {
        font-weight: 600;
        width: 75px;
        float: left;
        height: 40px;
        line-height: 40px;
      }
      > div:nth-child(2) {
        float: left;
        width: 285px;
        span {
          color: #ff0000;
        }
      }
      input {
        width: 280px;
        height: 40px;
      }
    }
    .login-password {
      margin-top: 0px
    }
    .forget-the-password {
      width: 360px;
      height: 15px;
      line-height: 15px;
      text-align: right;
      margin: auto;
      color: #8a8a8a;
      font-size: 14px;
    }
    .login-button {
      width: 360px;
      height: 40px;
      background-color: #ffd100;
      line-height: 40px;
      text-align: center;
      margin: 20px auto auto auto;
      cursor: pointer;
    }
  }

  .register {
    height: 520px;
  }
</style>
