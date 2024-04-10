import{_ as d,j as r,a as c,o as l,c as p,b as a,t as o,l as m,F as n,f as i}from"./index-X4kEHME8.js";import{c as u}from"./cartStore-IeVEJaK5.js";var b={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"ryanpro",BASE_URL:"/vue_practise_week7/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:h,VITE_APP_PATH:v}=b,f={data(){return{product:{}}},methods:{getProduct(){const{id:t}=this.$route.params;r.get(`${h}/api/${v}/product/${t}`).then(s=>{console.log(s),this.product=s.data.product}).catch(s=>{console.log(s.response.data.message)})},...c(u,["addToCart"])},mounted(){console.log(this.$route),this.getProduct()}},x={class:"row align-items-center"},g=a("div",{class:"col-md-7"},[a("div",{id:"carouselExampleControls",class:"carousel slide","data-ride":"carousel"},[a("div",{class:"carousel-inner"},[a("div",{class:"carousel-item active"},[a("img",{src:"https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80",class:"d-block w-100",alt:"..."})]),a("div",{class:"carousel-item"},[a("img",{src:"https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80",class:"d-block w-100",alt:"..."})]),a("div",{class:"carousel-item"},[a("img",{src:"https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80",class:"d-block w-100",alt:"..."})])]),a("a",{class:"carousel-control-prev",href:"#carouselExampleControls",role:"button","data-slide":"prev"},[a("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),a("span",{class:"sr-only"},"Previous")]),a("a",{class:"carousel-control-next",href:"#carouselExampleControls",role:"button","data-slide":"next"},[a("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),a("span",{class:"sr-only"},"Next")])])],-1),_={class:"col-md-5"},y=i('<nav aria-label="breadcrumb"><ol class="breadcrumb bg-white px-0 mb-0 py-3"><li class="breadcrumb-item"><a class="text-muted" href="./index.html">Home</a></li><li class="breadcrumb-item"><a class="text-muted" href="./product.html">Product</a></li><li class="breadcrumb-item active" aria-current="page">Detail</li></ol></nav>',1),w={class:"fw-bold h1 mb-1"},E=a("p",{class:"mb-0 text-muted text-end"},[a("del",null,"NT$1,200")],-1),T={class:"h4 fw-bold text-end"},$={class:"row align-items-center"},k=i('<div class="col-6"><div class="input-group my-3 bg-light rounded"><div class="input-group-prepend"><button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1"><i class="fas fa-minus"></i></button></div><input type="text" class="form-control border-0 text-center my-auto shadow-none bg-light" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value="1"><div class="input-group-append"><button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2"><i class="fas fa-plus"></i></button></div></div></div>',1),P={class:"col-6"},N=i('<div class="row my-5"><div class="col-md-4"><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p></div><div class="col-md-3"><p class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p></div></div><h3 class="fw-bold">Lorem ipsum dolor sit amet</h3><div class="swiper-container mt-4 mb-5"><div class="swiper-wrapper"><div class="swiper-slide"><div class="card border-0 mb-4 position-relative position-relative"><img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80" class="card-img-top rounded-0" alt="..."><a href="#" class="text-dark"></a><div class="card-body p-0"><h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4><p class="card-text mb-0">NT$1,080 <span class="text-muted"><del>NT$1,200</del></span></p><p class="text-muted mt-3"></p></div></div></div><div class="swiper-slide"><div class="card border-0 mb-4 position-relative position-relative"><img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80" class="card-img-top rounded-0" alt="..."><a href="#" class="text-dark"></a><div class="card-body p-0"><h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4><p class="card-text mb-0">NT$1,080 <span class="text-muted"><del>NT$1,200</del></span></p><p class="text-muted mt-3"></p></div></div></div><div class="swiper-slide"><div class="card border-0 mb-4 position-relative position-relative"><img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80" class="card-img-top rounded-0" alt="..."><a href="#" class="text-dark"></a><div class="card-body p-0"><h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4><p class="card-text mb-0">NT$1,080 <span class="text-muted"><del>NT$1,200</del></span></p><p class="text-muted mt-3"></p></div></div></div><div class="swiper-slide"><div class="card border-0 mb-4 position-relative position-relative"><img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80" class="card-img-top rounded-0" alt="..."><a href="#" class="text-dark"></a><div class="card-body p-0"><h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4><p class="card-text mb-0">NT$1,080 <span class="text-muted"><del>NT$1,200</del></span></p><p class="text-muted mt-3"></p></div></div></div><div class="swiper-slide"><div class="card border-0 mb-4 position-relative position-relative"><img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80" class="card-img-top rounded-0" alt="..."><a href="#" class="text-dark"></a><div class="card-body p-0"><h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4><p class="card-text mb-0">NT$1,080 <span class="text-muted"><del>NT$1,200</del></span></p><p class="text-muted mt-3"></p></div></div></div></div></div>',3);function D(t,s,B,H,e,L){return l(),p(n,null,[a("div",x,[g,a("div",_,[y,a("h2",w,o(e.product.title),1),E,a("p",T,"NT$"+o(e.product.price),1),a("div",$,[k,a("div",P,[a("a",{href:"./checkout.html",class:"text-nowrap btn btn-dark w-100 py-2",onClick:s[0]||(s[0]=m(M=>t.addToCart(e.product.id),["prevent"]))},"加入購物車")])])])]),N],64)}const q=d(f,[["render",D]]);export{q as default};