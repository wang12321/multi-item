<template>
  <div style="padding: 15px">
    <AppHeader />
    <div style="padding: 40px" />
    <div v-for="item in moduleList" :key="item.id" class="module-box">

      <div class="module-top">
        <span class="module-title">{{ item.title }}</span>
        <img class="module-img" src="@/assets/driving-behavior-img/icon_line_qa.png" alt="">
      </div>
      <div v-if="item.id === 'driving-data'">
      </div>
      <div v-if="item.id === 'driving-habit'">
      </div>

    </div>

  </div>
</template>

<script>
import AppHeader from '../common/AppHeader'

export default {
  name: 'Home',
  components: {
    AppHeader
  },
  data() {
    return {
      moduleList: [
        {
          title: '驾驶基本数据',
          id: 'driving-data'
        },
        {
          title: '车主驾驶习惯分析',
          id: 'driving-habit'
        }]
    }
  }
}
</script>
<style lang="scss" scoped>
.module-box {
  width: 100%;
  //height: 50px;
  //line-height: 50px;

  .module-top {
    //background: red;
    position: relative;
    padding: 16px 0;

    .module-title {
      display: inline-block;
      width: 245px;
      height: 28px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      color: rgba(0,0,0,.85);
    }

    .module-img {
      position: absolute;
      top: 20px;
      right: 0;
      width: 20px;
      height: 20px;
    }
  }

}
</style>
