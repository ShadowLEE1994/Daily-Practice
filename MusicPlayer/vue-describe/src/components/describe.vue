<template>
  <div class="describe">
        <div class="top">
            <dl v-for="(item,index) in toplist" :key="index">
                <dt><img :src='item.src' alt=""></dt>
                <dd>
                    <h5>{{ item.title }}</h5>
                    <p>{{ item.text }}</p>
                </dd>
            </dl>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      toplist: [
        {
          'src': require('../assets/images/ad_01.png'),
          'title': '项目进度实时把控',
          'text': '智能化项目监管平台，实时了解项目进展、100%透明、提前预警，保障项目的及时高质量交付'
        },
        {
          'src': require('../assets/images/ad_02.png'),
          'title': '专业的互联网化技术服务',
          'text': '区别传统软件外包，与创业项目一同小步快跑、快速迭代，以互联网思维和技术体系，从0到1，快速落地产品'
        },
        {
          'src': require('../assets/images/ad_03.png'),
          'title': '全生命周期产品设计研发',
          'text': '弹性服务模式，梳理业务模式，设计产品原型，全栈技术研发，持续稳定迭代'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.describe
  width 100%
  background #fff
  box-sizing content-box
  margin-bottom 30px
  .top
    width 1200px
    margin 0 auto
    dl
      width 340px
      display inline-block
      text-align center
      margin 100px 80px 100px 0
    dl:nth-child(3)
      margin-right 0
    dt
      img
        height 96px
    dd
      h5
       font-size 18px;
       color #333;
       padding 20px 0 15px 0
      p
       font-size 14px
       color #666 
</style>
