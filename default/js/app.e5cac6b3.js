(function(e){function t(t){for(var c,s,a=t[0],r=t[1],o=t[2],d=0,b=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(l,s)&&l[s]&&b.push(l[s][0]),l[s]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c]);u&&u(t);while(b.length)b.shift()();return i.push.apply(i,o||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],c=!0,a=1;a<n.length;a++){var r=n[a];0!==l[r]&&(c=!1)}c&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var c={},l={app:0},i=[];function s(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=c,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(n,c,function(t){return e[t]}.bind(null,c));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],r=a.push.bind(a);a.push=t,a=a.slice();for(var o=0;o<a.length;o++)t(a[o]);var u=r;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),l={class:"container-fluid"};function i(e,t,n,i,s,a){var r=Object(c["l"])("user-list");return Object(c["i"])(),Object(c["d"])("div",l,[(Object(c["i"])(!0),Object(c["d"])(c["a"],null,Object(c["k"])(e.userList,(function(t){return Object(c["i"])(),Object(c["d"])("div",{class:"d-flex flex-wrap",key:t.id},[Object(c["g"])(r,{modelValue:e.userList},null,8,["modelValue"])])})),128))])}n("d81d");var s={class:"col-xxl-3 col-md-6 col-sm-12"};function a(e,t,n,l,i,a){var r=Object(c["l"])("user-edit"),o=Object(c["l"])("user-view");return Object(c["i"])(),Object(c["d"])("div",s,[(Object(c["i"])(!0),Object(c["d"])(c["a"],null,Object(c["k"])(e.userList,(function(n){return Object(c["i"])(),Object(c["d"])("div",{class:"m-2",key:n.id},[e.editedUserId===n.id?(Object(c["i"])(),Object(c["c"])(r,{key:0,modelValue:n.value,"onUpdate:modelValue":function(e){return n.value=e},onClose:t[0]||(t[0]=function(t){return e.finishEditing()})},null,8,["modelValue","onUpdate:modelValue"])):(Object(c["i"])(),Object(c["c"])(o,{key:1,modelValue:n.value,"onUpdate:modelValue":function(e){return n.value=e},onDelete:function(t){return e.deleteItem(n)},onEdit:function(t){return e.editItem(n)}},null,8,["modelValue","onUpdate:modelValue","onDelete","onEdit"]))])})),128))])}n("4de4");var r={class:"card"},o={class:"row"},u={class:"col-12 d-flex justify-content-end"},d=Object(c["e"])("span",{class:"bi bi-pencil","aria-hidden":"true"},null,-1),b=Object(c["f"])(" Edit "),j=[d,b],f=Object(c["e"])("span",{class:"bi bi-trash","aria-hidden":"true"},null,-1),O=Object(c["f"])(" Delete "),p=[f,O],m={class:"row"},v={class:"col-12"},h={class:"list-group list-group-flush"},y={class:"list-group-item"},x={class:"row"},V=Object(c["e"])("div",{class:"col-4 d-flex justify-content-start text-break text-start"}," UserName: ",-1),g={class:"col-8 d-flex justify-content-start text-break text-start"},w={class:"list-group-item"},k={class:"row"},U=Object(c["e"])("div",{class:"col-4 d-flex justify-content-start text-break text-start"}," Email: ",-1),P={class:"col-8 d-flex justify-content-start text-break text-start"},L={class:"list-group-item"};function I(e,t,n,l,i,s){var a=Object(c["l"])("pet-list");return Object(c["i"])(),Object(c["d"])("div",r,[Object(c["e"])("div",o,[Object(c["e"])("div",u,[Object(c["e"])("button",{type:"button",class:"btn btn-default btn-sm",onClick:t[0]||(t[0]=function(t){return e.$emit("edit")})},j),Object(c["e"])("button",{type:"button",class:"btn btn-default btn-sm",onClick:t[1]||(t[1]=function(t){return e.$emit("delete")})},p)])]),Object(c["e"])("div",m,[Object(c["e"])("div",v,[Object(c["e"])("ul",h,[Object(c["e"])("li",y,[Object(c["e"])("div",x,[V,Object(c["e"])("div",g,Object(c["m"])(e.modelValue.userName),1)])]),Object(c["e"])("li",w,[Object(c["e"])("div",k,[U,Object(c["e"])("div",P,Object(c["m"])(e.modelValue.email),1)])]),Object(c["e"])("li",L,[Object(c["g"])(a,{modelValue:e.modelValue.pets,"onUpdate:modelValue":e.onUpdate},null,8,["modelValue","onUpdate:modelValue"])])])])])])}var E=n("5530"),$={class:"row"},C=Object(c["e"])("div",{class:"col-12 d-flex justify-content-start"}," Pets: ",-1);function N(e,t,n,l,i,s){var a=Object(c["l"])("pet-edit"),r=Object(c["l"])("pet-view");return Object(c["i"])(),Object(c["d"])("div",$,[C,(Object(c["i"])(!0),Object(c["d"])(c["a"],null,Object(c["k"])(e.petList,(function(n){return Object(c["i"])(),Object(c["d"])("div",{class:"col-12 mb-2",key:n.id},[e.editedPetId===n.id?(Object(c["i"])(),Object(c["c"])(a,{key:0,modelValue:n.value,"onUpdate:modelValue":function(e){return n.value=e},onClose:t[0]||(t[0]=function(t){return e.finishEditing()})},null,8,["modelValue","onUpdate:modelValue"])):(Object(c["i"])(),Object(c["c"])(r,{key:1,modelValue:n.value,"onUpdate:modelValue":function(e){return n.value=e},onDelete:function(t){return e.deleteItem(n)},onEdit:function(t){return e.editItem(n)}},null,8,["modelValue","onUpdate:modelValue","onDelete","onEdit"]))])})),128))])}n("b0c0");var S={class:"card col-md-12"},D={class:"row"},_={class:"col-12 d-flex justify-content-end"},M=Object(c["e"])("span",{class:"bi bi-pencil","aria-hidden":"true"},null,-1),A=Object(c["f"])(" Edit "),J=[M,A],T=Object(c["e"])("span",{class:"bi bi-trash","aria-hidden":"true"},null,-1),G=Object(c["f"])(" Delete "),q=[T,G],z={class:"row"},B={class:"col-12"},F={class:"list-group list-group-flush"},H={class:"list-group-item"},K={class:"row"},Q=Object(c["e"])("div",{class:"col-4 d-flex justify-content-start text-break text-start"}," name: ",-1),R={class:"col-8 d-flex justify-content-start text-break"},W={class:"list-group-item"},X={class:"row"},Y=Object(c["e"])("div",{class:"col-4 d-flex justify-content-start text-break text-start"}," species: ",-1),Z={class:"col-8 d-flex justify-content-start text-break text-start"};function ee(e,t,n,l,i,s){return Object(c["i"])(),Object(c["d"])("div",S,[Object(c["e"])("div",D,[Object(c["e"])("div",_,[Object(c["e"])("button",{type:"button",class:"btn btn-default btn-sm",onClick:t[0]||(t[0]=function(t){return e.$emit("edit")})},J),Object(c["e"])("button",{type:"button",class:"btn btn-default btn-sm",onClick:t[1]||(t[1]=function(t){return e.$emit("delete")})},q)])]),Object(c["e"])("div",z,[Object(c["e"])("div",B,[Object(c["e"])("ul",F,[Object(c["e"])("li",H,[Object(c["e"])("div",K,[Q,Object(c["e"])("div",R,Object(c["m"])(e.modelValue.name),1)])]),Object(c["e"])("li",W,[Object(c["e"])("div",X,[Y,Object(c["e"])("div",Z,Object(c["m"])(e.modelValue.species),1)])])])])])])}var te=Object(c["h"])({name:"PetView",props:{modelValue:Object}});te.render=ee;var ne=te,ce={class:"card col-md-12"},le={class:"row"},ie={class:"col-12 d-flex justify-content-end"},se=Object(c["e"])("span",{class:"bi bi-save","aria-hidden":"true"},null,-1),ae=Object(c["f"])(" Save "),re=[se,ae],oe=Object(c["e"])("span",{class:"bi bi-backspace","aria-hidden":"true"},null,-1),ue=Object(c["f"])(" Cancel "),de=[oe,ue],be={class:"row"},je={class:"col-12"},fe={class:"list-group list-group-flush"},Oe={class:"list-group-item"},pe={class:"row d-flex align-items-center"},me=Object(c["e"])("div",{class:"col-4 d-flex justify-content-start text-break text-start"}," name: ",-1),ve={class:"col-8 d-flex justify-content-start"},he=["id"],ye={class:"list-group-item"},xe={class:"row d-flex align-items-center"},Ve=Object(c["e"])("div",{class:"col-4 d-flex justify-content-start text-break text-start"}," species: ",-1),ge={class:"col-8 d-flex justify-content-start"},we=["id"];function ke(e,t,n,l,i,s){return Object(c["i"])(),Object(c["d"])("div",ce,[Object(c["e"])("div",le,[Object(c["e"])("div",ie,[Object(c["e"])("button",{type:"button",class:"btn btn-default btn-sm",onClick:t[0]||(t[0]=function(){return e.save&&e.save.apply(e,arguments)})},re),Object(c["e"])("button",{type:"button",class:"btn btn-default btn-sm",onClick:t[1]||(t[1]=function(){return e.cancel&&e.cancel.apply(e,arguments)})},de)])]),Object(c["e"])("div",be,[Object(c["e"])("div",je,[Object(c["e"])("ul",fe,[Object(c["e"])("li",Oe,[Object(c["e"])("div",pe,[me,Object(c["e"])("div",ve,[Object(c["o"])(Object(c["e"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.editedPet.name=t}),type:"text",class:"form-control",id:"petName".concat(e.editedPet.name)},null,8,he),[[c["n"],e.editedPet.name]])])])]),Object(c["e"])("li",ye,[Object(c["e"])("div",xe,[Ve,Object(c["e"])("div",ge,[Object(c["o"])(Object(c["e"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.editedPet.species=t}),type:"text",class:"form-control",id:"species".concat(e.editedPet.name)},null,8,we),[[c["n"],e.editedPet.species]])])])])])])])])}var Ue=Object(c["h"])({name:"PetView",props:{modelValue:Object},setup:function(e){var t=Object(E["a"])({},e.modelValue);return{editedPet:t}},methods:{save:function(){this.$emit("update:modelValue",this.editedPet),this.$emit("close")},cancel:function(){this.$emit("close")}}});Ue.render=ke;var Pe=Ue,Le=Object(c["h"])({components:{PetView:ne,PetEdit:Pe},name:"PetList",props:{modelValue:Object},setup:function(e){var t=Object(c["j"])(-1),n=Object(c["j"])(e.modelValue.map((function(e,t){return{id:t,value:e}})));return{editedPetId:t,petList:n}},methods:{editItem:function(e){this.editedPetId=e.id},deleteItem:function(e){confirm("Are you sure to delete Pet with name ".concat(e.value.name,"?"))&&(this.petList=this.petList.filter((function(t){return t.id!==e.id})),this.$emit("update:modelValue",this.petList.map((function(e){return e.value}))))},finishEditing:function(){this.editedPetId=-1}}});Le.render=N;var Ie=Le,Ee=Object(c["h"])({components:{PetList:Ie},name:"UserView",props:{modelValue:Object},methods:{onUpdate:function(e){var t=Object(E["a"])({},this.modelValue);t.pets=e,this.$emit("update:modelValue",t)}}});Ee.render=I;var $e=Ee,Ce={class:"card"},Ne={class:"row"},Se={class:"col-12 d-flex justify-content-end"},De=Object(c["e"])("span",{class:"bi bi-save","aria-hidden":"true"},null,-1),_e=Object(c["f"])(" Save "),Me=[De,_e],Ae=Object(c["e"])("span",{class:"bi bi-backspace","aria-hidden":"true"},null,-1),Je=Object(c["f"])(" Cancel "),Te=[Ae,Je],Ge={class:"row"},qe={class:"col-12"},ze={class:"list-group list-group-flush"},Be={class:"list-group-item"},Fe={class:"row d-flex align-items-center"},He=Object(c["e"])("div",{class:"col-4 d-flex justify-content-start text-break text-start"}," UserName: ",-1),Ke={class:"col-8 d-flex justify-content-start"},Qe={class:"list-group-item"},Re={class:"row d-flex align-items-center"},We=Object(c["e"])("div",{class:"col-4 d-flex justify-content-start text-break text-start"}," Email: ",-1),Xe={class:"col-8 d-flex justify-content-start"},Ye={class:"list-group-item"};function Ze(e,t,n,l,i,s){var a=Object(c["l"])("pet-list");return Object(c["i"])(),Object(c["d"])("div",Ce,[Object(c["e"])("div",Ne,[Object(c["e"])("div",Se,[Object(c["e"])("button",{type:"button",class:"btn btn-default btn-sm",onClick:t[0]||(t[0]=function(){return e.save&&e.save.apply(e,arguments)})},Me),Object(c["e"])("button",{type:"button",class:"btn btn-default btn-sm",onClick:t[1]||(t[1]=function(){return e.cancel&&e.cancel.apply(e,arguments)})},Te)])]),Object(c["e"])("div",Ge,[Object(c["e"])("div",qe,[Object(c["e"])("ul",ze,[Object(c["e"])("li",Be,[Object(c["e"])("div",Fe,[He,Object(c["e"])("div",Ke,[Object(c["o"])(Object(c["e"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.editedUser.userName=t}),type:"text",class:"form-control",id:"userName"},null,512),[[c["n"],e.editedUser.userName]])])])]),Object(c["e"])("li",Qe,[Object(c["e"])("div",Re,[We,Object(c["e"])("div",Xe,[Object(c["o"])(Object(c["e"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.editedUser.email=t}),type:"text",class:"form-control",id:"email"},null,512),[[c["n"],e.editedUser.email]])])])]),Object(c["e"])("li",Ye,[Object(c["g"])(a,{modelValue:e.pets,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.pets=t})},null,8,["modelValue"])])])])])])}var et=Object(c["h"])({components:{PetList:Ie},name:"UserView",props:{modelValue:Object},setup:function(e){var t=Object(E["a"])({},e.modelValue),n=Object(c["j"])(e.modelValue.pets);return{editedUser:t,pets:n}},methods:{save:function(){this.$emit("update:modelValue",this.editedUser),this.$emit("close")},cancel:function(){this.$emit("close")}}});et.render=Ze;var tt=et,nt=Object(c["h"])({components:{UserView:$e,UserEdit:tt},name:"UserList",props:{modelValue:Object},setup:function(e){var t=Object(c["j"])(-1),n=Object(c["j"])(e.modelValue);return{editedUserId:t,userList:n}},methods:{editItem:function(e){this.editedUserId=e.id},deleteItem:function(e){confirm("Are you sure to delete User with name ".concat(e.value.userName,"?"))&&(this.userList=this.userList.filter((function(t){return t.id!==e.id})),this.$emit("update:modelValue",this.userList.map((function(e){return e.value}))))},finishEditing:function(){this.editedUserId=-1}}});nt.render=a;var ct=nt,lt=Object(c["h"])({name:"App",components:{UserList:ct},setup:function(){var e=[{userName:"Jon",email:"jon@arbuckle.com",pets:[{name:"Garfield",species:"cat"},{name:"Odie",species:"dog"}]}],t=Object(c["j"])(e.map((function(e,t){return{id:t,value:e}})));return{userList:t}}});n("9250");lt.render=i;var it=lt;Object(c["b"])(it).mount("#app")},9250:function(e,t,n){"use strict";n("fd66")},fd66:function(e,t,n){}});
//# sourceMappingURL=app.e5cac6b3.js.map