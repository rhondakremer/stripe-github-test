(this["webpackJsonpstripe-github-test"]=this["webpackJsonpstripe-github-test"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(12),a=n.n(s),o=(n(17),n.p,n(18),n(6)),u=n(7),i=n(9),j=n(8),b=n(2),l=n(3),h=n(0),d=Object(b.injectStripe)((function(e){var t=e.stripe,n=e.totalPrice,r=Object(c.useState)(!1),s=Object(l.a)(r,2),a=s[0],o=s[1],u=Object(c.useState)(null),i=Object(l.a)(u,2),j=i[0],d=i[1],p=Object(c.useCallback)((function(){j.update({currency:"usd",total:{label:"hey test",amount:Math.round(100*n)}})}),[n,j]);Object(c.useEffect)((function(){j||function(){var e=t.paymentRequest({country:"US",currency:"usd",requestPayerEmail:!0,requestPayerName:!0,total:{label:"hey test",amount:Math.round(100*n)}});d(e),e.on("token",O),e.canMakePayment().then((function(e){o(!!e)}))}()}));var O=function(e){console.log("hey hey we're the token",e)};return a&&function(e){var t=e.toString().split(".");return!!t[1]&&!(t[1].length<3&&parseInt(t[1])<=99)}(n)?a?Object(h.jsx)("div",{children:Object(h.jsx)(b.PaymentRequestButtonElement,{paymentRequest:j,className:"PaymentRequestButton",style:{paymentRequestButton:{theme:"dark",height:"40px"}},onClick:p})}):Object(h.jsxs)("p",{children:["Either your browser does not support the Payment Request API or you do not have a saved payment method. To try out the Payment Request Button, switch to one of ",Object(h.jsx)("a",{href:"https://stripe.com/docs/stripe-js/elements/payment-request-button#testing",children:"the supported browsers"}),", and make sure you have a saved payment method."]}):null})),p=function(e){Object(i.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsx)(b.CardElement,{})}}]),n}(r.a.Component),O=Object(b.injectStripe)(p),y=function(){var e=Object(c.useState)(278.4),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)(b.Elements,{children:Object(h.jsx)(O,{})}),Object(h.jsx)(b.Elements,{children:Object(h.jsx)(d,{totalPrice:n})}),Object(h.jsx)("button",{onClick:function(){return r(n++)},children:"Click me"}),Object(h.jsxs)("p",{children:["total price is there was a change sadness bo badness",n]})]})},m=function(e){Object(i.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsx)(b.StripeProvider,{apiKey:"pk_test_51IlHEuDwnViOHl4M4992ZPFENwM7cSjR9R2b8WJm1zFHjjwsAU5xX5sfSE9BHouSIP8a7VXhSByzHDdBiXitaj3600zwIV4p22",children:Object(h.jsx)(y,{})})}}]),n}(r.a.Component);var f=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"is anything working?"}),Object(h.jsx)(m,{})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),x()}},[[27,1,2]]]);
//# sourceMappingURL=main.fe502678.chunk.js.map