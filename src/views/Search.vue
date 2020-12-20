<template>
   <div class="search">
       <cube-input class="ipt" v-model="value" placeholder="请输入关键词..."></cube-input>
       <p class="history">搜索历史</p>
       <p>小米</p>
       <p>华为</p>
       <p>荣耀</p>
       <p class="history">热门搜索</p>
       <p>1. 华为mate40</p>
       <p>2. iPhone12 pro</p>
       <p>3. iPhone SE</p>
       <p>4. 华为P40 Pro Plus</p>
       <p>5. 小米10</p>
   </div>
</template>

<script>
   export default {
      data(){
          return {
              value:''
          }
      }
   }
</script>

<style lang="stylus" scoped>
   .search .ipt
      margin-top 5px
      border-radius 50px
   .search p
      margin-top 20px
      text-align left 
      font-size 16px
      color #666
      padding-bottom 5px     
   .search .history
      color #ccc
      border-bottom 1px solid #eee
</style>