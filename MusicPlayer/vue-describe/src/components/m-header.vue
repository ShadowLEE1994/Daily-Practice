<template>
  <div class="m-header">
    <div class="textarea">
      <h4>凯乐软件</h4>
      <h5>为您提供一站式软件开发服务</h5>
      <h6>
        <span>全栈技术实力</span>
        <span>全透明项目管控</span>
        <span>高保障可靠支付</span>
      </h6>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.m-header
  width:100%
  height:80vh
  background:url('../assets/images/bg_01.jpg') no-repeat !important
  position: relative
  .textarea
    position : absolute
    top:50%
    left:50%
    font-size: 0
    margin-left:-240px
    margin-top:-80px
    h4
      color: #fff
      font-size 38px
      line-height 44px
    h5
      font-size 38px
      display: inline-block
      color: #f1c127
      border-bottom :1px solid #525252
      padding-bottom 6px
      line-height 44px
      margin-bottom 14px
    span
      font-size :22px
      color: rgba(255,255,255,0.7)
      line-height :22px
      padding-right:20px
    span:nth-last-child(2)
    span:nth-last-child(1)
      padding:0 20px
      background:url(../assets/images/icon_01.png) no-repeat left center
</style>

