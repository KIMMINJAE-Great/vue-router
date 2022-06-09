<template>
  <h1>{{title}}</h1>
  
    <div id="joinBox">
      <form action="./main" ref="frm" class="join">
    <fieldset id="joinFieldset">
      <legend>Join</legend>
        <div>
        <label for="id" class="title"> ID</label>
        <input type="text" ref="id" id="id" name="id"/>
      </div>
      <div>
        <label for="name" class="title">Name</label>
        <input type="text" ref="name" id="name" name="name"/>
      </div>
      <div>
        <label for="pass" class="title">Password</label>
        <input type="password" ref="pass" id="pass" name="pass"/>
      </div>
      <div>
        <label for="repass" class="title">Re Password</label>
        <input type="password" ref="repass" id="repass"  />
      </div>
      <div>
        <label for="" class="title">Mobile</label>
        <select v-model="selected" id="mobile" ref="m1">
          <option v-for="(item, i) in mobileList" :value="item" :key="i">
            {{ item }}
          </option>
        </select>
        - <input type="text" class="m" id="mobile1" ref="m2" /> -
        <input type="text" id="mobile2" ref="m3" class="m" />
        <input type="hidden" name="mobile" v-model="mobile" ref="mobile" />
      </div>
      <div>
        <label class="title"></label
        ><!-- 공백-->
        <button ref="btnJoin"  @click.prevent="join" class="btn-margin">
          가입
        </button>
        <button type="reset" ref="btnCancel">취소</button>
      </div>
    </fieldset>
    </form>
    </div>
 
</template>

<script>
import {ref} from 'vue'
export default{
  name : 'ToJoin',
  setup(){
    const title = ref('Join')   
    
    const mobile= ref('선택')
    const mobileList= ref(["010", "011", "016"])
    
    const frm = ref(null)
    const id = ref(null)
    const name = ref(null)
    const pass = ref(null)
    const repass = ref(null)
    const m1 = ref(null)
    const m2 = ref(null)
    const m3 = ref(null)
    

  const join = function(){
      if(id.value.value =="" || id.value.value==undefined){
        console.log(id.value);
        console.log(id.value.value);
          alert('ID(을)를 확인해주세요')
          
          return
        }
        if(name.value.value =="" || name.value.value==undefined){
          alert('Name(을)를 확인해주세요')
          console.log(id.value.value);
          return
        }
        if(pass.value.value =="" || pass.value.value==undefined){
          alert('Password(을)를 확인해주세요')
          return
        }
        if(pass.value.value !=repass.value.value ){
          alert('비밀번호(을)를 재확인해주세요')
          return
        }
        if(m1.value.value =="" || m1.value.value==undefined){
          alert('전화번호 010(을)를 확인해주세요')
          return
        }
        if(m2.value.value =="" || m2.value.value==undefined){
          alert('전화번호 앞자리 (을)를 확인해주세요')
          return
        }
        if(m3.value.value =="" || m3.value.value==undefined){
          alert('전화번호 뒷자리 (을)를 확인해주세요')
          return
        }
        if(mobile.value.value =="" || mobile.value.value==undefined){
          alert('Mobile(을)를 확인해주세요')
          return
        }
    mobile.value.value = m1.value.value+m2.value.value+m3.value.value
   frm.value.submit()
  }
    
   return{title, frm,id, pass, repass, name, m1, m2, m3, mobile, join, mobileList,}
  }
   
  }

</script>
<!-- <script>

import { ref } from 'vue'
export default {
  name : 'ToJoin',
  
  setup(){
    const title = ref('Join')   
    return{title,}

  },
  data(){
  return{
    mobile: "선택",
    mobileList: ["010", "011", "016"],
  }
  },
 methods:{
   join() {
      const frm = this.$refs.frm;
      const id = this.$refs.id;
      const name = this.$refs.name;
      const pass = this.$refs.pass;
      const repass = this.$refs.repass;
      const m1 = this.$refs.m1;
      const m2 = this.$refs.m2;
      const m3 = this.$refs.m3;
      const mobile = this.$refs.mobile;
      
        if(id.value =="" || id==undefined){
          alert('ID(을)를 확인해주세요')
          return
        }
        if(name.value =="" || name==undefined){
          alert('Name(을)를 확인해주세요')
          return
        }
        if(pass.value =="" || pass==undefined){
          alert('Password(을)를 확인해주세요')
          return
        }
        if(pass.value !=repass.value ){
          alert('비밀번호(을)를 재확인해주세요')
          return
        }
        if(m1.value =="" || m1==undefined){
          alert('전화번호 010(을)를 확인해주세요')
          return
        }
        if(m2.value =="" || m2==undefined){
          alert('전화번호 앞자리 (을)를 확인해주세요')
          return
        }
        if(m3.value =="" || m3==undefined){
          alert('전화번호 뒷자리 (을)를 확인해주세요')
          return
        }
        if(mobile.value =="" || mobile==undefined){
          alert('Mobile(을)를 확인해주세요')
          return
        }

        

   
    frm.submit();
   
   },
  
 }
}
</script> -->

<style>
#joinBox{
  padding-top: 10rem;
  padding-bottom: calc(10rem - 4.5rem);
  background: linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%), url("../assets/img/portfolio/fullsize/4.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
  height:800px;
  
  
}

.join{
  position:relative;
  left:50%;
  margin-left:-200px;
  color:antiquewhite;
  width:500px;
}
#joinFieldset{
  width:350px;  
  
}
.title {
  display: inline-block;
  width: 100px;
  margin: 5px;
  text-align: left;
} /*정렬 방법*/
fieldset div {
  width: 100%;
  text-align: left;
}
.m {
  width: 50px;
}
.btn-margin {
  margin: 30px 20px;
}
 </style>