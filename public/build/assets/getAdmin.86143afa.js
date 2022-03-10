var u={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getAdmin"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"admin"},arguments:[{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"first_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"last_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"display_picture"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"humanized_created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:272}};u.loc.source={body:`query getAdmin($slug: String!) {\r
    admin(slug: $slug) {\r
        id\r
        first_name\r
        last_name\r
        display_picture\r
        humanized_created_at\r
        slug\r
        user {\r
            id\r
            email\r
            status\r
        }\r
    }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function l(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var n=e.type;n.kind==="NamedType"&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){l(a,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){l(a,i)}),e.definitions&&e.definitions.forEach(function(a){l(a,i)})}var m={};(function(){u.definitions.forEach(function(i){if(i.name){var n=new Set;l(i,n),m[i.name.value]=n}})})();function c(e,i){for(var n=0;n<e.definitions.length;n++){var a=e.definitions[n];if(a.name&&a.name.value==i)return a}}function f(e,i){var n={kind:e.kind,definitions:[c(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var a=m[i]||new Set,s=new Set,r=new Set;for(a.forEach(function(t){r.add(t)});r.size>0;){var o=r;r=new Set,o.forEach(function(t){if(!s.has(t)){s.add(t);var d=m[t]||new Set;d.forEach(function(v){r.add(v)})}})}return s.forEach(function(t){var d=c(e,t);d&&n.definitions.push(d)}),n}f(u,"getAdmin");export{u as d};
