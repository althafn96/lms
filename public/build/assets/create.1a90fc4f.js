var O=Object.defineProperty;var N=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var S=(t,a,i)=>a in t?O(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i,V=(t,a)=>{for(var i in a||(a={}))F.call(a,i)&&S(t,i,a[i]);if(N)for(var i of N(a))T.call(a,i)&&S(t,i,a[i]);return t};import{u as B,y as f,N as U,k as q,g as C,i as R,l as $,m as e,O as A,P as p,Q as v,q as d,R as D,s as M,x as h}from"./vendor.9ac200cc.js";import"./getAdmin.86143afa.js";import{u as I,K as P,a as G}from"./app.52277fe1.js";import{S as K}from"./sweetalert2.1b53689f.js";import{v as L}from"./useValidator.4107c1a7.js";import"./Bootstrap5.88c59918.js";var b={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"addAdmin"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"first_name"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"last_name"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"display_picture"}},type:{kind:"NamedType",name:{kind:"Name",value:"Upload"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"user"}},type:{kind:"NamedType",name:{kind:"Name",value:"AdminUserMorphOne"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createAdmin"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"first_name"},value:{kind:"Variable",name:{kind:"Name",value:"first_name"}}},{kind:"ObjectField",name:{kind:"Name",value:"last_name"},value:{kind:"Variable",name:{kind:"Name",value:"last_name"}}},{kind:"ObjectField",name:{kind:"Name",value:"display_picture"},value:{kind:"Variable",name:{kind:"Name",value:"display_picture"}}},{kind:"ObjectField",name:{kind:"Name",value:"user"},value:{kind:"Variable",name:{kind:"Name",value:"user"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"full_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:387}};b.loc.source={body:`mutation addAdmin (\r
    $first_name: String!,\r
    $last_name: String!,\r
    $display_picture: Upload,\r
    $user: AdminUserMorphOne\r
) {\r
    createAdmin (\r
        input: {\r
            first_name: $first_name,\r
            last_name: $last_name,\r
            display_picture: $display_picture,\r
            user: $user\r
        }\r
    ) {\r
        full_name\r
        slug\r
    }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function _(t,a){if(t.kind==="FragmentSpread")a.add(t.name.value);else if(t.kind==="VariableDefinition"){var i=t.type;i.kind==="NamedType"&&a.add(i.name.value)}t.selectionSet&&t.selectionSet.selections.forEach(function(o){_(o,a)}),t.variableDefinitions&&t.variableDefinitions.forEach(function(o){_(o,a)}),t.definitions&&t.definitions.forEach(function(o){_(o,a)})}var k={};(function(){b.definitions.forEach(function(a){if(a.name){var i=new Set;_(a,i),k[a.name.value]=i}})})();function E(t,a){for(var i=0;i<t.definitions.length;i++){var o=t.definitions[i];if(o.name&&o.name.value==a)return o}}function Q(t,a){var i={kind:t.kind,definitions:[E(t,a)]};t.hasOwnProperty("loc")&&(i.loc=t.loc);var o=k[a]||new Set,r=new Set,u=new Set;for(o.forEach(function(c){u.add(c)});u.size>0;){var l=u;u=new Set,l.forEach(function(c){if(!r.has(c)){r.add(c);var m=k[c]||new Set;m.forEach(function(y){u.add(y)})}})}return r.forEach(function(c){var m=E(t,c);m&&i.definitions.push(m)}),i}Q(b,"addAdmin");const z={class:"content d-flex flex-column flex-column-fluid",id:"kt_content"},H={class:"container-xxl",id:"kt_content_container"},J=["onSubmit"],W={class:"d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10"},X={class:"card card-flush py-4"},Y=e("div",{class:"card-header"},[e("div",{class:"card-title"},[e("h2",null,"DIsplay Picture")])],-1),Z={class:"card-body text-center pt-0"},ee={class:"image-input image-input-empty image-input-outline mb-3","data-kt-image-input":"true",style:{"background-image":"url(/media/svg/files/blank-image.svg)"}},te=e("div",{class:"image-input-wrapper w-150px h-150px"},null,-1),ae={class:"btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow","data-kt-image-input-action":"change","data-bs-toggle":"tooltip",title:"Change Image"},ie=e("i",{class:"bi bi-pencil-fill fs-7"},null,-1),ne=e("span",{class:"btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow","data-kt-image-input-action":"cancel","data-bs-toggle":"tooltip",title:"Cancel Image"},[e("i",{class:"bi bi-x fs-2"})],-1),se=e("span",{class:"btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow","data-kt-image-input-action":"remove","data-bs-toggle":"tooltip",title:"Remove Image"},[e("i",{class:"bi bi-x fs-2"})],-1),le=e("div",{class:"text-muted fs-7"},"Set the admin image. Only *.png, *.jpg and *.jpeg image files are accepted",-1),oe={class:"d-flex flex-column flex-row-fluid gap-7 gap-lg-10"},de={class:"d-flex flex-column gap-7 gap-lg-10"},re=M('<ul class="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-n2"><li class="nav-item"><a class="nav-link text-active-primary pb-4 active" data-bs-toggle="tab" href="#general">General</a></li><li class="nav-item"><a class="nav-link text-active-primary pb-4" data-bs-toggle="tab" href="#credentials">Credentials</a></li></ul>',1),ce={class:"tab-content"},ue={class:"tab-pane fade show active",id:"general",role:"tab-panel"},me={class:"d-flex flex-column gap-7 gap-lg-10"},pe={class:"card card-flush py-4"},fe=e("div",{class:"card-header"},[e("div",{class:"card-title"},[e("h2",null,"General")])],-1),ve={class:"card-body pt-0"},be={class:"mb-10 fv-row"},_e=e("label",{class:"required form-label"},"First Name",-1),ge={class:"mb-10 fv-row"},he=e("label",{class:"required form-label"},"Last Name",-1),ke={class:"mb-10 fv-row d-flex flex-column"},ye=e("label",{class:"form-label"},"Status",-1),xe={class:"btn-group w-50","data-kt-buttons":"true","data-kt-buttons-target":"[data-kt-button]"},we={class:"btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-success active","data-kt-button":"true"},Ne=h(" Enabled "),Se={class:"btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-danger","data-kt-button":"true"},Ve=h(" Disabled "),Ae={class:"tab-pane fade",id:"credentials",role:"tab-panel"},De={class:"d-flex flex-column gap-7 gap-lg-10"},Ee={class:"card card-flush py-4"},je=e("div",{class:"card-header"},[e("div",{class:"card-title"},[e("h2",null,"Credentials")])],-1),Oe={class:"card-body pt-0"},Fe={class:"mb-10 fv-row"},Te=e("label",{class:"required form-label"},"Email",-1),Be={class:"mb-10 fv-row"},Ue=e("label",{class:"required form-label"},"Password",-1),qe={class:"d-flex justify-content-end"},Ce=e("span",{class:"indicator-label"},"Save Changes",-1),Re=e("span",{class:"indicator-progress"},[h("Please wait... "),e("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1),$e=[Ce,Re],He={setup(t){const a=I();a.title="Add Admin",a.breadcrumbs=[{link:"/dashboard",title:"Dashboard"},{link:"/Admins",title:"Admins"},{link:"",title:"Add Admin"}];const i=B();let o=f(null),r=f(null),u=f(null),l=U({first_name:"",last_name:"",display_picture:null,user:{create:{email:"",password:"",status:1}}}),c=f(null);const{mutate:m,onDone:y,onError:Me}=q(b),j=()=>{u.validate().then(async function(g){if(g=="Valid"){r.value.setAttribute("data-kt-indicator","on"),r.value.disabled=!0;try{const n=await m(V({},l),{context:{hasUpload:!0}});i.push("/admins"),r.value.removeAttribute("data-kt-indicator"),r.value.disabled=!1}catch(n){console.log(n),r.value.removeAttribute("data-kt-indicator"),r.value.disabled=!1}}else K.fire({text:"Sorry, looks like there are some errors detected, please try again.",icon:"error",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}})})},x=(g,n,s)=>{if(n=="display_picture")if(s=="set"){let w=new Blob(c.value.files,{type:"image/*"});w.name=c.value.files[0].name,l.display_picture=w}else l.display_picture=null};return C(()=>{u=L(o.value,{first_name:{validators:{notEmpty:{message:"first name is required"}}},last_name:{validators:{notEmpty:{message:"last name is required"}}},email:{validators:{notEmpty:{message:"email is required"}}},password:{validators:{notEmpty:{message:"password is required"}}}}),P.init(),G.initButtons()}),(g,n)=>(R(),$("div",z,[e("div",H,[e("form",{onSubmit:A(j,["prevent"]),ref_key:"form",ref:o,class:"form fv-plugins-bootstrap5 fv-plugins-framework d-flex flex-column flex-lg-row"},[e("div",W,[e("div",X,[Y,e("div",Z,[e("div",ee,[te,e("label",ae,[ie,e("input",{ref_key:"display_picture",ref:c,onChange:n[0]||(n[0]=s=>x(s,"display_picture","set")),type:"file",name:"display_picture",accept:".png, .jpg, .jpeg"},null,544),e("input",{type:"hidden",onClick:n[1]||(n[1]=s=>x(s,"display_picture","remove")),name:"display_picture_remove"})]),ne,se]),le])])]),e("div",oe,[e("div",de,[re,e("div",ce,[e("div",ue,[e("div",me,[e("div",pe,[fe,e("div",ve,[e("div",be,[_e,p(e("input",{"onUpdate:modelValue":n[2]||(n[2]=s=>d(l).first_name=s),type:"text",name:"first_name",class:"form-control mb-2",placeholder:"First Name"},null,512),[[v,d(l).first_name]])]),e("div",ge,[he,p(e("input",{"onUpdate:modelValue":n[3]||(n[3]=s=>d(l).last_name=s),type:"text",name:"last_name",class:"form-control mb-2",placeholder:"Last Name"},null,512),[[v,d(l).last_name]])]),e("div",ke,[ye,e("div",xe,[e("label",we,[p(e("input",{"onUpdate:modelValue":n[4]||(n[4]=s=>d(l).user.create.status=s),class:"btn-check",type:"radio",name:"status",checked:"checked",value:1},null,512),[[D,d(l).user.create.status]]),Ne]),e("label",Se,[p(e("input",{"onUpdate:modelValue":n[5]||(n[5]=s=>d(l).user.create.status=s),class:"btn-check",type:"radio",name:"status",value:0},null,512),[[D,d(l).user.create.status]]),Ve])])])])])])]),e("div",Ae,[e("div",De,[e("div",Ee,[je,e("div",Oe,[e("div",Fe,[Te,p(e("input",{"onUpdate:modelValue":n[6]||(n[6]=s=>d(l).user.create.email=s),type:"text",name:"email",class:"form-control mb-2",placeholder:"Email"},null,512),[[v,d(l).user.create.email]])]),e("div",Be,[Ue,p(e("input",{"onUpdate:modelValue":n[7]||(n[7]=s=>d(l).user.create.password=s),type:"password",name:"password",class:"form-control mb-2",placeholder:"Password"},null,512),[[v,d(l).user.create.password]])])])])])])])]),e("div",qe,[e("button",{onClick:n[8]||(n[8]=A(s=>d(i).go(-1),["prevent"])),id:"admin_create_cancel",class:"btn btn-light me-5"},"Cancel"),e("button",{ref_key:"submitButton",ref:r,type:"submit",id:"submitButton",class:"btn btn-primary"},$e,512)])])],40,J)])]))}};export{He as default};
