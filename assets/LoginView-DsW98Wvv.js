import{_ as p,a as m,j as u,r as _,o as f,c as h,d as g,b as e,l as v,h as d,s as c,F as w,p as b,k as x}from"./index-X4kEHME8.js";import{u as T}from"./toastMessage-THDGjaAh.js";import{T as P}from"./ToastMessages-SBhuwpmJ.js";var M={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"ryanpro",BASE_URL:"/vue_practise_week7/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:V}=M,E={data(){return{user:{username:"",password:""}}},components:{ToastMessages:P},methods:{...m(T,["addMessage"]),login(){u.post(`${V}/admin/signin`,this.user).then(s=>{const{token:o,expired:n}=s.data;document.cookie=`hexToken=${o}; expires=${new Date(n)};`,this.$router.push("/admin/products")}).catch(s=>{this.addMessage({title:"登入失敗",content:s.response.data.message,style:"danger"}),alert(s.response.data.message)})}}},r=s=>(b("data-v-3563370e"),s=s(),x(),s),S={class:"container vh-100"},k={class:"row justify-content-center align-items-center h-100"},y={class:"col-8"},I=r(()=>e("h1",{class:"h3 mb-3 font-weight-normal text-center"}," 請先登入 ",-1)),A={class:"form-floating mb-3"},D=r(()=>e("label",{for:"username"},"Email address",-1)),R={class:"form-floating"},U=r(()=>e("label",{for:"password"},"Password",-1)),B=r(()=>e("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ",-1));function L(s,o,n,j,a,i){const l=_("ToastMessages");return f(),h(w,null,[g(l),e("div",S,[e("div",k,[e("div",y,[I,e("form",{id:"form",class:"form-signin",onSubmit:o[2]||(o[2]=v((...t)=>i.login&&i.login(...t),["prevent"]))},[e("div",A,[d(e("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:"","onUpdate:modelValue":o[0]||(o[0]=t=>a.user.username=t)},null,512),[[c,a.user.username]]),D]),e("div",R,[d(e("input",{type:"password",class:"form-control",id:"password",placeholder:"Password",required:"",autocomplete:"","onUpdate:modelValue":o[1]||(o[1]=t=>a.user.password=t)},null,512),[[c,a.user.password]]),U]),B],32)])])])],64)}const O=p(E,[["render",L],["__scopeId","data-v-3563370e"]]);export{O as default};
