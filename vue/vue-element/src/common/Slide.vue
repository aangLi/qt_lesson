<template>
  <div class="sidebar">
    <el-menu
      default-active="2"
      background-color="#eeeeee"
      class="el-menu-vertical-demo"
      router
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>首页</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">
            <i class="el-icon-s-home"></i>
            <span>首页</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/main/user-manage">
            <i class="el-icon-s-home"></i>
            <span>用户列表</span>
          </el-menu-item>
          <el-menu-item index="2-2">
            <i class="el-icon-s-home"></i>
            <span>用户信息</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
</script>
<style scoped>
.sidebar {
  display: block;
  position: absolute;
  width: 200px;
  left: 0;
  top: 70px;
}
</style>
