import{n as c,j as e}from"./index-X4kEHME8.js";var i={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"ryanpro",BASE_URL:"/vue_practise_week7/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:s,VITE_APP_PATH:o}=i,d=c("counter",{state:()=>({carts:[],final_total:0,total:0}),actions:{getCart(){e.get(`${s}/api/${o}/cart`).then(t=>{this.carts=t.data.data.carts,this.total=t.data.data.total,this.final_total=t.data.data.final_total}).catch(t=>{alert(t.response.data.message)})},addToCart(t){const r={product_id:t,qty:1};e.post(`${s}/api/${o}/cart`,{data:r}).then(a=>{alert(a.data.message),this.getCart()}).catch(a=>{alert(a.response.data.message)})}}});export{d as c};
