module.exports=function(n){var t={};function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)e.d(o,r,function(t){return n[t]}.bind(null,r));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=9)}({1:function(n,t,e){"use strict";function o(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t}e.d(t,"a",function(){return o})},7:function(n,t){n.exports=flarum.core.compat["components/SettingsModal"]},9:function(n,t,e){"use strict";e.r(t);var o=e(1),r=e(7),s=function(n){function t(){return n.apply(this,arguments)||this}Object(o.a)(t,n);var e=t.prototype;return e.className=function(){return"WebPushSettingsModal Modal--small"},e.title=function(){return app.translator.trans("nikovonlas-webpush.admin.web-push-settings.title")},e.form=function(){return[m("div",{className:"form-group"},m("label",null,app.translator.trans("nikovonlas-webpush.admin.web-push-settings.app_id")),m("input",{className:"FormControl",bidi:this.setting("nikovonlas-webpush.onesignal_app_id")})),m("div",{className:"form-group"},m("label",null,app.translator.trans("nikovonlas-webpush.admin.web-push-settings.api_key")),m("input",{className:"FormControl",bidi:this.setting("nikovonlas-webpush.onesignal_api_key")})),m("div",{className:"form-group"},m("label",null,app.translator.trans("nikovonlas-webpush.admin.web-push-settings.user_key")),m("input",{className:"FormControl",bidi:this.setting("nikovonlas-webpush.onesignal_user_key")})),m("div",{className:"form-group"},m("label",null,app.translator.trans("nikovonlas-webpush.admin.web-push-settings.subdomain")),m("input",{className:"FormControl",bidi:this.setting("nikovonlas-webpush.onesignal_subdomain")})),m("div",{className:"form-group"},m("label",null,app.translator.trans("nikovonlas-webpush.admin.web-push-settings.excerpt")),m("input",{className:"FormControl",bidi:this.setting("nikovonlas-webpush.excerpt_length")}))]},t}(e.n(r).a);app.initializers.add("nikovonlas-web-push",function(){app.extensionSettings["nikovonlas-web-push"]=function(){return app.modal.show(new s)}})}});
//# sourceMappingURL=admin.js.map