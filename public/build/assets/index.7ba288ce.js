var J=Object.defineProperty;var B=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var R=(p,d,n)=>d in p?J(p,d,{enumerable:!0,configurable:!0,writable:!0,value:n}):p[d]=n,P=(p,d)=>{for(var n in d||(d={}))W.call(d,n)&&R(p,n,d[n]);if(B)for(var n of B(d))X.call(d,n)&&R(p,n,d[n]);return p};import{u as Z,U as ee,y as u,N as D,a0 as te,k as se,a7 as ae,g as oe,r as M,i as le,l as ie,m as e,O,n as m,p as E,q as s,Y as f,a8 as A,P as g,Q as ne,R as x,x as h}from"./vendor.9ac200cc.js";import{d as ce,a as de}from"./getCourse.117a78f9.js";import{u as re,K as ue,a as me}from"./app.52277fe1.js";import{s as w}from"./vue-multiselect.esm.f7127d48.js";import{v as pe}from"./useValidator.4107c1a7.js";import"./sweetalert2.1b53689f.js";import{C as he}from"./ckeditor.80e0daed.js";import{d as _e}from"./getCategoriesToSelect.55e6b6b8.js";import{d as be,a as fe}from"./getInstructorsToSelect.a6948607.js";import{d as ge}from"./getLocationsToSelect.34aa23e1.js";import"./Bootstrap5.88c59918.js";const ve={class:"content d-flex flex-column flex-column-fluid",id:"kt_content"},ye={class:"container-xxl",id:"kt_content_container"},ke=["onSubmit"],xe={class:"d-flex flex-column flex-row-fluid gap-7 gap-lg-10"},we={class:"d-flex flex-column gap-7 gap-lg-10"},Ce={class:"nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-n2"},Ve={class:"nav-item"},je=h("General"),Se={class:"nav-item"},qe=h("Modules"),Ee={class:"nav-item"},Ue=h("FAQs"),Ie={class:"d-flex"},Te={class:"d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10"},$e={class:"card card-flush py-4"},Ne=e("div",{class:"card-header"},[e("div",{class:"card-title"},[e("h2",null,"Thumbnail")])],-1),Be={class:"card-body text-center pt-0"},Re={class:"btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow","data-kt-image-input-action":"change","data-bs-toggle":"tooltip",title:"Change Thumbnail"},Pe=e("i",{class:"bi bi-pencil-fill fs-7"},null,-1),De=e("span",{class:"btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow","data-kt-image-input-action":"cancel","data-bs-toggle":"tooltip",title:"Cancel Icon"},[e("i",{class:"bi bi-x fs-2"})],-1),Me=e("span",{class:"btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow","data-kt-image-input-action":"remove","data-bs-toggle":"tooltip",title:"Remove Icon"},[e("i",{class:"bi bi-x fs-2"})],-1),Oe=e("div",{class:"text-muted fs-7"},"Set the thumbnail. Only *.png, *.jpg and *.jpeg image files are accepted",-1),Ae={class:"card card-flush py-4"},Fe=e("div",{class:"card-header"},[e("div",{class:"card-title"},[e("h2",null,"Cover Image")])],-1),Le={class:"card-body text-center pt-0"},Ke={class:"btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow","data-kt-image-input-action":"change","data-bs-toggle":"tooltip",title:"Change Cover Image"},Qe=e("i",{class:"bi bi-pencil-fill fs-7"},null,-1),ze=e("span",{class:"btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow","data-kt-image-input-action":"cancel","data-bs-toggle":"tooltip",title:"Cancel Image"},[e("i",{class:"bi bi-x fs-2"})],-1),Ge=e("span",{class:"btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow","data-kt-image-input-action":"remove","data-bs-toggle":"tooltip",title:"Remove Image"},[e("i",{class:"bi bi-x fs-2"})],-1),Ye=e("div",{class:"text-muted fs-7"},"Set the cover image. Only *.png, *.jpg and *.jpeg image files are accepted",-1),He={class:"card card-flush py-4"},Je=e("div",{class:"card-header"},[e("div",{class:"card-title"},[e("h2",null,"Categories")])],-1),We={class:"card-body text-center pt-0"},Xe={class:"mb-10 fv-row"},Ze={class:"card card-flush py-4"},et=e("div",{class:"card-header"},[e("div",{class:"card-title"},[e("h2",null,"Instructors")])],-1),tt={class:"card-body text-center pt-0"},st={class:"mb-10 fv-row"},at={class:"card card-flush py-4"},ot=e("div",{class:"card-header"},[e("div",{class:"card-title"},[e("h2",null,"Institutions")])],-1),lt={class:"card-body text-center pt-0"},it={class:"mb-10 fv-row"},nt={class:"card card-flush py-4"},ct=e("div",{class:"card-header"},[e("div",{class:"card-title"},[e("h2",null,"Skills")])],-1),dt={class:"card-body text-center pt-0"},rt={class:"mb-10 fv-row"},ut={class:"d-flex flex-column gap-7 gap-lg-10"},mt={class:"card card-flush py-4"},pt=e("div",{class:"card-header"},[e("div",{class:"card-title"},[e("h2",null,"General")])],-1),ht={class:"card-body pt-0"},_t={class:"mb-10 fv-row"},bt=e("label",{class:"required form-label"},"Name",-1),ft={class:"mb-10 fv-row"},gt=e("label",{class:"form-label"},"Short Description",-1),vt={class:"mb-10 fv-row"},yt=e("label",{class:"form-label"},"Long Description",-1),kt={class:"mb-10 fv-row"},xt=e("label",{class:"form-label"},"Prerequisites",-1),wt={class:"mb-10 fv-row d-flex flex-column"},Ct=e("label",{class:"form-label"},"Featured",-1),Vt={class:"btn-group w-50","data-kt-buttons":"true","data-kt-buttons-target":"[data-kt-button]"},jt=["checked"],St=h(" Yes "),qt=["checked"],Et=h(" No "),Ut={class:"mb-10 fv-row d-flex flex-column"},It=e("label",{class:"form-label"},"Status",-1),Tt={class:"btn-group w-50","data-kt-buttons":"true","data-kt-buttons-target":"[data-kt-button]"},$t=["checked"],Nt=h(" Enabled "),Bt=["checked"],Rt=h(" Disabled "),Pt={class:"d-flex justify-content-end"},Dt=e("span",{class:"indicator-label"},"Save Changes",-1),Mt=e("span",{class:"indicator-progress"},[h("Please wait... "),e("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1),Ot=[Dt,Mt],ts={setup(p){const d=re();d.title="Update Course",d.breadcrumbs=[{link:"/dashboard",title:"Dashboard"},{link:"/courses",title:"Courses"},{link:"",title:"Update Course"}];const n=Z(),{result:_,loading:v}=ee(ce,{slug:n.currentRoute.value.params.slug},{fetchPolicy:"network-only"});let U=u(null),b=u(null),I=u(null),t=D({id:0,name:"",short_description:"",long_description:"",prerequisites:"",thumbnail:null,cover_img:null,status:1,is_featured:0,selected_categories:[],selected_skills:[],selected_instructors:[],selected_locations:[],categories:{sync:[]},instructors:{sync:[]},locations:{sync:[]},skills:{sync:[],create:[]}}),C=he,V={},j=u(null),S=u(null);u([]);let c=D({}),T=u([]),q=u([]),$=u([]),N=u([]);const{resolveClient:F}=te(),y=F(),{mutate:L,onDone:At,onError:Ft}=se(de),K=()=>{t.categories.sync=[],t.instructors.sync=[],t.locations.sync=[],t.skills.sync=[],t.skills.create=[],t.selected_categories.length&&t.selected_categories.forEach(function(o,a){t.categories.sync.push(o.id)}),t.selected_instructors.length&&t.selected_instructors.forEach(function(o,a){t.instructors.sync.push(o.id)}),t.selected_locations.length&&t.selected_locations.forEach(function(o,a){t.locations.sync.push(o.id)}),t.selected_skills.length&&t.selected_skills.forEach(function(o,a){isNaN(o.id)?t.skills.create.push({title:o.title}):t.skills.sync.push(o.id)}),I.validate().then(async function(o){if(o=="Valid"){b.value.setAttribute("data-kt-indicator","on"),b.value.disabled=!0;try{const a=await L(P({},t),{context:{hasUpload:!0}});alert("course updated successfully"),b.value.removeAttribute("data-kt-indicator"),b.value.disabled=!1}catch{alert("error occurred. please try again later."),b.value.removeAttribute("data-kt-indicator"),b.value.disabled=!1}}else alert("Sorry, looks like there are some errors detected, please try again.")})},k=(o,a,r)=>{if(a=="thumbnail")if(r=="set"){let i=new Blob(j.value.files,{type:"image/*"});i.name=j.value.files[0].name,t.thumbnail=i}else t.thumbnail=null;if(a=="cover_img")if(r=="set"){let i=new Blob(S.value.files,{type:"image/*"});i.name=S.value.files[0].name,t.cover_img=i}else t.cover_img=null};ae(()=>{if(_.value)if(!_.value.course)n.push("/categories");else{if(c=_.value.course,t.id=c.id,t.name=c.name,t.short_description=c.short_description,t.long_description=c.long_description,t.prerequisites=c.prerequisites,t.status=c.status?1:0,t.is_featured=c.is_featured?1:0,c.categories.length&&c.categories.forEach(function(o){t.selected_categories=[{id:o.id,name:o.name}]}),c.instructors.length){let o=[];c.instructors.forEach(function(a){o.push({id:a.id,name:a.full_name})}),t.selected_instructors=o}if(c.locations.length){let o=[];c.locations.forEach(function(a){o.push({id:a.id,name:a.name})}),t.selected_locations=o}if(c.skills.length){let o=[];c.skills.forEach(function(a){o.push({id:a.id,title:a.title})}),t.selected_skills=o}}});const Q=async()=>{const{data:o,loading:a,fetch:r}=await y.query({query:_e});T.value=o.categories.data.map(function(i){return{id:i.id,name:i.name}})},z=async()=>{const{data:o,loading:a,fetch:r}=await y.query({query:be},{fetchPolicy:"network-only"});$.value=o.instructors.data.map(function(i){return{id:i.id,name:i.full_name}})},G=async()=>{const{data:o,loading:a,fetch:r}=await y.query({query:fe},{fetchPolicy:"network-only"});q.value=o.skills.data.map(function(i){return{id:i.id,title:i.title}})},Y=async()=>{const{data:o,loading:a,fetch:r}=await y.query({query:ge},{fetchPolicy:"network-only"});N.value=o.locations.data.map(function(i){return{id:i.id,name:i.name}})},H=o=>{q.value.push({title:o,id:o}),t.selected_skills.push({title:o,id:o})};return oe(()=>{I=pe(U.value,{name:{validators:{notEmpty:{message:"Course Name is required"}}}}),ue.init(),me.initButtons()}),(o,a)=>{const r=M("router-link"),i=M("ckeditor");return le(),ie("div",ve,[e("div",ye,[e("form",{onSubmit:O(K,["prevent"]),ref_key:"form",ref:U,class:"form fv-plugins-bootstrap5 fv-plugins-framework d-flex flex-column flex-lg-row"},[e("div",xe,[e("div",we,[e("ul",Ce,[e("li",Ve,[m(r,{class:"nav-link text-active-primary pb-4 active",to:`/courses/edit/${s(n).currentRoute.value.params.slug}`},{default:E(()=>[je]),_:1},8,["to"])]),e("li",Se,[m(r,{class:"nav-link text-active-primary pb-4",to:`/courses/edit/${s(n).currentRoute.value.params.slug}/modules`},{default:E(()=>[qe]),_:1},8,["to"])]),e("li",Ee,[m(r,{class:"nav-link text-active-primary pb-4",to:`/courses/edit/${s(n).currentRoute.value.params.slug}/faqs`},{default:E(()=>[Ue]),_:1},8,["to"])])]),e("div",Ie,[e("div",Te,[e("div",$e,[Ne,e("div",Be,[e("div",{class:f([{"image-input-empty":!s(v)&&!s(_).course.thumbnail!=""},"image-input image-input-outline mb-3"]),"data-kt-image-input":"true",style:{"background-image":"url(/media/svg/files/blank-image.svg)"}},[e("div",{class:"image-input-wrapper w-150px h-150px",style:A(s(v)?"":`background-image: url(${s(_).course.thumbnail})`)},null,4),e("label",Re,[Pe,e("input",{ref_key:"thumbnail",ref:j,onChange:a[0]||(a[0]=l=>k(l,"thumbnail","set")),type:"file",name:"thumbnail",accept:".png, .jpg, .jpeg"},null,544),e("input",{type:"hidden",onClick:a[1]||(a[1]=l=>k(l,"thumbnail","remove")),name:"thumbnail_remove"})]),De,Me],2),Oe])]),e("div",Ae,[Fe,e("div",Le,[e("div",{class:f([{"image-input-empty":!s(v)&&!s(_).course.cover_image!=""},"image-input image-input-outline mb-3"]),"data-kt-image-input":"true",style:{"background-image":"url(/media/svg/files/blank-image.svg)"}},[e("div",{class:"image-input-wrapper w-150px h-150px",style:A(s(v)?"":`background-image: url(${s(_).course.cover_image})`)},null,4),e("label",Ke,[Qe,e("input",{ref_key:"cover_img",ref:S,onChange:a[2]||(a[2]=l=>k(l,"cover_img","set")),type:"file",name:"cover_img",accept:".png, .jpg, .jpeg"},null,544),e("input",{type:"hidden",onClick:a[3]||(a[3]=l=>k(l,"cover_img","remove")),name:"cover_img_remove"})]),ze,Ge],2),Ye])]),e("div",He,[Je,e("div",We,[e("div",Xe,[m(s(w),{modelValue:s(t).selected_categories,"onUpdate:modelValue":a[4]||(a[4]=l=>s(t).selected_categories=l),onSearchChange:Q,"track-by":"id",label:"name","show-labels":!1,multiple:!0,"close-on-select":!1,noOptionsText:"Enter Category Name",options:s(T)},null,8,["modelValue","options"])])])]),e("div",Ze,[et,e("div",tt,[e("div",st,[m(s(w),{modelValue:s(t).selected_instructors,"onUpdate:modelValue":a[5]||(a[5]=l=>s(t).selected_instructors=l),onSearchChange:z,"track-by":"id",label:"name","show-labels":!1,multiple:!0,"close-on-select":!1,noOptionsText:"Enter Instructor",placeholder:"Search an Instructor",options:s($)},null,8,["modelValue","options"])])])]),e("div",at,[ot,e("div",lt,[e("div",it,[m(s(w),{modelValue:s(t).selected_locations,"onUpdate:modelValue":a[6]||(a[6]=l=>s(t).selected_locations=l),onSearchChange:Y,"track-by":"id",label:"name","show-labels":!1,multiple:!0,"close-on-select":!1,noOptionsText:"Enter Location",placeholder:"Search a Location",options:s(N)},null,8,["modelValue","options"])])])]),e("div",nt,[ct,e("div",dt,[e("div",rt,[m(s(w),{modelValue:s(t).selected_skills,"onUpdate:modelValue":a[7]||(a[7]=l=>s(t).selected_skills=l),onSearchChange:G,"track-by":"id",label:"title","show-labels":!1,multiple:!0,"close-on-select":!1,noOptionsText:"Enter Skill",placeholder:"Search or add a skill",taggable:!0,onTag:H,options:s(q)},null,8,["modelValue","options"])])])])]),e("div",ut,[e("div",mt,[pt,e("div",ht,[e("div",_t,[bt,g(e("input",{"onUpdate:modelValue":a[8]||(a[8]=l=>s(t).name=l),type:"text",name:"name",class:"form-control mb-2",placeholder:"Name"},null,512),[[ne,s(t).name]])]),e("div",ft,[gt,m(i,{editor:s(C),modelValue:s(t).short_description,"onUpdate:modelValue":a[9]||(a[9]=l=>s(t).short_description=l),config:s(V)},null,8,["editor","modelValue","config"])]),e("div",vt,[yt,m(i,{editor:s(C),modelValue:s(t).long_description,"onUpdate:modelValue":a[10]||(a[10]=l=>s(t).long_description=l),config:s(V)},null,8,["editor","modelValue","config"])]),e("div",kt,[xt,m(i,{editor:s(C),modelValue:s(t).prerequisites,"onUpdate:modelValue":a[11]||(a[11]=l=>s(t).prerequisites=l),config:s(V)},null,8,["editor","modelValue","config"])]),e("div",wt,[Ct,e("div",Vt,[e("label",{class:f(["btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-success",{active:s(t).is_featured==1}]),"data-kt-button":"true"},[g(e("input",{"onUpdate:modelValue":a[12]||(a[12]=l=>s(t).is_featured=l),class:"btn-check",type:"radio",name:"is_featured",checked:s(t).is_featured==1?"checked":"",value:1},null,8,jt),[[x,s(t).is_featured]]),St],2),e("label",{class:f(["btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-danger",{active:s(t).is_featured==0}]),"data-kt-button":"true"},[g(e("input",{"onUpdate:modelValue":a[13]||(a[13]=l=>s(t).is_featured=l),class:"btn-check",type:"radio",name:"is_featured",checked:s(t).is_featured==0?"checked":"",value:0},null,8,qt),[[x,s(t).is_featured]]),Et],2)])]),e("div",Ut,[It,e("div",Tt,[e("label",{class:f(["btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-success",{active:s(t).status==1}]),"data-kt-button":"true"},[g(e("input",{"onUpdate:modelValue":a[14]||(a[14]=l=>s(t).status=l),class:"btn-check",type:"radio",name:"status",value:1,checked:s(t).status==1?"checked":""},null,8,$t),[[x,s(t).status]]),Nt],2),e("label",{class:f(["btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-danger",{active:s(t).status==0}]),"data-kt-button":"true"},[g(e("input",{"onUpdate:modelValue":a[15]||(a[15]=l=>s(t).status=l),class:"btn-check",type:"radio",name:"status",value:0,checked:s(t).status==0?"checked":""},null,8,Bt),[[x,s(t).status]]),Rt],2)])])])])])])]),e("div",Pt,[e("button",{onClick:a[16]||(a[16]=O(l=>s(n).go(-1),["prevent"])),id:"course_update_cancel",class:"btn btn-light me-5"},"Cancel"),e("button",{ref_key:"submitButton",ref:b,type:"submit",id:"submitButton",class:"btn btn-primary"},Ot,512)])])],40,ke)])])}}};export{ts as default};
