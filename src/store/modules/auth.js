import auth from '@/api/auth'


const state ={
  user:null,
  isLogin:false
}

const getters ={
  user: state => state.user,
  isLogin: state => state.isLogin
}

const mutations = {
  setUser(state, playload){
    state.user = playload.user
  },
  setLogin(state,playload){
    state.isLogin = playload.isLogin
  }
}

const actions = {
  login({commit},{username,password}){//{commit} 是使用actions的默认参数
    return auth.login({username,password})//传回一个promise对象
      .then(res => {
        commit('setUser',{user: res.data})
        commit('setLogin',{isLogin:true})
      })
  },
  async register({commit},{username,password}){
    let res = await auth.register({username,password})
    commit('setUser',{user: res.data})
    commit('setLogin',{isLogin:true})
    return res.data
  },

  async logout({commit}){
    await auth.logout()
    commit('setUser',{user:null})
    commit('setLogin',false)
  },

  async checkLogin({commit,state}){
    if(state.isLogin) return true
    let res = await auth.getInfo()
    commit('setLogin',{isLogin:res.isLogin})
    if(!res.isLogin) return false
    commit('setUser',{user:res.data})//是登陆状态的话就更新user
    return true 
  }//有点问题好像

}



export default {
  state,
  getters,
  mutations,
  actions
}