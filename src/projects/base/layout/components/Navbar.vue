<template>
  <div class="navbar" :style="{'background':navbarBackground }">
    <div class="navbarLogo_rl">
      <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
      <div class="right-menu">
        <template v-if="device!=='mobile'">
          <screenfull id="screenfull" class="right-menu-item hover-effect" :style="{'color':navbarColor }" />
        </template>
        <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
          <div class="avatar-wrapper" :style="{'color':navbarColor }">
            <span>{{ name }}</span>
            <i class="el-icon-caret-bottom" />
          </div>
          <el-dropdown-menu slot="dropdown" class="user-dropdown">
            <el-dropdown-item @click.native="logout">
              <span style="display: block;">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'
import Screenfull from '@/components/Screenfull'
import variables from '@base/styles/variables.scss'

export default {
  components: {
    Hamburger,
    Screenfull
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'name',
      'device'
    ]),
    navbarBackground() {
      return variables.navbarBackground
    },
    navbarColor() {
      return variables.navbarColor
    }
  },
  methods: {
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
    width: 186px;
    height: 22px;
    margin: 21px 48px 17px 48px;
  }
}

.navbar {
  position: relative;
  height: 50px;
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
    height: 50px;
    line-height: 50px;

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
          top: 20px;
          right: -20px;
          font-size: 12px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
