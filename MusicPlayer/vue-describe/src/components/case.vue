<template>
  <div class="container">
      <img src="../assets/images/title-case.png" alt="">
      <p>互联网金融、医疗、教育、社交、智能硬件、直播等全领域覆盖</p>
      <ul class="clearfix" v-for="(item,index) in caselist" :key="index">
          <li :src='item.src' :class='item.layout'>
            <div class="textarea">
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </div>
              <img :src='item.src' alt="" >
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      caselist: [
        {
          src: require('../assets/images/case-2.jpg'),
          title: '8H官网',
          text: '8H科技睡眠床垫，智能家居行业独角兽。先后获得顺为资本、峰谷资本、京东、小米及羽泉等多轮融资。京东众筹610万人民币，以2000%的完成率创造小米第三方产品众筹神话',
          layout: 'left'
        },
        {
          src: require('../assets/images/case-1.jpg'),
          title: '医诊网',
          text: '拇指营销是诺信推出的一款为企业营销提供快捷管理app。八戒软件帮助实现功能包括：自动同步药企通讯录，药企人员可无缝登录营销APP；通过科学与数据化的展示方式话',
          layout: 'right'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  width 1200px
  padding 90px 0 60px
  margin 0 auto
  background #fff
img
  display: block;
  margin: 0 auto;
p
  font-size: 14px;
  color: #7c7c7c;
  text-align: center;
  line-height: 25px;
  margin-top: 15px;
ul
  margin:80px 90px 0px
  li
    margin-bottom 50px
    padding-left 2%
    .textarea
      width 33%
      text-align center
      padding-top 100px
    img
      width 60%
.left
  .textarea
    float left
  img 
    float right
    margin-right -60px 
.right
  .textarea
    float right
  img 
    float left
    margin-left -60px    
</style>


