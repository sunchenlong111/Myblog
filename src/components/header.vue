<template>
  <header :class="{login:isLogin,'no-login': !isLogin}">
    <template v-if="!isLogin">
      <h1>让我们开始分享吧</h1>
      <p>博客，让思想绽放出火花</p>
      <div class="buttons">
        <router-link to="./login"><el-button>立即登录</el-button></router-link>
        <router-link to="./register"><el-button>立即注册</el-button></router-link>
        <!-- 最好是路由里面包按钮 -->
      </div>  
    </template>
    <template v-if="isLogin">
    <h1>让我们开始分享吧</h1>
    <i class="edit el-icon-edit"></i>
    <div class="user">
      <img :src="user.avatar" :alt="user.username" :title="user.username">
      <ul>
        <li><router-link to="/my">我的</router-link></li>
        <li><a href="#" @click="onLogout">注销</a></li>
      </ul>
    </div>
    
    </template>    
  </header>
</template>

<script>

import auth from '@/api/auth'
window.auth = auth

import { mapGetters,mapActions } from "vuex";
export default {
  data() {
    return {
    }
  },
  computed:{
    ...mapGetters([
      'isLogin',
      'user'
    ])
  },
  created(){
    this.checkLogin().then().catch()
  },
  
  methods:{
    ...mapActions([
      'checkLogin',
      'logout'
    ]),//这句话一写就表示checkLogin是当前组件的方法了
    onLogout(){
      this.logout()
    }
  }
}
</script>


<style lang="less">
@import "../assets/base.less";
@import "../assets/common.less";

header.no-login {
  padding: 0 12% 30px 12%;
  background: @bgColor;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 30px;
    color: #fff;
    margin: 60px 0 0 0;
  }
  p {
    margin: 15px 0 0 0;
    color: #fff;
  }
  .el-button {
    margin: 15px 5px 0;
  }
   a{
      color:@themeColor;
      text-decoration: none;
    }
}

header.login {
 
  background: @bgColor;
  display: flex;
  align-items: center;
  
  h1 {
    font-size: 30px;
    color: #fff;
    flex:1;
  }

  .edit{
    font-size: 40px;
    color: #fff;
    margin-right:20px;
}

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  a{
    color:@themeColor;
    text-decoration: none;
  }


  .user{
    position: relative;
    ul{
      display: none;
      position: absolute;
      right:0;
      list-style: none;
      border: 1px solid #eaeaea;
      margin:0;
      padding:0;
      background-color: #fff;
      a{
        text-decoration: none;
        color:#333;
        font-size: 12px;
        display: block;
        padding:5px 10px;
        &:hover{
          background-color: #eaeaea;
        }
      }
    }
  }

  &:hover ul{
    display: block;
  }
}
</style>

