(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[470],{3049:function(e,t,r){"use strict";var n=r(7294),a=r(1597);t.Z=function(){return n.createElement("header",{className:"header"},n.createElement(a.Link,{to:"/"},"home"),n.createElement(a.Link,{to:"/music/"},"music"),n.createElement(a.Link,{to:"/dev/"},"development"),n.createElement(a.Link,{to:"/mods/"},"game modding"),n.createElement(a.Link,{to:"/virtual-photography/"},"virtual photography"))}},1931:function(e,t,r){"use strict";r.r(t);var n=r(7294),a=r(3049),o=r(7930),c=r(5457),l=r(8333),s=(r(3961),function(e){return e.split("\n").join("<br />")});t.default=function(e){var t=e.pageContext,r=t.releaseData,i=r.title,u=r.year,p=r.genres,m=r.description,f=r.recordLabel,g=r.youtubeId,d=r.youtubeOptions,v=r.bandcampId,b=r.bandcampOptions,y=r.soundcloudId,h=r.alias,E=r.slug,j="/images/music/"+t.alias+"/"+E+".jpg";return n.createElement("div",{className:"releasePage",style:{backgroundImage:"url("+j+")"}},n.createElement(a.Z,null),n.createElement("div",{className:"releasePage-content"},n.createElement("div",{className:"releasePage-headerContainer"},n.createElement("div",{className:"releasePage-header"},n.createElement("h2",{className:"releasePage-alias"},t.artistName.toLowerCase()),!!i&&n.createElement("h2",{className:"releasePage-title"},i),!!u&&n.createElement("h3",{className:"releasePage-year"},n.createElement("span",{className:"releasePage-yearLabel"},"year = "),u),!!f&&n.createElement("h3",{className:"releasePage-label"},n.createElement("span",{className:"releasePage-labelLabel"},"label = "),f),p&&p.length>0&&n.createElement("div",{className:"releasePage-genres"},n.createElement("span",{className:"releasePage-genresLabel"},"genres = "),"(",p.join("/"),")"),m&&n.createElement("div",{className:"releasePage-desc",dangerouslySetInnerHTML:{__html:s(m)}}))),n.createElement("div",{className:"releasePage-embed"},v&&n.createElement(c.Z,{albumId:v,options:b}),g&&n.createElement(o.Z,{videoId:g,options:d}),y&&n.createElement(l.Z,{trackId:y,title:i,artist:h,artistName:t.artistName,slug:E,size:"m"}))))}},7071:function(e,t,r){var n=r(852)(r(5639),"Map");e.exports=n},2705:function(e,t,r){var n=r(5639).Symbol;e.exports=n},9932:function(e){e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a}},4239:function(e,t,r){var n=r(2705),a=r(9607),o=r(2333),c=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":c&&c in Object(e)?a(e):o(e)}},8458:function(e,t,r){var n=r(3560),a=r(5346),o=r(3218),c=r(346),l=/^\[object .+?Constructor\]$/,s=Function.prototype,i=Object.prototype,u=s.toString,p=i.hasOwnProperty,m=RegExp("^"+u.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!o(e)||a(e))&&(n(e)?m:l).test(c(e))}},4429:function(e,t,r){var n=r(5639)["__core-js_shared__"];e.exports=n},1957:function(e,t,r){var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=n},852:function(e,t,r){var n=r(8458),a=r(7801);e.exports=function(e,t){var r=a(e,t);return n(r)?r:void 0}},9607:function(e,t,r){var n=r(2705),a=Object.prototype,o=a.hasOwnProperty,c=a.toString,l=n?n.toStringTag:void 0;e.exports=function(e){var t=o.call(e,l),r=e[l];try{e[l]=void 0;var n=!0}catch(s){}var a=c.call(e);return n&&(t?e[l]=r:delete e[l]),a}},7801:function(e){e.exports=function(e,t){return null==e?void 0:e[t]}},5346:function(e,t,r){var n,a=r(4429),o=(n=/[^.]+$/.exec(a&&a.keys&&a.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";e.exports=function(e){return!!o&&o in e}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,r){var n=r(1957),a="object"==typeof self&&self&&self.Object===Object&&self,o=n||a||Function("return this")();e.exports=o},346:function(e){var t=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return t.call(e)}catch(r){}try{return e+""}catch(r){}}return""}},1469:function(e){var t=Array.isArray;e.exports=t},3560:function(e,t,r){var n=r(4239),a=r(3218);e.exports=function(e){if(!a(e))return!1;var t=n(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},3218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}}}]);
//# sourceMappingURL=component---src-components-music-release-page-js-dc2137bff5a48475059b.js.map