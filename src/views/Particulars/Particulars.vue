<!-- 详情 -->
<template>
  <div class="">
    <Seek class="seek-bg">
      <div slot="left" @click="handleClickGo">&lt;</div>
      <div slot="center">商品详情</div>
    </Seek>
    <div :key="PartText.goods_id">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="v in PartText.pics" :key="v.pics_id">
          <img class="CarouselImg" v-lazy="v.pics_mid" />
        </van-swipe-item>
      </van-swipe>
      <div>￥{{ PartText.goods_price }}</div>
      <div>{{ PartText.goods_name }}</div>
      <div>图文详情</div>
      <div v-html="PartText.goods_introduce"></div>
    </div>
    <div class="PariBottom">
      <div class="service">联系客服</div>
      <div class="cart">购物车</div>
      <div class="addCart">
        <h4>加入购物车</h4>
      </div>
      <div class="purchase">
        <h4>立即购买</h4>  
      </div>
    </div>
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Seek from "components/content/seek/Seek";
import { getParticulars } from "@/axios/home";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Seek,
  },
  props: ["id"],
  data() {
    //这里存放数据
    return {
      PartText: [],
      PartImg: [],
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
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // console.log(this.id);
    let num = this.id.split("=")[1];
    getParticulars({
      goods_id: num,
    }).then((res) => {
      this.PartText = res.message;
    });
  },
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
.PariBottom {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  background: #fff;
  font-size: 14px;
  text-align: center;
  height: 44px;
  line-height: 44px;
  .service {
    flex: 2;
  }

  .cart {
    flex: 2;
  }

  .addCart {
    flex: 3;
  }

  .purchase {
    flex: 3;
  }
}
</style>
