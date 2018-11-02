<template>
  <div id="my">
  
      <section class="section1">
        <img :src="user.avatar" :alt="user.username" class="avatar">
        <h3>{{user.username}}</h3>
      </section>
      <section class='section2' v-for="blog in blogs" :key="blog.id" > 
        <router-link class="item" :to="`/detail/${blog.id}`">
          <div class="data">
            <span class="day">{{splitDate(blog.createdAt).date}}</span>
            <span class="month">{{splitDate(blog.createdAt).month}}</span>
            <span class="year">{{splitDate(blog.createdAt).year}}</span>
          </div>
          <div class="text">
            <h3>{{blog.title}}</h3>
            <p>{{blog.description}}</p>
          </div> 
        </router-link>
      </section>
      <section class="pagination">
        <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :current-page.sync="page"
      @current-change="onPageChange"
      >
      </el-pagination>
      </section>
 
  </div>
</template>

<script src="./template.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" src="./template.less">
</style>
