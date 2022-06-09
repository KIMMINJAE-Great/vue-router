<template>
 <div id="nav">
   
  <ul>
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/join">Join</router-link>
    </li>
    <li>
      <router-link to="/login">Login</router-link>
    </li>
    <li>
      <router-link to="/list">List</router-link>
    </li>
    <li>
      <router-link to="/about">About</router-link>
    </li>
    <li>
      <router-link to="/portfolio">Portfolio</router-link>
    </li>
    <li>
      <router-link to="/bootstrap">Bootstrap</router-link>
    </li>
  </ul>
</div>
<router-view/>
<!-- Footer ~~~-->
</template>

<script>
//import Header from~~
// components:{header},
</script>

<style>
a{
 text-decoration: none;
 font-size:20px;
 font-family: Times, "Times New Roman", Georgia, serif;
 font-weight: bold;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul{
  list-style:none,
}
li{
  display:inline-block; width:150px;
} 

#nav{
  background:rgba(232, 218, 189, 0.613);
  line-height: 50px;
  border-radius: 50px;
  box-shadow: 1px 1px 10px rgb(235, 190, 190) , -1px -1px 10px rgb(239, 205, 205);
  
}
</style>