import{_ as v,a as g,j as c,r as l,o as d,c as f,b as s,d as a,w as o,l as b,q as k,g as T,F as M,e as n}from"./index-X4kEHME8.js";import{u as V}from"./toastMessage-THDGjaAh.js";import{T as x}from"./ToastMessages-SBhuwpmJ.js";var P={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"ryanpro",BASE_URL:"/vue_practise_week7/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:_}=P,R={data(){return{products:[],tempProduct:{imagesUrl:[]},success:!1}},components:{ToastMessages:x},methods:{...g(V,["addMessage"]),checkLogin(){c.post(`${_}/api/user/check`).then(e=>{console.log(e.data.success),this.addMessage({title:"登入成功",content:e.data.message,style:"success"}),this.success=!0}).catch(e=>{console.log(e.response.data.message),this.$router.push("/login")})},logout(){c.post(`${_}/logout`).then(()=>{this.$router.push("/login")}).catch(e=>{console.error(e.response.data.message)})}},mounted(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");c.defaults.headers.common.Authorization=e,this.checkLogin()}},$={class:"navbar navbar-expand-lg bg-body-tertiary"},w={class:"container-fluid"},A=s("a",{class:"navbar-brand",href:"#"},"燈泡市集",-1),E=s("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarMarkup","aria-controls":"navbarMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1),L={class:"collapse navbar-collapse",id:"navbarMarkup"},y={class:"navbar-nav me-auto mb-2 mb-lg-0"},B={class:"nav-item"},C={class:"nav-item"},D={class:"nav-item"},N={class:"nav-item"},S={class:"nav-item"},U={class:"navbar-nav mb-2 mb-lg-0"},I={class:"nav-item"},F={class:"nav-item"},O={class:"container-fluid mt-5 position-relative"};function j(e,i,q,z,u,r){const t=l("RouterLink"),m=l("ToastMessages"),p=l("RouterView");return d(),f(M,null,[s("nav",$,[s("div",w,[A,E,s("div",L,[s("ul",y,[s("li",B,[a(t,{class:"nav-link",to:"/admin/products"},{default:o(()=>[n("產品列表")]),_:1})]),s("li",C,[a(t,{class:"nav-link",to:"/admin/order"},{default:o(()=>[n("訂單管理")]),_:1})]),s("li",D,[a(t,{class:"nav-link",to:"/admin/coupon"},{default:o(()=>[n("優惠券")]),_:1})]),s("li",N,[a(t,{class:"nav-link",to:"/admin/articles"},{default:o(()=>[n("文章列表")]),_:1})]),s("li",S,[s("a",{href:"#",onClick:i[0]||(i[0]=b((...h)=>r.logout&&r.logout(...h),["prevent"])),class:"nav-link"},"登出")])]),s("ul",U,[s("li",I,[a(t,{class:"nav-link",to:"/articles"},{default:o(()=>[n("Blog")]),_:1})]),s("li",F,[a(t,{class:"nav-link",to:"/"},{default:o(()=>[n("回到前台")]),_:1})])])])])]),s("div",O,[a(m),u.success===!0?(d(),k(p,{key:0})):T("",!0)])],64)}const K=v(R,[["render",j]]);export{K as default};