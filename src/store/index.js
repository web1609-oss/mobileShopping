import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store=new Vuex.Store({
  state: {
    token:'',
    cartarray:JSON.parse(localStorage.getItem('cartarray')) || []   //存储购物车商品的数组
  },
  mutations: {
    //设置vuex的token
    settoken(state,token){
      state.token=token;
    },
    //添加商品到购物车
    tocart(state,tag){
      let goods=state.cartarray.find(v=>v.title==tag.label)
      if(goods){
        goods.cartCount+=1
      }else{
        state.cartarray.push({title:tag.label,cartCount:1})
      }
    },
    //购物车商品数量加一
    cartadd(state,index){
       state.cartarray[index].cartCount++
    },
    //购物车商品数量减一
    cartremove(state,index){
      if(state.cartarray[index].cartCount){
        state.cartarray[index].cartCount--
      }else{
        if(confirm('确定从购物车移除商品吗？')){
           state.cartarray.splice(index,1)  
        }
      }
    },
    //清空购物车
    clearcart(state){
       state.cartarray=[]
    }
  },
  actions: {
  },
  getters:{    //相当于vue中的computed计算属性
     countsum:state=>{
       let num=0
       state.cartarray.forEach(v=>{
         num+=v.cartCount
       })
       return num
     }
  }, 
  modules: {
  }
})

//监听每次mutations的时候，都会进这个方法，然后我们可以做一些自己想做的处理
store.subscribe((mutations,state)=>{
   localStorage.setItem('cartarray',JSON.stringify(state.cartarray))
})
export default store
