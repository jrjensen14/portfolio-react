(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{11:function(e,t,r){},13:function(e,t,r){var c={"./critter_tails.jpg":14};function n(e){var t=i(e);return r(t)}function i(e){if(!r.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}n.keys=function(){return Object.keys(c)},n.resolve=i,e.exports=n,n.id=13},14:function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/critter_tails.68809df5.jpg"},15:function(e,t,r){"use strict";r.r(t);var c=r(1),n=r.n(c),i=r(6),a=r.n(i),s=(r(11),r(2)),l=r.p+"static/media/cover-image.533ae8f6.jpg",o=r(0);var j=function(e){return Object(o.jsxs)("header",{className:"flex-row space-between px-1",children:[Object(o.jsx)("h1",{children:"Jessica Jensen"}),Object(o.jsx)("img",{src:l,alt:"wooden background"}),e.children]})};function u(e){return e.charAt(0).toUpperCase()+e.slice(1)}var h=function(e){var t=e.pages,r=void 0===t?[]:t,n=e.setCurrentPage,i=e.currentPage;return Object(c.useEffect)((function(){document.title=u(i.name)}),[i]),Object(o.jsx)("nav",{children:Object(o.jsx)("ul",{className:"flex-row",children:r.map((function(e){return Object(o.jsx)("li",{className:"mx-5 ".concat(i.name===e.name&&"navActive"),children:Object(o.jsx)("span",{onClick:function(){return n(e)},children:u(e.name)})},e.name)}))})})},d=function(e){return Object(o.jsx)("div",{children:e.children})};var b=function(){return Object(o.jsx)("section",{className:"my-5",children:Object(o.jsxs)("div",{className:"my-2",children:[Object(o.jsx)("div",{className:"profile-img my-5",children:Object(o.jsx)("i",{className:"fas fa-user-circle",style:{fontSize:"96px"}})}),Object(o.jsx)("p",{children:"Helvetica put a bird on it church-key Blue Bottle banjo bespoke brunch Etsy authentic Marfa quinoa typewriter plaid direct trade small batch wayfarers bicycle rights cliche craft beer gastropub single-origin coffee Godard Carles you probably haven't heard of them irony pickled kitsch synth sriracha gentrify literally heirloom blog Truffaut paleo scenester"}),Object(o.jsx)("p",{children:"Echo Park sriracha Pinterest vegan biodiesel 90's irony iPhone Kickstarter Carles crucifix kitsch narwhal dreamcatcher pickled trust fund selvage art party letterpress Tumblr post-ironic kogi Thundercats Tonx Brooklyn Pitchfork Odd Future authentic normcore freegan leggings Schlitz chambray organic tousled retro fap squid street art church-key fashion axe Wes Anderson bespoke whatever gentrify banh mi you probably haven't heard of them American Apparel next level pug ugh."})]})})};var m=function(e){var t=e.project,c=t.name,n=t.repo,i=t.link,a=t.description;return Object(o.jsxs)("div",{className:"project",children:[Object(o.jsx)("img",{src:r(13)("./".concat(c,".jpg")),alt:c,className:"project-bg"}),Object(o.jsxs)("div",{className:"project-text",children:[Object(o.jsxs)("h3",{children:[Object(o.jsx)("a",{href:i,children:c})," ",Object(o.jsx)("a",{href:n,children:Object(o.jsx)("i",{className:"fab fa-github"})})]}),Object(o.jsx)("p",{children:a})]})]},c)};var O=function(){var e=Object(c.useState)([{name:"critter-tails",description:"MERN Stack",link:"https://crittertails.herokuapp.com/",repo:"https://github.com/jrjensen14/critter_tails.git"},{name:"blog-site",description:"MERN Stack",link:"https://thawing-refuge-08157.herokuapp.com",repo:"https://github.com/jrjensen14/blog_site.git"},{name:"run-buddy",description:"HTML/CSS",link:"https://lernantino.github.io/run-buddy/",repo:"https://github.com/jrjensen14/run-buddy.git"},{name:"SLP-Goalden",description:"Node/IoT",link:"https://mighty-falls-97052.herokuapp.com/",repo:"https://github.com/jrjensen14/slp-goalden.git"}]),t=Object(s.a)(e,1)[0];return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"flex-row",children:t.map((function(e,t){return Object(o.jsx)(m,{project:e},"project"+t)}))})})},p=r(3),x=r(5);var f=function(){var e=Object(c.useState)({name:"",email:"",message:""}),t=Object(s.a)(e,2),r=t[0],n=t[1],i=Object(c.useState)(""),a=Object(s.a)(i,2),l=a[0],j=a[1],u=r.name,h=r.email,d=r.message,b=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);j(t?"":"Your email is invalid.")}else e.target.value.length?j(""):j("".concat(e.target.name," is required."));l||(n(Object(x.a)(Object(x.a)({},r),{},Object(p.a)({},e.target.name,e.target.value))),console.log("Handle Form",r))};return Object(o.jsx)("section",{children:Object(o.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),l||console.log("Submit Form",r)},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(o.jsx)("input",{type:"text",name:"name",defaultValue:u,onBlur:b})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(o.jsx)("input",{type:"email",name:"email",defaultValue:h,onBlur:b})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(o.jsx)("textarea",{name:"message",rows:"5",defaultValue:d,onBlur:b})]}),l&&Object(o.jsx)("div",{children:Object(o.jsx)("p",{className:"error-text",children:l})}),Object(o.jsx)("button",{type:"submit",children:"Submit"})]})})};var g=function(){return Object(o.jsx)("section",{className:"my-5",children:Object(o.jsxs)("div",{className:"my-2",children:[Object(o.jsxs)("p",{children:["Download my ",Object(o.jsx)("a",{href:"https://www.linkedin.com/",children:"resume"})]}),Object(o.jsx)("h3",{children:"Front-end Proficiencies"}),Object(o.jsxs)("ul",{className:"skills",children:[Object(o.jsx)("li",{children:"HTML"}),Object(o.jsx)("li",{children:"CSS"}),Object(o.jsx)("li",{children:"JavaScript"}),Object(o.jsx)("li",{children:"jQuery"}),Object(o.jsx)("li",{children:"responsive design"}),Object(o.jsx)("li",{children:"React"}),Object(o.jsx)("li",{children:"Bootstrap"})]}),Object(o.jsx)("h3",{children:"Back-end Proficiencies"}),Object(o.jsxs)("ul",{className:"skills",children:[Object(o.jsx)("li",{children:"APIs"}),Object(o.jsx)("li",{children:"Node"}),Object(o.jsx)("li",{children:"Express"}),Object(o.jsx)("li",{children:"MySQL, Sequelize"}),Object(o.jsx)("li",{children:"MongoDB, Mongoose"}),Object(o.jsx)("li",{children:"REST"}),Object(o.jsx)("li",{children:"GraphQL"})]})]})})};var v=function(e){var t=e.currentPage;return Object(o.jsxs)("section",{children:[Object(o.jsx)("h2",{children:u(t.name)}),Object(o.jsx)(d,{children:function(){switch(t.name){case"about me":return Object(o.jsx)(b,{});case"portfolio":return Object(o.jsx)(O,{});case"contact":return Object(o.jsx)(f,{});case"resume":return Object(o.jsx)(g,{});default:return Object(o.jsx)(b,{})}}()})]})};var k=function(){return Object(o.jsx)("footer",{className:"flex-row px-1",children:[{name:"fab fa-github",link:"https://github.com/jrjensen14"},{name:"fab fa-linkedin",link:"https://www.linkedin.com/in/jessica-jensen-ba8775172/"}].map((function(e){return Object(o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:Object(o.jsx)("i",{className:e.name})},e.name)}))})};var y=function(){var e=Object(c.useState)([{name:"about me"},{name:"portfolio"},{name:"contact"},{name:"resume"}]),t=Object(s.a)(e,1)[0],r=Object(c.useState)(t[0]),n=Object(s.a)(r,2),i=n[0],a=n[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(j,{children:Object(o.jsx)(h,{pages:t,setCurrentPage:a,currentPage:i})}),Object(o.jsx)("main",{children:Object(o.jsx)(v,{currentPage:i})}),Object(o.jsx)(k,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.c39331b3.chunk.js.map