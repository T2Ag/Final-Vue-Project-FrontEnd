<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="containerTopBar">
    <div class="topBar"> 

      <div class="title">
        <H1>HackDonals</H1>      
      </div>

      <div class="navigation">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/customers">Customers</RouterLink>
        <RouterLink to="/orders">Order Number</RouterLink>
        <RouterLink to="/menuitems">Menu</RouterLink>
        <RouterLink to="/orderdetails">Orders</RouterLink>

      </div>

    </div>



      <div class="routerContainer">
        <RouterView />            
      </div>
       


</div>


</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
  body{
    margin: 0;
  }

  .containerTopBar{
    display: flex;
    flex-direction: column;
  }

  .topBar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(21, 21, 24);
    position: left;
    width: 100vw;
    position: fixed;
    top: 0; 
    z-index: 1; 
  }

  .title{
    font-family: 'Lobster';
    padding: 15px 13px;
    justify-content: center;
  }

  .title h1{
    margin: 0;
    font-size: 25px;
    color: rgb(255, 255, 255);
  }

  .navigation{
    display: flex;
    margin: 0px 20px;
  }

  .navigation a{
    margin: 0px 10px;
    text-decoration: none;
    letter-spacing: -.5px;
    padding: 5px 25px;
    color: rgb(255, 255, 255);
    
    transition: .3s ease;
  }
  .navigation a:hover{
    border-radius: 5px;
    color: rgb(22, 18, 18);
    background-color:  rgb(236, 251, 255);
  }
  .navigation a.router-link-active{
    color: rgb(22, 18, 18);
    background-color:  rgb(236, 251, 255);
    padding: 5px 25px;
    border-radius: 5px;
  }

  .content{
    height: 92.55vh;
  }
  
  .routerContainer {
    margin-top: 3.7rem;
  }

</style>
