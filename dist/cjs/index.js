"use strict";var e=require("react"),r=require("class-variance-authority"),t=require("@wds-react/cn");function a(e){var r=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var a=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,a.get?a:{enumerable:!0,get:function(){return e[t]}})}})),r.default=e,Object.freeze(r)}var n=a(e),s=function(){return s=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e},s.apply(this,arguments)};function c(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]])}return t}"function"==typeof SuppressedError&&SuppressedError;var l=r.cva("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),o=n.forwardRef((function(e,r){var a=e.className,o=e.variant,i=c(e,["className","variant"]);return n.createElement("div",s({ref:r,role:"alert",className:t.cn(l({variant:o}),a)},i))}));o.displayName="Alert";var i=n.forwardRef((function(e,r){var a=e.className,l=c(e,["className"]);return n.createElement("h5",s({ref:r,className:t.cn("mb-1 font-medium leading-none tracking-tight",a)},l))}));i.displayName="AlertTitle";var u=n.forwardRef((function(e,r){var a=e.className,l=c(e,["className"]);return n.createElement("div",s({ref:r,className:t.cn("text-sm [&_p]:leading-relaxed",a)},l))}));u.displayName="AlertDescription",exports.Alert=o,exports.AlertDescription=u,exports.AlertTitle=i;
//# sourceMappingURL=index.js.map