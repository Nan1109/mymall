<!--  -->
<template>
  <div class="CsTextBox">
    <div class="CsText" v-for="(v, i) in sonText" :key="i">
      <h3>/ {{ v.cat_name }} /</h3>
      <div class="CsImgBox">
        <div class="CsImg" v-for="val in v.children" :key="val.cat_id">
          <img :src="val.cat_icon" alt="" @click="handleParticulars(val.cat_id)" />
          <h6>{{ val.cat_name }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: ["sonText"],
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleParticulars(id){
      this.$router.push('GoodsSearch/cat='+id);
    }
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
.CsTextBox {
  .CsText {
    h3 {
      text-align: center;
      font-size: 16px;
      height: 30px;
      line-height: 30px;
      padding: 10px 0;
    }
    .CsImgBox{
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      .CsImg {
        width: 33.33%;
        text-align: center;
        img {
          width: 80%;
          text-align: center;
        }
        h6{
          font-size: 14px;
        }
      }
    }
  }
}
</style>
