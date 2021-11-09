"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8313],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4938:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],s={id:"text",title:"Text"},p=void 0,l={unversionedId:"api-references/components/fields/text",id:"version-2.xx.xx/api-references/components/fields/text",isDocsHomePage:!1,title:"Text",description:"This field lets you show basic text. It uses Ant Design's `` component.",source:"@site/versioned_docs/version-2.xx.xx/api-references/components/fields/text.md",sourceDirName:"api-references/components/fields",slug:"/api-references/components/fields/text",permalink:"/docs/api-references/components/fields/text",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/api-references/components/fields/text.md",version:"2.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"text",title:"Text"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"Tag",permalink:"/docs/api-references/components/fields/tag"},next:{title:"Number",permalink:"/docs/api-references/components/fields/number"}},c=[{value:"Usage",id:"usage",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"Properties",id:"properties",children:[]}]}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This field lets you show basic text. It uses Ant Design's ",(0,i.kt)("a",{parentName:"p",href:"https://ant.design/components/typography/#Typography.Text"},(0,i.kt)("inlineCode",{parentName:"a"},"<Typography.Text>"))," component."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Let's see how to use it in a basic list page:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import {\n    List,\n    // highlight-next-line\n    TextField,\n    Table,\n    useTable,\n    IResourceComponentsProps,\n    useMany,\n} from "@pankod/refine";\n\nexport const PostList: React.FC<IResourceComponentsProps> = (props) => {\n    const { tableProps } = useTable<IPost>();\n\n    const categoryIds =\n        tableProps?.dataSource?.map((item) => item.category.id) ?? [];\n\n    const { data: categoriesData, isLoading } = useMany<ICategory>({\n        resource: "categories",\n        ids: categoryIds,\n        queryOptions: {\n            enabled: categoryIds.length > 0,\n        },\n    });\n\n    return (\n        <List {...props}>\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="title" title="title" />\n                <Table.Column\n                    dataIndex={["category", "id"]}\n                    title="category"\n                    render={(value: string) => {\n                        // highlight-start\n                        if (isLoading) {\n                            return <TextField value="Loading..." />;\n                        }\n\n                        return (\n                            <TextField strong\n                                value={\n                                    categoriesData?.data.find(\n                                        (item) => item.id === value,\n                                    )?.title\n                                }\n                            />\n                        );\n                        // highlight-end\n                    }}\n                />\n            </Table>\n        </List>\n    );\n};\n\ninterface ICategory {\n    id: string;\n    title: string;\n}\n\ninterface IPost {\n    id: string;\n    category: ICategory;\n}\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Table columns already render their data as text by default. If the rendered data is in text form and its text field won't be customized with any of Ant Design ",(0,i.kt)("inlineCode",{parentName:"p"},"<Typography.Text>")," properties, there isn't any need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"<TextField>")," in a column's render function."))),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"value"),(0,i.kt)("td",{parentName:"tr",align:null},"Markdown data to render"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://ant.design/components/typography/#Typography.Text"},"Refer to Text props ","\u2192")))}u.isMDXComponent=!0}}]);