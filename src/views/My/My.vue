<!--  -->
<template>
  <div class="">
    <h1>我的</h1>
    <Tabbar>
      <tabbar-title path="/home">
        <span slot="icon" class="iconfont">&#xeb28;</span>
        <div slot="title">首页</div>
      </tabbar-title>
      <tabbar-title path="/classify">
        <span slot="icon" class="iconfont">&#xe61d;</span>
        <div slot="title">分类</div>
      </tabbar-title>
      <tabbar-title path="/cart">
        <span slot="icon" class="iconfont">&#xe64f;</span>
        <div slot="title">购物车</div>
      </tabbar-title>
      <tabbar-title path="/my">
        <span slot="icon" class="iconfont">&#xe67e;</span>
        <div slot="title">我的</div>
      </tabbar-title>
    </Tabbar>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Tabbar from '@/components/common/Tabbar'; 
import TabbarTitle from '@/components/common/TabbarTitle.vue'; 
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Tabbar,
    TabbarTitle,
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
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
<style lang="less" scoped></style>
