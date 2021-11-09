"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1533],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},57829:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=t(22122),o=t(19756),a=(t(67294),t(3905)),i=["components"],c={},s=void 0,l={unversionedId:"api-references/hooks/translate/useGetLocale",id:"version-2.xx.xx/api-references/hooks/translate/useGetLocale",isDocsHomePage:!1,title:"useGetLocale",description:"If you need to know the current locale, refine provides the useGetLocale hook. It returns the getLocale method from i18nProvider under the hood.",source:"@site/versioned_docs/version-2.xx.xx/api-references/hooks/translate/useGetLocale.md",sourceDirName:"api-references/hooks/translate",slug:"/api-references/hooks/translate/useGetLocale",permalink:"/docs/api-references/hooks/translate/useGetLocale",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/api-references/hooks/translate/useGetLocale.md",version:"2.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"useSetLocale",permalink:"/docs/api-references/hooks/translate/useSetLocale"},next:{title:"useShow",permalink:"/docs/api-references/hooks/show/useShow"}},u=[{value:"Usage",id:"usage",children:[]}],p={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you need to know the current locale, refine provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"useGetLocale")," hook. It returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"getLocale")," method from ",(0,a.kt)("inlineCode",{parentName:"p"},"i18nProvider")," under the hood."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"You can get the ",(0,a.kt)("inlineCode",{parentName:"p"},"locale")," value from the ",(0,a.kt)("inlineCode",{parentName:"p"},"i18nProvider")," that you provided.",(0,a.kt)("br",{parentName:"p"}),"\n","For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"<LanguageSwitcher>")," component needs to know the current locale in order to disable the button for the current language."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Button, useTranslate, useGetLocale, useSetLocale } from "@pankod/refine";\n\nexport const LanguageSwitcher = () => {\n    const changeLanguage = useSetLocale();\n\n    const locale = useGetLocale();\n    const currentLocale = locale();\n\n    return (\n        <div>\n            <span>Languages</span>\n            <Button\n                disabled={currentLocale === "en"}\n                onClick={() => changeLanguage("en")}\n            >\n                English\n            </Button>\n            <Button\n                disabled={currentLocale === "es"}\n                onClick={() => changeLanguage("es")}\n            >\n                Spanish\n            </Button>\n        </div>\n    );\n};\n')),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This hook can only be used if ",(0,a.kt)("inlineCode",{parentName:"p"},"i18nProvider")," is provided."))))}d.isMDXComponent=!0}}]);