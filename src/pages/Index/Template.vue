<template>
  <div id="index">
    <section class="blog-posts">
      <router-link  class="item"  
                    v-for="blog in blogs" 
                    v-bind:key="blog.id" 
                    :to="`/detail/${blog.id}`"
                    >
        <figure class="avatar">
          <img :src="blog.user.avatar" :alt="blog.user.username">
          <figcaption>{{blog.user.username}}</figcaption>  
        </figure>
        <h3>{{blog.title}}<span>{{blog.createdAt}}</span></h3>
        <p>{{blog.description}}</p> 
      </router-link>
    </section>
 
      <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :current-page.sync = "localpage"
      @current-change="onPageChange"
      >
    </el-pagination>

   
  </div>
</template>

<script src="./template.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" src="./template.less">
</style>
