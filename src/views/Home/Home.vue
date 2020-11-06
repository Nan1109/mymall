<!--  -->
<template>
  <div class="Home">
    <Seek class="seek-bg"><div slot="center">购物街</div></Seek>
    <!-- 搜索 -->
    <div class="CarText">
      <div @click="handleCarText">搜索</div>
    </div>
    <!-- 轮播图开始 -->
    <div class="lb">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="image in images" :key="image.goods_id">
          <img class="CarouselImg" v-lazy="image.image_src" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 轮播图结束 -->

    <!-- 列表开始 -->
    <HomeList></HomeList>
    <!-- 列表结束 -->

    <!-- 详情开始 -->
    <Details></Details>
    <!-- 详情结束 -->

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
import Seek from "components/content/seek/Seek";
import { getHomeFunc } from "@/axios/home";
import HomeList from "./HomeList/HomeList";
import Details from "./Details/Details";
import Tabbar from "@/components/common/Tabbar";
import TabbarTitle from "@/components/common/TabbarTitle.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Seek,
    HomeList,
    Details,
    Tabbar,
    TabbarTitle,
  },
  data() {
    //这里存放数据
    return {
      images: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleCarText() {
      this.$router.push("Carousel");
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // console.log(11);
    getHomeFunc().then((res) => {
      this.images = res.message;
    });
  },
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
.CarouselImg {
  width: 100vw;
}
.lb{
  height: 170px;
}
</style>
