<template>
  <header :class="{login:isLogin,'no-login': !isLogin}">
    <template v-if="!isLogin">
      <h1>让我们开始分享吧</h1>
      <p>博客，让思想绽放出火花</p>
      <div class="buttons">
        <el-button><router-link to="./login">立即登录</router-link></el-button>
        <el-button><router-link to="./register">立即注册</router-link></el-button>
      </div>  
    </template>
    <template v-if="isLogin">
    <h1>让我们开始分享吧</h1>
    <i class="edit el-icon-edit"></i>
    <img src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt="">
    </template>    
  </header>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false
    };
  }
};
</script>


<style lang="less">
@import "../assets/base.less";

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
    font-size: 30px;
    color: #fff;
    margin-right:20px;
}

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  a{
    color:@themeColor;
    text-decoration: none;
  }
}
</style>

