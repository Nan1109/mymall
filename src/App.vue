<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less" scode>
@import "assets/css/base.css";
@import "assets/font/iconfont.css";
#Tabber {
  width: 100vw;
  height: 44px;
  display: flex;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
  box-shadow: 0px -2px 2px #ddd;
  .tabbar-title {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    span{
      font-size: 24px;
      line-height: 24px;
    }
  }
}
.seek-bg {
  background: #ea3450;
  color: #fff;
}
.CarText {
  width: 100vw;
  background: #ea3450;
  padding-bottom: 5px;
  div {
    width: 90%;
    margin: 0 auto;
    background: #fff;
    text-align: center;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
  }
}
</style>
