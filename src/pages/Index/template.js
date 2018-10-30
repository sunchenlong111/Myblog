
import blog from '@/api/blog'


export default {
 data(){
   return {
     blogs:[],
     total:0,
     page:1,
     localpage:1,
   }
 },

 created(){
  this.page = parseInt(this.$route.query.page)||1
  this.localpage = this.page
  this.onPageChange(this.localpage)
  blog.getIndexBlogs({page:this.page}).then(res => {
    this.blogs = res.data
    this.total = res.total
    this.page = res.page
  })
 },

 mounted(){
    
 },

 methods:{
  onPageChange(newPage){
    console.log('新页面'+newPage)
    blog.getIndexBlogs({page:newPage}).then(res=>{
      this.blogs = res.data
      this.total = res.total
      this.page = res.page
      this.$router.push({path:'/',query:{page:newPage}})
    })
  }
 }
} 
