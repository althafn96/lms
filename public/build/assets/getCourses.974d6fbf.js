var m={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getCourses"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"page"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"name"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"courses"},arguments:[{kind:"Argument",name:{kind:"Name",value:"page"},value:{kind:"Variable",name:{kind:"Name",value:"page"}}},{kind:"Argument",name:{kind:"Name",value:"name"},value:{kind:"Variable",name:{kind:"Name",value:"name"}}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"ListValue",values:[{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"column"},value:{kind:"EnumValue",value:"CREATED_AT"}},{kind:"ObjectField",name:{kind:"Name",value:"order"},value:{kind:"EnumValue",value:"DESC"}}]}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbnail"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"short_description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"humanized_created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"humanized_updated_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"paginatorInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"currentPage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"firstItem"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasMorePages"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lastItem"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lastPage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"perPage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"total"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:546}};m.loc.source={body:`query getCourses ($page: Int, $name: String) {\r
    courses (page: $page, name: $name, orderBy: [{ column: CREATED_AT, order: DESC }]) {\r
        data {\r
            name\r
            thumbnail\r
            short_description\r
            humanized_created_at\r
            humanized_updated_at\r
            slug\r
        }\r
        paginatorInfo {\r
            count\r
            currentPage\r
            firstItem\r
            hasMorePages\r
            lastItem\r
            lastPage\r
            perPage\r
            total\r
        }\r
    }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function l(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){l(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){l(a,n)}),e.definitions&&e.definitions.forEach(function(a){l(a,n)})}var s={};(function(){m.definitions.forEach(function(n){if(n.name){var i=new Set;l(n,i),s[n.name.value]=i}})})();function o(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function k(e,n){var i={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=s[n]||new Set,u=new Set,d=new Set;for(a.forEach(function(t){d.add(t)});d.size>0;){var c=d;d=new Set,c.forEach(function(t){if(!u.has(t)){u.add(t);var r=s[t]||new Set;r.forEach(function(v){d.add(v)})}})}return u.forEach(function(t){var r=o(e,t);r&&i.definitions.push(r)}),i}k(m,"getCourses");export{m as d};
