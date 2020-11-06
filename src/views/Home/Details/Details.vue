<!-- 图片列表  -->
<template>
  <div class="HomeDetails">
    <div v-for="(v, i) in HomeList" :key="i">
      <div class="floor_title">
        <img :src="v.floor_title.image_src" :alt="v.floor_title.name" />
      </div>
      <div class="product_list clearfix">
        <div v-for="(val, idx) in v.product_list" :key="idx">
          <img
            :src="val.image_src"
            :alt="val.name"
            @click="handleImgClick(val.navigator_url)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { getHomeDetails } from "@/axios/home";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      HomeList: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleImgClick(val) {
      let arr = [];
      arr = val.split("=")[1];
      this.$router.push("GoodsSearch?query=" + arr);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    getHomeDetails().then((res) => {
      this.HomeList = res.message;
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
.HomeDetails {
  width: 100vw;
  overflow: hidden;
  margin-bottom: 44px;
  .floor_title {
    width: 100vw;
    height: 40px;
    margin-top: 20px;
    img {
      height: 100%;
    }
  }
  .product_list {
    background: #ddd;
    div {
      float: left;
      width: 33.33%;
      overflow: hidden;
      img {
        width: 100%;
        // height: 100%;
      }
    }
    :nth-child(3),
    :nth-child(4),
    :nth-child(5),
    :nth-child(2) {
      height: 104px;
    }
  }
}
</style>
