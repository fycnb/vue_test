<template>
  <el-container class="app-wrapper">
    <el-header height="50px" class="app-header">
      <img src="@/assets/java_logo.jpg" alt="" class="app-logo">
    </el-header>
    <el-container>
      <el-aside width="200px" class="app-aside">
        <el-menu
          :default-active="defaultActive"
          :unique-opened="true"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location" />
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>

          <el-menu-item index="2">
            <i class="el-icon-menu" />
            <span slot="title">导航二</span>
          </el-menu-item>

          <el-menu-item index="3">
            <i class="el-icon-setting" />
            <span slot="title">导航三</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="app-main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      defaultActive: '1-1'
    }
  },
  methods: {
    handleOpen() {},
    handleClose() {}
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  height: 100%;
  width: 100%;
}
.app-header {
  background: linear-gradient(70deg, #409EFF, #9198e5);
}
.app-aside {
  background-color: #c8ced6;
}
.app-main {
}
.app-logo{
  max-height: 100%;
}
</style>
