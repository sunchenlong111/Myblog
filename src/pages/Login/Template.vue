<template>
  <div id="login">
    <div class="container">
      <h4>用户名</h4>
    <el-input></el-input>
    <h4>密码</h4>
    <el-input type="password"></el-input>
    <el-button>立即登录</el-button>
    <p>没有账号？<router-link to="./register">注册新用户</router-link></p>
    </div>
  </div>
</template>

<script src="./template.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" src="./template.less">
</style>
