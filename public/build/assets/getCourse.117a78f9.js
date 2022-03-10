var k={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"updateCourse"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"name"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"short_description"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"long_description"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"prerequisites"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"thumbnail"}},type:{kind:"NamedType",name:{kind:"Name",value:"Upload"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"cover_img"}},type:{kind:"NamedType",name:{kind:"Name",value:"Upload"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"status"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"is_featured"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"categories"}},type:{kind:"NamedType",name:{kind:"Name",value:"CategoryBelongsToMany"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"skills"}},type:{kind:"NamedType",name:{kind:"Name",value:"SkillBelongsToMany"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"instructors"}},type:{kind:"NamedType",name:{kind:"Name",value:"InstructorBelongsToMany"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"faqs"}},type:{kind:"NamedType",name:{kind:"Name",value:"FaqBelongsToMany"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"modules"}},type:{kind:"NamedType",name:{kind:"Name",value:"ModuleHasMany"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"locations"}},type:{kind:"NamedType",name:{kind:"Name",value:"LocationBelongsToMany"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"updateCourse"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}},{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"name"},value:{kind:"Variable",name:{kind:"Name",value:"name"}}},{kind:"ObjectField",name:{kind:"Name",value:"short_description"},value:{kind:"Variable",name:{kind:"Name",value:"short_description"}}},{kind:"ObjectField",name:{kind:"Name",value:"long_description"},value:{kind:"Variable",name:{kind:"Name",value:"long_description"}}},{kind:"ObjectField",name:{kind:"Name",value:"prerequisites"},value:{kind:"Variable",name:{kind:"Name",value:"prerequisites"}}},{kind:"ObjectField",name:{kind:"Name",value:"thumbnail"},value:{kind:"Variable",name:{kind:"Name",value:"thumbnail"}}},{kind:"ObjectField",name:{kind:"Name",value:"cover_img"},value:{kind:"Variable",name:{kind:"Name",value:"cover_img"}}},{kind:"ObjectField",name:{kind:"Name",value:"status"},value:{kind:"Variable",name:{kind:"Name",value:"status"}}},{kind:"ObjectField",name:{kind:"Name",value:"is_featured"},value:{kind:"Variable",name:{kind:"Name",value:"is_featured"}}},{kind:"ObjectField",name:{kind:"Name",value:"categories"},value:{kind:"Variable",name:{kind:"Name",value:"categories"}}},{kind:"ObjectField",name:{kind:"Name",value:"skills"},value:{kind:"Variable",name:{kind:"Name",value:"skills"}}},{kind:"ObjectField",name:{kind:"Name",value:"instructors"},value:{kind:"Variable",name:{kind:"Name",value:"instructors"}}},{kind:"ObjectField",name:{kind:"Name",value:"faqs"},value:{kind:"Variable",name:{kind:"Name",value:"faqs"}}},{kind:"ObjectField",name:{kind:"Name",value:"modules"},value:{kind:"Variable",name:{kind:"Name",value:"modules"}}},{kind:"ObjectField",name:{kind:"Name",value:"locations"},value:{kind:"Variable",name:{kind:"Name",value:"locations"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:1099}};k.loc.source={body:`mutation updateCourse (\r
    $id: ID!,\r
    $name: String!,\r
    $short_description: String,\r
    $long_description: String,\r
    $prerequisites: String,\r
    $thumbnail: Upload,\r
    $cover_img: Upload,\r
    $status: Int!,\r
    $is_featured: Int,\r
    $categories: CategoryBelongsToMany,\r
    $skills: SkillBelongsToMany,\r
    $instructors: InstructorBelongsToMany,\r
    $faqs: FaqBelongsToMany,\r
    $modules: ModuleHasMany,\r
    $locations: LocationBelongsToMany\r
) {\r
    updateCourse (\r
        id: $id,\r
        input: {\r
            name: $name,\r
            short_description: $short_description,\r
            long_description: $long_description,\r
            prerequisites: $prerequisites,\r
            thumbnail: $thumbnail,\r
            cover_img: $cover_img,\r
            status: $status,\r
            is_featured: $is_featured,\r
            categories: $categories,\r
            skills: $skills,\r
            instructors: $instructors,\r
            faqs: $faqs,\r
            modules: $modules,\r
            locations: $locations\r
        }\r
    ) {\r
        id\r
        name\r
    }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function s(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var n=e.type;n.kind==="NamedType"&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){s(a,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){s(a,i)}),e.definitions&&e.definitions.forEach(function(a){s(a,i)})}var v={};(function(){k.definitions.forEach(function(i){if(i.name){var n=new Set;s(i,n),v[i.name.value]=n}})})();function N(e,i){for(var n=0;n<e.definitions.length;n++){var a=e.definitions[n];if(a.name&&a.name.value==i)return a}}function p(e,i){var n={kind:e.kind,definitions:[N(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var a=v[i]||new Set,l=new Set,t=new Set;for(a.forEach(function(d){t.add(d)});t.size>0;){var u=t;t=new Set,u.forEach(function(d){if(!l.has(d)){l.add(d);var r=v[d]||new Set;r.forEach(function(o){t.add(o)})}})}return l.forEach(function(d){var r=N(e,d);r&&n.definitions.push(r)}),n}p(k,"updateCourse");var c={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getCourse"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"course"},arguments:[{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"short_description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"long_description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbnail"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cover_img"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"is_featured"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"skills"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"faqs"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"question"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"answer"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"instructors"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"full_name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"locations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"categories"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"modules"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lessons"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"period"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"files"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"getPathUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}]}}]}}]}}],loc:{start:0,end:944}};c.loc.source={body:`query getCourse($slug: String!) {\r
    course(slug: $slug) {\r
        id\r
        name\r
        short_description\r
        long_description\r
        thumbnail\r
        cover_img\r
        status\r
        is_featured\r
        slug\r
        skills {\r
            id\r
            title\r
        }\r
        faqs {\r
            id\r
            question\r
            answer\r
        }\r
        instructors {\r
            id\r
            full_name\r
        }\r
        locations {\r
            id\r
            name\r
        }\r
        categories {\r
            id\r
            name\r
        }\r
        modules {\r
            id\r
            name\r
            description\r
            lessons {\r
                id\r
                title\r
                description\r
                period\r
                files {\r
                    id\r
                    getPathUrl\r
                    name\r
                }\r
            }\r
        }\r
    }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function m(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var n=e.type;n.kind==="NamedType"&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){m(a,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){m(a,i)}),e.definitions&&e.definitions.forEach(function(a){m(a,i)})}var f={};(function(){c.definitions.forEach(function(i){if(i.name){var n=new Set;m(i,n),f[i.name.value]=n}})})();function g(e,i){for(var n=0;n<e.definitions.length;n++){var a=e.definitions[n];if(a.name&&a.name.value==i)return a}}function b(e,i){var n={kind:e.kind,definitions:[g(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var a=f[i]||new Set,l=new Set,t=new Set;for(a.forEach(function(d){t.add(d)});t.size>0;){var u=t;t=new Set,u.forEach(function(d){if(!l.has(d)){l.add(d);var r=f[d]||new Set;r.forEach(function(o){t.add(o)})}})}return l.forEach(function(d){var r=g(e,d);r&&n.definitions.push(r)}),n}b(c,"getCourse");export{k as a,c as d};
