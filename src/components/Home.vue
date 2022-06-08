<template>
  <h1>{{title}}</h1>
  
    <div id="homebox">
    
     <p id="homepage">Wellcome to Page</p>
    </div>
   
</template>

<script>
import { ref } from 'vue'
export default {
  name : 'ToHome',

  setup(){
    const title = ref('Home')
    
    return{title}
  },
  
}
</script>

<style>
#homebox{
  height:800px;

  padding-top: 10rem;
  padding-bottom: calc(10rem - 4.5rem);
  background: linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%), url("../assets/img/bg-masthead.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
} 
#homepage{
  font-size: 100px;
  color:antiquewhite;
}
  
</style>