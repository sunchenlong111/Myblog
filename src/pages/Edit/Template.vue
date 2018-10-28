<template>
    <div id="edit">
    <h1>编辑文章</h1>
    <h3>文章标题</h3>
    <el-input></el-input>
    <p>限30个字</p>
     <h3>内容简介</h3>
    <el-input type="textarea" rows=3></el-input>
    <p>限200个字</p>
     <h3>文章内容</h3>
    <el-input type="textarea" rows=10></el-input>
    <p>限10000个字</p>
    <el-button>保存</el-button>
  </div>
</template>

<script src="./template.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" src="./template.less">

</style>
