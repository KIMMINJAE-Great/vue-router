
<template>

  <h1>{{ title }}</h1>

  <div id="loginBox">
    <form action="./main" class="login" ref="frmLogin">
      <fieldset id="loginFeildset">
        <legend>Login</legend>
        <div>
          <label for="id" class="title"> ID</label>
          <input type="text" ref="id" id="id" />
        </div>
        <div>
          <label for="pass" class="title">Password</label>
          <input type="password" ref="pass" id="pass" />
        </div>
        <button type="submit" @click.prevent="login">로그인</button>
        <button  @click.prevent="goJoin">회원가입</button>
        <button>취소</button>
      </fieldset>
    </form>
  </div>
</template>

<script>

import { ref } from "vue";
export default {
  name: "ToLogin",
  setup() {
    const title = ref("Login");
    
    const goJoin = function(){
      location.href="Join"
    }
    return { title, goJoin };
  },
  data(){
    return{
        
    }
  },
  methods:{
    login(){
      const frmLogin = this.$refs.frmLogin;
      const id = this.$refs.id;
      const pass = this.$refs.pass;

      if(id.value =="" || id==undefined){
          alert('ID(을)를 확인해주세요')
          return
        }
        if(pass.value =="" || pass==undefined){
          alert('Passwrod(을)를 확인해주세요')
          return
        }

        frmLogin.submit();
    }
  }
};
</script>

<style>

#loginBox{
padding-top: 10rem;
  padding-bottom: calc(10rem - 4.5rem);
  background: linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%), url("../assets/img/portfolio/fullsize/6.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
  height:800px;

}
.login{
   position:relative;
   left:50%;
  margin-left:-160px;
  color:antiquewhite;
  width:200px;
}
#loginFeildset{
 width:300px;
}

</style>