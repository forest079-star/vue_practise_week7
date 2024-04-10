import{_ as g,o as i,c as p,b as e,h as c,s as r,x as w,t as h,a as L,r as b,d as f,F as C,i as x}from"./index-X4kEHME8.js";import{u as D}from"./toastMessage-THDGjaAh.js";import{m as $}from"./modalMixin-0r3r6NdI.js";import{D as T}from"./DelModal-rUFbC4Vb.js";import"./bootstrap.esm-TTjMTX3M.js";const V={props:{coupon:Object,isNew:Boolean},data(){return{tempCoupon:{},due_date:""}},emits:["update-coupon"],watch:{due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)},coupon(){this.tempCoupon=this.coupon;const s=new Date(this.tempCoupon.due_date*1e3).toISOString().split("T");[this.due_date]=s}},mixins:[$]},N={class:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true",ref:"modal"},P={class:"modal-dialog"},A={class:"modal-content"},U=e("div",{class:"modal-header"},[e("h1",{class:"modal-title fs-5",id:"staticBackdropLabel"},"編輯優惠券"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),S={class:"modal-body"},B={class:"mb-3"},E=e("label",{for:"coupon-name",class:"col-form-label"},"名稱",-1),I={class:"mb-3"},O=e("label",{for:"coupon-number",class:"col-form-label"},"優惠碼",-1),R={class:"mb-3"},F=e("label",{for:"coupon-date",class:"col-form-label"},"到期日",-1),H={class:"mb-3"},j=e("label",{for:"coupon-price",class:"col-form-label"},"折扣百分比",-1),q={class:"mb-3"},z={class:"form-check"},G=e("label",{for:"is-enabled",class:"form-check-label"},"是否啟用",-1),J={class:"modal-footer"},K=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1);function Q(s,o,a,u,t,d){return i(),p("div",N,[e("div",P,[e("div",A,[U,e("div",S,[e("form",null,[e("div",B,[E,c(e("input",{type:"text",class:"form-control",id:"coupon-name","onUpdate:modelValue":o[0]||(o[0]=n=>t.tempCoupon.title=n),placeholder:"請輸入標題"},null,512),[[r,t.tempCoupon.title]])]),e("div",I,[O,c(e("input",{type:"text",class:"form-control",id:"coupon-number","onUpdate:modelValue":o[1]||(o[1]=n=>t.tempCoupon.code=n),placeholder:"請輸入優惠碼"},null,512),[[r,t.tempCoupon.code]])]),e("div",R,[F,c(e("input",{type:"date",class:"form-control",id:"coupon-date","onUpdate:modelValue":o[2]||(o[2]=n=>t.due_date=n)},null,512),[[r,t.due_date]])]),e("div",H,[j,c(e("input",{type:"number",class:"form-control",id:"coupon-price",min:"0","onUpdate:modelValue":o[3]||(o[3]=n=>t.tempCoupon.percent=n)},null,512),[[r,t.tempCoupon.percent,void 0,{number:!0}]])]),e("div",q,[e("div",z,[c(e("input",{type:"checkbox",class:"form-check-input",id:"is-enabled",min:"0","true-value":1,"false-value":0,"onUpdate:modelValue":o[4]||(o[4]=n=>t.tempCoupon.is_enabled=n)},null,512),[[w,t.tempCoupon.is_enabled]]),G])])])]),e("div",J,[K,e("button",{type:"button",class:"btn btn-primary",onClick:o[5]||(o[5]=n=>s.$emit("update-coupon",t.tempCoupon))},h(a.isNew?"新增優惠券":"更新優惠券"),1)])])])],512)}const W=g(V,[["render",Q]]);var X={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"ryanpro",BASE_URL:"/vue_practise_week7/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:m,VITE_APP_PATH:_}=X,Y={components:{DelModal:T,CouponModal:W},data(){return{isLoading:!1,isNew:!1,coupons:{},tempCoupon:{title:"",is_enabled:0,percent:100,code:""},due_date:"",modal:""}},watch:{due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},methods:{...L(D,["addMessage"]),getCoupons(){this.isLoading=!0,this.axios.get(`${m}/api/${_}/admin/coupons`).then(s=>{this.coupons=s.data.coupons,this.isLoading=!1}).catch(s=>{this.isLoading=!1,this.addMessage({title:"錯誤",content:s.response.data.message,style:"danger"})})},openCouponModal(s,o){if(this.isNew=s,this.isNew)this.tempCoupon={due_date:new Date().getTime()/1e3};else{this.tempCoupon={...o};const a=new Date(this.tempCoupon.due_date*1e3).toISOString().split("T");[this.due_date]=a}this.$refs.couponModal.openModal()},openDelCouponModal(s){this.tempCoupon={...s},this.$refs.couponModal.openModal()},updateCoupon(s){this.isLoading=!0;let o=`${m}/api/${_}/admin/coupon`,a="post",u={...s};this.isNew||(o=`${m}/api/${_}/admin/coupon/${s.id}`,a="put",u=this.tempCoupon),this.axios[a](o,{data:u}).then(t=>{this.isLoading=!1,this.addMessage({title:"新增優惠券",content:t.data.message,style:"success"}),this.getCoupons(),this.$refs.couponModal.closeModal()}).catch(t=>{this.isLoading=!1,this.addMessage({title:"錯誤",content:t.response.data.message,style:"danger"})})},deleteCoupon(){this.isLoading=!0;const s=`${m}/api/${_}/admin/coupon/${this.tempCoupon.id}`;this.axios.delete(s).then(o=>{this.isLoading=!1,console.log(o.data),this.addMessage({title:"刪除優惠券",content:o.data.message,style:"success"}),this.getCoupons(),this.$refs.couponModal.closeModal()}).catch(o=>{this.isLoading=!1,this.addMessage({title:"錯誤",content:o.response.data.message,style:"danger"})})}},mounted(){this.getCoupons()}},Z=e("h2",null,"優惠券",-1),ee={class:"text-end mt-4"},oe={class:"table mt-4"},te=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"名稱"),e("th",{scope:"col"},"折扣百分比"),e("th",{scope:"col"},"到期日"),e("th",{scope:"col"},"是否啟用"),e("th",{scope:"col"},"編輯")])],-1),se={scope:"row"},ne={key:0,class:"text-success"},ae={key:1,class:"text-danger"},le={class:"btn-group"},de=["onClick"],ie=["onClick"];function pe(s,o,a,u,t,d){const n=b("LoadingOverlay"),M=b("CouponModal"),v=b("DelModal");return i(),p(C,null,[f(n,{active:t.isLoading},null,8,["active"]),Z,e("div",ee,[e("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=l=>d.openCouponModal(!0))},"建立新優惠券")]),e("table",oe,[te,e("tbody",null,[(i(!0),p(C,null,x(t.coupons,(l,y)=>(i(),p("tr",{key:y},[e("th",se,h(l.title),1),e("td",null,h(l.percent)+" %",1),e("td",null,h(s.$filters.date(l.due_date)),1),e("td",null,[l.is_enabled?(i(),p("span",ne,"啟用")):(i(),p("span",ae,"未啟用"))]),e("td",null,[e("div",le,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:k=>d.openCouponModal(!1,l)},"編輯",8,de),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:k=>d.openDelCouponModal(l)},"刪除",8,ie)])])]))),128))])]),f(M,{coupon:t.tempCoupon,isNew:t.isNew,ref:"couponModal",onUpdateCoupon:d.updateCoupon},null,8,["coupon","isNew","onUpdateCoupon"]),f(v,{ref:"delModal",item:t.tempCoupon,onDelItem:d.deleteCoupon},null,8,["item","onDelItem"])],64)}const he=g(Y,[["render",pe]]);export{he as default};
