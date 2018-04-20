<template>
  <div class="hello">
    <div class="so-index-content">
      <div>
        <div>
          <input v-model="searchValue"/>
          <div class="so-index-search" @click="sendSearchFun">Search</div>
        </div>
      </div>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
  import indexBg from '@/assets/index-bg.png'
  import http from '../../lib/http'
  import bus from '@/lib/eventBus.js'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        searchValue: '',
        indexBg: indexBg,
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      sendSearchFun() {
        bus.$emit('indexSearchEvent', this.searchValue);
        console.log('indexSearchEvent:' + this.searchValue);
      }
    }
  }
</script>

<style scoped lang="less">
  .so-index-content {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    text-align: center;
    margin: auto;
    background: url("../../assets/index-bg.png") no-repeat;
    background-size: auto 100%;
    z-index: 0;
    > div {
      width: 1024px;
      position: relative;
      top: 50%;
      text-align: center;
      margin: auto;
      > div {
        width: 660px;
        position: relative;
        text-align: center;
        margin: auto;
        input {
          width: 480px;
          height: 66px;
          float: left;
          border: inherit;
          outline: none;
          font-size: 24px;
          text-indent: 12px;
        }
        .so-index-search {
          height: 68px;
          width: 140px;
          float: left;
          line-height: 68px;
          background-color: #ffd100;
          font-size: 24px;
          cursor: pointer;
        }
      }
    }

  }

</style>
