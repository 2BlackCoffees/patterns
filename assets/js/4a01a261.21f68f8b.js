"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[5497],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9394:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(4137));const i={version:1,submitted_by:"navveenb",published_date:"tbd",category:"ai",description:"short description should be here",tags:["ai","machine-learning","serverless","role:data-scientist","size:small"]},o="Adopt serverless architecture for AI/ML workload processes",s={unversionedId:"catalog/ai/serverless-model-development",id:"catalog/ai/serverless-model-development",title:"Adopt serverless architecture for AI/ML workload processes",description:"short description should be here",source:"@site/docs/catalog/ai/serverless-model-development.md",sourceDirName:"catalog/ai",slug:"/catalog/ai/serverless-model-development",permalink:"/catalog/ai/serverless-model-development",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/green-software-patterns/docs/catalog/ai/serverless-model-development.md",tags:[{label:"ai",permalink:"/tags/ai"},{label:"machine-learning",permalink:"/tags/machine-learning"},{label:"serverless",permalink:"/tags/serverless"},{label:"role:data-scientist",permalink:"/tags/role-data-scientist"},{label:"size:small",permalink:"/tags/size-small"}],version:"current",frontMatter:{version:1,submitted_by:"navveenb",published_date:"tbd",category:"ai",description:"short description should be here",tags:["ai","machine-learning","serverless","role:data-scientist","size:small"]},sidebar:"tutorialSidebar",previous:{title:"Select the right hardware/VM instance types for AI/ML training",permalink:"/catalog/ai/right-hardware-type"},next:{title:"Cloud",permalink:"/catalog/cloud/"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"SCI Impact",id:"sci-impact",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Considerations",id:"considerations",level:2},{value:"References",id:"references",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adopt-serverless-architecture-for-aiml-workload-processes"},"Adopt serverless architecture for AI/ML workload processes"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Building an ML model requires a series of steps, such as building a data pipeline for data capture, data cleansing, feature generation, and running multiple training iterations and experiments to get the desired accuracy. All of these steps take significant computing resources that need to be optimized for efficient utilization."),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("p",null,"Adopt a serverless architecture for maximum resource utilization for your entire AI/ML model development process like data pipeline, training and experiments. Going serverless ensures the resources are launched only when required. "),(0,a.kt)("h2",{id:"sci-impact"},"SCI Impact"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SCI = (E * I) + M per R")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://grnsft.org/sci"},"Software Carbon Intensity Spec")),(0,a.kt)("p",null,"For the SCI equation, adopting serverless architecture for AI/ML workload process would impact the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"E"),":  A serverless architecture for the AI/ML development process provides efficient resource utilization and reduces the energy consumption of the compute resources."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"M"),":  A serverless architecture for the AI/ML development process would lead to effective hardware utilization as the resources would be provisioned only when required.")),(0,a.kt)("h2",{id:"assumptions"},"Assumptions"),(0,a.kt)("p",null,"None"),(0,a.kt)("h2",{id:"considerations"},"Considerations"),(0,a.kt)("p",null,"Evaluate and consider what AI/ML workloads can be moved to serverless. Consider if your application can afford cold start during serverless resource initialization."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/blog/products/ai-machine-learning/serverless-machine-learning-pipelines-on-google-cloud"},"Serverless Pipeline on Google Cloud")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://aws.amazon.com/blogs/machine-learning/machine-learning-inference-at-scale-using-aws-serverless/"},"Machine learning inference at scale using AWS serverless"))))}u.isMDXComponent=!0}}]);