(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],l=0,f=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"93c51045","chunk-097de584":"2790994e","chunk-1db5439e":"bb261997","chunk-1f376017":"a7174edf","chunk-23869fa4":"d4af5373","chunk-2166ae0e":"bd8372a7","chunk-251f8062":"3f30b988","chunk-2d213759":"e5818ee2","chunk-2d2261c5":"2d52e783","chunk-34aad8e1":"1ee55c0a","chunk-39f86f24":"2c9a4732","chunk-48f15cd0":"d71d893d","chunk-59b24502":"938eea81","chunk-644d1eca":"91a7f914","chunk-73c99eec":"5850a809","chunk-7466dbaa":"47a1fcaf","chunk-f503e384":"0cceb000"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-097de584":1,"chunk-1db5439e":1,"chunk-1f376017":1,"chunk-23869fa4":1,"chunk-2166ae0e":1,"chunk-251f8062":1,"chunk-34aad8e1":1,"chunk-39f86f24":1,"chunk-48f15cd0":1,"chunk-59b24502":1,"chunk-644d1eca":1,"chunk-73c99eec":1,"chunk-7466dbaa":1,"chunk-f503e384":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-097de584":"a0c8b153","chunk-1db5439e":"0c01cd50","chunk-1f376017":"9660d9e4","chunk-23869fa4":"f570d378","chunk-2166ae0e":"c0073423","chunk-251f8062":"616c4dbd","chunk-2d213759":"31d6cfe0","chunk-2d2261c5":"31d6cfe0","chunk-34aad8e1":"7df43b49","chunk-39f86f24":"73789dd9","chunk-48f15cd0":"4869ab16","chunk-59b24502":"308e9572","chunk-644d1eca":"fdba14f7","chunk-73c99eec":"007ac555","chunk-7466dbaa":"62601995","chunk-f503e384":"b694fe34"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0f9a":function(e,t,n){"use strict";n.r(t);n("d3b7");var r=n("eb88"),o=n("b71e"),a={user:{}},c={user:function(e){return e.user}},u={FETCH_USER:function(e,t){console.log(t);var n=t.id;return r["a"].getItem(n).then((function(t){return console.log(t),e.commit("SET_USER",t),t})).catch((function(e){console.log(e),o["a"].showApiError("")}))},CREATE_USER:function(e,t){return console.log(t),r["a"].create(t).then((function(t){return console.log(t),e.commit("SET_USER",t),t}))},EDIT_USER:function(e,t){return console.log(t),r["a"].edit(t.resource,t.data).then((function(t){return console.log(t),e.commit("SET_USER",t),t}))},CHECK_USER_HASH:function(e,t){return new Promise((function(e,n){r["a"].get("check-hash-actual/"+t).then((function(t){e(t)})).catch((function(t){e(t)}))}))}},i={SET_USER:function(e,t){e.user=t}};t["default"]={state:a,actions:u,mutations:i,getters:c}},"2a74":function(e,t,n){"use strict";n.r(t);n("4160"),n("d3b7"),n("159b"),n("ddb0");var r=n("d307"),o={};r.keys().forEach((function(e){"./index.js"!==e&&(o[e]=r(e).default)})),t["default"]=o},"2cc2":function(e,t,n){"use strict";n.r(t);var r=n("eb88"),o=n("b71e"),a={profile:{}},c={profile:function(e){return e.profile}},u={FETCH_PROFILE:function(e,t){var n=t.id;return r["a"].getItem(n).then((function(t){return e.commit("SET_PROFILE",t),t})).catch((function(e){console.log(e),o["a"].showApiError("")}))}},i={SET_PROFILE:function(e,t){e.profile=t}};t["default"]={state:a,actions:u,mutations:i,getters:c}},"56d7":function(e,t,n){"use strict";n.r(t);n("ac1f"),n("1276"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],c=n("6f9e"),u={name:"App",methods:{},created:function(){var e=this;this.$store.dispatch("FETCH_CSRF_TOKEN"),c["a"].$on("SHOW_TOAST",(function(t){e.showToast(t)}))}},i=u,s=(n("5c0b"),n("2877")),l=Object(s["a"])(i,o,a,!1,null,null,null),f=l.exports,d=n("9483");Object(d["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var h=n("8c4f"),p=(n("d3b7"),{path:"/user",name:"user",component:function(){return n.e("chunk-f503e384").then(n.bind(null,"ad54"))},meta:{title:"user"},children:[{path:"news",name:"user.news",component:function(){return n.e("chunk-644d1eca").then(n.bind(null,"d5c6"))},meta:{title:"events"}},{path:"doings",name:"user.doings",component:function(){return n.e("chunk-251f8062").then(n.bind(null,"40c6"))},meta:{title:"doings"},redirect:"doings/project",children:[{path:"project",name:"user.doings.project.list",component:function(){return n.e("chunk-2166ae0e").then(n.bind(null,"d677"))},meta:{title:"project list"}},{path:"project/:id?",name:"user.doings.project",component:function(){return n.e("chunk-2d213759").then(n.bind(null,"ad88"))},meta:{title:"project"}},{path:"lesson",name:"user.doings.lesson.list",component:function(){return n.e("chunk-34aad8e1").then(n.bind(null,"4c18"))},meta:{title:"lesson list"}},{path:"lesson/:id?",name:"user.doings.lesson",component:function(){return n.e("chunk-73c99eec").then(n.bind(null,"89e3"))},meta:{title:"lesson"}},{path:"lesson/:id/unit/:id?",name:"user.doings.lesson.unit",component:function(){return n.e("chunk-2d2261c5").then(n.bind(null,"e6ec"))},meta:{title:"lesson unit"}}]},{path:"projects",name:"user.projects",component:function(){return Promise.all([n.e("chunk-1db5439e"),n.e("chunk-23869fa4")]).then(n.bind(null,"d817"))},meta:{title:"rest projects"}},{path:"settings",name:"user.settings",component:function(){return n.e("chunk-59b24502").then(n.bind(null,"3131"))},meta:{title:"settings"}}],beforeEnter:function(e,t,n){"1"!==window.getCookie("authl")?n("/guest/projects"):n()}}),m={path:"/",name:"common",component:function(){return n.e("chunk-48f15cd0").then(n.bind(null,"1e4b"))},meta:{title:"home"},redirect:"/guest/projects",children:[{path:"/guest",name:"guest",component:function(){return n.e("about").then(n.bind(null,"d4fa"))},meta:{title:"home"},children:[{path:"projects",name:"guest.projects",component:function(){return Promise.all([n.e("chunk-1db5439e"),n.e("chunk-1f376017")]).then(n.bind(null,"92af"))},meta:{title:"home"}}]},{path:"sign-up",name:"register",component:function(){return n.e("chunk-39f86f24").then(n.bind(null,"cc4d"))},meta:{title:"register"}},{path:"sign-in",name:"login",component:function(){return n.e("chunk-097de584").then(n.bind(null,"d9c9"))},meta:{title:"login"}},{path:"mail/confirm-account/:hash",name:"confirm.account",component:function(){return n.e("chunk-7466dbaa").then(n.bind(null,"29f6"))},meta:{title:"confirm.account"}}],beforeEnter:function(e,t,n){"1"===window.getCookie("authl")?n("/user/news"):n()}},b=[m,p];r["default"].use(h["a"]);var g=new h["a"]({linkActiveClass:"link-active",mode:"history",base:"/",routes:b}),v=g,w=(n("4160"),n("b64b"),n("159b"),n("2f62")),k=n("2a74");r["default"].use(w["a"]);var E=new w["a"].Store({modules:k["default"],actions:{reset:function(e){var t=e.commit;Object.keys(k["default"]).forEach((function(e){t("".concat(e,"/RESET"))}))}},strict:!1}),S={data:function(){return{currentPageName:"page name"}},methods:{isMobile:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},isMobileWidth:function(){return window.innerWidth<992},isNewIOS:function(){var e=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,t=window.devicePixelRatio||1,n={width:window.screen.width*t,height:window.screen.height*t};return!!(e&&n.width>=1125&&n.height>=2436)},goToPrevRoute:function(){this.$router.go(-1)},setCurrentPageName:function(e){c["a"].$emit("CHANGE_CURRENT_PAGE_NAME",e)},showToast:function(e){var t=e.message,n=void 0===t?"":t,r=e.title,o=void 0===r?"":r,a=e.variant,c=void 0===a?"":a,u=e.autoHideDelay,i=void 0===u?1e4:u;this.$bvToast.toast(n,{title:o,toaster:"b-toaster-bottom-full",solid:!0,variant:c,appendToast:!1,autoHideDelay:i})}}},O=(n("77ed"),n("5f5b")),j=n("b1e0"),y=(n("f9e3"),n("2dd8"),n("3f9b")),T=n("7bb1"),R=(n("4fad"),n("5530")),_=n("3835"),x=n("4c93");Object.keys(x).forEach((function(e){Object(T["c"])(e,x[e])}));for(var A=0,C=Object.entries(x);A<C.length;A++){var P=Object(_["a"])(C[A],2),H=P[0],N=P[1];Object(T["c"])(H,Object(R["a"])({},N))}n("e607");var F=n("8e5f"),I=n.n(F),L=(n("78a7"),n("fd45")),M=n("b71e");L["a"].init(),r["default"].use(O["a"]),r["default"].use(j["a"]),r["default"].use(y["a"]),r["default"].component("multiselect",I.a),r["default"].mixin(S),r["default"].component("ValidationProvider",T["b"]),r["default"].component("ValidationObserver",T["a"]),r["default"].config.productionTip=!0,r["default"].prototype.$errorHelper=M["a"],window.getCookie=function(e){var t="; ".concat(document.cookie),n=t.split("; ".concat(e,"="));return 2===n.length&&n.pop().split(";").shift()},new r["default"]({router:v,store:E,render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"6f9e":function(e,t,n){"use strict";var r=n("2b0e"),o=new r["default"];t["a"]=o},"78a7":function(e,t,n){},8798:function(e,t,n){"use strict";n.r(t);var r={messages:[]},o={messages:function(e){return e.messages}},a={ADD_MESSAGE:function(e,t){e.commit("SET_MESSAGE",t)},CLEAR_MESSAGES:function(e){e.commit("CLEAR_MESSAGES")}},c={SET_MESSAGE:function(e,t){e.messages.push(t)},CLEAR_MESSAGES:function(e){e.messages=[]}};t["default"]={state:r,actions:a,mutations:c,getters:o}},"9c0c":function(e,t,n){},b71e:function(e,t,n){"use strict";var r=n("262e"),o=n("2caf"),a=n("d4ec"),c=n("bee2"),u=n("6f9e"),i=function(){function e(t,n,r,o){Object(a["a"])(this,e),this.error=t,this.title=n,this.variant=r,this.autoHideDelay=o}return Object(c["a"])(e,[{key:"showError",value:function(){u["a"].$emit("SHOW_TOAST",{message:this.error,title:this.title,variant:this.variant,autoHideDelay:this.autoHideDelay})}}]),e}(),s=function(e){Object(r["a"])(n,e);var t=Object(o["a"])(n);function n(e,r,o){return Object(a["a"])(this,n),t.call(this,e,r,"danger",o)}return n}(i),l=function(e){Object(r["a"])(n,e);var t=Object(o["a"])(n);function n(e,r,o){return Object(a["a"])(this,n),t.call(this,e,r,"warning",o)}return n}(i),f={showApiError:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Error!",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e4,r=new s(e,t,n);r.showError()},showValidateError:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Warning!",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e4,r=new l(e,t,n);r.showError()},handleUndefinedError:function(e){console.log(e)}};t["a"]=f},b869:function(e,t,n){"use strict";n.r(t),t["default"]={namespaced:!0,state:{windowWidth:0,widthExtraSmall:320,widthSmall:640,widthTablet:1024},mutations:{SET_WINDOW_WIDTH:function(e,t){e.windowWidth=t}},getters:{isExtraSmall:function(e){return e.windowWidth<=e.widthExtraSmall},isSmall:function(e){return e.windowWidth<=e.widthSmall},isTablet:function(e){return e.windowWidth<=e.widthTablet},isDesktop:function(e){return e.windowWidth>e.widthTablet}}}},c7d4:function(e,t,n){"use strict";n.r(t);n("4160"),n("b64b"),n("ac1f"),n("1276"),n("159b"),n("96cf");var r=n("1da1"),o=n("d4ec"),a=n("bee2"),c=n("fd45"),u=function(){function e(){Object(o["a"])(this,e)}return Object(a["a"])(e,null,[{key:"getCsrfToken",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c["a"].get("profile/csrf-token",t);case 3:n=e.sent,r=n.headers["x-csrf-token"],window.localStorage.setItem("X-CSRF-Token",r),e.next=11;break;case 8:throw e.prev=8,e.t0=e["catch"](0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"login",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c["a"].post("profile/login",t);case 3:return n=e.sent,e.abrupt("return",n);case 7:throw e.prev=7,e.t0=e["catch"](0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"logout",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c["a"].post("profile/logout");case 3:return t=e.sent,e.abrupt("return",t);case 7:throw e.prev=7,e.t0=e["catch"](0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}()}]),e}();function i(e){var t="; ".concat(document.cookie),n=t.split("; ".concat(e,"="));return 2===n.length&&n.pop().split(";").shift()}var s=function(){return{variable1:111,variable2:222,variable3:333}},l=s(),f={isLoggedIn:function(e){var t=i("authl");return"1"===t}},d={reset:function(e){var t=e.commit;t("RESET")},FETCH_CSRF_TOKEN:function(e){return u.getCsrfToken().catch((function(e){console.log(e)}))},LOGIN:function(e,t){return u.login(t).then((function(t){return e.commit("SET_PROFILE",t.data.data),t})).catch((function(e){console.log(e)}))},LOGOUT:function(e,t){return u.logout(t).then((function(t){return e.commit("SET_PROFILE",{}),localStorage.removeItem("X-CSRF-Token"),t})).catch((function(e){console.log(e)}))}},h={RESET:function(e){var t=s();Object.keys(t).forEach((function(n){e[n]=t[n]}))}};t["default"]={state:l,getters:f,mutations:h,actions:d}},d307:function(e,t,n){var r={"./auth.js":"c7d4","./dom.js":"b869","./index.js":"2a74","./messages.js":"8798","./profile.js":"2cc2","./user.js":"0f9a"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="d307"},eb88:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n("96cf");var r=n("1da1"),o=n("d4ec"),a=n("bee2"),c=n("fd45"),u=function(){function e(){Object(o["a"])(this,e)}return Object(a["a"])(e,null,[{key:"get",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return c["a"].query("user/".concat(e),t)}},{key:"getItem",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c["a"].get("user",t);case 3:return n=e.sent,e.abrupt("return",n);case 7:throw e.prev=7,e.t0=e["catch"](0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"create",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c["a"].post("user",t);case 3:return n=e.sent,e.abrupt("return",n);case 7:throw e.prev=7,e.t0=e["catch"](0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"edit",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",n=r.length>1?r[1]:void 0,e.next=4,c["a"].put("user/".concat(t),n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.email,t.password,e.prev=1,e.next=4,c["a"].delete("qwe","qwe");case 4:n=e.sent,console.log(n),e.next=11;break;case 8:throw e.prev=8,e.t0=e["catch"](1),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(t){return e.apply(this,arguments)}return t}()}]),e}()},fd45:function(e,t,n){"use strict";n("99af"),n("d3b7");var r=n("2b0e"),o=n("bc3a"),a=n.n(o),c=n("a7fe"),u=n.n(c),i="https://studs.me/api/",s=n("b71e"),l={init:function(){r["default"].use(u.a,a.a),r["default"].axios.defaults.baseURL=i,r["default"].axios.defaults.withCredentials=!0},setHeader:function(){r["default"].axios.defaults.headers.common["X-CSRF-Token"]=window.localStorage.getItem("X-CSRF-Token")},query:function(e,t){return new Promise((function(n,o){r["default"].axios.get(e,t).then((function(e){n(e)})).catch((function(e){s["a"].showApiError(e.response.data.data.message),o(e.response)}))}))},get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return r["default"].axios.get("".concat(e,"/").concat(t)).catch((function(e){throw new Error("[RWV] ApiService ".concat(e))}))},post:function(e,t){return this.setHeader(),new Promise((function(n,o){return r["default"].axios.post("".concat(e),t).then((function(e){n(e)})).catch((function(e){var t=e&&e.response?e.response.data.data.message:"ERROR";s["a"].showApiError(t),o(e.response)}))}))},put:function(e,t){return this.setHeader(),new Promise((function(n,o){return r["default"].axios.put("".concat(e),t).then((function(e){n(e)})).catch((function(e){s["a"].showApiError(e.response.data.data.message),o(e.response)}))}))},delete:function(e){return this.setHeader(),r["default"].axios.delete(e).catch((function(e){throw new Error("[RWV] ApiService ".concat(e))}))}};t["a"]=l}});
//# sourceMappingURL=app.1154ee4d.js.map