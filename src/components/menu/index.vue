<template>
  <div class="so-menu">
    <div class="so-menu-content">
      <div class="so-menu-navigation">
        <ul>
          <li>
            <span>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jian"></use>
              </svg>
              Cuidines
            </span>
            <ul>
              <li class="active">All Cuidines</li>
              <li>Chinese</li>
              <li>Halal</li>
              <li>Indian</li>
              <li>Thai</li>
            </ul>
          </li>
          <li>
            <span>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jian"></use>
              </svg>
              Specials
            </span>
            <ul>
              <li>Deals</li>
              <li>New</li>
              <li>discount</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="so-menu-cuisine">
        <div>
          <ul>
            <li>default</li>
            <li>
              Sales volume
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jiantou"></use>
              </svg>
            </li>
            <li>
              score
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jiantou"></use>
              </svg>
            </li>
            <li>Starting price</li>
            <li>
              Feeding speed
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jiantou"></use>
              </svg>
            </li>
            <li>
              A-Z
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jiantou"></use>
              </svg>
            </li>
          </ul>
        </div>
        <div>
          <div class="so-food" v-for="v in shops">
            <div class="so-food-img"><img :src="thJpg"/></div>
            <div class="so-food-title">
              <span>{{v.shopId}}</span>
              <span class="so-icon-star">
                <div v-for="e in starArr" v-if="e">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xingxing"></use>
                  </svg>
                </div>
                <div v-for="e in starArr" v-if="!e">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xingxing1"></use>
                  </svg>
                </div>
                <div class="so-icon-star-text">月售30份</div>
              </span>
              <span class="so-food-freight">
                <div>起送：£2</div>
                <div>运费：£1</div>
                <div>30min</div>
              </span>
            </div>
          </div>
        </div>
        <div class="so-menu-bottom">
          Click to load more +
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import thJpg from '@/assets/th.jpg'
import bus from '@/lib/eventBus.js'
import http from '../../lib/http'
import ApiSetting from '../../lib/apiSetting'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      thJpg: thJpg,
      starArr: [true, true, true, false, false],
      shops: [],
      searchValue: ''
    }
  },
  created () {
    console.log('menu')
    this.searchValue = this.$route.query.searchValue || ''
    this.searchMenu()
  },
  mounted () {
    const that = this
    bus.$on('menuSearchEvent', function (e) {
      that.searchValue = e || ''
      console.log('menuSearchEvent:' + that.searchValue || '')
      that.searchMenu()
    })
  },
  methods: {
    searchMenu () {
      const that = this
      let data = {
        'action': 'QueryShop',
        'param': {
          'state': 'open',
          'description': this.searchValue,
          'zipCode': '',
          'start': 0,
          'count': 100
        }
      }
      http(ApiSetting.api, data).then(res => {
        console.log(res.data.data)
        if (res.data.code === 0) {
          that.shops = res.data.data.shops
        }
      })
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
    color: #dcdcdc;
  }

  .so-icon-star {
    font-size: 12px;
    .icon {
      display: block;
      float: left;
      color: #ffa800;
      padding-top: 5px;
      font-size: 12px;
    }
    .so-icon-star-text {
      position: relative;
      left: 12px;
      color: #666666;
    }
  }

  .so-food-freight {
    > div {
      float: left;
      line-height: 20px;
      font-size: 12px;
      margin-right: 10px;
      color: #666666;
    }
  }

  .so-food {
    width: 220px;
    height: 256px;
    box-shadow: rgba(65, 54, 77, 0.08) 3px 3px 10px 5px; //边框阴影
    margin: 10px 10px 24px 10px;
    float: left;
    .so-food-img {
      width: 100%;
      height: 160px;
      img {
        width: 100%;
        height: 160px;
      }
    }
  }

  .so-food-title {
    padding-left: 12px;
    padding-top: 16px;
    span {
      text-align: left;
      display: block;
      line-height: 25px;
      height: 25px;
    }
  }

  .so-menu-content {
    width: 1024px;
    text-align: center;
    margin: auto;
    padding-top: 18px;
    .so-menu-navigation {
      float: left;
      width: 216px;
      box-shadow: rgba(65, 54, 77, 0.08) 0px 0px 20px 5px; //边框阴影
      margin-left: 16px;
      li {
        cursor: pointer;
      }
      li.active, span.active {
        background-color: #ffd100;
      }
      > ul {
        display: block;
        width: 100%;
        > li {
          display: block;
          width: 100%;
          span {
            display: block;
            height: 48px;
            width: 100%;
            line-height: 48px;
            color: #333333;
          }
          > ul {
            display: block;
            width: 100%;
            background-color: #fefbef;
            > li {
              display: block;
              width: 100%;
              height: 48px;
              line-height: 48px;
              color: #666666;
            }
            > li:after {
              content: '';
              display: block;
              clear: both;
            }
          }
        }
        > li:after {
          content: '';
          display: block;
          clear: both;
        }
      }
    }
    .so-menu-cuisine {
      width: 724px;
      float: left;
      box-shadow: rgba(65, 54, 77, 0.08) 0px 0px 20px 5px; //边框阴影
      margin-left: 23px;
      margin-bottom: 40px;
      ul {
        width: 100%;
        height: 28px;
        li {
          float: left;
          line-height: 28px;
          margin-left: 10px;
          display: block;
          cursor: pointer;
        }
        li:after {
          display: block;
          content: '';
          width: 1px;
          height: 16px;
          float: left;
          border-right: solid #c6c6c6 2px;
          margin-right: 10px;
          position: relative;
          top: 4px
        }
        li:first-child:after {
          display: none;
        }
      }

    }
    .so-menu-cuisine > div:after {
      display: block;
      content: '';
      clear: both;
    }
    .so-menu-bottom {
      width: 100%;
      height: 40px;
      margin: 20px 0;
      line-height: 40px;
      cursor: pointer;
    }
    .so-menu-bottom:hover {
      background-color: #fefbef;
    }
  }
</style>
