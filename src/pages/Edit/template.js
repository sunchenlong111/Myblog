import blog from '@/api/blog'

export default {
  data() {
    return {
      blogId: null,
      title: '',
      description: '',
      content: '',
      atIndex: false,
      titleLength: '',
      descriptionLength: '',
      contentLength: '',
      titleClass: '',
      descriptionClass: '',
      contentClass: ''
    }
  },
  computed: {
    tellmeTitleLength: function () {
      var length = this.title.length
      this.titleLength = length > 0 ? length + '/30' : '限30个字'
      this.judgeLength(parseInt(this.titleLength), 30, 'titleClass')
      return this.titleLength
    },
    tellmeDescriptionLength: function () {
      var length = this.description.length
      this.descriptionLength = length > 0 ? length + '/200' : '限200个字'
      this.judgeLength(parseInt(this.descriptionLength), 200, 'descriptionClass')
      return this.descriptionLength
    },
    tellContentLength: function () {
      var length = this.content.length
      this.contentLength = length > 0 ? length + '/10000' : '限10000个字'
      this.judgeLength(parseInt(this.contentLength), 30, 'contentClass')
      return this.contentLength
    }
  },
  created() {
    this.blogId = this.$route.params.blogId
    blog.getDetail({
      blogId: this.blogId
    }).then(res => {
      this.title = res.data.title
      this.description = res.data.description
      this.content = res.data.content
      this.atIndex = res.data.atIndex
    })
  },
  methods: {
    onEdit() {
        blog.updateBlog({
            blogId: this.blogId
          }, {
            title: this.title,
            content: this.content,
            description: this.description,
            atIndex: this.atIndex
          })
          .then(res => {
            this.$message.success(res.msg)
            this.$router.push({
              path: `/detail/${res.data.id}`
            })
          })
      },
    judgeLength(x, y, z) {
      if (x > y) {
        if (z === 'titleClass') {
          this.titleClass = 'active'
        } else if (z === 'descriptionClass') {
          this.descriptionClass = 'active'
        } else if (z === 'contentClass') {
          this.contentClass = 'active'
        }
      } else {
        if (z === 'titleClass') {
          this.titleClass = ''
        } else if (z === 'descriptionClass') {
          this.descriptionClass = ''
        } else if (z === 'contentClass') {
          this.contentClass = ''
        }
      }
    }
  }
}
