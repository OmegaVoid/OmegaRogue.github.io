if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise(async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()})),i.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},i=(i,r)=>{Promise.all(i.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(i)};self.define=(i,c,d)=>{r[i]||(r[i]=Promise.resolve().then(()=>{let r={};const o={uri:location.origin+i.slice(1)};return Promise.all(c.map(i=>{switch(i){case"exports":return r;case"module":return o;default:return e(i)}})).then(e=>{const i=d(...e);return r.default||(r.default=i),r})}))}}define("./sw.js",["./workbox-343805d3"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"caa9d1ae5318b299b69a64151d9c1f4f"},{url:"browserconfig.xml",revision:"5760aaf5921f465980237f727a407d39"},{url:"css/main.css",revision:"8ea8fbe594c4e293ab6ab53a2b993fcf"},{url:"css/normalize.css",revision:"40e93b11cbd4174c60b22cba0d630300"},{url:"doc/css.md",revision:"8cea155ead3af586558b4271d33f8b4b"},{url:"doc/extend.md",revision:"6d591ddb3afcf69eb911a01893300d45"},{url:"doc/faq.md",revision:"4b4178520946f128c8a90a75e24624a1"},{url:"doc/html.md",revision:"5777c9debcb68abbb99f254238814f49"},{url:"doc/js.md",revision:"c0cdaf95e888a9cea788c07ab7213ecb"},{url:"doc/misc.md",revision:"1d4c7585cd1296b87267b820738683e4"},{url:"doc/TOC.md",revision:"334487bdba57587e98c40b632fd11105"},{url:"doc/usage.md",revision:"edf49d9c41a40babc0a3e0b987559d6d"},{url:"favicon-16x16.png",revision:"9fb7baf7fd22f2d0d1b9656ae1f3f75f"},{url:"favicon-32x32.png",revision:"e4582b1c2c426431e692a03eea9f79d3"},{url:"favicon.ico",revision:"315a1280d1931e1390dc5cf39d795cc6"},{url:"html_code.html",revision:"b9dcc156f31fa4661d4b2c466be3f1c8"},{url:"humans.txt",revision:"c8caabae7f425695a22f97533b819af2"},{url:"icon.png",revision:"7676155efec287aaaa1b78ea9a79120d"},{url:"img/android-chrome-144x144.png",revision:"05e5da90c9219b0ab588d55625ce48f1"},{url:"img/android-chrome-192x192.png",revision:"2c4808bd23905817e61f052208a3fc6f"},{url:"img/android-chrome-256x256.png",revision:"4cafdfc0204e322d27999754a16e7a8e"},{url:"img/android-chrome-36x36.png",revision:"568705f511e26d1f5168a548fc3463e4"},{url:"img/android-chrome-384x384.png",revision:"66d577010d6cfeb670e152a91397a947"},{url:"img/android-chrome-48x48.png",revision:"70d95841225053f7882c27f1b93edae2"},{url:"img/android-chrome-512x512.png",revision:"addc7cd375707bb887bca80e69f89625"},{url:"img/android-chrome-72x72.png",revision:"d091384c162a7767240a2b77056e7f88"},{url:"img/android-chrome-96x96.png",revision:"43c406dfc04216bcd61b6b4fd7342eda"},{url:"img/apple-touch-icon.png",revision:"6d9f9fd9ff9b72eaa9950910f6212305"},{url:"img/cover_logo/cover.png",revision:"c286a5535967bca51ad5312e5193436a"},{url:"img/cover_logo/coveryt.png",revision:"15f04cd2f73918ac8d239df50eec4b80"},{url:"img/cover_logo/info.txt",revision:"759851648b9a79e115a2f7c8f78aab9a"},{url:"img/cover_logo/profile.png",revision:"6dc1e366f785b02b4ad5fec6c9976d5b"},{url:"img/cover_logo/vector/default-monochrome-black.svg",revision:"a4b75c2b033e2f550cf0ca5d245da9d0"},{url:"img/cover_logo/vector/default-monochrome-white.svg",revision:"3235416e33f475a1b35c68ed54006113"},{url:"img/cover_logo/vector/default-monochrome.svg",revision:"103d11c9b8968458188eccf3e0bb0d68"},{url:"img/mstile-144x144.png",revision:"09a763a6794e7e87e4057c2d668e96cd"},{url:"img/mstile-150x150.png",revision:"f69d26720cd5a06eb3f97aa051059ef0"},{url:"img/mstile-310x150.png",revision:"af00f358c93b08d312637a5d9ed8827a"},{url:"img/mstile-310x310.png",revision:"0acdb0d201a4549b64c12b3039a76caf"},{url:"img/mstile-70x70.png",revision:"11eb907dec293d6366d0b1d17d8ecfde"},{url:"img/Omega.svg",revision:"1d0e39cb69ab75566dc1bcfef4dbc1d9"},{url:"img/safari-pinned-tab.svg",revision:"fd5bf68be842ed7576d7970c2263f9b7"},{url:"img/worldmap.png",revision:"092d0aa855ae53de453b8fe92d87983b"},{url:"img/worldmap.svg",revision:"e67ed4f06d905bc50ef7f90c7f19cf02"},{url:"index.html",revision:"c7463f0bf1ededbaa51883cc3feb5ffd"},{url:"js/main.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/plugins.js",revision:"3855080ed4a5117ba220dfdd3c281ab1"},{url:"js/vendor/jquery-3.4.1.min.js",revision:"a6b6350ee94a3ea74595c065cbf58af0"},{url:"js/vendor/modernizr-3.8.0.min.js",revision:"4c4d3037a7f3b57807e81ea8dc51ad3a"},{url:"README.md",revision:"ac17941137f7a02ec34ec1b696ee24a9"},{url:"robots.txt",revision:"6f94032faf83ae58741013c8fee07cb3"},{url:"service-worker.js",revision:"6cd86be7211898e0effea77eb3aa40c9"},{url:"site.webmanifest",revision:"c23f89783589cc8f2d50030e7b664238"},{url:"sitemap.txt",revision:"4af827ae5ff43c866626ab933e912442"},{url:"tile-wide.png",revision:"8eec2319b4adbc36c1874f0ccaabc958"},{url:"tile.png",revision:"9bee3f492c17e9fecc3949397ba0e022"}],{})}));
//# sourceMappingURL=sw.js.map
