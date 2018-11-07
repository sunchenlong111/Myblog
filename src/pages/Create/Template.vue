<template>
  <div id="edit">
    <h1>创建文章</h1>
    <h3>文章标题</h3>
    <el-input v-model='title' ></el-input>
    <p :class=" titleClass">{{tellmeTitleLength}}</p>
    <h3>内容简介</h3>
    <el-input type="textarea" 
      :autosize="{ minRows: 2, maxRows: 4}"
      v-model='description'
    >
    </el-input>
    <p :class=" descriptionClass" >{{tellmeDescriptionLength}}</p>
     <h3>文章内容</h3>
    <el-input type="textarea" 
    :autosize="{ minRows: 8, maxRows: 20}"
    v-model="content"
   ></el-input>
    <p :class="contentClass">{{tellContentLength}}</p>

    <p class='onIndex'>
      <label for="switch">是否展示到首页</label>
      <el-switch
        id='switch'
        v-model="atIndex"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </el-switch>
    </p>

    <el-button @click="onCreate">立即创建</el-button>
  </div>
 
</template>

<script src="./template.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less"  src="./template.less">
</style>
