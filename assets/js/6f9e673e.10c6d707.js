"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5864],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32934:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var a=n(22122),o=n(19756),r=(n(67294),n(3905)),i=["components"],s={id:"custom-layout",title:"Custom Layout"},p=void 0,c={unversionedId:"guides-and-concepts/custom-layout",id:"guides-and-concepts/custom-layout",isDocsHomePage:!1,title:"Custom Layout",description:"You can create custom layouts using ` and ` components.",source:"@site/docs/guides-and-concepts/custom-layout.md",sourceDirName:"guides-and-concepts",slug:"/guides-and-concepts/custom-layout",permalink:"/docs/next/guides-and-concepts/custom-layout",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/guides-and-concepts/custom-layout.md",version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"custom-layout",title:"Custom Layout"},sidebar:"someSidebar",previous:{title:"Mutation Mode",permalink:"/docs/next/guides-and-concepts/mutation-mode"},next:{title:"Custom Pages",permalink:"/docs/next/guides-and-concepts/custom-pages"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Live Codesandbox Example",id:"live-codesandbox-example",children:[]}],d={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can create custom layouts using ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api-references/components/refine-config"},(0,r.kt)("inlineCode",{parentName:"a"},"<Refine>"))," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api-references/components/layout-wrapper"},(0,r.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>"))," components."),(0,r.kt)("p",null,"Both of these components can accept the listed props for customization. ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api-references/components/refine-config"},(0,r.kt)("inlineCode",{parentName:"a"},"<Refine>"))," being for global customization and the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api-references/components/layout-wrapper"},(0,r.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>"))," being for local."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api-references/components/refine-config#layout"},(0,r.kt)("inlineCode",{parentName:"a"},"Layout"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api-references/components/refine-config#sider"},(0,r.kt)("inlineCode",{parentName:"a"},"Sider"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api-references/components/refine-config#footer"},(0,r.kt)("inlineCode",{parentName:"a"},"Footer"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api-references/components/refine-config#header"},(0,r.kt)("inlineCode",{parentName:"a"},"Header"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api-references/components/refine-config#offlayoutarea"},(0,r.kt)("inlineCode",{parentName:"a"},"OffLayoutArea"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api-references/components/refine-config#title"},(0,r.kt)("inlineCode",{parentName:"a"},"Title")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Let's look at an example of modifying the default layout to have a top menu layout."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/App.tsx"',title:'"/src/App.tsx"'},'import { Refine, AntdLayout, Link } from "@pankod/refine";\nimport routerProvider from "@pankod/refine-react-router";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport "@pankod/refine/dist/styles.min.css";\n\nimport { PostList } from "pages/posts";\n\n// highlight-next-line\nimport { CustomSider } from "components";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider(API_URL)}\n// highlight-start\n            Layout={({ children, Footer, OffLayoutArea }) => (\n                <AntdLayout>\n                    <AntdLayout.Header>\n                        <CustomSider />\n                    </AntdLayout.Header>\n                    <AntdLayout.Content>\n                        <AntdLayout.Content>\n                            <div style={{ padding: 24, minHeight: 360 }}>\n                                {children}\n                            </div>\n                        </AntdLayout.Content>\n                        <Footer />\n                    </AntdLayout.Content>\n                    <OffLayoutArea />\n                </AntdLayout>\n            )}\n// highlight-end\n            Title={() => (\n                <Link to="/" style={{ float: "left", marginRight: "10px" }}>\n                    <img src="/refine.svg" alt="Refine" />\n                </Link>\n            )}\n        />\n    );\n};\n\nexport default App;\n')),(0,r.kt)("p",null,"Here, we override the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api-references/components/refine-config#title"},(0,r.kt)("inlineCode",{parentName:"a"},"<Title>"))," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api-references/components/refine-config#layout"},(0,r.kt)("inlineCode",{parentName:"a"},"<Layout>"))," components. When we override ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api-references/components/refine-config#layout"},(0,r.kt)("inlineCode",{parentName:"a"},"<Layout>")),", we put the ",(0,r.kt)("inlineCode",{parentName:"p"},"<CustomSider>")," (insted of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api-references/components/refine-config#sider"},(0,r.kt)("inlineCode",{parentName:"a"},"<Sider>"))," that was provided to ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api-references/components/refine-config#layout"},(0,r.kt)("inlineCode",{parentName:"a"},"<Layout>"))," to render it by default) on top of ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/layout/"},(0,r.kt)("inlineCode",{parentName:"a"},"<AntdLayout>")),"."),(0,r.kt)("p",null,"So, we just provided a custom ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api-references/components/refine-config#sider"},(0,r.kt)("inlineCode",{parentName:"a"},"<Sider>")),". Here's our custom sider that looks horizontal, instead of the default vertical one:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/components/sider/index.tsx"',title:'"/src/components/sider/index.tsx"'},'import { Link, Menu, useMenu, useTitle } from "@pankod/refine";\n\nexport const CustomSider: React.FC = () => {\n// highlight-start\n    const Title = useTitle();\n    const { menuItems, selectedKey } = useMenu();\n// highlight-end\n\n    return (\n        <>\n// highlight-start\n            <Title collapsed={false} />\n            <Menu selectedKeys={[selectedKey]} mode="horizontal">\n                {menuItems.map(({ icon, route, label }) => (\n                    <Menu.Item key={route} icon={icon}>\n                        <Link to={route}>{label}</Link>\n                    </Menu.Item>\n                ))}\n            </Menu>\n// highlight-end\n        </>\n    );\n};\n')),(0,r.kt)("p",null,"Here, we use ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api-references/hooks/resource/useMenu"},(0,r.kt)("inlineCode",{parentName:"a"},"useMenu"))," hook to get the list of current resources and print it."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"By default, ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api-references/components/refine-config#sider"},(0,r.kt)("inlineCode",{parentName:"a"},"<Sider>"))," is responsible for rendering ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api-references/components/refine-config#title"},(0,r.kt)("inlineCode",{parentName:"a"},"<Title>")),". It gets this component (configured by ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api-references/components/refine-config"},(0,r.kt)("inlineCode",{parentName:"a"},"<Refine>"))," and/or ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api-references/components/layout-wrapper"},(0,r.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>")),") by ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api-references/hooks/refine/useTitle"},(0,r.kt)("inlineCode",{parentName:"a"},"useTitle"))," hook."))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This example demonstrated how to configure a global layout. To learn how to use global layout in custom pages and make local modifications per page, ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api-references/components/layout-wrapper"},"refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>")," docs. ","\u2192")))),(0,r.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,r.kt)("p",null,"Here's how it looks in the end:"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/refine-top-menu-layout-example-yb9r8?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-top-menu-layout-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}m.isMDXComponent=!0}}]);