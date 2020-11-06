<!-- 商品列表  -->
<template>
  <div class="GoodsSearch">
    <Seek class="Carousel_top">
      <div slot="left" @click="handleClickGo">&lt;</div>
      <div slot="center">商品列表</div>
    </Seek>

    <div class="CarText">
      <div @click="handleCarText">搜索</div>
    </div>

    <div class="GoodsList">
      <div v-for="v in goods" :key="v.add_time">
        <div class="GoodLeft">
          <img :src="v.goods_small_logo" alt="" />
        </div>
        <div class="GoodRight" @click="handlePar(v.goods_id)">
          <h3>{{ v.goods_name }}</h3>
          <span>￥{{ v.goods_price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Seek from "components/content/seek/Seek";
import { getGoodsSearch } from "@/axios/home";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Seek,
  },
  data() {
    //这里存放数据
    return {
      goods: [],
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
    handlePar(id){
      this.$router.push('Particulars/goods_id='+id);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    getGoodsSearch({
      query: decodeURIComponent(this.$route.query.query),
    }).then((res) => {
      this.goods = res.message.goods;
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
.Carousel_top {
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
.GoodsList {
  >div {
    display: flex;
    padding: 5px 0;
    border-bottom: 1px solid #ccc;
    .GoodLeft {
      flex: 1;
      display: flex;
      flex-direction: column;
      img {
        width: 100%;
      }
    }
    .GoodRight {
      flex: 3;
      display: flex;
      flex-direction: column;
      padding: 5px;
      h3{
        font-size: 14px;
        line-height: 14px;
        padding-bottom: 5px;
      }
      span{
        color: red;
      }
    }
  }
}
</style>
