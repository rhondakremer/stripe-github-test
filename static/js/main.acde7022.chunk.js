(this["webpackJsonpstripe-github-test"]=this["webpackJsonpstripe-github-test"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(11),s=n.n(o),r=(n(18),n.p,n(19),n(3)),i=n(4),u=n(6),j=n(5),l=n(2),h=n(12),b=n(13),p=n(0),m=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var c;Object(r.a)(this,n),(c=t.call(this,e)).handleComplete=function(e){console.log("hey hey we're the token",e)};var a=e.stripe.paymentRequest({country:"US",currency:"usd",total:{label:"Demo total",amount:e.totalPrice}});return a.on("token",(function(e){var t=e.complete,n=e.token,a=Object(b.a)(e,["complete","token"]);console.log("Received Stripe token: ",n),console.log("Received customer information: ",a),c.handleComplete(),t("success")})),a.canMakePayment().then((function(e){c.setState({canMakePayment:!!e})})),c.state={canMakePayment:!1,paymentRequest:a},c}return Object(i.a)(n,[{key:"render",value:function(){return this.state.canMakePayment?Object(p.jsx)("div",{children:Object(p.jsx)(l.PaymentRequestButtonElement,{paymentRequest:this.state.paymentRequest,className:"PaymentRequestButton",style:{paymentRequestButton:{theme:"dark",height:"40px"}}})}):Object(p.jsxs)("p",{children:["Either your browser does not support the Payment Request API or you do not have a saved payment method. To try out the Payment Request Button, switch to one of ",Object(p.jsx)("a",{href:"https://stripe.com/docs/stripe-js/elements/payment-request-button#testing",children:"the supported browsers"}),", and make sure you have a saved payment method."]})}}]),n}(a.a.Component),d=Object(l.injectStripe)(m),O=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(p.jsx)(l.CardElement,{})}}]),n}(a.a.Component),y=Object(l.injectStripe)(O),f=function(){var e=Object(c.useState)(1),t=Object(h.a)(e,2),n=t[0],a=t[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)(l.Elements,{children:Object(p.jsx)(y,{})}),Object(p.jsx)(l.Elements,{children:Object(p.jsx)(d,{totalPrice:n})}),Object(p.jsx)("button",{onClick:a(n++),children:"Click me"})]})},v=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(p.jsx)(l.StripeProvider,{apiKey:"pk_test_51IlHEuDwnViOHl4M4992ZPFENwM7cSjR9R2b8WJm1zFHjjwsAU5xX5sfSE9BHouSIP8a7VXhSByzHDdBiXitaj3600zwIV4p22",children:Object(p.jsx)(f,{})})}}]),n}(a.a.Component);var k=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"is anything working?"}),Object(p.jsx)(v,{})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),o(e),s(e)}))};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(k,{})}),document.getElementById("root")),x()}},[[28,1,2]]]);
//# sourceMappingURL=main.acde7022.chunk.js.map