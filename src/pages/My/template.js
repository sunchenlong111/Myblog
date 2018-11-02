import blog from "@/api/blog";
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      blogs: [],
      page: 1,
      total: 0
    }
  },
  computed:{
    ...mapGetters(['user']),
   
  },
  created() {
    this.page = this.$route.query.page || 1
    blog.getBlogsByUserId(this.user.id, {
        page: this.page
      })
      .then(res => {
        console.log(res)
        this.page = res.page
        this.total = res.total
        this.blogs = res.data
        if (res.data.length > 0) {
          this.user = res.data[0].user
        }
      })
  },
  methods: {
    splitDate(dateStr) {
      let dateObj = typeof dateStr === 'object' ? dateStr : new Date(dateStr)
      return {
        date: dateObj.getDate(),
        month: dateObj.getMonth() + 1,
        year: dateObj.getFullYear()
      }
    },
    onDelete(blogId){
      console.log(blogId)
    },
    onPageChange(newPage) {
      blog.getBlogsByUserId(this.user.id, {
        page: newPage
      }).then(res => {
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        this.$router.push({
          path: "/my",
          query: {
            page: newPage
          }
        })
      })
    }
  }
}