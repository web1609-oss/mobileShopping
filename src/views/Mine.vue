<template>
   <div>
      <img class="headerimg" src="https://file.xdclass.net/video/%E5%AE%98%E7%BD%91%E8%BD%AE%E6%92%AD%E5%9B%BE/xcx.png"> 
      <ul>
          <li v-for="(item,val) in minearray" class="mineitem" @click="itemclick(item)" :key="val">
              <span class="minetitle">{{item.label}}</span>
              <i class="cubeic-arrow"></i>
          </li>
      </ul>
   </div>
</template>

<script>
   export default {
      data(){
          return {
             minearray:[
                 {label:'商品收藏'},
                 {label:'我的足迹'},
                 {label:'店铺收藏'},
                 {label:'我的订单'},
                 {label:'退出',type:'exit'}
             ]
          }
      },
      methods:{
          itemclick(item){
             if(item.type=='exit'){
                 this.$store.commit('settoken','')
                 localStorage.removeItem('token')
                 this.$router.push({path:'/login'})
             } 
          }
      }
   }
</script>

<style lang="stylus" scoped>
   .mineitem
      font-size 14px
      text-align left 
      height 50px
      line-height 50px
      padding-left 5%
      border-radius 1px solid #eee
      .minetitle
         display inline-block
         width 90%  
   .headerimg
      height 150px
      width  100%
</style>