"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6976],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38658:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return u},default:function(){return k}});var a=n(22122),o=n(19756),r=(n(67294),n(3905)),i=n(43091),d=n(48577),p=n(4648),l=["components"],s={id:"show",title:"Show"},c=void 0,m={unversionedId:"api-references/components/basic-views/show",id:"api-references/components/basic-views/show",isDocsHomePage:!1,title:"Show",description:"`` provides us a layout for displaying the page. It does not contain any logic but adds extra functionalities like a refresh button or giving title to the page.",source:"@site/docs/api-references/components/basic-views/show.md",sourceDirName:"api-references/components/basic-views",slug:"/api-references/components/basic-views/show",permalink:"/docs/next/api-references/components/basic-views/show",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/api-references/components/basic-views/show.md",version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"show",title:"Show"},sidebar:"someSidebar",previous:{title:"Create",permalink:"/docs/next/api-references/components/basic-views/create"},next:{title:"Edit",permalink:"/docs/next/api-references/components/basic-views/edit"}},u=[{value:"Properties",id:"properties",children:[{value:"<code>canDelete</code> and <code>canEdit</code>",id:"candelete-and-canedit",children:[]},{value:"<code>title</code>",id:"title",children:[]},{value:"<code>actionButtons</code>",id:"actionbuttons",children:[]},{value:"<code>isLoading</code>",id:"isloading",children:[]},{value:"<code>pageHeaderProps</code>",id:"pageheaderprops",children:[]},{value:"<code>recordItemId</code>",id:"recorditemid",children:[]},{value:"<code>resource</code>",id:"resource",children:[]}]},{value:"API Reference",id:"api-reference",children:[{value:"Properties",id:"properties-1",children:[]}]}],h={toc:u};function k(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<Show>")," provides us a layout for displaying the page. It does not contain any logic but adds extra functionalities like a refresh button or giving title to the page."),(0,r.kt)("p",null,"We will show what ",(0,r.kt)("inlineCode",{parentName:"p"},"<Show>")," does using properties with examples."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"candelete-and-canedit"},(0,r.kt)("inlineCode",{parentName:"h3"},"canDelete")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"canEdit")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"canDelete")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"canEdit")," allows us to add the delete and edit buttons inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Show>")," component. If the resource has ",(0,r.kt)("inlineCode",{parentName:"p"},"canDelete")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"canEdit")," property refine adds the buttons by default."),(0,r.kt)("p",null,"When clicked on, delete button executes the ",(0,r.kt)("inlineCode",{parentName:"p"},"useDelete")," method provided by the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api-references/providers/data-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"dataProvider"))," and the edit button redirects the user to the record edit page."),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api-references/components/buttons/delete-button"},(0,r.kt)("inlineCode",{parentName:"a"},"<DeleteButton>"))," and the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api-references/components/buttons/edit-button"},(0,r.kt)("inlineCode",{parentName:"a"},"<EditButton>"))," documentation for detailed usage."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Show, usePermissions } from "@pankod/refine";\n\nexport const ShowPage: React.FC = () => {\n    const { data } = usePermissions<string>();\n\n    return (\n        <Show\n            canDelete={data === "admin"}\n            canEdit={data === "editor" || data === "admin"}\n        >\n            ...\n        </Show>\n    );\n};\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/api-references/hooks/auth/usePermissions"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"usePermission")," documentation for detailed usage. ","\u2192")),(0,r.kt)("h3",{id:"title"},(0,r.kt)("inlineCode",{parentName:"h3"},"title")),(0,r.kt)("p",null,"It allows adding a title for the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Show>"),' component. if you don\'t pass title props it uses the "Show" prefix and the singular resource name by default. For example, for the "posts" resource, it will be "Show post".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Show } from "@pankod/refine";\n\nexport const ShowPage: React.FC = () => {\n    return <Show title="Custom Title">...</Show>;\n};\n')),(0,r.kt)("h3",{id:"actionbuttons"},(0,r.kt)("inlineCode",{parentName:"h3"},"actionButtons")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<Show>")," uses the Ant Design ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/card/"},(0,r.kt)("inlineCode",{parentName:"a"},"<Card>"))," component so you can customize the ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," property with the properties of ",(0,r.kt)("inlineCode",{parentName:"p"},"actionButtons"),". By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," property of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Card>")," component shows nothing in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Show>")," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Show, Space, Button } from "@pankod/refine";\n\nexport const ShowPage: React.FC = () => {\n    return (\n        <Show\n            actionButtons={\n                <Space>\n                    <Button type="primary">Custom Button 1</Button>\n                    <Button type="default">Custom Button 2</Button>\n                </Space>\n            }\n        >\n            ...\n        </Show>\n    );\n};\n')),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:d.Z,alt:"actionButton Usage"})),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"isloading"},(0,r.kt)("inlineCode",{parentName:"h3"},"isLoading")),(0,r.kt)("p",null,"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"<Show>")," uses the Ant Design ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/card/"},(0,r.kt)("inlineCode",{parentName:"a"},"<Card>"))," component, the ",(0,r.kt)("inlineCode",{parentName:"p"},"isLoading")," property can be set like the below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useState } from "react";\nimport { Show, Modal, ShowButton, useShow } from "@pankod/refine";\n\nexport const ShowPage: React.FC = () => {\n    const { queryResult } = useShow();\n    const { isLoading } = queryResult;\n\n    return <Show isLoading={isLoading}>...</Show>;\n};\n')),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:p.Z,alt:"isLoading"})),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"pageheaderprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"pageHeaderProps")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<Show>")," uses the Ant Design ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/page-header/#API"},(0,r.kt)("inlineCode",{parentName:"a"},"<PageHeader>"))," components so you can customize it with the properties of ",(0,r.kt)("inlineCode",{parentName:"p"},"pageHeaderProps"),". By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"extra")," property of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<PageHeader>")," component shows ",(0,r.kt)("inlineCode",{parentName:"p"},"<RefreshButton>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<ListButton>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<EditButton>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<DeleteButton>")," based on your resource definition in the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," property you pass to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Show } from "@pankod/refine";\n\nexport const ShowPage: React.FC = () => {\n    return (\n        <Show\n            pageHeaderProps={{\n                onBack: () => console.log("Hello, refine"),\n                subTitle: "Subtitle",\n            }}\n        >\n            ...\n        </Show>\n    );\n};\n')),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:i.Z,alt:"pageHeaderProps Usage"})),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"recorditemid"},(0,r.kt)("inlineCode",{parentName:"h3"},"recordItemId")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<Show>")," component reads the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," information from the route by default. ",(0,r.kt)("inlineCode",{parentName:"p"},"recordItemId")," is used when it cannot read from the URL (when used on a custom page, modal or drawer)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useState } from "react";\nimport { Show, Modal, ShowButton, useShow } from "@pankod/refine";\n\nexport const ShowPage: React.FC = () => {\n    const [visibleShowModal, setVisibleShowModal] = useState<boolean>(false);\n\n    const { queryResult, showId, setShowId } = useShow();\n    const { data, isLoading } = queryResult;\n\n    return (\n        <>\n            <ShowButton\n                size="small"\n                onClick={() => {\n                    setShowId(data?.data.id);\n                    setVisibleShowModal(true);\n                }}\n            />\n            <Modal\n                visible={visibleShowModal}\n                onCancel={() => setVisibleShowModal(false)}\n            >\n                <Show recordItemId={showId} isLoading={isLoading}>\n                    // show something with `data`\n                </Show>\n            </Modal>\n        </>\n    );\n};\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"<Show>")," component needs the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," information for ",(0,r.kt)("inlineCode",{parentName:"p"},"<RefreshButton>")," to work properly."))),(0,r.kt)("h3",{id:"resource"},(0,r.kt)("inlineCode",{parentName:"h3"},"resource")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<Show>")," component reads the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," information from the route by default. This default behavior will not work on custom pages. If you want to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Show>")," component in a custom page, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," property."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/guides-and-concepts/custom-pages"},"Refer to the custom pages documentation for detailed usage. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine, Show } from "@pankod/refine";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport routerProvider from "@pankod/refine-react-router";\n\n// highlight-start\nconst CustomPage = () => {\n    return (\n        <Show resource="posts" recordItemId="postId">\n            ...\n        </Show>\n    );\n};\n// highlight-end\n\nexport const App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={{\n                ...routerProvider,\n                // highlight-start\n                routes: [\n                    {\n                        exact: true,\n                        component: CustomPage,\n                        path: "/custom",\n                    },\n                ]\n                // highlight-end\n            }}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev/")}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n')),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<Show>")," component needs the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," information for work properly, so if you use the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Show>")," component in custom pages, you should pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"recordItemId")," property."))),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"canDelete"),(0,r.kt)("td",{parentName:"tr",align:null},"Adds a delete button"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"If the resource has ",(0,r.kt)("inlineCode",{parentName:"td"},"canDelete")," prop it is ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," else ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"canEdit"),(0,r.kt)("td",{parentName:"tr",align:null},"Adds an edit button"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"If the resource has ",(0,r.kt)("inlineCode",{parentName:"td"},"canEdit")," prop it is ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," else ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"Adds a title"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"Show"')," prefix and singular of ",(0,r.kt)("inlineCode",{parentName:"td"},"resource.name"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"actionButtons"),(0,r.kt)("td",{parentName:"tr",align:null},"Gets passed to the ",(0,r.kt)("inlineCode",{parentName:"td"},"extra")," prop of the ",(0,r.kt)("inlineCode",{parentName:"td"},"<Card>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<SaveButton>")," and depending on your resource configuration (",(0,r.kt)("inlineCode",{parentName:"td"},"canDelete")," prop)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isLoading"),(0,r.kt)("td",{parentName:"tr",align:null},"Gets passed to the ",(0,r.kt)("inlineCode",{parentName:"td"},"loading")," prop of the ",(0,r.kt)("inlineCode",{parentName:"td"},"<Card>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pageHeaderProps"),(0,r.kt)("td",{parentName:"tr",align:null},"Passes props for ",(0,r.kt)("inlineCode",{parentName:"td"},"<PageHeader>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://ant.design/components/page-header/#API"},"PageHeaderProps")),(0,r.kt)("td",{parentName:"tr",align:null},"{ ghost: false, ",(0,r.kt)("a",{parentName:"td",href:"#title"},"title"),", extra: ",(0,r.kt)("inlineCode",{parentName:"td"},"<ListButton>")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"<RefreshButton>")," }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"recordItemId"),(0,r.kt)("td",{parentName:"tr",align:null},"Record id for ",(0,r.kt)("inlineCode",{parentName:"td"},"<RefreshButton>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resource"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource name for API data interactions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Resource name that it reads from the URL.")))))}k.isMDXComponent=!0},48577:function(e,t,n){t.Z=n.p+"assets/images/actionButtonsUsage-365a9120d2282220f058189e1b308a7a.png"},4648:function(e,t,n){t.Z=n.p+"assets/images/isLoading-bf0f3a4ae3f0c42ba40ac59e81971482.png"},43091:function(e,t,n){t.Z=n.p+"assets/images/pageHeaderPropsUsage-5b05f470f2cdc12fb5644c19ace47f11.png"}}]);