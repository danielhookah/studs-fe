(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63d66a76"],{3131:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"user-settings"}},[r("ValidationObserver",{ref:"observer",staticClass:"d-flex flex-column align-items-center",attrs:{tag:"form"},on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[r("div",{staticClass:"my-4 avatar-wrapper"},[r("b-icon",{attrs:{icon:"person","font-scale":"2.5"}})],1),r("ValidationProvider",{attrs:{name:"firstName",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{staticClass:"custom",attrs:{label:"Your first name:","label-for":"input-first-name"}},[r("b-form-input",{staticClass:"custom",class:{error:t.errors[0]},attrs:{id:"input-first-name",type:"text",required:"",placeholder:"Mark"},model:{value:e.user.firstName,callback:function(t){e.$set(e.user,"firstName",t)},expression:"user.firstName"}})],1)]}}])}),r("ValidationProvider",{attrs:{name:"lastName",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{staticClass:"custom",attrs:{label:"Your last name:","label-for":"input-last-name"}},[r("b-form-input",{staticClass:"custom",class:{error:t.errors[0]},attrs:{id:"input-last-name",type:"text",required:"",placeholder:"Brown"},model:{value:e.user.lastName,callback:function(t){e.$set(e.user,"lastName",t)},expression:"user.lastName"}})],1)]}}])}),r("ValidationProvider",{attrs:{name:"email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{staticClass:"custom",attrs:{label:"Your email:","label-for":"input-email"}},[r("b-form-input",{staticClass:"custom",class:{error:t.errors[0]},attrs:{id:"input-email",type:"text",required:"",placeholder:"example@test.com"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1)]}}])}),r("ValidationProvider",{attrs:{name:"phone",rules:"required|integer"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{staticClass:"custom",attrs:{label:"Your phone:","label-for":"input-phone"}},[r("b-form-input",{staticClass:"custom",class:{error:t.errors[0]},attrs:{id:"input-phone",type:"text",required:"",placeholder:"+1234567890"},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}})],1)]}}])}),r("ValidationProvider",{attrs:{name:"phone",rules:"required|integer"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{staticClass:"custom",attrs:{label:"Your role:","label-for":"input-role"}},[r("b-form-input",{staticClass:"custom",class:{error:t.errors[0]},attrs:{id:"input-role",disabled:"",type:"text",required:"",placeholder:"+1234567890"},model:{value:e.userRoleReadable,callback:function(t){e.userRoleReadable=t},expression:"userRoleReadable"}})],1)]}}])}),r("b-row",{staticClass:"justify-content-around mt-3 w-100"},[r("b-button",{staticClass:"mr-2",attrs:{variant:"secondary"},on:{click:e.logout}},[e._v("logout")]),r("b-button",{staticClass:"mr-2",attrs:{type:"submit",variant:"primary"}},[e._v("save")])],1)],1),r("router-view")],1)},a=[],o=(r("96cf"),r("1da1")),n={name:"PublicProject",data:function(){return{user:{avatar:"",firstName:"",lastName:"",email:"",phone:""}}},watch:{profile:function(e){console.log(e),this.user=e}},computed:{userRoleReadable:function(){var e=["Student","Teacher","Creator"];return e[this.user.role]},profile:{get:function(){return this.$store.getters.profile},set:function(e){this.$store.commit("SET_PROFILE",e)}}},methods:{logout:function(){var e=this;this.$store.dispatch("LOGOUT").then((function(){e.$store.dispatch("FETCH_CSRF_TOKEN"),e.$router.push({name:"common"})}))},onSubmit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.observer.validate();case 2:if(t.t0=t.sent,!1!==t.t0){t.next=5;break}return t.abrupt("return");case 5:e.$store.dispatch("EDIT_USER",{resource:e.user.id,data:e.user}).then((function(t){e.showToast({message:t.data.message,title:"Success",variant:"success"})}));case 6:case"end":return t.stop()}}),t)})))()}},mounted:function(){},created:function(){var e=this;this.$store.dispatch("FETCH_PROFILE").then((function(t){e.user=e.cloneObject(t.data)}))}},i=n,u=(r("320e"),r("2877")),l=Object(u["a"])(i,s,a,!1,null,"035baa34",null);t["default"]=l.exports},"320e":function(e,t,r){"use strict";var s=r("cc52"),a=r.n(s);a.a},cc52:function(e,t,r){}}]);
//# sourceMappingURL=chunk-63d66a76.7093c26c.js.map