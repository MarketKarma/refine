"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9678],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=m(n),u=o,f=d["".concat(p,".").concat(u)]||d[u]||l[u]||a;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var m=2;m<a;m++)s[m]=n[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50629:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),s=n(45228),i=["components"],p={id:"custom-inputs",title:"Custom Inputs"},m=void 0,c={unversionedId:"api-references/components/inputs/custom-inputs",id:"version-1.0.xx/api-references/components/inputs/custom-inputs",isDocsHomePage:!1,title:"Custom Inputs",description:"refine uses Ant Design's ` components to control and work with form data. Ant Design supports custom form items inside the  components. These items should be controllable via their value property and should implement onChange (or a custom callback name specified by s [trigger`] prop (https://ant.design/components/form/#Form.Item)).",source:"@site/versioned_docs/version-1.0.xx/api-references/components/inputs/custom-inputs.md",sourceDirName:"api-references/components/inputs",slug:"/api-references/components/inputs/custom-inputs",permalink:"/docs/1.0.xx/api-references/components/inputs/custom-inputs",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-1.0.xx/api-references/components/inputs/custom-inputs.md",version:"1.0.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"custom-inputs",title:"Custom Inputs"},sidebar:"version-1.0.xx/someSidebar",previous:{title:"Export",permalink:"/docs/1.0.xx/api-references/components/buttons/export-button"},next:{title:"Boolean",permalink:"/docs/1.0.xx/api-references/components/fields/boolean"}},l=[{value:"Example",id:"example",children:[]},{value:"Live Codesandbox Example",id:"live-codesandbox-example",children:[]}],d={toc:l};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," uses Ant Design's ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/form/"},(0,a.kt)("inlineCode",{parentName:"a"},"<Form>"))," components to control and work with form data. Ant Design supports custom form items inside the ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/form/#Form.Item"},(0,a.kt)("inlineCode",{parentName:"a"},"<Form.Item>"))," components. These items should be controllable via their ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," property and should implement ",(0,a.kt)("inlineCode",{parentName:"p"},"onChange")," (or a custom callback name specified by ",(0,a.kt)("inlineCode",{parentName:"p"},"<Form.Item>"),"s ","[",(0,a.kt)("inlineCode",{parentName:"p"},"trigger"),"]"," prop (",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/form/#Form.Item"},"https://ant.design/components/form/#Form.Item"),"))."),(0,a.kt)("p",null,"For some data types, displaying and editing as plain text may cause user experience problems.  "),(0,a.kt)("p",null,"Custom components may be useful when working with markdown (with markdown editor), JSON based rich text (draft, quill like editors), and HTML (a HTML editor). It can be used in table columns and form fields   "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/form/"},"Refer to the Ant Design docs for more detailed information about ",(0,a.kt)("inlineCode",{parentName:"a"},"<Form>"),". ","\u2192")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"We will demonstrate how to use custom input fields for markdown data by adding a markdown editor to edit and create forms."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/pages/posts/edit.tsx" {10-11, 13, 38-56}',title:'"/src/pages/posts/edit.tsx"',"{10-11,":!0,"13,":!0,"38-56}":!0},'import React, { useState } from "react";\nimport {\n    Edit,\n    Form,\n    Input,\n    IResourceComponentsProps,\n    useForm,\n} from "@pankod/refine";\n\nimport ReactMarkdown from "react-markdown";\nimport ReactMde from "react-mde";\n\nimport "react-mde/lib/styles/css/react-mde-all.css";\n\nimport { IPost } from "interfaces";\n\nexport const PostEdit: React.FC = (props) => {\n    const { formProps, saveButtonProps } = useForm<IPost>();\n\n    const [selectedTab, setSelectedTab] = useState<"write" | "preview">(\n        "write",\n    );\n\n    return (\n        <Edit {...props} saveButtonProps={saveButtonProps}>\n            <Form {...formProps} layout="vertical">\n                <Form.Item\n                    label="Title"\n                    name="title"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Input />\n                </Form.Item>\n                <Form.Item\n                    label="Content"\n                    name="content"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <ReactMde\n                        selectedTab={selectedTab}\n                        onTabChange={setSelectedTab}\n                        generateMarkdownPreview={(markdown) =>\n                            Promise.resolve(\n                                <ReactMarkdown>{markdown}</ReactMarkdown>,\n                            )\n                        }\n                    />\n                </Form.Item>\n            </Form>\n        </Edit>\n    );\n};\n')),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:s.Z,alt:"Markdown input"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,a.kt)("iframe",{src:"https://codesandbox.io/embed/refine-custom-inputs-example-mfmh6?autoresize=1&fontsize=14&module=%2Fsrc%2Fpages%2Fposts%2Fedit.tsx&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-custom-inputs-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}u.isMDXComponent=!0},45228:function(e,t,n){t.Z=n.p+"assets/images/markdown-input-0f4ec0647fed7427252a8cf13f09f696.png"}}]);