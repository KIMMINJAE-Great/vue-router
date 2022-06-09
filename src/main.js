import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
//App.vue에서 router를 써서 index.html의 div태그 안의 id="app"에서 사용됨

