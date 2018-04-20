<template>
  <div class="so-top">
    <div>
      <div class="so-logo" @click="toIndex">
        Easy eat
      </div>
      <div class="so-address">
        <div class="so-address-default" :title="address">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-icon-test"></use>
          </svg>
          {{address}}
        </div>
        <div class="so-cut-off-rule"></div>
        <div class="so-address-switch">
          Change
        </div>
      </div>
      <div class="so-account">
        <div class="so-login" @click="sendAccountState(2)">
          LOGIN
        </div>
        <div class="so-cut-off-rule"></div>
        <div class="so-register" @click="sendAccountState(3)">
          SIGNUP
        </div>
      </div>
      <div class="so-account">

      </div>
      <div class="so-search">
        <input type="text" placeholder="shop name / cuisine" v-model="searchValue"/>
        <div @click="sendSearchFun()">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sousuo"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import iconfont from '@/lib/js/iconfont.js'
  import bus from '@/lib/eventBus.js'
  import http from '../../lib/http'
  import ApiSetting from '../../lib/apiSetting'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        searchValue: '',
        msg: 'Welcome to Your Vue.js App',
        address: 'Futian District, Shenzhen'
      }
    },
    mounted() {
      const that = this;
      bus.$on('searchEvent', function (e) {
        that.searchValue = e || '';
        console.log('onSearchEvent:' + that.searchValue || '');
        that.searchFun()
      })
      bus.$on('indexSearchEvent', function (e) {
        that.searchValue = e || '';
        console.log('indexSearchEvent:' + that.searchValue || '');
        that.searchFun()
      })
    },
    methods: {
      sendSearchFun() {
        bus.$emit('searchEvent', this.searchValue);
        console.log('searchEvent:' + this.searchValue);
      },
      searchFun() {
        this.$router.push({
          path: '/menu',
          query: {
            searchValue:
            this.searchValue
          }
        })
        bus.$emit('menuSearchEvent', this.searchValue);
      },
      sendAccountState(e) {
        bus.$emit('accountStateEvent', e || 0);
        console.log('emitAccountStateEvent:' + e || 0);
      },
      toIndex() {
        this.$router.push('/index')
      }
    }
  }
</script>
<style scoped lang="less">
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .so-top {
    width: 100%;
    height: 52px;
    background-color: #ffd100;
    position: relative;
    z-index: 9;
    > div {
      width: 1024px;
      margin: auto;
      text-align: center;
      height: 52px;
      > div {
        float: left;
      }
      .so-logo {
        font-family: 'Comic Sans MS';
        font-size: 18px;
        line-height: 50px;
        padding-left: 22px;
        cursor: pointer;
      }
      .so-address {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        margin-left: 20px;
        width: 300px;
        height: 34px;
        line-height: 34px;
        > div {
          float: left;
        }
        .so-address-default {
          width: 120px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .so-address-switch {
          width: 140px;
          white-space: nowrap;
          cursor: pointer;
        }
      }
      .so-cut-off-rule {
        content: '';
        width: 1px !important;
        height: 14px;
        display: block;
        line-height: 14px;
        border-right: solid 1px #000000;
        position: relative;
        top: 50%;
        right: -2px;
        transform: translateY(-50%);
        margin: 0 8px;
      }
      .so-search {
        float: right;
        height: 52px;
        position: relative;
        input {
          width: 178px;
          height: 32px;
          line-height: 34px;
          font-size: 14px;
          text-indent: 8px;
          position: relative;
          top: 50%;
          transform: translateY(-50%);
          float: left;
          background-color: #ffd100;
          border: solid 1px #ffffff;
        }
        input:focus {
          width: 178px;
          height: 32px;
          line-height: 34px;
          font-size: 14px;
          text-indent: 8px;
          position: relative;
          top: 50%;
          transform: translateY(-50%);
          float: left;
          background-color: #fff;
          border: solid 1px #ffd100;
          outline: none;
        }
        > div {
          float: left;
          position: relative;
          top: 50%;
          transform: translateY(-50%);
          text-align: center;
          width: 32px;
          height: 32px;
          right: 34px;
          cursor: pointer;
          > svg {
            position: relative;
            top: 50%;
            transform: translateY(-50%);
          }
        }
        > div:hover {
          background-color: #ffd100;
        }
      }
      .so-account {
        float: right;
        margin-right: 60px;
        height: 52px;
        > div {
          float: left;
          width: 45px;
          text-align: center;
          line-height: 52px;
        }
        .so-login {
          cursor: pointer;
        }
        .so-register {
          cursor: pointer;
        }
      }
    }
  }

</style>
