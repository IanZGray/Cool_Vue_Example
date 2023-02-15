(function(){"use strict";var e={5520:function(e,t,i){var l=i(9242),s=i(3396),a=i(7139);const n=(0,s._)("header",null,[(0,s._)("img",{class:"logo",src:"https://content.codecademy.com/courses/vue-instances/ticket_logo.svg",alt:"logo"}),(0,s._)("h1",null,"TICKETBOX"),(0,s._)("link",{href:"https://fonts.googleapis.com/css?family=Oxygen:400,700",rel:"stylesheet"}),(0,s._)("link",{href:"https://fonts.googleapis.com/css?family=Petit+Formal+Script",rel:"stylesheet"})],-1),r={class:"form-row"},o={class:"form-field"},u=(0,s._)("label",{for:"first-name"},"First Name *",-1),c={class:"form-field"},d=(0,s._)("label",{for:"last-name"},"Last Name *",-1),m={class:"form-row"},p={class:"form-field"},f=(0,s._)("label",{for:"email"},"Email *",-1),h={class:"form-row"},_={class:"form-field"},v=(0,s._)("label",{for:"ticket-quantity"},"Ticket Quantity",-1),y=(0,s._)("option",null,"1",-1),g=(0,s._)("option",null,"2",-1),b=(0,s._)("option",null,"3",-1),k=(0,s._)("option",null,"4",-1),w=[y,g,b,k],N={class:"form-field"},C=(0,s._)("legend",null,"Ticket Type",-1),U=(0,s._)("label",{for:"general"},"General Admission",-1),V=(0,s._)("label",{for:"vip"},"VIP",-1),T={class:"form-row checkbox"},x=(0,s._)("legend",null,"How did you hear about this event?",-1),F=(0,s._)("label",{for:"friend"},"Friend",-1),q=(0,s._)("label",{for:"publication"},"Publication",-1),S=(0,s._)("label",{for:"social-media"},"Social Media",-1),A={class:"form-row vertical"},O=(0,s._)("label",{for:"requests"},[(0,s.Uk)("Special requests "),(0,s._)("span",{class:"smallText"},"(Try 'meet and greet')")],-1),I={class:"form-row vertical agreement checkbox"},D=(0,s._)("legend",null,"Purchase Agreement",-1),j={class:"form-row vertical"},P=(0,s._)("label",{for:"signature"},"Signature",-1),Q=(0,s._)("button",{type:"reset",class:"reset"},"Reset",-1),R=["disabled"],M={class:"popUpClass"},z={class:"popUpContent"},E=(0,s._)("h1",null,"Thank You!",-1),G={style:{"margin-bottom":"15px"}};function L(e,t,i,y,g,b){return(0,s.wg)(),(0,s.iD)("div",null,[n,(0,s._)("form",{onReset:t[13]||(t[13]=(...e)=>b.resetFields&&b.resetFields(...e)),onSubmit:[t[14]||(t[14]=(0,l.iM)(((...t)=>e.submitForm&&e.submitForm(...t)),["prevent"])),t[15]||(t[15]=(...t)=>e.submitFields&&e.submitFields(...t))]},[(0,s._)("div",r,[(0,s._)("div",o,[u,(0,s.wy)((0,s._)("input",{type:"text",id:"first-name","onUpdate:modelValue":t[0]||(t[0]=t=>e.firstName=t),class:(0,a.C_)([e.requiredFieldClass,b.firstNameClasses])},null,2),[[l.nr,e.firstName,void 0,{trim:!0}]])]),(0,s._)("div",c,[d,(0,s.wy)((0,s._)("input",{type:"text",id:"last-name","onUpdate:modelValue":t[1]||(t[1]=t=>e.lastName=t),class:(0,a.C_)([e.requiredFieldClass,b.lastNameClasses])},null,2),[[l.nr,e.lastName,void 0,{trim:!0}]])])]),(0,s._)("div",m,[(0,s._)("div",p,[f,(0,s.wy)((0,s._)("input",{type:"text",id:"email","onUpdate:modelValue":t[2]||(t[2]=t=>e.email=t),class:(0,a.C_)([e.requiredFieldClass,b.emailClasses])},null,2),[[l.nr,e.email,void 0,{trim:!0}]])])]),(0,s._)("div",h,[(0,s._)("div",_,[v,(0,s.wy)((0,s._)("select",{id:"ticket-quantity","onUpdate:modelValue":t[3]||(t[3]=t=>e.ticketQuantity=t)},w,512),[[l.bM,e.ticketQuantity,void 0,{number:!0}]])]),(0,s._)("div",N,[C,(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{type:"radio",id:"general",value:"general","onUpdate:modelValue":t[4]||(t[4]=t=>e.ticketType=t),checked:"checked"},null,512),[[l.G2,e.ticketType]]),U]),(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{type:"radio",id:"vip",value:"vip","onUpdate:modelValue":t[5]||(t[5]=t=>e.ticketType=t)},null,512),[[l.G2,e.ticketType]]),V])])]),(0,s._)("div",T,[(0,s._)("fieldset",null,[x,(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{type:"checkbox",id:"friend",value:"friend","onUpdate:modelValue":t[6]||(t[6]=t=>e.referrals=t)},null,512),[[l.e8,e.referrals]]),F]),(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{type:"checkbox",id:"publication",value:"publication","onUpdate:modelValue":t[7]||(t[7]=t=>e.referrals=t)},null,512),[[l.e8,e.referrals]]),q]),(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{type:"checkbox",id:"social-media",value:"social","onUpdate:modelValue":t[8]||(t[8]=t=>e.referrals=t)},null,512),[[l.e8,e.referrals]]),S])])]),(0,s._)("div",A,[O,(0,s.wy)((0,s._)("textarea",{id:"requests","onUpdate:modelValue":t[9]||(t[9]=t=>e.specialRequests=t)},null,512),[[l.nr,e.specialRequests,void 0,{trim:!0}]])]),(0,s._)("div",I,[(0,s._)("fieldset",null,[D,(0,s._)("p",null,"I, "+(0,a.zw)(b.fullName)+(0,a.zw)(b.commaMark)+" wish to buy "+(0,a.zw)(b.ticketDescription)+". I understand that all ticket sales are final.",1),(0,s.wy)((0,s._)("input",{type:"checkbox",name:"agreement",id:"agree","onUpdate:modelValue":t[10]||(t[10]=t=>e.purchaseAgreementSigned=t)},null,512),[[l.e8,e.purchaseAgreementSigned]]),(0,s._)("label",{class:(0,a.C_)([b.purchaseAgreementSignedClasses]),for:"agree"},"I Agree *",2)])]),(0,s._)("div",j,[P,(0,s.wy)((0,s._)("input",{id:"signature",class:"signature","onUpdate:modelValue":t[11]||(t[11]=e=>b.fullName=e)},null,512),[[l.nr,b.fullName]])]),(0,s._)("div",null,[Q,(0,s._)("button",{type:"submit",disabled:!b.formIsValid,class:(0,a.C_)({active:b.formIsValid}),onClick:t[12]||(t[12]=t=>e.popUpDisplay=!0)},"Confirm Tickets",10,R)])],32),(0,s.wy)((0,s._)("div",M,[(0,s._)("div",z,[(0,s._)("span",{class:"closePopUp",onClick:t[16]||(t[16]=(...e)=>b.closeDisplay&&b.closeDisplay(...e))},"×"),E,(0,s._)("p",G,"Your purchase of "+(0,a.zw)(b.ticketDescription)+" has been processed. Enjoy the event!",1)])],512),[[l.F8,e.popUpDisplay]])])}var Y={data:function(){return{firstName:"",lastName:"",email:"",ticketQuantity:1,ticketType:"general",referrals:[],specialRequests:"",purchaseAgreementSigned:!1,requiredFieldClass:"required",popUpDisplay:!1}},computed:{fullName:{get:function(){return this.firstName&&this.lastName?this.firstName+" "+this.lastName:this.firstName||this.lastName},set:function(e){const t=e.split(" ");2===t.length&&(this.firstName=t[0],this.lastName=t[1]),t.length<=1&&(this.firstName=t[0]||"",this.lastName="")}},commaMark:function(){return this.fullName?",":""},ticketDescription:function(){let e="General Admission";"vip"===this.ticketType&&(e="VIP");let t="tickets";return 1===this.ticketQuantity&&(t="ticket"),this.ticketQuantity+" "+e+" "+t},emailIsValid:function(){return this.email.includes("@")},formIsValid:function(){return this.firstName&&this.lastName&&this.emailIsValid&&this.purchaseAgreementSigned},emailClasses:function(){return{touched:0!==this.email.length,invalid:this.email&&!this.emailIsValid}},firstNameClasses:function(){return{touched:0!==this.firstName.length}},lastNameClasses:function(){return{touched:0!==this.lastName.length}},purchaseAgreementSignedClasses:function(){return{untouched:!1===this.purchaseAgreementSigned,touched:!0===this.purchaseAgreementSigned}}},watch:{specialRequests:function(e){(e.toLowerCase().includes("meet and greet")||e.toLowerCase().includes("meet-and-greet"))&&(this.ticketType="vip")}},methods:{resetFields(){this.firstName="",this.lastName="",this.email="",this.ticketQuantity=1,this.ticketType="general",this.referrals=[],this.specialRequests="",this.purchaseAgreementSigned=!1},closeDisplay(){this.popUpDisplay=!1,this.resetFields()}}},B=i(89);const H=(0,B.Z)(Y,[["render",L]]);var K=H;(0,l.ri)(K).mount("#app")}},t={};function i(l){var s=t[l];if(void 0!==s)return s.exports;var a=t[l]={exports:{}};return e[l](a,a.exports,i),a.exports}i.m=e,function(){var e=[];i.O=function(t,l,s,a){if(!l){var n=1/0;for(c=0;c<e.length;c++){l=e[c][0],s=e[c][1],a=e[c][2];for(var r=!0,o=0;o<l.length;o++)(!1&a||n>=a)&&Object.keys(i.O).every((function(e){return i.O[e](l[o])}))?l.splice(o--,1):(r=!1,a<n&&(n=a));if(r){e.splice(c--,1);var u=s();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[l,s,a]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var l in t)i.o(t,l)&&!i.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,l){var s,a,n=l[0],r=l[1],o=l[2],u=0;if(n.some((function(t){return 0!==e[t]}))){for(s in r)i.o(r,s)&&(i.m[s]=r[s]);if(o)var c=o(i)}for(t&&t(l);u<n.length;u++)a=n[u],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(c)},l=self["webpackChunktest_proj"]=self["webpackChunktest_proj"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=i.O(void 0,[998],(function(){return i(5520)}));l=i.O(l)})();
//# sourceMappingURL=app.b3352395.js.map