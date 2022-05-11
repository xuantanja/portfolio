(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{111:function(e,t,a){},125:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(9),r=a.n(i),o=(a(111),a(31),a(170)),s=a(30),l=a(12);function j(){const{pathname:e}=Object(l.f)();return Object(n.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null}var d=a(175),h=a(98),b=a(66),m=a(147),p=a(148);var x=Object(h.a)({palette:{primary:b.a,secondary:m.a,success:p.a}}),u=a(156),O=a(149),g=a(151),w=a(152),v=a(53),f=a(171),A=a(92),C=a.n(A),E=a.p+"static/media/mePicColor.6fab1893.jpg",N=a(1);var k=function(){const[e,t]=Object(n.useState)(!1),a={duration:.4,delay:.2,ease:"easeInOut"},c={hidden:{y:200,scale:1,opacity:0,transition:a},show:{y:0,scale:1,opacity:1,transition:a}};return Object(N.jsx)(C.a,{onChange:function(){t(!0)},children:Object(N.jsxs)(f.a.div,{initial:"hidden",animate:e?"show":"hidden",exit:"hidden",variants:c,id:"about",children:[Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("h1",{className:"section-title",children:"Willkommen auf meinem Portfolio!"}),Object(N.jsxs)(O.a,{container:!0,alignItems:"flex-start",spacing:5,children:[Object(N.jsx)(O.a,{item:!0,xs:12,sm:4,children:Object(N.jsx)("div",{className:"align-center about-image",children:Object(N.jsx)(g.a,{children:Object(N.jsx)(w.a,{component:"img",alt:"Profilbild",height:"auto",src:E,title:"Profilbild"})})})}),Object(N.jsx)(O.a,{item:!0,xs:12,sm:8,children:Object(N.jsxs)(v.a,{variant:"body1",gutterBottom:!0,align:"justify",children:["Hier werden mehrere meiner verschiedenen Projekte pr\xe4sentiert.",Object(N.jsx)("br",{}),"Viel Spa\xdf :)"]})})]})]})})},I=a(153),y=a(154),B=a(155);var M=function(e){const t=e.project;return Object(N.jsx)(I.a,{underline:"none",component:s.b,to:"/portfolio/project/"+t.id,children:Object(N.jsx)(f.a.div,{whileHover:{scale:[1,1.04,1.03],position:"relative",zIndex:2,transition:{duration:.3}},children:Object(N.jsx)(g.a,{children:Object(N.jsxs)(y.a,{children:[Object(N.jsx)(f.a.div,{whileHover:{scale:[1,1.05,1.03],transition:{duration:.2}},children:Object(N.jsx)(w.a,{component:"img",alt:t.image,height:"240",src:"/portfolio/assets/project-media/"+t.image,title:t.title+"_preview"})}),Object(N.jsxs)(B.a,{className:"align-left card-content",children:[Object(N.jsx)(v.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.title}),Object(N.jsx)("ul",{children:t.technologies.map(((e,t)=>Object(N.jsx)("li",{className:"project-desciption",children:Object(N.jsx)(v.a,{variant:"body1",color:"textSecondary",children:e})},t)))})]})]})})})})};var Y=[{id:2,title:"Art Knowledge Graph",description:"Construction of an art Knowledge Graph and Clustering",team:"Three students",duration:"Seminar of one semester",time:"3. semester, Beginning of 2021",technologies:["Python","Neo4j DB","Cypher queries"],image:"KG/kg_thumbnail.jpg",about:["The main goal of this project was to automatically create and explore a knowledge graph that was built on art data resources.","The resources consisted of picture scanned old art books, exhibition catalogues and auction manuals, mostly about Pablo Picasso. Challenges that came with the data are: unstructured free form texts, noisy OCRed text, incomplete sentences and a lot of spelling and formatting errors. An accurate named entity matching was strongly required because some entities meant the same e.g. Pablo Ruiz, Pablo Ruys Picasso, Pablo Ruiz Picasso, P.-R. Picasso or just Picasso.","Knowledge Graphs are perfect for automated analysis, relation and entity exploration and further information retrieval. Before constructing the knowledge graph, several preprocessing steps had to be done. These preprocessing steps included co-reference resolution by the help of neuralcoref and spaCy, named entity recognition (NER), ontology mapping with DBpedia, relation extraction and serialization as output triples. The output triples represent the knowledge graph and can be visualized with another tool, here Neo4j was used.","The seminar leader provided some example queries to verify and evaluate our knowledge graph. We showed that our knowledge graph was able to answer following questions: Where was Picasso born? Who is the painter of Jacqueline? What is the location of the Picasso museum?",Object(N.jsx)("br",{}),"The following pictures show the progress and result of the project."],hasGallery:!0,mockup:"BAR/BuildARMockup.mp4",mockupVorschau:"BAR/BuildAR_preview.PNG",mockupDescription:"Eine kleine Live-Demo des AR Prototyps",myWork:["Everybody contributed equally."],path:"https://github.com/moumitahmad/hciProject",docu:""}];var D=()=>Object(N.jsxs)("div",{id:"all-projects",children:[Object(N.jsx)("h1",{className:"section-title",children:"Meine Projekte"}),Object(N.jsx)("div",{className:"grid-container",children:Y.map(((e,t)=>Object(N.jsx)("div",{className:"grid-item",children:Object(N.jsx)(M,{project:e})},t)))})]});var G=function(){return Object(N.jsx)("div",{className:"main-content",children:Object(N.jsxs)(u.a,{maxWidth:"md",children:[Object(N.jsx)(k,{}),Object(N.jsx)(D,{})]})})},T=a(172),Q=a(52);var P=function(e){const t=e.menuItems;return Object(N.jsx)(N.Fragment,{children:t.map(((e,t)=>Object(N.jsx)(T.a,{className:"menu-item",children:Object(N.jsx)(Q.Link,{className:"nav-item",activeClass:"active",spy:!0,smooth:!0,duration:500,to:e.path,children:Object(N.jsx)(v.a,{varient:"h5",color:"inherit",children:e.title})})},t)))})},z=a(157),H=a(158),L=a(93),X=a.n(L),S=a(173),J=a(159),R=a(160),U=a(161);const q=Object(z.a)((e=>({menuButton:{marginRight:e.spacing(0)}})));var F=function(e){const t=e.menuItems,a=e.hasProject,c=q(),[i,r]=Object(n.useState)((()=>!1));Object(n.useEffect)((()=>{}),[i]);const o=()=>{console.log("toggle drawer to: open = "+!i),r(!i)};return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(H.a,{edge:"start",className:c.menuButton,color:"inherit","aria-label":"menu",onClick:()=>o(),children:Object(N.jsx)(X.a,{})}),Object(N.jsx)(S.a,{open:i,anchor:"top",variant:"temporary",children:Object(N.jsxs)(J.a,{children:[Object(N.jsx)(R.a,{onClick:()=>{o()},children:!0===a?Object(N.jsx)(I.a,{to:"/",component:s.b,children:"Startseite"}):Object(N.jsx)(Q.Link,{className:"nav-item",activeClass:"active",smooth:!0,duration:500,to:"hero",onClick:()=>{o()},children:"MA"})}),t.map(((e,t)=>Object(N.jsxs)("div",{children:[Object(N.jsx)(U.a,{}),Object(N.jsx)(Q.Link,{className:"nav-item",activeClass:"active",smooth:!0,duration:500,to:e.path,onClick:()=>{o()},children:Object(N.jsx)(R.a,{children:e.title},t)})]},t)))]})})]})},K=a(162),W=a(163),V=a(164);var Z=function(e){const t=e.maxPixel,[a,c]=Object(n.useState)(window.innerWidth),[i,r]=Object(n.useState)((()=>window.innerWidth<=600)),[o,l]=Object(n.useState)(!1);console.log(a);const j=()=>{c(window.innerWidth),window.innerWidth<=600?r(!0):r(!1)};Object(n.useEffect)((()=>{window.addEventListener("resize",j)}),[]);const d=Object(z.a)((e=>({homeButton:{marginRight:e.spacing(2)},appBarTransparent:{opacity:1},appBarSolid:{}})))();window.addEventListener("scroll",(()=>{window.scrollY>=t?l(!0):l(!1)}));const h=e.menuItems;let b=!1;return null!=e.projectTitle&&(b=!0),Object(N.jsx)("div",{className:d.root,children:Object(N.jsx)(K.a,{color:"transparent",elevation:0,position:"fixed",className:o?"navbar active":"navbar",children:Object(N.jsxs)(W.a,{children:[Object(N.jsx)(T.a,{className:"nav-logo",children:Object(N.jsx)(I.a,{to:"/portfolio",component:s.b,children:Object(N.jsx)(V.a,{fontSize:"large",children:Object(N.jsx)("img",{src:"data:image/png;base64,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",height:"100%",alt:"logo"})})})}),i?Object(N.jsx)(F,{menuItems:h,hasProject:b}):Object(N.jsx)(P,{menuItems:h})]})})})},_=a(165),$=a.p+"static/media/Lebenslauf_Tanja.0d1cc306.pdf";var ee=function(){return Object(N.jsx)("div",{className:"footer",id:"contact-footer",children:Object(N.jsx)("div",{className:"main-content",children:Object(N.jsxs)(u.a,{"max-width":"md",children:[Object(N.jsxs)(O.a,{container:!0,alignItems:"flex-start",children:[Object(N.jsxs)(O.a,{item:!0,xs:12,md:5,children:[Object(N.jsx)(v.a,{gutterBottom:!0,variant:"h5",component:"h2",color:"primary",children:"Hier bin ich zu erreichen!"}),Object(N.jsx)(O.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"flex-start",children:[{title:"EMAIL",path:"mailto: tanja.manlik[at]gmx.com"},{title:"GITHUB",path:"https://github.com/xuantanja/"},{title:"LINKEDIN",path:"https://www.linkedin.com/in/tanja-manlik-0794291a4/"}].map(((e,t)=>Object(N.jsx)(O.a,{item:!0,className:"contact-item",children:Object(N.jsx)(_.a,{target:"_blank",rel:"noopener noreferrer",href:e.path,className:"contact-button",children:e.title})},t)))})]}),Object(N.jsx)(O.a,{item:!0,xs:1,md:3}),Object(N.jsx)(O.a,{item:!0,xs:12,md:4,children:Object(N.jsxs)(T.a,{className:"align-right",children:[Object(N.jsx)(v.a,{gutterBottom:!0,variant:"h5",component:"h2",color:"primary",children:"Downloads"}),Object(N.jsx)(_.a,{target:"_blank",rel:"noopener noreferrer",href:$,className:"contact-button",children:"Lebenslauf"})]})})]}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)(v.a,{gutterBottom:!0,variant:"subtitle1",className:"oswald align-center",children:"\xa9 2022 Xuan Tanja"})]})})})};var te=function(){return Object(N.jsxs)(f.a.div,{initial:{opacity:1},animate:{opacity:1,duration:3},exit:{opacity:0,duration:3},children:[Object(N.jsx)(Z,{projectTitle:null,menuTitle:[{title:"MA",path:"hero"}],menuItems:[{title:"\xdcber mich",path:"about"},{title:"Projekte",path:"all-projects"},{title:"Kontakt",path:"contact-footer"}],maxPixel:80}),Object(N.jsx)(G,{className:"main"}),Object(N.jsx)(ee,{})]})},ae=a(100),ne=a(176),ce=a(94),ie=a.n(ce),re=a(95),oe=a.n(re),se=a(96),le=a.n(se),je=a(97),de=a.n(je),he=a(69),be=a(166),me=a(67),pe=a(68);const xe=Object(z.a)((e=>({root:{flexGrow:1,overflow:"hidden",padding:e.spacing(0,3)},paper:{maxWidth:400,margin:`${e.spacing(1)}px auto`,padding:e.spacing(2)},paper1:{maxWidth:400,margin:"0px auto",padding:e.spacing(2)},green:{color:"#fff",backgroundColor:he.a[500]},purple:{color:"#fff",backgroundColor:be.a[500]},pink:{color:"#fff",backgroundColor:me.a[500]},blue:{color:"#fff",backgroundColor:pe.a[500]}})));var ue=function(e){const t=e.project,a=xe();return Object(N.jsxs)("div",{id:"description",children:[Object(N.jsxs)("h1",{className:"section-title",id:"description",children:["Projekt: ",Object(N.jsx)("strong",{children:t.title})]}),Object(N.jsxs)(O.a,{container:!0,spacing:5,children:["  ",Object(N.jsx)(O.a,{item:!0,xs:12,md:6,children:Object(N.jsx)("div",{className:"about-image",children:Object(N.jsx)(g.a,{children:Object(N.jsx)(w.a,{component:"img",alt:t.image,height:"320",src:"/portfolio/assets/project-media/"+t.image,title:t.title+"_preview"})})})}),Object(N.jsxs)(O.a,{item:!0,xs:12,md:6,children:[Object(N.jsx)(ae.a,{className:a.paper1,children:Object(N.jsxs)(O.a,{container:!0,wrap:"nowrap",spacing:2,alignItems:"center",children:[Object(N.jsx)(O.a,{item:!0,children:Object(N.jsx)(ne.a,{className:a.green,children:Object(N.jsx)(ie.a,{})})}),Object(N.jsx)(O.a,{item:!0,xs:!0,className:"align-center-vertical",children:Object(N.jsx)(v.a,{variant:"body1",component:"h3",children:t.description})})]})}),Object(N.jsx)(ae.a,{className:a.paper,children:Object(N.jsxs)(O.a,{container:!0,wrap:"nowrap",spacing:2,children:[Object(N.jsx)(O.a,{item:!0,children:Object(N.jsx)(ne.a,{className:a.blue,children:Object(N.jsx)(oe.a,{})})}),Object(N.jsx)(O.a,{item:!0,xs:!0,className:"align-center-vertical",children:Object(N.jsx)(v.a,{variant:"body1",component:"h3",children:t.team})})]})}),Object(N.jsx)(ae.a,{className:a.paper,children:Object(N.jsxs)(O.a,{container:!0,wrap:"nowrap",spacing:2,children:[Object(N.jsx)(O.a,{item:!0,children:Object(N.jsx)(ne.a,{className:a.pink,children:Object(N.jsx)(le.a,{})})}),Object(N.jsx)(O.a,{item:!0,xs:!0,className:"align-center-vertical",children:Object(N.jsxs)(v.a,{variant:"body1",component:"h3",children:[t.duration," (",t.time,")"]})})]})}),Object(N.jsx)(ae.a,{className:a.paper,children:Object(N.jsxs)(O.a,{container:!0,wrap:"nowrap",spacing:2,children:[Object(N.jsx)(O.a,{item:!0,children:Object(N.jsx)(ne.a,{className:a.purple,children:Object(N.jsx)(de.a,{})})}),Object(N.jsx)(O.a,{item:!0,xs:!0,className:"align-center-vertical",children:Object(N.jsxs)(v.a,{variant:"body1",component:"h3",children:["|\xa0",t.technologies.map(((e,t)=>e+" | "))]})})]})})]})]})]})};var Oe=[{id:1,name:"KG/kg_outputneo4j.jpg",description:"Subset and therefore readable knowledge graph",projectId:2}],ge=a(167);var we=function(e){const t=e.image;return Object(N.jsx)(f.a.div,{whileHover:{scale:[1,1.04,1.03],position:"relative",zIndex:2,transition:{duration:.3}},children:Object(N.jsxs)(g.a,{className:"image-card",children:[Object(N.jsx)(w.a,{component:"img",alt:t.name,height:"150",src:"/portfolio/assets/project-media/"+t.name,title:t.name}),Object(N.jsx)(ge.a,{subheader:t.description,className:"card-content"})]})})},ve=a(174),fe=a(168),Ae=a(169);var Ce=function(e){const t=e.image;return Object(N.jsx)(ve.a,{open:e.open,onClose:()=>e.closeFunction(),className:"modal-container",children:Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(H.a,{color:"primary",className:"arrow-button prev",onClick:()=>e.backFunction(),children:Object(N.jsx)(fe.a,{})}),Object(N.jsx)(H.a,{color:"primary",className:"arrow-button next",onClick:()=>e.forwardFunction(),children:Object(N.jsx)(Ae.a,{})}),Object(N.jsx)("img",{className:"fullscreen-img",src:"/portfolio/assets/project-media/"+t.name,alt:t.name,width:"75%",onClick:()=>e.closeFunction()}),Object(N.jsx)(v.a,{className:"white-text",variant:"body1",children:t.description}),Object(N.jsx)("br",{})]})})};var Ee=function(e){const[t,a]=Object(n.useState)(0),[i,r]=c.a.useState(!1),o=e.project,s=Oe.filter((e=>e.projectId===o.id)),l=s[0].id;return Object(N.jsxs)("div",{children:[Object(N.jsx)("h1",{className:"section-title",id:"gallery",children:"Bildergalerie"}),Object(N.jsxs)("div",{className:"grid-container",children:[s.map(((e,t)=>Object(N.jsx)("div",{className:"grid-item",onClick:()=>function(e){a(e.id-l),r(!0)}(e),children:Object(N.jsx)(we,{image:e})},t))),Object(N.jsx)(Ce,{image:s[t],open:i,closeFunction:function(){r(!1)},backFunction:function(){const e=t-1;a(-1!==e?e:s.length-1)},forwardFunction:function(){const e=t+1;e<s.length?a(e):a(0)}})]})]})};var Ne=function(e){const t=e.project;return Object(N.jsxs)("div",{id:"my-work",children:[Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),t.myWork.map(((e,t)=>Object(N.jsx)("div",{children:Object(N.jsx)(v.a,{varient:"body1",align:"justify",children:e})},t)))]})};const ke=Object(z.a)((e=>({video:{objectFit:"cover"}})));var Ie=function(e){const t=e.project,a=ke();return Object(N.jsx)("div",{style:{gridArea:"big1",margin:"1.5%"},children:Object(N.jsx)(g.a,{children:Object(N.jsx)(w.a,{component:"video",alt:t.mockup,src:"/portfolio/assets/project-media/"+t.mockup,title:t.mockup,controls:!0,poster:"/portfolio/assets/project-media/"+t.mockupVorschau,className:a.video})})})};const ye=Object(z.a)((e=>({demoButton:{color:"black",backgroundColor:"#8bc34a","&:hover":{backgroundColor:"#7cb342","@media (hover: none)":{backgroundColor:"#8bc34a"}}}})));var Be=function({match:e}){const t=Y[e.params.id];let a=[{title:"Infos",path:"description"}];(t.hasGallery||""!==t.mockup)&&a.push({title:"Prozess",path:"gallery"}),""!==t.myWork&&a.push({title:"mein Anteil",path:"my-work"}),a.push({title:"Kontakt",path:"contact-footer"});const n=ye();return Object(N.jsxs)(f.a.div,{initial:{opacity:0},animate:{opacity:1,duration:3},exit:{opacity:0,duration:3},children:[Object(N.jsx)(Z,{projectTitle:t.title,menuItems:a,maxPixel:0}),Object(N.jsx)("div",{className:"main-content",children:Object(N.jsxs)(u.a,{maxWidth:"md",children:[Object(N.jsx)("br",{}),Object(N.jsx)(ue,{project:t}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),t.about.map(((e,t)=>Object(N.jsx)("div",{children:Object(N.jsx)(v.a,{varient:"body1",align:"justify",children:e})},t))),t.hasGallery?Object(N.jsx)(Ee,{project:t}):null,""===t.mockup?null:Object(N.jsx)(Ie,{project:t}),0===t.myWork.length?null:Object(N.jsx)(Ne,{project:t}),Object(N.jsxs)("ul",{className:"project-links",children:[Object(N.jsx)("li",{children:null==t.demo?null:Object(N.jsx)(_.a,{className:n.demoButton,variant:"contained",color:"success",target:"_blank",rel:"noopener noreferrer",href:t.demo,children:"zur Demo"})}),Object(N.jsx)("li",{children:""===t.path?null:Object(N.jsx)(_.a,{className:"link-buttons",variant:"contained",color:"secondary",target:"_blank",rel:"noopener noreferrer",href:t.path,children:"zum Source Code"})}),Object(N.jsx)("li",{children:""===t.docu?null:Object(N.jsx)(_.a,{className:"link-buttons",variant:"contained",color:"primary",target:"_blank",rel:"noopener noreferrer",href:"/portfolio/assets/project-media/dokus/"+t.docu,children:"zur Dokumentation"})}),Object(N.jsx)("li",{children:null==t.docu2?null:Object(N.jsx)(_.a,{className:"link-buttons",variant:"contained",color:"primary",target:"_blank",rel:"noopener noreferrer",href:"/potfolio/assets/project-media/dokus/"+t.docu2,children:"zur HoloCubes Dokumentation"})})]})]})}),Object(N.jsx)(ee,{})]})};var Me=function(){return Object(N.jsx)("div",{className:"App",children:Object(N.jsx)(o.a,{theme:x,children:Object(N.jsxs)(s.a,{children:[Object(N.jsx)(j,{}),Object(N.jsx)(l.c,{children:Object(N.jsxs)(d.a,{children:[" ",Object(N.jsx)(l.a,{path:"/portfolio/",component:te,exact:!0}),Object(N.jsx)(l.a,{path:"/portfolio/project/:id",component:Be},":id")]})})]})})})};var Ye=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,178)).then((({getCLS:t,getFID:a,getFCP:n,getLCP:c,getTTFB:i})=>{t(e),a(e),n(e),c(e),i(e)}))};r.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(Me,{})}),document.getElementById("root")),Ye()},31:function(e,t,a){}},[[125,1,2]]]);
//# sourceMappingURL=main.a9f38f6e.chunk.js.map