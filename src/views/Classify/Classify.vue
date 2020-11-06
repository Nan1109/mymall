<!--  -->
<template>
  <div class="Classify">
    <Seek class="seek-bg"><div slot="center">商品分类</div></Seek>
    <!-- 搜索 -->
    <div class="CarText">
      <div @click="handleCarText">搜索</div>
    </div>
    <!-- 分类 -->
    <div class="classText">
      <div class="classTextLeft">
          <h4
            v-for="v in ClassifyText"
            :key="v.cat_id"
            :class="{ active: idx == v.cat_id }"
            @click="handleText(v.children, v.cat_id)"
          >
            {{ v.cat_name }}
          </h4>
      </div>

      <div class="classTextRight">
        <ClassifyText :sonText="sonText"></ClassifyText>
      </div>
    </div>

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
import Tabbar from "@/components/common/Tabbar";
import TabbarTitle from "@/components/common/TabbarTitle.vue";
import Seek from "components/content/seek/Seek";
import { getClassify } from "@/axios/classify";
import ClassifyText from "./ClassifyText";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Tabbar,
    TabbarTitle,
    Seek,
    ClassifyText,
  },
  data() {
    //这里存放数据
    return {
      ClassifyText: [],
      sonText: [],
      idx: 1,
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
    handleText(sonText, idx) {
      this.sonText = sonText;
      this.idx = idx;
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // 获取商品分类列表
    getClassify().then((res) => {
      this.ClassifyText = res.message;
      // 获取商品分类列表第一个列表
      this.sonText = res.message[0].children;
      this.idx = res.message[0].cat_id;
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
.classText {
  display: flex;
  height: calc(100vh - 79px - 44px);
  .classTextLeft {
    flex: 1;
    background: #f3f3f3;
    overflow-y: scroll;
    h4 {
      font-size: 18px;
      height: 40px;
      line-height: 40px;
      text-align: center;
    }
  }
  .classTextRight {
    flex: 3;
    overflow-y: scroll;
  }
}
.active {
  color: red;
}
</style>
