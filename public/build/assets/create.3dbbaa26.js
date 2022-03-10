var $=Object.defineProperty;var w=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var S=(t,n,i)=>n in t?$(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i,V=(t,n)=>{for(var i in n||(n={}))E.call(n,i)&&S(t,i,n[i]);if(w)for(var i of w(n))T.call(n,i)&&S(t,i,n[i]);return t};import{u as U,y as v,N as C,a0 as B,k as M,g as q,i as A,l as R,m as e,O as D,P as c,Q as b,q as d,a6 as I,R as O,s as P,x as h}from"./vendor.9ac200cc.js";import{u as G,K,a as L}from"./app.52277fe1.js";import{v as Q}from"./useValidator.4107c1a7.js";import"./vue-multiselect.esm.f7127d48.js";import"./Bootstrap5.88c59918.js";var f={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"addStudent"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"first_name"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"last_name"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"dob"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"gender"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"display_picture"}},type:{kind:"NamedType",name:{kind:"Name",value:"Upload"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"contact_number"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"address"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"user"}},type:{kind:"NamedType",name:{kind:"Name",value:"StudentUserMorphOne"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createStudent"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"first_name"},value:{kind:"Variable",name:{kind:"Name",value:"first_name"}}},{kind:"ObjectField",name:{kind:"Name",value:"last_name"},value:{kind:"Variable",name:{kind:"Name",value:"last_name"}}},{kind:"ObjectField",name:{kind:"Name",value:"dob"},value:{kind:"Variable",name:{kind:"Name",value:"dob"}}},{kind:"ObjectField",name:{kind:"Name",value:"gender"},value:{kind:"Variable",name:{kind:"Name",value:"gender"}}},{kind:"ObjectField",name:{kind:"Name",value:"display_picture"},value:{kind:"Variable",name:{kind:"Name",value:"display_picture"}}},{kind:"ObjectField",name:{kind:"Name",value:"contact_number"},value:{kind:"Variable",name:{kind:"Name",value:"contact_number"}}},{kind:"ObjectField",name:{kind:"Name",value:"address"},value:{kind:"Variable",name:{kind:"Name",value:"address"}}},{kind:"ObjectField",name:{kind:"Name",value:"user"},value:{kind:"Variable",name:{kind:"Name",value:"user"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"full_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:619}};f.loc.source={body:`mutation addStudent (\r
    $first_name: String!,\r
    $last_name: String!,\r
    $dob: String,\r
    $gender: String,\r
    $display_picture: Upload,\r
    $contact_number: String,\r
    $address: String,\r
    $user: StudentUserMorphOne\r
) {\r
    createStudent (\r
        input: {\r
            first_name: $first_name,\r
            last_name: $last_name,\r
            dob: $dob,\r
            gender: $gender,\r
            display_picture: $display_picture,\r
            contact_number: $contact_number,\r
            address: $address,\r
            user: $user\r
        }\r
    ) {\r
        full_name\r
        slug\r
    }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function _(t,n){if(t.kind==="FragmentSpread")n.add(t.name.value);else if(t.kind==="VariableDefinition"){var i=t.type;i.kind==="NamedType"&&n.add(i.name.value)}t.selectionSet&&t.selectionSet.selections.forEach(function(o){_(o,n)}),t.variableDefinitions&&t.variableDefinitions.forEach(function(o){_(o,n)}),t.definitions&&t.definitions.forEach(function(o){_(o,n)})}var y={};(function(){f.definitions.forEach(function(n){if(n.name){var i=new Set;_(n,i),y[n.name.value]=i}})})();function j(t,n){for(var i=0;i<t.definitions.length;i++){var o=t.definitions[i];if(o.name&&o.name.value==n)return o}}function z(t,n){var i={kind:t.kind,definitions:[j(t,n)]};t.hasOwnProperty("loc")&&(i.loc=t.loc);var o=y[n]||new Set,r=new Set,m=new Set;for(o.forEach(function(u){m.add(u)});m.size>0;){var l=m;m=new Set,l.forEach(function(u){if(!r.has(u)){r.add(u);var p=y[u]||new Set;p.forEach(function(k){m.add(k)})}})}return r.forEach(function(u){var p=j(t,u);p&&i.definitions.push(p)}),i}z(f,"addStudent");const H={class:"content d-flex flex-column flex-column-fluid",id:"kt_content"},J={class:"container-xxl",id:"kt_content_container"},W=["onSubmit"],X={class:"d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10"},Y={class:"card card-flush py-4"},Z=e("div",{class:"card-header"},[e("div",{class:"card-title"},[e("h2",null,"DIsplay Picture")])],-1),ee={class:"card-body text-center pt-0"},ae={class:"image-input image-input-empty image-input-outline mb-3","data-kt-image-input":"true",style:{"background-image":"url(/media/svg/files/blank-image.svg)"}},te=e("div",{class:"image-input-wrapper w-150px h-150px"},null,-1),ne={class:"btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow","data-kt-image-input-action":"change","data-bs-toggle":"tooltip",title:"Change Image"},ie=e("i",{class:"bi bi-pencil-fill fs-7"},null,-1),se=e("span",{class:"btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow","data-kt-image-input-action":"cancel","data-bs-toggle":"tooltip",title:"Cancel Image"},[e("i",{class:"bi bi-x fs-2"})],-1),le=e("span",{class:"btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow","data-kt-image-input-action":"remove","data-bs-toggle":"tooltip",title:"Remove Image"},[e("i",{class:"bi bi-x fs-2"})],-1),de=e("div",{class:"text-muted fs-7"},"Set the student image. Only *.png, *.jpg and *.jpeg image files are accepted",-1),oe={class:"d-flex flex-column flex-row-fluid gap-7 gap-lg-10"},re={class:"d-flex flex-column gap-7 gap-lg-10"},ce=P('<ul class="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-n2"><li class="nav-item"><a class="nav-link text-active-primary pb-4 active" data-bs-toggle="tab" href="#general">General</a></li><li class="nav-item"><a class="nav-link text-active-primary pb-4" data-bs-toggle="tab" href="#credentials">Credentials</a></li></ul>',1),ue={class:"tab-content"},me={class:"tab-pane fade show active",id:"general",role:"tab-panel"},pe={class:"d-flex flex-column gap-7 gap-lg-10"},be={class:"card card-flush py-4"},ve=e("div",{class:"card-header"},[e("div",{class:"card-title"},[e("h2",null,"General")])],-1),fe={class:"card-body pt-0"},_e={class:"mb-10 fv-row"},ke=e("label",{class:"required form-label"},"First Name",-1),ge={class:"mb-10 fv-row"},he=e("label",{class:"required form-label"},"Last Name",-1),ye={class:"mb-10 fv-row"},xe=e("label",{class:"form-label"},"DOB",-1),Ne={class:"mb-10 fv-row"},we=e("label",{class:"form-label"},"Gender",-1),Se=e("option",{value:""},"Choose Gender",-1),Ve=e("option",{value:"Male"},"Male",-1),De=e("option",{value:"Female"},"Female",-1),Oe=e("option",{value:"Other"},"Other",-1),je=[Se,Ve,De,Oe],Fe={class:"mb-10 fv-row"},$e=e("label",{class:"form-label"},"Contact Number",-1),Ee={class:"mb-10 fv-row"},Te=e("label",{class:"form-label"},"Address",-1),Ue={class:"mb-10 fv-row d-flex flex-column"},Ce=e("label",{class:"form-label"},"Status",-1),Be={class:"btn-group w-50","data-kt-buttons":"true","data-kt-buttons-target":"[data-kt-button]"},Me={class:"btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-success active","data-kt-button":"true"},qe=h(" Enabled "),Ae={class:"btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-danger","data-kt-button":"true"},Re=h(" Disabled "),Ie={class:"tab-pane fade",id:"credentials",role:"tab-panel"},Pe={class:"d-flex flex-column gap-7 gap-lg-10"},Ge={class:"card card-flush py-4"},Ke=e("div",{class:"card-header"},[e("div",{class:"card-title"},[e("h2",null,"Credentials")])],-1),Le={class:"card-body pt-0"},Qe={class:"mb-10 fv-row"},ze=e("label",{class:"required form-label"},"Email",-1),He={class:"mb-10 fv-row"},Je=e("label",{class:"required form-label"},"Password",-1),We={class:"d-flex justify-content-end"},Xe=e("span",{class:"indicator-label"},"Save Changes",-1),Ye=e("span",{class:"indicator-progress"},[h("Please wait... "),e("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1),Ze=[Xe,Ye],oa={setup(t){const n=G();n.title="Add Student",n.breadcrumbs=[{link:"/dashboard",title:"Dashboard"},{link:"/students",title:"Students"},{link:"",title:"Add Student"}];const i=U();let o=v(null),r=v(null),m=v(null),l=C({first_name:"",last_name:"",gender:"",dob:"",contact_number:"",address:"",display_picture:null,user:{create:{email:"",password:"",status:1}}});const{resolveClient:u}=B();u();let p=v(null);const{mutate:k,onDone:ea,onError:aa}=M(f),F=()=>{m.validate().then(async function(g){if(g=="Valid"){r.value.setAttribute("data-kt-indicator","on"),r.value.disabled=!0;try{const a=await k(V({},l),{context:{hasUpload:!0}});alert("Student added successfully"),i.push("/students"),r.value.removeAttribute("data-kt-indicator"),r.value.disabled=!1}catch(a){alert("error occurred. please try again later."),console.log(a),r.value.removeAttribute("data-kt-indicator"),r.value.disabled=!1}}else alert("Sorry, looks like there are some errors detected, please try again.")})},x=(g,a,s)=>{if(a=="display_picture")if(s=="set"){let N=new Blob(p.value.files,{type:"image/*"});N.name=p.value.files[0].name,l.display_picture=N}else l.display_picture=null};return q(()=>{m=Q(o.value,{first_name:{validators:{notEmpty:{message:"first name is required"}}},last_name:{validators:{notEmpty:{message:"last name is required"}}},email:{validators:{notEmpty:{message:"email is required"}}},password:{validators:{notEmpty:{message:"password is required"}}}}),K.init(),L.initButtons()}),(g,a)=>(A(),R("div",H,[e("div",J,[e("form",{onSubmit:D(F,["prevent"]),ref_key:"form",ref:o,class:"form fv-plugins-bootstrap5 fv-plugins-framework d-flex flex-column flex-lg-row"},[e("div",X,[e("div",Y,[Z,e("div",ee,[e("div",ae,[te,e("label",ne,[ie,e("input",{ref_key:"display_picture",ref:p,onChange:a[0]||(a[0]=s=>x(s,"display_picture","set")),type:"file",name:"display_picture",accept:".png, .jpg, .jpeg"},null,544),e("input",{type:"hidden",onClick:a[1]||(a[1]=s=>x(s,"display_picture","remove")),name:"display_picture_remove"})]),se,le]),de])])]),e("div",oe,[e("div",re,[ce,e("div",ue,[e("div",me,[e("div",pe,[e("div",be,[ve,e("div",fe,[e("div",_e,[ke,c(e("input",{"onUpdate:modelValue":a[2]||(a[2]=s=>d(l).first_name=s),type:"text",name:"first_name",class:"form-control mb-2",placeholder:"First Name"},null,512),[[b,d(l).first_name]])]),e("div",ge,[he,c(e("input",{"onUpdate:modelValue":a[3]||(a[3]=s=>d(l).last_name=s),type:"text",name:"last_name",class:"form-control mb-2",placeholder:"Last Name"},null,512),[[b,d(l).last_name]])]),e("div",ye,[xe,c(e("input",{"onUpdate:modelValue":a[4]||(a[4]=s=>d(l).dob=s),type:"date",name:"dob",class:"form-control mb-2",placeholder:"Data of Birth"},null,512),[[b,d(l).dob]])]),e("div",Ne,[we,c(e("select",{class:"form-control mb-2","onUpdate:modelValue":a[5]||(a[5]=s=>d(l).gender=s)},je,512),[[I,d(l).gender]])]),e("div",Fe,[$e,c(e("input",{"onUpdate:modelValue":a[6]||(a[6]=s=>d(l).contact_number=s),type:"text",name:"contact_number",class:"form-control mb-2",placeholder:"Contact Number"},null,512),[[b,d(l).contact_number]])]),e("div",Ee,[Te,c(e("textarea",{"onUpdate:modelValue":a[7]||(a[7]=s=>d(l).address=s),type:"text",name:"address",class:"form-control mb-2",placeholder:"Address"},null,512),[[b,d(l).address]])]),e("div",Ue,[Ce,e("div",Be,[e("label",Me,[c(e("input",{"onUpdate:modelValue":a[8]||(a[8]=s=>d(l).user.create.status=s),class:"btn-check",type:"radio",name:"status",checked:"checked",value:1},null,512),[[O,d(l).user.create.status]]),qe]),e("label",Ae,[c(e("input",{"onUpdate:modelValue":a[9]||(a[9]=s=>d(l).user.create.status=s),class:"btn-check",type:"radio",name:"status",value:0},null,512),[[O,d(l).user.create.status]]),Re])])])])])])]),e("div",Ie,[e("div",Pe,[e("div",Ge,[Ke,e("div",Le,[e("div",Qe,[ze,c(e("input",{"onUpdate:modelValue":a[10]||(a[10]=s=>d(l).user.create.email=s),type:"text",name:"email",class:"form-control mb-2",placeholder:"Email"},null,512),[[b,d(l).user.create.email]])]),e("div",He,[Je,c(e("input",{"onUpdate:modelValue":a[11]||(a[11]=s=>d(l).user.create.password=s),type:"password",name:"password",class:"form-control mb-2",placeholder:"Password"},null,512),[[b,d(l).user.create.password]])])])])])])])]),e("div",We,[e("button",{onClick:a[12]||(a[12]=D(s=>d(i).go(-1),["prevent"])),id:"student_create_cancel",class:"btn btn-light me-5"},"Cancel"),e("button",{ref_key:"submitButton",ref:r,type:"submit",id:"submitButton",class:"btn btn-primary"},Ze,512)])])],40,W)])]))}};export{oa as default};