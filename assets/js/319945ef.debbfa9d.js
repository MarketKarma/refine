"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[815],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(l,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52414:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o=["components"],s={id:"useExport",title:"useExport"},l=void 0,p={unversionedId:"api-references/hooks/import-export/useExport",id:"version-2.xx.xx/api-references/hooks/import-export/useExport",isDocsHomePage:!1,title:"useExport",description:"useExport hook allows you to make your resources exportable.",source:"@site/versioned_docs/version-2.xx.xx/api-references/hooks/import-export/useExport.md",sourceDirName:"api-references/hooks/import-export",slug:"/api-references/hooks/import-export/useExport",permalink:"/docs/api-references/hooks/import-export/useExport",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/api-references/hooks/import-export/useExport.md",version:"2.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"useExport",title:"useExport"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"useImport",permalink:"/docs/api-references/hooks/import-export/useImport"},next:{title:"useModal",permalink:"/docs/api-references/hooks/ui/useModal"}},d=[{value:"Usage",id:"usage",children:[{value:"Handling Relational Data",id:"handling-relational-data",children:[]}]},{value:"API Reference",id:"api-reference",children:[{value:"<code>useExport</code> Options",id:"useexport-options",children:[]},{value:"<code>useExport</code> Return Values",id:"useexport-return-values",children:[]},{value:"Type Parameters",id:"type-parameters",children:[]}]}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useExport")," hook allows you to make your resources exportable."),(0,i.kt)("p",null,"This hook accepts ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alexcaza/export-to-csv"},(0,i.kt)("inlineCode",{parentName:"a"},"export-to-csv")),"'s options to create ",(0,i.kt)("inlineCode",{parentName:"p"},"CSV")," files."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { useExport } from "@pankod/refine";\n\nconst { triggerExport, isLoading } = useExport(options);\n')),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Let's say that we have an endpoint like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="https://api.fake-rest.refine.dev/posts"',title:'"https://api.fake-rest.refine.dev/posts"'},'[\n    {\n        "id": 1,\n        "title": "Tempora nesciunt sunt temporibus.",\n        "slug": "quisquam-in-dolore",\n        "content": "Id qui nostrum hic nostrum voluptatem...",\n        "status": "rejected",\n    },\n    {\n        "id": 2,\n        "title": "Omnis est quis reiciendis blanditiis.",\n        "slug": "deleniti-voluptas-tempore",\n        "content": "Laudantium eos ut consequuntur dignissimos...",\n        "status": "published",\n    },\n    ...\n]\n')),(0,i.kt)("p",null,"To enable export functionality for this endpoint, we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"useExport")," hook to create an export button."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import {\n    List,\n    Table,\n    useTable,\n// highlight-start\n    useExport,\n    ExportButton,\n// highlight-end\n} from "@pankod/refine";\n\nexport const PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n// highlight-next-line\n    const { triggerExport, isLoading } = useExport<IPost>();\n\n    return (\n        <List\n            pageHeaderProps={{\n                extra: (\n// highlight-next-line\n                    <ExportButton onClick={triggerExport} loading={isLoading} />\n                ),\n            }}\n        >\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="id" title="ID" />\n                <Table.Column dataIndex="title" title="Title" />\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {\n    id: string;\n    title: string;\n    content: string;\n    slug: string;\n    status: "published" | "draft" | "rejected";\n}\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In the examples, instead of ",(0,i.kt)("a",{parentName:"p",href:"https://ant.design/components/button/"},"<Button",">"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-references/components/buttons/export-button"},"<ExportButton",">")," is used. ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-references/components/buttons/export-button"},"<ExportButton",">")," is nothing more than a default Ant Design ",(0,i.kt)("a",{parentName:"p",href:"https://ant.design/components/button/"},"<Button",">")," with an icon and a default text.  "),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"/docs/api-references/components/buttons/export-button"},"Refer to ExportButton docs for more detailed information. ","\u2192")))),(0,i.kt)("br",null),(0,i.kt)("p",null,"When the user clicks this button, ",(0,i.kt)("inlineCode",{parentName:"p"},"triggerExport")," fetches all the data in the resource and downloads it as a ",(0,i.kt)("inlineCode",{parentName:"p"},"CSV")," file with these contents in it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv",metastring:'title="Posts-2021-06-29-14-40-14.csv"',title:'"Posts-2021-06-29-14-40-14.csv"'},'id,title,slug,content,status,categoryId,userId\n1,"Tempora nesciunt sunt temporibus.","quisquam-in-dolore","Id qui nostrum hic nostrum voluptatem...","rejected",2,1\n2,"Omnis est quis reiciendis blanditiis.","deleniti-voluptas-tempore","Laudantium eos ut consequuntur dignissimos...","published",24,39\n...\n')),(0,i.kt)("h3",{id:"handling-relational-data"},"Handling Relational Data"),(0,i.kt)("p",null,"You can run a mapping function for all entries before they are saved. This is useful in cases of being required to reference relational data or saving files in a specific way to process them in different applications etc.\nThis mapping function is similar to the mapping function of ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-references/hooks/import-export/useImport#handling-relational-data"},(0,i.kt)("inlineCode",{parentName:"a"},"useImport")),"."),(0,i.kt)("p",null,"Let's assume that we have this endpoint with some relational data in it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n {\n    "id": 2,\n    "title": "Et architecto et aut ex.",\n    "slug": "dolorum-et-quia",\n    "content": "Reprehenderit qui voluptatem in cum qui odio et.",\n    "category": {\n      "id": 35\n    },\n    "user": {\n      "id": 10\n    },\n    "status": "published",\n  },\n  {\n    "id": 3,\n    "title": "Quam maiores officia suscipit quia vel asperiores nisi non excepturi.",\n    "slug": "delectus-laborum-provident",\n    "content": "Placeat eos esse.",\n    "category": {\n      "id": 4\n    },\n    "user": {\n      "id": 50\n    },\n    "status": "published",\n  },\n  ...\n]\n')),(0,i.kt)("p",null,"We have the ",(0,i.kt)("inlineCode",{parentName:"p"},"category")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," fields as possible relational data keys. Their data is out of the responsibility of this export operation. We want to save their id's without any other related data. It may be required to export and backup those entities separately."),(0,i.kt)("p",null,"We can save ",(0,i.kt)("inlineCode",{parentName:"p"},"category.id")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"categoryId")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"user.id")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"userId"),". Thus using a mapping function that looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const { triggerExport, isLoading } = useExport<IPost>({\n    mapData: (item) => {\n        return {\n            id: item.id,\n            title: item.title,\n            slug: item.slug,\n            content: item.content,\n            status: item.status,\n            categoryId: item.category.id,\n            userId: item.user.id,\n        };\n    },\n});\n\n\ninterface ICategory {\n    id: string;\n    title: string;\n}\n\ninterface IUser {\n    id: string;\n}\n\ninterface IPost {\n    id: string;\n    title: string;\n    content: string;\n    slug: string;\n    status: "published" | "draft" | "rejected";\n    category: ICategory;\n    user: IUser;\n}\n')),(0,i.kt)("p",null,"Such an ",(0,i.kt)("inlineCode",{parentName:"p"},"IPost")," may should work fine:"),(0,i.kt)("p",null,"This is all you need to handle mapping."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can pass more options to further customize the exporting process.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alexcaza/export-to-csv"},"Refer to export-to-csv docs for more detailed information. ","\u2192")))),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("h3",{id:"useexport-options"},(0,i.kt)("inlineCode",{parentName:"h3"},"useExport")," Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"resourceName"),(0,i.kt)("td",{parentName:"tr",align:null},"Default resource name this button imports to. Inferred from route by default"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mapData"),(0,i.kt)("td",{parentName:"tr",align:null},"A mapping function that runs for every record. Mapped data will be included in the file contents"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<TItem, TVariables>(item: TItem, index?: number, items?: TItem[]): TVariables;"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,i.kt)("td",{parentName:"tr",align:null},"Requests to fetch data are made as batches by page size. By default, it is 20. Used for ",(0,i.kt)("inlineCode",{parentName:"td"},"getList")," method of ",(0,i.kt)("inlineCode",{parentName:"td"},"DataProvider")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sorter"),(0,i.kt)("td",{parentName:"tr",align:null},"Sorts  records"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api-references/interfaceReferences#crudsorting"},(0,i.kt)("inlineCode",{parentName:"a"},"CrudSorting"))," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"filter"),(0,i.kt)("td",{parentName:"tr",align:null},"Filters records"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api-references/interfaceReferences#crudfilters"},(0,i.kt)("inlineCode",{parentName:"a"},"CrudFilters"))," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"exportOptions"),(0,i.kt)("td",{parentName:"tr",align:null},"Used for exporting options"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/alexcaza/export-to-csv#api"},(0,i.kt)("inlineCode",{parentName:"a"},"Options"))," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"metaData"),(0,i.kt)("td",{parentName:"tr",align:null},"Metadata query for ",(0,i.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api-references/interfaceReferences#metadataquery"},(0,i.kt)("inlineCode",{parentName:"a"},"MetaDataQuery")))))),(0,i.kt)("h3",{id:"useexport-return-values"},(0,i.kt)("inlineCode",{parentName:"h3"},"useExport")," Return Values"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"isLoading"),(0,i.kt)("td",{parentName:"tr",align:null},"Shows true when there is an export process"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"triggerExport"),(0,i.kt)("td",{parentName:"tr",align:null},"When invoked, starts the exporting process"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"async () => void"))))),(0,i.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Desription"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TData"),(0,i.kt)("td",{parentName:"tr",align:null},"Result type of the data query type that extends ",(0,i.kt)("a",{parentName:"td",href:"/docs/api-references/interfaceReferences#baserecord"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api-references/interfaceReferences#baserecord"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TVariables"),(0,i.kt)("td",{parentName:"tr",align:null},"Values for params"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))))}m.isMDXComponent=!0}}]);