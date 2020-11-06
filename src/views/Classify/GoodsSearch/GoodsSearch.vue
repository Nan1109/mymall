<!--  -->
<template>
  <div class="GoodsSearch">
    <Seek class="Carousel_top">
      <div slot="left" @click="handleClickGo">&lt;</div>
      <div slot="center">商品列表</div>
    </Seek>
    <div class="CarText">
      <div @click="handleCarText">搜索</div>
    </div>
    <div class="Nav">
      <div class="navItme" v-for="(v,i) in navs" :key="i">
        <router-link :to="v.to" tag="li" active-class="active">{{v.title}}</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Seek from "components/content/seek/Seek";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Seek,
  },
  props:['id'],
  data() {
    //这里存放数据
    return {
      navs:[
        {
          title:'产品',
          to:'/GoodsSearch/'+this.id+'/product',
        },
        {
          title:'销量',
          to:'/GoodsSearch/'+this.id+'/sales',
        },
        {
          title:'价格',
          to:'/GoodsSearch/'+this.id+'/price',
        },
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleClickGo() {
      this.$router.go(-1);
    },
    handleCarText() {
      this.$router.push("Carousel");
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
.Carousel_top {
  background: #ea3450;
  color: #fff;
}
.CarText {
  width: 100vw;
  // background: #ea3450;
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
.Nav{
  display: flex;
  .navItme{
    flex: 1;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    border-bottom: 1px solid #ccc;
  }
}
.active{
  color: red;
  border-bottom: 2px solid red;
}
</style>
