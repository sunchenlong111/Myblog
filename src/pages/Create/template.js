import blog from '@/api/blog'


export default {
  data(){
    return {
      title:'',
      description:'',
      content:'',
      atIndex: false,
      titleLength:'',
      descriptionLength:'',
      contentLength:'',
      titleClass:'',
      descriptionClass:'',
      contentClass:''
    }
  },
  computed: {
    tellmeTitleLength: function(){
      var length = this.title.length
      this.titleLength = length > 0 ? length+'/30' : '限30个字'
      this.judgeLength(parseInt(this.titleLength),30,'titleClass')
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
      this.judgeLength(parseInt(this.contentLength), 30,'contentClass')
      return this.contentLength
    }
      
  },
  methods:{
    onCreate(){
      if(this.titleLength<=30&&this.descriptionLength<=200&&this.contentLength<=10000){
         blog.createBlog({title:this.title,content:this.content,description:this.description,atIndex:this.atIndex})
          .then(res =>{
            this.$message.success(res.msg)
            this.$router.push({path:`/detail/${res.data.id}`})
          })
      }
    },
    judgeLength(x,y,z){
      if(x>y){
        if(z==='titleClass'){
          this.titleClass = 'active'
        }else if(z==='descriptionClass'){
          this.descriptionClass = 'active'
        }else if(z==='contentClass'){
          this.contentClass = 'active'
        }
      }else{
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