"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7206],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return t?a.createElement(f,i(i({ref:n},d),{},{components:t})):a.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2734:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var a=t(22122),r=t(19756),o=(t(67294),t(3905)),i=["components"],s={id:"base64-upload",title:"Base64 Upload"},l=void 0,p={unversionedId:"guides-and-concepts/upload/base64-upload",id:"version-1.0.xx/guides-and-concepts/upload/base64-upload",isDocsHomePage:!1,title:"Base64 Upload",description:"By encoding your files and images from your forms to Base64 you can change all files needed for the upload to Base64 format before the submit. This can be done via the onFinish property of the `` component that comes with Ant Design",source:"@site/versioned_docs/version-1.0.xx/guides-and-concepts/upload/base64-upload.md",sourceDirName:"guides-and-concepts/upload",slug:"/guides-and-concepts/upload/base64-upload",permalink:"/docs/1.0.xx/guides-and-concepts/upload/base64-upload",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-1.0.xx/guides-and-concepts/upload/base64-upload.md",version:"1.0.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"base64-upload",title:"Base64 Upload"},sidebar:"version-1.0.xx/someSidebar",previous:{title:"Multipart Upload",permalink:"/docs/1.0.xx/guides-and-concepts/upload/multipart-upload"},next:{title:"Auth0 Login",permalink:"/docs/1.0.xx/guides-and-concepts/auth/auth0"}},d=[{value:"Live Codesandbox Example",id:"live-codesandbox-example",children:[]}],c={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By encoding your files and images from your forms to Base64 you can change all files needed for the upload to Base64 format before the submit. This can be done via the ",(0,o.kt)("inlineCode",{parentName:"p"},"onFinish")," property of the ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/form/#Form"},(0,o.kt)("inlineCode",{parentName:"a"},"<Form>"))," component that comes with ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/"},"Ant Design")," "),(0,o.kt)("h1",{id:"example"},"Example"),(0,o.kt)("p",null,"Now let's make a small example to see how its done. In this example, the file we are going to be uploading files in Base64 type  is going to be called ",(0,o.kt)("inlineCode",{parentName:"p"},"avatar")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/users/create.tsx" {7-8, 19-44, 61, 72}',title:'"pages/users/create.tsx"',"{7-8,":!0,"19-44,":!0,"61,":!0,"72}":!0},'import {\n    Create,\n    Form,\n    Upload,\n    Input,\n    useForm,\n    getValueFromEvent,\n    file2Base64,\n} from "@pankod/refine";\n\nexport const UserCreate: React.FC = () => {\n    const { form, formProps, saveButtonProps } = useForm<IUser>();\n\n    return (\n        <Create saveButtonProps={saveButtonProps}>\n            <Form\n                {...formProps}\n                layout="vertical"\n                onFinish={async (values) => {\n                    const base64Files = [];\n                    // @ts-ignore\n                    const { avatar } = values;\n\n                    for (const file of avatar) {\n                        if (file.originFileObj) {\n                            const base64String = await file2Base64(file);\n\n                            base64Files.push({\n                                ...file,\n                                base64String,\n                            });\n                        } else {\n                            base64Files.push(file);\n                        }\n                    }\n\n                    return (\n                        formProps.onFinish &&\n                        formProps.onFinish({\n                            ...values,\n                            avatar: base64Files,\n                        })\n                    );\n                }}\n            >\n                <Form.Item\n                    label="First Name"\n                    name="firstName"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Input />\n                </Form.Item>\n                <Form.Item label="Avatar">\n                    <Form.Item\n                        name="avatar"\n                        valuePropName="fileList"\n                        getValueFromEvent={getValueFromEvent}\n                        noStyle\n                        rules={[\n                            {\n                                required: true,\n                            },\n                        ]}\n                    >\n                        <Upload.Dragger\n                            listType="picture"\n                            multiple\n                            beforeUpload={() => false}\n                        >\n                            <p className="ant-upload-text">\n                                Drag & drop a file in this area\n                            </p>\n                        </Upload.Dragger>\n                    </Form.Item>\n                </Form.Item>\n            </Form>\n        </Create>\n    );\n};\n\ninterface IUser {\n    id: string;\n    firstName: string;\n    avatar: [\n        {\n            uid: string;\n            name: string;\n            url: string;\n            status: "error" | "success" | "done" | "uploading" | "removed";\n        },\n    ];\n}\n')),(0,o.kt)("p",null,"You can change files to Base64 by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"file2Base64")," function."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"An edit form can be made by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Edit>")," component instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"<Create>")," without changing the rest of the code."))),(0,o.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/refine-base64-upload-example-tz06h?autoresize=1&fontsize=14&module=%2Fsrc%2Fpages%2Fusers%2Fedit.tsx&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-base64-upload-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}u.isMDXComponent=!0}}]);