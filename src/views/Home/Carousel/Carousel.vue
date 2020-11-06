<!-- 搜索页面  -->
<template>
  <div class="Carousel">
    <Seek class="Carousel_top">
      <div slot="left" @click="handleClickGo">&lt;</div>
      <div slot="center">搜索中心</div>
    </Seek>

    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @input="onSearch"
        @cancel="onCancel"
      />
    </form>
    <div class="CarTextBox">
      <div v-for="v in CarText" :key="v.goods_id" class="CarItem">
        {{ v.goods_name }}
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Seek from "components/content/seek/Seek";
import { getCarousle } from "@/axios/home.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Seek,
  },
  data() {
    //这里存放数据
    return {
      value: "",
      CarText: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // 返回上一级
    handleClickGo() {
      this.$router.go(-1);
    },
    debounce(fn, timeout) {
      let timeId = null;
      return function() {
        if (timeId) {
          clearTimeout(timeId);
          timeId = null;
        }
        timeId = setTimeout(fn, timeout);
      };
    },
    // 点击搜索
    onSearch(val) {
      getCarousle({
        query: val,
      }).then((res) => {
        this.CarText = res.message;
      });
    },
    // 取消
    onCancel() {},
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
.CarTextBox {
  .CarItem {
    font-size: 14px;
    height: 40px;
    padding: 10px;
    border-bottom: 1px solid #cccccc;
  }
}
</style>
