import{_,a as d,r as o,o as u,c as m,d as c,b as e,w as h,t as i,e as r,F as p}from"./index-X4kEHME8.js";import{u as g}from"./toastMessage-THDGjaAh.js";var f={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"ryanpro",BASE_URL:"/vue_practise_week7/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:v,VITE_APP_PATH:L}=f,b={data(){return{isLoading:!1,article:{},id:""}},methods:{...d(g,["addMessage"]),getArticle(){const a=`${v}/api/${L}/article/${this.id}`;this.isLoading=!0,this.axios.get(a).then(s=>{console.log(s),this.article=s.data.article,this.isLoading=!1}).catch(s=>{this.isLoading=!1,this.addMessage({title:"取得文章失敗",content:s.response.data.message,style:"danger"})})}},mounted(){this.id=this.$route.params.id,this.getArticle()}},A={class:"container mtmd-5 mt-3"},P={"aria-label":"breadcrumb"},T={class:"breadcrumb"},V={class:"breadcrumb-item"},x={class:"breadcrumb-item active","aria-current":"page"},E={class:"row justify-content-center"},R={class:"col-8"},y={class:"text-muted"},M={class:"text-muted"},k=["src","alt"],w=["innerHTML"];function S(a,s,B,D,t,H){const l=o("LoadingOverlay"),n=o("RouterLink");return u(),m(p,null,[c(l,{active:t.isLoading},null,8,["active"]),e("div",A,[e("nav",P,[e("ol",T,[e("li",V,[c(n,{to:"/articles"},{default:h(()=>[r("部落格列表")]),_:1})]),e("li",x,i(t.article.title),1)])])]),e("div",E,[e("article",R,[e("h2",null,i(t.article.title),1),e("p",null,[e("small",y,i(a.$filters.date(t.article.create_at)),1),r(" - "),e("small",M,"作者："+i(t.article.author),1)]),e("img",{src:t.article.imageUrl,alt:t.article.title,class:"img-fluid mb-3"},null,8,k),e("div",{innerHTML:t.article.content},null,8,w)])])],64)}const U=_(b,[["render",S]]);export{U as default};
