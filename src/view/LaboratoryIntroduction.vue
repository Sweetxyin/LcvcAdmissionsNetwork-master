<template>
  <div>

    <p align="center"><img src="../assets/synopsis/实训室简介b.png" ></p>

    <div class="nv">
    <marquee direction=left height=400 scrollamount=8  scrolldelay=60 width="100%">
      <img class="nvv" border=0 src="../assets/synopsis/实训环境a.png" >
      <img border=0 src="../assets/synopsis/750VR创意开发中心.png" >
      <img  border=0 src="../assets/synopsis/现代学徒制试点实训基地a.png" >
    </marquee>
    </div>

    </div>

</template>

<script>
    import slider from 'vue-concise-slider'// 引入slider组件
    export default {
        name: "LaboratoryIntroduction",

    }

</script>
<style>
  .nv img{
    margin-top: 20px;
    height:40vh ;
  }

</style>
