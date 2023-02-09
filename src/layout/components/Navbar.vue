<template>
  <div class="navbar" :style="{'background':navbarBackground }">
    <div class="navbarLogo">
      <div class="logo-img">FF 多项目集合</div>
      <!--      <img class="logo-img" src="@/assets/images/logo.png" alt="">-->
      <div class="right-menu">

        <template v-if="device1!=='mobile'">
          <div class="menu">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item v-for="item in systemList" :key="item.systemId" class="el-menu-item" :index="item.systemId">{{ item.title }}</el-menu-item>
            </el-menu>
          </div>
        </template>
        <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
          <div class="avatar-wrapper" :style="{'color':navbarColor }">
            <div class="avatar-img">
              <img class="avatar" src="" alt="">
            </div>
            <span class="user-name">FF </span>
            <i class="el-icon-caret-bottom" />
          </div>
<!--          <el-dropdown-menu slot="dropdown" class="user-dropdown">-->
            <!--            <el-dropdown-item @click.native="logout">-->
            <!--              <span style="display: block;width: 60px;text-align: center">退出登录</span>-->
            <!--            </el-dropdown-item>-->

<!--          </el-dropdown-menu>-->
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import variables from '@/styles/variables.scss'
import { systemList } from '../../../config/projectsList'
import { setProjectItem, getProjectItem } from '@/utils/auth'

export default {
  data() {
    return {
      activeIndex: getProjectItem().systemId || 'A'
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'name',
      'device1',
      'avatar'
    ]),

    systemList() {
      return systemList
    },

    navbarBackground() {
      return variables.navbarBackground
    },
    navbarColor() {
      return variables.navbarColor
    }
  },
  methods: {
    handleSelect(e) {
      console.log(e, this.activeIndex)
      setProjectItem(this.systemList.filter(item => item.systemId === e)[0])
      window.location.reload()
    },
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  position: absolute;
  width: 210px;
}

.menu {
  position: absolute;
  left: 210px;
  overflow-x: auto;
}

.sidebar-title {
  display: inline-block;
  padding: 0 10px;
  margin: 0;
  font-weight: 600;
  line-height: 60px;
  vertical-align: middle;
}

.sidebar-title-logo {
  font-size: 20px;
  color: #386df8;
}

.sidebar-title-text {
  font-size: 18px;
  color: #576b95;
}

.select {

  ::v-deep .el-input--suffix .el-input__inner {
    height: 33px;
    padding-right: 30px;
    line-height: 33px;
  }
}

.navbarLogo {
  padding-left: $sideBarWidth;

  .logo-img {
    position: absolute;
    width: 186px;
    height: 22px;
    margin: 21px 48px 17px 48px;
  }
}

.navbar {
  position: relative;
  height: 60px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    float: left;
    height: 100%;
    line-height: 46px;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    //height: 100%;
    height: 60px;
    line-height: 60px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      height: 100%;
      padding: 0 8px;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;
      //touch-action: none;

      .avatar-wrapper {
        position: relative;
        //margin-top: 5px;
        //margin-bottom: 5px;

        .user-name {
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          color: rgba(0,0,0,.45);
          text-shadow: 0 2px 8px rgba(90,117,146,.05);
        }

        .avatar-img {
          display: inline-block;
          width: 40px;
          height: 40px;
          margin-top: 10px;
          margin-right: 10px;
          overflow: hidden;
          vertical-align: top;
          border: 2px solid #fff;
          border-radius: 20px;
          box-shadow: 0 2px 8px 0 rgba(90,117,146,.05), 0 4px 4px 0 rgba(87,107,149,.1);

          .avatar {
            width: 40px;
          }
        }

        i {
          margin-top: 0;
        }

        .user-avatar {
          width: 40px;
          height: 40px;
          cursor: pointer;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          position: absolute;
          top: 25px;
          right: -20px;
          font-size: 12px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
