import{u as O,y as p,N as $,a0 as j,k as E,g as F,i as A,l as q,m as e,O as V,n as S,q as o,P as _,Q as b,x as L}from"./vendor.9ac200cc.js";import{d as R}from"./getLocationsToSelect.34aa23e1.js";import{d as U}from"./getCoursesToSelect.708a5cf8.js";import{u as P,a as M}from"./app.52277fe1.js";import"./sweetalert2.1b53689f.js";import{s as w}from"./vue-multiselect.esm.f7127d48.js";import{v as Q}from"./useValidator.4107c1a7.js";import"./Bootstrap5.88c59918.js";var k={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"addBatch"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"name"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"commences_on"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"completes_on"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"enrollment_closes_on"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"course"}},type:{kind:"NamedType",name:{kind:"Name",value:"CourseBelongsTo"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"location"}},type:{kind:"NamedType",name:{kind:"Name",value:"LocationBelongsTo"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"alloted_count"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createBatch"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"name"},value:{kind:"Variable",name:{kind:"Name",value:"name"}}},{kind:"ObjectField",name:{kind:"Name",value:"commences_on"},value:{kind:"Variable",name:{kind:"Name",value:"commences_on"}}},{kind:"ObjectField",name:{kind:"Name",value:"completes_on"},value:{kind:"Variable",name:{kind:"Name",value:"completes_on"}}},{kind:"ObjectField",name:{kind:"Name",value:"enrollment_closes_on"},value:{kind:"Variable",name:{kind:"Name",value:"enrollment_closes_on"}}},{kind:"ObjectField",name:{kind:"Name",value:"course"},value:{kind:"Variable",name:{kind:"Name",value:"course"}}},{kind:"ObjectField",name:{kind:"Name",value:"location"},value:{kind:"Variable",name:{kind:"Name",value:"location"}}},{kind:"ObjectField",name:{kind:"Name",value:"alloted_count"},value:{kind:"Variable",name:{kind:"Name",value:"alloted_count"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:600}};k.loc.source={body:`mutation addBatch (\r
    $name: String!,\r
    $commences_on: String,\r
    $completes_on: String,\r
    $enrollment_closes_on: String,\r
    $course: CourseBelongsTo,\r
    $location: LocationBelongsTo,\r
    $alloted_count: Int,\r
) {\r
    createBatch (\r
        input: {\r
            name: $name,\r
            commences_on: $commences_on,\r
            completes_on: $completes_on,\r
            enrollment_closes_on: $enrollment_closes_on,\r
            course: $course,\r
            location: $location,\r
            alloted_count: $alloted_count,\r
        }\r
    ) {\r
        id\r
        name\r
    }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function h(a,l){if(a.kind==="FragmentSpread")l.add(a.name.value);else if(a.kind==="VariableDefinition"){var i=a.type;i.kind==="NamedType"&&l.add(i.name.value)}a.selectionSet&&a.selectionSet.selections.forEach(function(c){h(c,l)}),a.variableDefinitions&&a.variableDefinitions.forEach(function(c){h(c,l)}),a.definitions&&a.definitions.forEach(function(c){h(c,l)})}var g={};(function(){k.definitions.forEach(function(l){if(l.name){var i=new Set;h(l,i),g[l.name.value]=i}})})();function x(a,l){for(var i=0;i<a.definitions.length;i++){var c=a.definitions[i];if(c.name&&c.name.value==l)return c}}function G(a,l){var i={kind:a.kind,definitions:[x(a,l)]};a.hasOwnProperty("loc")&&(i.loc=a.loc);var c=g[l]||new Set,d=new Set,m=new Set;for(c.forEach(function(r){m.add(r)});m.size>0;){var n=m;m=new Set,n.forEach(function(r){if(!d.has(r)){d.add(r);var u=g[r]||new Set;u.forEach(function(y){m.add(y)})}})}return d.forEach(function(r){var u=x(a,r);u&&i.definitions.push(u)}),i}G(k,"addBatch");const I={class:"content d-flex flex-column flex-column-fluid",id:"kt_content"},z={class:"container-xxl",id:"kt_content_container"},K=["onSubmit"],H={class:"d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10"},J={class:"card card-flush py-4"},W=e("div",{class:"card-header"},[e("div",{class:"card-title"},[e("h2",null,"Courses")])],-1),X={class:"card-body text-center pt-0"},Y={class:"mb-10 fv-row"},Z={class:"card card-flush py-4"},ee=e("div",{class:"card-header"},[e("div",{class:"card-title"},[e("h2",null,"Locations")])],-1),ne={class:"card-body text-center pt-0"},ae={class:"mb-10 fv-row"},te={class:"d-flex flex-column flex-row-fluid gap-7 gap-lg-10"},oe={class:"d-flex flex-column gap-7 gap-lg-10"},le={class:"card card-flush py-4"},ie=e("div",{class:"card-header"},[e("div",{class:"card-title"},[e("h2",null,"General")])],-1),se={class:"card-body pt-0"},ce={class:"mb-10 fv-row"},de=e("label",{class:"required form-label"},"Name",-1),re={class:"mb-10 fv-row"},me=e("label",{class:"form-label"},"Commences On",-1),ue={class:"mb-10 fv-row"},ve=e("label",{class:"form-label"},"Completes On",-1),fe={class:"mb-10 fv-row"},pe=e("label",{class:"form-label"},"Alloted Count",-1),_e={class:"mb-10 fv-row"},be=e("label",{class:"form-label"},"Enrollments Closes On",-1),ke={class:"d-flex justify-content-end"},he=e("span",{class:"indicator-label"},"Save Changes",-1),ye=e("span",{class:"indicator-progress"},[L("Please wait... "),e("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1),ge=[he,ye],$e={setup(a){const l=P();l.title="Add Batch",l.breadcrumbs=[{link:"/dashboard",title:"Dashboard"},{link:"/batches",title:"Batches"},{link:"",title:"Add Batch"}];const i=O();let c=p(null),d=p(null),m=p(null),n=$({name:"",commences_on:null,completes_on:null,enrollments_closes_on:null,alloted_count:0,selected_location:null,selected_course:null,location:{connect:null},course:{connect:null}}),r=p([]),u=p([]);const{resolveClient:y}=j(),N=y(),{mutate:B,onDone:Ne,onError:Ve}=E(k),C=()=>{if(n.selected_course==null){alert("Course is required!");return}n.selected_course&&(n.course.connect=n.selected_course.id),n.selected_location&&(n.location.connect=n.selected_location.id),m.validate().then(async function(v){if(v=="Valid"){d.value.setAttribute("data-kt-indicator","on"),d.value.disabled=!0;try{const t=await B(n);alert("batch added successfully"),i.push("/batches"),d.value.removeAttribute("data-kt-indicator"),d.value.disabled=!1}catch(t){alert("error occurred. please try again later."),console.log(t),d.value.removeAttribute("data-kt-indicator"),d.value.disabled=!1}}else alert("Sorry, looks like there are some errors detected, please try again.")})},D=async()=>{const{data:v,loading:t,fetch:s}=await N.query({query:R},{fetchPolicy:"network-only"});r.value=v.locations.data.map(function(f){return{id:f.id,name:f.name}})},T=async()=>{const{data:v,loading:t,fetch:s}=await N.query({query:U},{fetchPolicy:"network-only"});u.value=v.courses.data.map(function(f){return{id:f.id,name:f.name}})};return F(()=>{m=Q(c.value,{name:{validators:{notEmpty:{message:"Batch Name is required"}}}}),M.initButtons()}),(v,t)=>(A(),q("div",I,[e("div",z,[e("form",{onSubmit:V(C,["prevent"]),ref_key:"form",ref:c,class:"form fv-plugins-bootstrap5 fv-plugins-framework d-flex flex-column flex-lg-row"},[e("div",H,[e("div",J,[W,e("div",X,[e("div",Y,[S(o(w),{modelValue:o(n).selected_course,"onUpdate:modelValue":t[0]||(t[0]=s=>o(n).selected_course=s),onSearchChange:T,"track-by":"id",label:"name","show-labels":!1,multiple:!1,"close-on-select":!0,noOptionsText:"Enter Course",placeholder:"Search a Course",options:o(u)},null,8,["modelValue","options"])])])]),e("div",Z,[ee,e("div",ne,[e("div",ae,[S(o(w),{modelValue:o(n).selected_location,"onUpdate:modelValue":t[1]||(t[1]=s=>o(n).selected_location=s),onSearchChange:D,"track-by":"id",label:"name","show-labels":!1,multiple:!1,"close-on-select":!0,noOptionsText:"Enter Location",placeholder:"Search a Location",options:o(r)},null,8,["modelValue","options"])])])])]),e("div",te,[e("div",oe,[e("div",le,[ie,e("div",se,[e("div",ce,[de,_(e("input",{"onUpdate:modelValue":t[2]||(t[2]=s=>o(n).name=s),type:"text",name:"name",class:"form-control mb-2",placeholder:"Batch Name"},null,512),[[b,o(n).name]])]),e("div",re,[me,_(e("input",{"onUpdate:modelValue":t[3]||(t[3]=s=>o(n).commences_on=s),type:"date",name:"commences_on",class:"form-control mb-2",placeholder:"Commencing Date"},null,512),[[b,o(n).commences_on]])]),e("div",ue,[ve,_(e("input",{"onUpdate:modelValue":t[4]||(t[4]=s=>o(n).completes_on=s),type:"date",name:"completes_on",class:"form-control mb-2",placeholder:"Completing Date"},null,512),[[b,o(n).completes_on]])]),e("div",fe,[pe,_(e("input",{"onUpdate:modelValue":t[5]||(t[5]=s=>o(n).alloted_count=s),type:"number",name:"alloted_count",class:"form-control mb-2",placeholder:"Alloted Students Count"},null,512),[[b,o(n).alloted_count]])]),e("div",_e,[be,_(e("input",{"onUpdate:modelValue":t[6]||(t[6]=s=>o(n).enrollments_closes_on=s),type:"date",name:"enrollments_closes_on",class:"form-control mb-2",placeholder:"Enrollments Closing Date"},null,512),[[b,o(n).enrollments_closes_on]])])])])]),e("div",ke,[e("button",{onClick:t[7]||(t[7]=V(s=>o(i).go(-1),["prevent"])),id:"category_create_cancel",class:"btn btn-light me-5"},"Cancel"),e("button",{ref_key:"submitButton",ref:d,type:"submit",id:"submitButton",class:"btn btn-primary"},ge,512)])])],40,K)])]))}};export{$e as default};