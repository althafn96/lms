var u={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getInstructor"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"instructor"},arguments:[{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"first_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"last_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bio"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"display_picture"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"humanized_created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"locations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:361}};u.loc.source={body:`query getInstructor($slug: String!) {\r
    instructor(slug: $slug) {\r
        id\r
        first_name\r
        last_name\r
        bio\r
        display_picture\r
        humanized_created_at\r
        slug\r
        user {\r
            id\r
            email\r
            status\r
        }\r
        locations {\r
            name\r
            id\r
        }\r
    }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function s(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var n=e.type;n.kind==="NamedType"&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){s(a,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){s(a,i)}),e.definitions&&e.definitions.forEach(function(a){s(a,i)})}var c={};(function(){u.definitions.forEach(function(i){if(i.name){var n=new Set;s(i,n),c[i.name.value]=n}})})();function m(e,i){for(var n=0;n<e.definitions.length;n++){var a=e.definitions[n];if(a.name&&a.name.value==i)return a}}function k(e,i){var n={kind:e.kind,definitions:[m(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var a=c[i]||new Set,l=new Set,r=new Set;for(a.forEach(function(t){r.add(t)});r.size>0;){var o=r;r=new Set,o.forEach(function(t){if(!l.has(t)){l.add(t);var d=c[t]||new Set;d.forEach(function(v){r.add(v)})}})}return l.forEach(function(t){var d=m(e,t);d&&n.definitions.push(d)}),n}k(u,"getInstructor");export{u as d};
