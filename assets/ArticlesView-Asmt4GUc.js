import{_ as p,a as h,r as d,o,c as a,d as m,b as s,F as i,i as g,t as f,q as v,w as L,e as P,g as l}from"./index-X4kEHME8.js";import{u as y}from"./toastMessage-THDGjaAh.js";var A={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"ryanpro",BASE_URL:"/vue_practise_week7/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:T,VITE_APP_PATH:V}=A,k={data(){return{isLoading:!1,articles:[],isNew:!1,tempArticle:{},pagination:{}}},methods:{...h(y,["addMessage"]),getArticles(n=1){console.log(2);const c=`${T}/api/${V}/articles?page=${n}`;this.isLoading=!0,this.axios(c).then(t=>{this.articles=t.data.articles,this.pagination=t.data.pagination,this.isLoading=!1}).catch(t=>{this.isLoading=!1,this.addMessage({title:"取得文章失敗",content:t.response.data.message,style:"danger"})})}},mounted(){this.getArticles()}},w={class:"container my-md-5 my-3"},E=s("h3",null,"文章列表",-1),x={class:"row row-cols-1 row-cols-md-2 g-4"},R={key:0,class:"col"},b={class:"card"},M=["src"],$={class:"card-body"},B={class:"card-title"},N=["innerHTML"],S={class:"card-footer"};function D(n,c,t,H,r,I){const _=d("LoadingOverlay"),u=d("RouterLink");return o(),a(i,null,[m(_,{active:r.isLoading},null,8,["active"]),s("div",w,[E,s("div",x,[(o(!0),a(i,null,g(r.articles,e=>(o(),a(i,{key:e.id},[e.isPublic?(o(),a("div",R,[s("div",b,[s("img",{src:e.imageUrl,class:"card-img-top"},null,8,M),s("div",$,[s("h5",B,f(e.title),1),s("div",{innerHTML:e.description},null,8,N)]),s("div",S,[e.isPublic?(o(),v(u,{key:0,class:"btn btn-outline-primary",to:`/article/${e.id}`},{default:L(()=>[P(" 文章頁面 ")]),_:2},1032,["to"])):l("",!0)])])])):l("",!0)],64))),128))])])],64)}const C=p(k,[["render",D]]);export{C as default};
