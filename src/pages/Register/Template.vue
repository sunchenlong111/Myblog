<template>
  <div id="login">
    <div class="container">
      <h4>用户名</h4>
    <input placeholder="用户名" v-model="username">
    <h4>密码</h4>
    <input  type="password" placeholder="密码" v-model="password" @keyup.enter="onRegister">
    <el-button @click="onRegister">立即注册</el-button>
    <p>已有账号？<router-link to="./login">立即登录</router-link></p>
    </div>
  </div>
</template>

<script src="./template.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./template.less">


</style>
