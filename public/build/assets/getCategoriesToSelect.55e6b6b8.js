var s={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getCategoriesToSelect"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"page"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"categories"},arguments:[{kind:"Argument",name:{kind:"Name",value:"page"},value:{kind:"Variable",name:{kind:"Name",value:"page"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"paginatorInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hasMorePages"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:209}};s.loc.source={body:`query getCategoriesToSelect ($page: Int) {\r
    categories (page: $page) {\r
        data {\r
            id\r
            name\r
        }\r
        paginatorInfo {\r
            hasMorePages\r
        }\r
    }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function d(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var n=e.type;n.kind==="NamedType"&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){d(a,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){d(a,i)}),e.definitions&&e.definitions.forEach(function(a){d(a,i)})}var c={};(function(){s.definitions.forEach(function(i){if(i.name){var n=new Set;d(i,n),c[i.name.value]=n}})})();function f(e,i){for(var n=0;n<e.definitions.length;n++){var a=e.definitions[n];if(a.name&&a.name.value==i)return a}}function m(e,i){var n={kind:e.kind,definitions:[f(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var a=c[i]||new Set,l=new Set,r=new Set;for(a.forEach(function(t){r.add(t)});r.size>0;){var u=r;r=new Set,u.forEach(function(t){if(!l.has(t)){l.add(t);var o=c[t]||new Set;o.forEach(function(v){r.add(v)})}})}return l.forEach(function(t){var o=f(e,t);o&&n.definitions.push(o)}),n}m(s,"getCategoriesToSelect");export{s as d};