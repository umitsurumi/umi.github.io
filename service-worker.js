if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const n=e=>a(e,c),f={module:{uri:c},exports:s,require:n};i[c]=Promise.all(d.map((e=>f[e]||n(e)))).then((e=>(r(...e),s)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"974c3ea811a8ed87689b756f27244077"},{url:"about/index.html",revision:"ba2a47274209068bf9f5b373cb4441c1"},{url:"archives/2022/06/index.html",revision:"13405909dd6c5bc7b70cd2942555fb55"},{url:"archives/2022/07/index.html",revision:"c00c4e87f8b5f7c87c73cbdb016ab0ee"},{url:"archives/2022/10/index.html",revision:"1bfb4b8fc0b969e5aed2d20333c08a80"},{url:"archives/2022/11/index.html",revision:"7a6fa4b55b7aeb3107420d6446b09b74"},{url:"archives/2022/index.html",revision:"56866734cb19f5afecb473d5f393a83d"},{url:"archives/2022/page/2/index.html",revision:"5c2a8080624d1789f88a78fe81831353"},{url:"archives/index.html",revision:"e586df206d16c53726d491783a0fc6a3"},{url:"categories/front-end/front-end-basis/index.html",revision:"897b247cc32e5860cc7bca3413570b53"},{url:"categories/front-end/front-end-basis/page/2/index.html",revision:"76be283c49e5f324c0d3deab7b924271"},{url:"categories/front-end/front-end-engineering/index.html",revision:"9395a47911b87c365369ef8f2c08664b"},{url:"categories/front-end/index.html",revision:"71666b10def424c30dbd2a78486e96c4"},{url:"categories/front-end/page/2/index.html",revision:"0879ad2078353034fd9504e0c55a6102"},{url:"categories/index.html",revision:"dffc477c7a1c21acc5afedb708178599"},{url:"categories/reading/index.html",revision:"097e2616de52a14d1a19f7e202ec96ec"},{url:"categories/折腾/index.html",revision:"395035f238b5e7233644c1a39075e600"},{url:"css/app.css",revision:"00b045a9b49891e42cbe4017f2de2acf"},{url:"css/comment.css",revision:"bd967f589b271e0724a86fec0bd55808"},{url:"css/mermaid.css",revision:"c66db1b09a670a8a932f5941155d4d4b"},{url:"front-end/cover.jpg",revision:"47a72a4ca6b3e56bcb7295511b3ae4c2"},{url:"images/404.png",revision:"52d6ca721e50bf3fd2f09e0d2ebe6f6c"},{url:"images/algolia_logo.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"images/alipay.png",revision:"9eaa6a54dfa33173e1d58684999f71c0"},{url:"images/apple-touch-icon.png",revision:"c7e8e0062b8300b2134e6ae905db522b"},{url:"images/avatar.jpg",revision:"ef34bad8bbad1f714c80ec478e47c662"},{url:"images/logo.svg",revision:"e67639a80e9511587a08359bc7740624"},{url:"images/paypal.png",revision:"0986db629960e3333415b103fa7663be"},{url:"images/play_disc.png",revision:"13a96370213881a22cfaa05bcaf1953c"},{url:"images/play_needle.png",revision:"ed199c599562491c1c27de4a8f3daa6f"},{url:"images/search.png",revision:"e576cdbf6d4df3f4587202d4795e0887"},{url:"images/wechatpay.png",revision:"ed2cbc96f1a6602caf4fe7ccfef71e08"},{url:"index.html",revision:"dd0f91c33482e0484ad8561314938cf6"},{url:"js/app.js",revision:"51a39a368d2ab426719d8a27ea320b00"},{url:"page/2/index.html",revision:"0f85f990bfc1711e4a2ea68a70fcfd41"},{url:"posts/13596/index.html",revision:"f75cb31abed90c853aa1418e45526467"},{url:"posts/15489/index.html",revision:"538dd0789f083b4dbd4fc1a8002d71a2"},{url:"posts/2373/index.html",revision:"81b510c4dfc2b64b7eeb28426b173b69"},{url:"posts/28818/index.html",revision:"eaaae04929e5e66d76b3da4f7f0463ad"},{url:"posts/390000/index.html",revision:"2aacf0033b42b3970d069004db4cfb13"},{url:"posts/3b64/index.html",revision:"a991df55d2c6ff79775fd3b3c3d098ce"},{url:"posts/3de/index.html",revision:"36c79e8f6fe5fc79bddf4731946b1d04"},{url:"posts/5731/index.html",revision:"b238f23e25941150351676e5c677d702"},{url:"posts/58410/index.html",revision:"63bce6fb993ce5a0eb445b655ba0ea20"},{url:"posts/5aa/index.html",revision:"9c76dc702d0448990eefe8643b32ada2"},{url:"posts/62621/index.html",revision:"7a2fd5a1d69199104120a6275fae369b"},{url:"posts/62941/index.html",revision:"22800f849c22b90c7f363f55b9f68d4d"},{url:"posts/63325/index.html",revision:"88a706fd932d9b72785fb654b22a93b0"},{url:"posts/c8f1/index.html",revision:"f27ab427c2454c4b435d330926fca812"},{url:"posts/c9b1/index.html",revision:"add1352908c173c19dcc5748ea7489a6"},{url:"posts/fba5/index.html",revision:"56b64576c7e1518c4f8dcd36757cd8ea"},{url:"reading/cover.jpg",revision:"6fc42f935f13152f06140742876dcb77"},{url:"tags/BOM/index.html",revision:"c5665966f4f97462e02a2f25ba916b8d"},{url:"tags/CSS/index.html",revision:"da5c5647cfc6a5e676a9320b3d23dd4c"},{url:"tags/DOM/index.html",revision:"f67f80e251119dcc484e2a9f6aefb74f"},{url:"tags/hexo/index.html",revision:"f9ec5706aa488a43cb4bf29032c9c52a"},{url:"tags/HTML/index.html",revision:"f4bd4a6a1893db58e1d41011d625c12a"},{url:"tags/index.html",revision:"4cb8ef6ebcf485477b02ae4de9fc67fc"},{url:"tags/JavaScript/index.html",revision:"a1aba4c72fd5cda22b97bb3041592528"},{url:"tags/jellyfin/index.html",revision:"863ca21dfbb5627c5325a55b5ce21d1c"},{url:"tags/omv/index.html",revision:"591691058155adbda38a8df54dc1f0aa"},{url:"tags/Vue/index.html",revision:"607a181cb04992129946e2cbd3b9379d"},{url:"tags/前端/index.html",revision:"c398213fcf6403d0a65cede703b7d93e"},{url:"tags/前端/page/2/index.html",revision:"f41ba94f36fdbda776b6ec9858fd6b0b"},{url:"tags/读书笔记/index.html",revision:"43b8e0eed768019931af69ad9e2f8665"},{url:"tags/费曼学习法/index.html",revision:"a6d302616d1c7f43a5d0ac80c89edc7b"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
