"use strict";(self.webpackChunkolive_ui=self.webpackChunkolive_ui||[]).push([[581],{9581:(ct,p,l)=>{l.r(p),l.d(p,{ComponentsModule:()=>st});var t=l(5e3),a=l(5023),i=l(5245),j=l(2313),C=l(9808);function Q(e,n){if(1&e&&t._UZ(0,"img",7),2&e){const o=t.oxw();t.MGl("src","./assets/images/icons/",o.olvIcon,".svg",t.LSH)}}function P(e,n){1&e&&t.GkF(0)}function X(e,n){1&e&&(t.TgZ(0,"button",8),t._uU(1,"X"),t.qZA())}function Y(e,n){1&e&&t.GkF(0)}function H(e,n){if(1&e&&(t.TgZ(0,"div",9),t.TgZ(1,"div",10),t.YNc(2,Y,1,0,"ng-container",4),t.qZA(),t.qZA()),2&e){const o=t.oxw();t.xp6(2),t.Q6J("ngTemplateOutlet",o.olvContentMessage)}}let g=(()=>{class e{constructor(){this.olvIcon=null}get classList(){return{"olv-box-basic":"basic"===this.olvBoxType,"olv-box-desc":"desc"===this.olvBoxType,"olv-box-info":"info"===this.olvBoxType,"olv-box-error":"error"===this.olvBoxType,"olv-box-strong-basic":"strong-basic"===this.olvBoxType,"olv-box-strong-error":"strong-error"===this.olvBoxType,"olv-box-strong-info":"strong-info"===this.olvBoxType}}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["olv-box"],["div","olv-box",""]],hostVars:2,hostBindings:function(o,u){2&o&&t.Tol(u.classList)},inputs:{olvBoxType:"olvBoxType",olvBoxContentType:"olvBoxContentType",olvBoxStrongContentType:"olvBoxStrongContentType",olvIcon:"olvIcon",olvMessage:"olvMessage",olvMessageTmpl:"olvMessageTmpl",olvContentMessage:"olvContentMessage",olvCloseable:"olvCloseable"},decls:8,vars:5,consts:[[1,"olv-box"],[1,"olv-box-content"],["class","mr-2 inline",3,"src",4,"ngIf"],[1,"text-md"],[4,"ngTemplateOutlet"],["class","absolute top-1/3 right-30 w-20 text-center text-gray-600 hover:text-olive-500",4,"ngIf"],["class","text-sm mt-4 text-gray-600",4,"ngIf"],[1,"mr-2","inline",3,"src"],[1,"absolute","top-1/3","right-30","w-20","text-center","text-gray-600","hover:text-olive-500"],[1,"text-sm","mt-4","text-gray-600"],[1,"block","width-100"]],template:function(o,u){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.YNc(2,Q,1,1,"img",2),t.TgZ(3,"span",3),t._uU(4),t.qZA(),t.YNc(5,P,1,0,"ng-container",4),t.YNc(6,X,2,0,"button",5),t.YNc(7,H,3,1,"div",6),t.qZA(),t.qZA()),2&o&&(t.xp6(2),t.Q6J("ngIf",u.olvIcon),t.xp6(2),t.hij(" ",u.olvMessage," "),t.xp6(1),t.Q6J("ngTemplateOutlet",u.olvMessageTmpl),t.xp6(1),t.Q6J("ngIf",u.olvCloseable),t.xp6(1),t.Q6J("ngIf",u.olvContentMessage))},directives:[C.O5,C.tP],encapsulation:2}),e})();var s=l(3564);const m=function(){return["html"]};function L(e,n){if(1&e&&(t.ynx(0),t.TgZ(1,"ul"),t.TgZ(2,"div"),t.TgZ(3,"pre"),t._UZ(4,"code",21),t.qZA(),t.qZA(),t.qZA(),t.BQk()),2&e){const o=t.oxw();t.xp6(4),t.Q6J("highlight",o.basic)("languages",t.DdM(2,m))}}function R(e,n){if(1&e&&(t.ynx(0),t.TgZ(1,"ul"),t.TgZ(2,"li",22),t.TgZ(3,"div"),t.TgZ(4,"pre"),t._UZ(5,"code",21),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk()),2&e){const o=t.oxw();t.xp6(5),t.Q6J("highlight",o.strongBasic)("languages",t.DdM(2,m))}}let Z=(()=>{class e{constructor(o,u,r){this.clipboardService=o,this.iconRegistry=u,this.sanitizer=r,this.isShown=!1,this.isStrongShown=!1,this.basic="<olv-box olvBoxType='basic'\n   olvMessage='\uac00\uc7a5 \uae30\ubcf8\uc801\uc73c\ub85c \uc0ac\uc6a9. \uc5ec\ub7ec \ub9ac\uc2a4\ud2b8\ub97c \uadf8\ub8f9\ud551 \ud558\uac70\ub098 \ubcf8\ubb38\ubcf4\ub2e4 \uad6c\ubd84 \ubc0f \uac15\uc870\uac00 \ud544\uc694\ud55c \uacbd\uc6b0\uc5d0 \uc0ac\uc6a9. \uc5ec\ub7ec \ucef4\ud3ec\ub10c\ud2b8\uc640 \uc870\ud569 \uac00\ub2a5'></olv-box>\n<olv-box olvBoxType='info'\n   olvMessage='\uc77c\ub828\uc758 \ud788\uc2a4\ud1a0\ub9ac\ub97c \uc548\ub0b4\ud558\uac70\ub098, \uc911\uc694\ub3c4\uac00 \ub0ae\uc740 \uc548\ub0b4\uc0ac\ud56d\uc758 \uacbd\uc6b0 \uc0ac\uc6a9'\n   olvIcon='icon-check'>\n</olv-box>\n<olv-box olvBoxType='error'\n   olvMessage='\ud398\uc774\uc9c0\uc758 \uc0c1/\ud558\ub2e8\uc5d0\uc11c \uc0ac\uc6a9\uc790\uc5d0\uac8c \ud544\uc218\uc801\uc73c\ub85c \uc804\ub2ec\ud574\uc57c \ud560 \uc548\ub0b4\uc0ac\ud56d\uc774 \uc788\uc744 \ub54c \uc0ac\uc6a9. Green\ubcf4\ub2e4 \ub354 \uac15\uc870 \ubc0f \uacbd\uace0\uc758 \uc815\ub3c4\uac00 \ud07c'\n   olvIcon='icon-error'\n   olvCloseable='true'>\n</olv-box>\n<olv-box olvBoxType='desc'\n   olvMessage='\uc77c\ub828\uc758 \ud788\uc2a4\ud1a0\ub9ac\ub97c \uc548\ub0b4\ud558\uac70\ub098, \uc911\uc694\ub3c4\uac00 \ub0ae\uc740 \uc548\ub0b4\uc0ac\ud56d\uc758 \uacbd\uc6b0 \uc0ac\uc6a9'>\n</olv-box>",this.strongBasic="<olv-box olvBoxType='strong-basic'\n   olvMessage='\ud574\uacb0\ub41c \ud56d\ubaa9\uc5d0 \ub300\ud55c \uadf8\ub8f9\ud551 \uae30\ubcf8\uc0c1\ud0dc(Ex. Scan > Components > Resolved Issue)'></olv-box>\n<olv-box olvBoxType='strong-error'\n   olvMessage='\ubbf8\ud574\uacb0 \uc774\uc288, \uc624\ub958 \ub610\ub294 \uacbd\uace0 \ud56d\ubaa9 \ub4f1\uc5d0 \ub300\ud55c \uadf8\ub8f9\ud551 Hover / Press \uc0c1\ud0dc'></olv-box>\n<olv-box olvBoxType='strong-info'\n   olvMessage='\uace0\uc9c0\ubb38 \uc548\ub0b4 \uc0ac\ud56d \ub4f1 \uc911\uc694\ud55c \ub0b4\uc6a9\uc758 \uac15\uc870 \ub4f1\uc5d0 \uc0ac\uc6a9\ud558\uba70, \ub2e8\ub3c5\uc73c\ub85c \uc0ac\uc6a9(Scan > Report > \uace0\uc9c0\ubb38 \uc5d0\uc11c\ub9cc \uc0ac\uc6a9\ub428)'></olv-box>",u.addSvgIconLiteral("CodeShowIcon",r.bypassSecurityTrustHtml('\n<svg\n    xmlns="http://www.w3.org/2000/svg"\n    fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">\n    <path\n        stroke-linecap="round"\n        stroke-linejoin="round"\n        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />\n</svg>\n')),u.addSvgIconLiteral("CodeCopyIcon",r.bypassSecurityTrustHtml('\n<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">\n    <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />\n</svg>\n'))}copyText(o){this.clipboardService.copyFromContent(o),alert("code copied!")}showArea(){this.isShown=!this.isShown}showStrongArea(){this.isStrongShown=!this.isStrongShown}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(a.Yv),t.Y36(i.jv),t.Y36(j.H7))},e.\u0275cmp=t.Xpm({type:e,selectors:[["component-box-type"]],decls:47,vars:6,consts:[[1,"flex","flex-row","justify-items-center","items-center"],[1,"text-3xl","font-bold","tracking-tight","leading-tight","whitespace-nowrap"],[1,"flex","items-baseline","ml-16","text-gray-600","text-md","flex-wrap"],[1,"my-24","font-semibold","text-gray-600"],[1,"my-4"],["olvBoxType","basic","olvMessage","\uac00\uc7a5 \uae30\ubcf8\uc801\uc73c\ub85c \uc0ac\uc6a9. \uc5ec\ub7ec \ub9ac\uc2a4\ud2b8\ub97c \uadf8\ub8f9\ud551 \ud558\uac70\ub098 \ubcf8\ubb38\ubcf4\ub2e4 \uad6c\ubd84 \ubc0f \uac15\uc870\uac00 \ud544\uc694\ud55c \uacbd\uc6b0\uc5d0 \uc0ac\uc6a9. \uc5ec\ub7ec \ucef4\ud3ec\ub10c\ud2b8\uc640 \uc870\ud569 \uac00\ub2a5"],["olvBoxType","info","olvMessage","\uc77c\ub828\uc758 \ud788\uc2a4\ud1a0\ub9ac\ub97c \uc548\ub0b4\ud558\uac70\ub098, \uc911\uc694\ub3c4\uac00 \ub0ae\uc740 \uc548\ub0b4\uc0ac\ud56d\uc758 \uacbd\uc6b0 \uc0ac\uc6a9","olvIcon","icon-check"],["olvBoxType","error","olvMessage","\ud398\uc774\uc9c0\uc758 \uc0c1/\ud558\ub2e8\uc5d0\uc11c \uc0ac\uc6a9\uc790\uc5d0\uac8c \ud544\uc218\uc801\uc73c\ub85c \uc804\ub2ec\ud574\uc57c \ud560 \uc548\ub0b4\uc0ac\ud56d\uc774 \uc788\uc744 \ub54c \uc0ac\uc6a9. Green\ubcf4\ub2e4 \ub354 \uac15\uc870 \ubc0f \uacbd\uace0\uc758 \uc815\ub3c4\uac00 \ud07c","olvIcon","icon-error","olvCloseable","true"],["olvBoxType","desc","olvMessage","\uc77c\ub828\uc758 \ud788\uc2a4\ud1a0\ub9ac\ub97c \uc548\ub0b4\ud558\uac70\ub098, \uc911\uc694\ub3c4\uac00 \ub0ae\uc740 \uc548\ub0b4\uc0ac\ud56d\uc758 \uacbd\uc6b0 \uc0ac\uc6a9"],[1,"mb-5"],[1,"text-sm","text-gray-600"],[1,"codeBtn"],["title","Copy Code",1,"inline-block","mx-4","text-md","hover:text-olive-400",3,"click"],[1,"align-middle","mb-1",3,"svgIcon"],[1,"ml-1"],["title","Show Code",1,"inline-block","mx-4","text-md","hover:text-olive-400",3,"click"],[4,"ngIf"],[1,"mt-40","font-semibold","text-gray-600"],["olvBoxType","strong-basic","olvMessage","\ud574\uacb0\ub41c \ud56d\ubaa9\uc5d0 \ub300\ud55c \uadf8\ub8f9\ud551 \uae30\ubcf8\uc0c1\ud0dc(Ex. Scan > Components > Resolved Issue)"],["olvBoxType","strong-error","olvMessage","\ubbf8\ud574\uacb0 \uc774\uc288, \uc624\ub958 \ub610\ub294 \uacbd\uace0 \ud56d\ubaa9 \ub4f1\uc5d0 \ub300\ud55c \uadf8\ub8f9\ud551 Hover / Press \uc0c1\ud0dc"],["olvBoxType","strong-info","olvMessage","\uace0\uc9c0\ubb38 \uc548\ub0b4 \uc0ac\ud56d \ub4f1 \uc911\uc694\ud55c \ub0b4\uc6a9\uc758 \uac15\uc870 \ub4f1\uc5d0 \uc0ac\uc6a9\ud558\uba70, \ub2e8\ub3c5\uc73c\ub85c \uc0ac\uc6a9(Scan > Report > \uace0\uc9c0\ubb38 \uc5d0\uc11c\ub9cc \uc0ac\uc6a9\ub428)"],[3,"highlight","languages"],[1,"relative","border-b"]],template:function(o,u){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._uU(2,"Type"),t.qZA(),t._UZ(3,"div",2),t.qZA(),t.TgZ(4,"div",3),t._uU(5,"\uae30\ubcf8\ud615 - \uc8fc\ub85c \ub9ac\uc2a4\ud2b8 \ubc0f \uc548\ub0b4\uc0ac\ud56d \ud45c\uae30\uc2dc\uc5d0 \uc0ac\uc6a9\ud558\uba70, \ucf00\uc774\uc2a4\uc5d0 \ub530\ub77c \uc801\uc808\ud55c \uceec\ub7ec \uc0ac\uc6a9"),t.qZA(),t.TgZ(6,"div",4),t._UZ(7,"olv-box",5),t.qZA(),t.TgZ(8,"div",4),t._UZ(9,"olv-box",6),t.qZA(),t.TgZ(10,"div",4),t._UZ(11,"olv-box",7),t.qZA(),t._UZ(12,"olv-box",8),t.TgZ(13,"div",9),t.TgZ(14,"span",10),t._uU(15," \u203b \ubc15\uc2a4 \ub0b4\uc5d0\uc11c \uc544\uc774\ucf58, \ub2eb\uae30 \ubc84\ud2bc \ub4f1\uc740 \ud544\uc694\uc5d0 \ub530\ub77c \uc790\uc720\ub86d\uac8c \uc870\ud569\ud558\uc5ec \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4. "),t.qZA(),t.qZA(),t.TgZ(16,"div",11),t.TgZ(17,"div",12),t.NdJ("click",function(){return u.showArea()}),t._UZ(18,"mat-icon",13),t.TgZ(19,"span",14),t._uU(20,"Show Code"),t.qZA(),t.qZA(),t.TgZ(21,"div",15),t.NdJ("click",function(){return u.copyText(u.basic)}),t._UZ(22,"mat-icon",13),t.TgZ(23,"span",14),t._uU(24,"Copy Code"),t.qZA(),t.qZA(),t.qZA(),t.YNc(25,L,5,3,"ng-container",16),t.TgZ(26,"div",17),t._uU(27,"\uac15\uc870\ud615 - 2px Line \uc801\uc6a9"),t.qZA(),t.TgZ(28,"div",4),t._UZ(29,"olv-box",18),t.qZA(),t.TgZ(30,"div",4),t._UZ(31,"olv-box",19),t.qZA(),t.TgZ(32,"div",4),t._UZ(33,"olv-box",20),t.qZA(),t.TgZ(34,"div",9),t.TgZ(35,"span",10),t._uU(36," \u203b \uac01\uac01\uc758 \uae30\ubcf8 \uc0c1\ud0dc\ub294 \ub2e8\ub3c5\uc73c\ub85c \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud558\uba70, Press \uc0c1\ud0dc\ub294 \ubc18\ub4dc\uc2dc \uae30\ubcf8 \uc0c1\ud0dc\uc640 \ud568\uaed8 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. "),t.qZA(),t.qZA(),t.TgZ(37,"div",11),t.TgZ(38,"div",12),t.NdJ("click",function(){return u.showStrongArea()}),t._UZ(39,"mat-icon",13),t.TgZ(40,"span",14),t._uU(41,"Show Code"),t.qZA(),t.qZA(),t.TgZ(42,"div",15),t.NdJ("click",function(){return u.copyText(u.strongBasic)}),t._UZ(43,"mat-icon",13),t.TgZ(44,"span",14),t._uU(45,"Copy Code"),t.qZA(),t.qZA(),t.qZA(),t.YNc(46,R,6,3,"ng-container",16)),2&o&&(t.xp6(18),t.Q6J("svgIcon","CodeCopyIcon"),t.xp6(4),t.Q6J("svgIcon","CodeShowIcon"),t.xp6(3),t.Q6J("ngIf",u.isShown),t.xp6(14),t.Q6J("svgIcon","CodeCopyIcon"),t.xp6(4),t.Q6J("svgIcon","CodeShowIcon"),t.xp6(3),t.Q6J("ngIf",u.isStrongShown))},directives:[g,i.Hw,C.O5,s.y$],encapsulation:2}),e})();function G(e,n){1&e&&(t._uU(0," - \ub2e8, 1\uc904\uc77c \uacbd\uc6b0 \ucd5c\uc18c 64px \ub0b4\uc5d0\uc11c middle \uc815\ub82c\uc744 \uae30\ubcf8\uc73c\ub85c \ud568"),t._UZ(1,"br"),t._uU(2," - \ucee8\ud150\uce20 \uc601\uc5ed\uc758 width 100% \uc801\uc6a9\uc774 \uae30\ubcf8\uc774\uc9c0\ub9cc, \ud544\uc694\uc5d0 \ub530\ub77c \uc801\uc808\ud558\uac8c \uc0ac\uc774\uc988 \uc870\uc815\ud558\uc5ec \uc0ac\uc6a9 \uac00\ub2a5"))}function z(e,n){1&e&&(t.TgZ(0,"div",28),t._uU(1,"Component"),t.qZA())}function W(e,n){1&e&&(t.TgZ(0,"div",29),t._uU(1,"\ud655\uc778\uc774 \ud544\uc694\ud55c Component : 99 \uac1c"),t.qZA(),t.TgZ(2,"div",30),t._uU(3,"\uc790\ub3d9 \uc218\uc9d1\ub41c Component : 99\uac1c"),t.qZA())}const V=function(){return["html"]};function $(e,n){if(1&e&&(t.ynx(0),t.TgZ(1,"ul"),t.TgZ(2,"li",31),t.TgZ(3,"div"),t.TgZ(4,"pre"),t._UZ(5,"code",32),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk()),2&e){const o=t.oxw();t.xp6(5),t.Q6J("highlight",o.strong)("languages",t.DdM(2,V))}}let d=(()=>{class e{constructor(o){this.clipboardService=o,this.isShown=!1,this.strong="<olv-box olvBoxType='basic'\n         olvMessage='\ub2e8\uc21c\ud55c \uc548\ub0b4\uc0ac\ud56d, \ud504\ub85c\uc81d\ud2b8 \ubaa9\ub85d \uadf8\ub8f9\ud551 \ub4f1 \uae30\ubcf8\uc801\uc73c\ub85c\ub294 \uc0c1\ud558 24px, \uc88c\uc6b0 32px\uc758 \uc5ec\ubc31\uc744 \uc801\uc6a9'\n         [olvContentMessage]='MessageTemplate'>\n</olv-box>\n<ng-template #MessageTemplate>\n    - \ub2e8, 1\uc904\uc77c \uacbd\uc6b0 \ucd5c\uc18c 64px \ub0b4\uc5d0\uc11c middle \uc815\ub82c\uc744 \uae30\ubcf8\uc73c\ub85c \ud568<br>\n    - \ucee8\ud150\uce20 \uc601\uc5ed\uc758 width 100% \uc801\uc6a9\uc774 \uae30\ubcf8\uc774\uc9c0\ub9cc, \ud544\uc694\uc5d0 \ub530\ub77c \uc801\uc808\ud558\uac8c \uc0ac\uc774\uc988 \uc870\uc815\ud558\uc5ec \uc0ac\uc6a9 \uac00\ub2a5\n</ng-template>\n\n<olv-box olvBoxType='strong-error'\n         [olvMessageTmpl] = 'StrongTmpl'\n         [olvContentMessage]='StrongErrorTmpl'>\n</olv-box>\n<ng-template #StrongTmpl>\n    <div class='text-3xl font-bold'>Component</div>\n</ng-template>\n<ng-template #StrongErrorTmpl>\n    <div class='text-red-fg font-bold text-lg'>\ud655\uc778\uc774 \ud544\uc694\ud55c Component : 99 \uac1c</div>\n    <div class='text-lg'>\uc790\ub3d9 \uc218\uc9d1\ub41c Component : 99\uac1c</div>\n</ng-template>"}copyText(o){this.clipboardService.copyFromContent(o),alert("code copied!")}showArea(){this.isShown=!this.isShown}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(a.Yv))},e.\u0275cmp=t.Xpm({type:e,selectors:[["component-box-style"]],decls:50,vars:6,consts:[[1,"flex","flex-row","justify-items-center","items-center","mt-60"],[1,"text-3xl","font-bold","tracking-tight","leading-tight","whitespace-nowrap"],[1,"flex","items-baseline","ml-16","text-gray-600","text-md","flex-wrap"],[1,"mt-24","font-semibold","text-gray-600"],[1,"flex","text-sm"],[1,"bg-gray-100","border","border-gray-100","px-4","m-1","w-[60px]","h-[21px]","flex","items-center","justify-center"],[1,"bg-lightgray-600","border","border-lightgray-600","px-4","m-1","w-[60px]","h-[21px]","flex","items-center","justify-center"],[1,"bg-lightgray-100","border","border-gray-100","px-4","m-1","w-[60px]","h-[21px]","flex","items-center","justify-center"],[1,"bg-olive-400","border","border-olive-400","px-4","m-1","w-[60px]","h-[21px]","flex","items-center","justify-center","text-white","font-thin"],[1,"bg-olive-200","border","border-olive-200","px-4","m-1","w-[60px]","h-[21px]","flex","items-center","justify-center"],[1,"bg-wrong-button","border","border-wrong-button","px-4","m-1","w-[60px]","h-[21px]","flex","items-center","justify-center","text-white","font-thin"],[1,"bg-wrong-line","border","border-wrong-line","px-4","m-1","w-[60px]","h-[21px]","flex","items-center","justify-center","text-gray-700"],[1,"bg-wrong-bg","border","border-wrong-bg","px-4","m-1","w-[60px]","h-[21px]","flex","items-center","justify-center"],[1,"my-24","font-semibold","text-gray-600"],["olvBoxType","basic","olvMessage","\ub2e8\uc21c\ud55c \uc548\ub0b4\uc0ac\ud56d, \ud504\ub85c\uc81d\ud2b8 \ubaa9\ub85d \uadf8\ub8f9\ud551 \ub4f1 \uae30\ubcf8\uc801\uc73c\ub85c\ub294 \uc0c1\ud558 24px, \uc88c\uc6b0 32px\uc758 \uc5ec\ubc31\uc744 \uc801\uc6a9",3,"olvContentMessage"],["MessageTemplate",""],[1,"flex","flex-row","my-24"],[1,"basis-1/2"],["olvBoxType","strong-error",3,"olvMessageTmpl","olvContentMessage"],["StrongTmpl",""],["StrongErrorTmpl",""],[1,"basis-1/2","text-sm","text-gray-600","self-end","pl-20"],[1,"codeBtn"],["title","Copy Code",1,"inline-block","mx-4","text-md","hover:text-olive-400",3,"click"],[1,"align-middle","mb-1",3,"svgIcon"],[1,"ml-1"],["title","Show Code",1,"inline-block","mx-4","text-md","hover:text-olive-400",3,"click"],[4,"ngIf"],[1,"text-3xl","font-bold"],[1,"text-red-fg","font-bold","text-lg"],[1,"text-lg"],[1,"relative","border-b"],[3,"highlight","languages"]],template:function(o,u){if(1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._uU(2,"Style"),t.qZA(),t.TgZ(3,"div",2),t._uU(4," Box\uc5d0 \uc0ac\uc6a9\ub41c \uc2a4\ud0c0\uc77c\uacfc \uc0ac\uc774 \uac04\uaca9\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. "),t.qZA(),t.qZA(),t.TgZ(5,"div",3),t._uU(6,"Color"),t.qZA(),t.TgZ(7,"div",4),t.TgZ(8,"div",5),t._uU(9,"#DDDDDD"),t.qZA(),t.TgZ(10,"div",6),t._uU(11,"#EEEEEE"),t.qZA(),t.TgZ(12,"div",7),t._uU(13,"#FFFFFF"),t.qZA(),t.TgZ(14,"div",8),t._uU(15,"#038C65"),t.qZA(),t.TgZ(16,"div",9),t._uU(17,"#CCE6DF"),t.qZA(),t.TgZ(18,"div",10),t._uU(19,"#FF3340"),t.qZA(),t.TgZ(20,"div",11),t._uU(21,"#FF838B"),t.qZA(),t.TgZ(22,"div",12),t._uU(23,"#FFF4F4"),t.qZA(),t.qZA(),t.TgZ(24,"div",13),t._uU(25,"Spacing"),t.qZA(),t._UZ(26,"olv-box",14),t.YNc(27,G,3,0,"ng-template",null,15,t.W1O),t.TgZ(29,"div",16),t.TgZ(30,"div",17),t._UZ(31,"olv-box",18),t.YNc(32,z,2,0,"ng-template",null,19,t.W1O),t.YNc(34,W,4,0,"ng-template",null,20,t.W1O),t.qZA(),t.TgZ(36,"div",21),t._uU(37," Scan > Component Issue \ucc98\ub7fc, \uc601\uc5ed \ub0b4 \uc5ec\ub7ec \ud56d\ubaa9\ub4e4\uacfc \uc4f0\uc774\uba74\uc11c "),t._UZ(38,"br"),t._uU(39," \uc2ec\ud50c\ud558\uac8c \ub370\uc774\ud130\ub97c \ubcf4\uc5ec\uc918\uc57c\ud558\ub294 \uacbd\uc6b0, \uc0c1\ud558 \uc5ec\ubc31\uc744 32px\ub85c \uc801\uc6a9\ud558\uc5ec \uac00\ub3c5\uc131\uc744 \ud655\ubcf4 "),t.qZA(),t.qZA(),t.TgZ(40,"div",22),t.TgZ(41,"div",23),t.NdJ("click",function(){return u.showArea()}),t._UZ(42,"mat-icon",24),t.TgZ(43,"span",25),t._uU(44,"Show Code"),t.qZA(),t.qZA(),t.TgZ(45,"div",26),t.NdJ("click",function(){return u.copyText(u.strong)}),t._UZ(46,"mat-icon",24),t.TgZ(47,"span",25),t._uU(48,"Copy Code"),t.qZA(),t.qZA(),t.qZA(),t.YNc(49,$,6,3,"ng-container",27)),2&o){const r=t.MAs(28),c=t.MAs(33),at=t.MAs(35);t.xp6(26),t.Q6J("olvContentMessage",r),t.xp6(5),t.Q6J("olvMessageTmpl",c)("olvContentMessage",at),t.xp6(11),t.Q6J("svgIcon","CodeCopyIcon"),t.xp6(4),t.Q6J("svgIcon","CodeShowIcon"),t.xp6(3),t.Q6J("ngIf",u.isShown)}},directives:[g,i.Hw,C.O5,s.y$],encapsulation:2}),e})(),x=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["component-box"]],decls:79,vars:0,consts:[[1,"text-4xl","font-extrabold","tracking-tight","pb-16","mb-32","border-b"],[1,"flex","flex-row","justify-items-center","items-center","mt-80"],[1,"text-3xl","font-bold","tracking-tight","leading-tight","whitespace-nowrap"],[1,"flex","items-baseline","ml-16","text-gray-600","text-md","flex-wrap"],[1,"flex","flex-col","mt-6"],[1,"overflow-x-auto","sm:-mx-6","lg:-mx-8"],[1,"inline-block","py-2","min-w-full","sm:px-6","lg:px-8"],[1,"overflow-hidden"],[1,"min-w-full"],[1,"bg-olive-100","font-bold","border-b","border-t","border-t-olive-200","border-b-olive-200"],["scope","col",1,"py-3","px-4","text-md","text-left"],["scope","col",1,"py-3","px-4","text-md","text-center"],[1,"bg-white","text-md","text-black","font-light","border-b"],[1,"p-4","whitespace-nowrap","text-left","align-top"],[1,"p-4","whitespace-nowrap","text-center","align-top"]],template:function(o,u){1&o&&(t.TgZ(0,"div",0),t._uU(1," BOX\n"),t.qZA(),t._UZ(2,"component-box-type"),t._UZ(3,"component-box-style"),t.TgZ(4,"div",1),t.TgZ(5,"div",2),t._uU(6,"Box"),t.qZA(),t.TgZ(7,"div",3),t._uU(8," component "),t.qZA(),t.qZA(),t.TgZ(9,"div",4),t.TgZ(10,"div",5),t.TgZ(11,"div",6),t.TgZ(12,"div",7),t.TgZ(13,"table",8),t.TgZ(14,"thead",9),t.TgZ(15,"tr"),t.TgZ(16,"th",10),t._uU(17," Property "),t.qZA(),t.TgZ(18,"th",11),t._uU(19," Description "),t.qZA(),t.TgZ(20,"th",11),t._uU(21," Type "),t.qZA(),t.TgZ(22,"th",11),t._uU(23," Default "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(24,"tbody"),t.TgZ(25,"tr",12),t.TgZ(26,"td",13),t._uU(27," olvBoxType "),t.qZA(),t.TgZ(28,"td",14),t._uU(29," Box type "),t.qZA(),t.TgZ(30,"td",14),t._uU(31," 'basic' | 'desc' | 'info' | 'error' | 'strong-basic' | 'strong-error' | 'strong-info' "),t.qZA(),t.TgZ(32,"td",14),t._uU(33," - "),t.qZA(),t.qZA(),t.TgZ(34,"tr",12),t.TgZ(35,"td",13),t._uU(36," olvMessage "),t.qZA(),t.TgZ(37,"td",14),t._uU(38," Description or Title "),t.qZA(),t.TgZ(39,"td",14),t._uU(40," - "),t.qZA(),t.TgZ(41,"td",14),t._uU(42," String "),t.qZA(),t.qZA(),t.TgZ(43,"tr",12),t.TgZ(44,"td",13),t._uU(45," olvMessageTmpl "),t.qZA(),t.TgZ(46,"td",14),t._uU(47," Customized description or title "),t.qZA(),t.TgZ(48,"td",14),t._uU(49," - "),t.qZA(),t.TgZ(50,"td",14),t._uU(51," Template "),t.qZA(),t.qZA(),t.TgZ(52,"tr",12),t.TgZ(53,"td",13),t._uU(54," olvContentMessage "),t.qZA(),t.TgZ(55,"td",14),t._uU(56," Additional content of Box "),t.qZA(),t.TgZ(57,"td",14),t._uU(58," - "),t.qZA(),t.TgZ(59,"td",14),t._uU(60," Template "),t.qZA(),t.qZA(),t.TgZ(61,"tr",12),t.TgZ(62,"td",13),t._uU(63," olvIcon "),t.qZA(),t.TgZ(64,"td",14),t._uU(65," Icon "),t.qZA(),t.TgZ(66,"td",14),t._uU(67," - "),t.qZA(),t.TgZ(68,"td",14),t._uU(69," - "),t.qZA(),t.qZA(),t.TgZ(70,"tr",12),t.TgZ(71,"td",13),t._uU(72," olvCloseable "),t.qZA(),t.TgZ(73,"td",14),t._uU(74," Icon "),t.qZA(),t.TgZ(75,"td",14),t._uU(76," true | false "),t.qZA(),t.TgZ(77,"td",14),t._uU(78," - "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA())},directives:[Z,d],encapsulation:2}),e})(),A=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["component-button"]],decls:2,vars:0,template:function(o,u){1&o&&(t.TgZ(0,"h1"),t._uU(1,"Button"),t.qZA())},encapsulation:2}),e})(),v=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["style-color"]],decls:2,vars:0,template:function(o,u){1&o&&(t.TgZ(0,"h1"),t._uU(1,"Checkbox"),t.qZA())},encapsulation:2}),e})();var T=l(4796);let B=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["style-color"]],decls:2,vars:0,template:function(o,u){1&o&&(t.TgZ(0,"h1"),t._uU(1,"Dropdown"),t.qZA())},encapsulation:2}),e})();var K=l(7006);function tt(e,n){1&e&&(t._uU(0," Copyright \u24d2 "),t.TgZ(1,"a",49),t._uU(2," Kakao Corp."),t.qZA(),t._uU(3," All rights reserved."),t._UZ(4,"br"),t._uU(5," \uce74\uce74\uc624 \uae30\uc220 \ud50c\ub7ab\ud3fc\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uc624\ud508\uc18c\uc2a4 \uac80\uc99d \uc11c\ube44\uc2a4"),t._UZ(6,"br"))}function et(e,n){1&e&&(t.TgZ(0,"a",50),t._uU(1,"\uc774\uc6a9\uc57d\uad00"),t.qZA(),t.TgZ(2,"a",51),t._uU(3,"\uac1c\uc778\uc815\ubcf4\ucc98\ub9ac\ubc29\uce68"),t.qZA())}const ot=function(){return["html"]};function nt(e,n){if(1&e&&(t.ynx(0),t.TgZ(1,"ul"),t.TgZ(2,"li",52),t.TgZ(3,"div"),t.TgZ(4,"pre"),t._UZ(5,"code",53),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk()),2&e){const o=t.oxw();t.xp6(5),t.Q6J("highlight",o.footer)("languages",t.DdM(2,ot))}}let f=(()=>{class e{constructor(o){this.clipboardService=o,this.isShown=!1,this.footer='<olv-footer\n    [olvContentMessage]=\'MessageTemplate\'\n    [olvExtraMessage]=\'olvExtraMessage\'>\n</olv-footer>\n\n<olv-footer\n    [olvContentMessage]=\'MessageTemplate\'\n    [olvExtraMessage]=\'olvExtraMessage\'\n    olvFooterType=\'custom\'>\n</olv-footer>\n\n<ng-template #MessageTemplate>\n    Copyright \u24d2 <a href="https://www.kakaocorp.com/" target="_blank"> Kakao Corp.</a> All rights reserved.<br/>\n    \uce74\uce74\uc624 \uae30\uc220 \ud50c\ub7ab\ud3fc\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uc624\ud508\uc18c\uc2a4 \uac80\uc99d \uc11c\ube44\uc2a4<br/>\n</ng-template>\n<ng-template #olvExtraMessage>\n    <a href="https://www.kakao.com/policy/terms?lang=ko" class="text-gray-200 mx-3">\uc774\uc6a9\uc57d\uad00</a>\n    <a href="https://www.kakao.com/policy/privacy?lang=ko" class="text-gray-200 mx-3">\uac1c\uc778\uc815\ubcf4\ucc98\ub9ac\ubc29\uce68</a>\n</ng-template>'}copyText(o){this.clipboardService.copyFromContent(o),alert("code copied!")}showArea(){this.isShown=!this.isShown}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(a.Yv))},e.\u0275cmp=t.Xpm({type:e,selectors:[["component-footer"]],decls:158,vars:7,consts:[[1,"text-4xl","font-extrabold","tracking-tight","pb-16","mb-32","border-b"],[1,"flex","border-gray-700"],[1,"flex","flex-row","justify-items-center","items-center","mt-40","mb-20"],[1,"text-3xl","font-bold","tracking-tight","leading-tight","whitespace-nowrap"],[1,"flex","items-baseline","ml-16","text-gray-600","text-md","flex-wrap"],[1,"my-16","font-semibold","text-md","text-gray-600"],[3,"olvContentMessage","olvExtraMessage"],["MessageTemplate",""],["olvExtraMessage",""],[1,"w-96","mb-16"],["olvFooterType","custom",3,"olvContentMessage","olvExtraMessage"],[1,"codeBtn"],["title","Copy Code",1,"inline-block","mx-4","text-md","hover:text-olive-400",3,"click"],[1,"align-middle","mb-1",3,"svgIcon"],[1,"ml-1"],["title","Show Code",1,"inline-block","mx-4","text-md","hover:text-olive-400",3,"click"],[4,"ngIf"],[1,"flex","flex-row","justify-items-center","items-center","mt-60"],[1,"mt-24","font-semibold","text-gray-600"],[1,"flex","text-sm"],[1,"bg-gray-700","border","border-gray-700","text-white","px-4","m-1","w-[60px]","h-[21px]","flex","items-center","justify-center"],[1,"bg-gray-500","border","border-gray-500","text-white","px-4","m-1","w-[60px]","h-[21px]","flex","items-center","justify-center"],[1,"bg-gray-200","border","border-gray-200","px-4","m-1","w-[60px]","h-[21px]","flex","items-center","justify-center"],[1,"flex","flex-col","mt-6"],[1,"overflow-x-auto","sm:-mx-6","lg:-mx-8"],[1,"inline-block","py-2","min-w-full","sm:px-6","lg:px-8"],[1,"overflow-hidden"],[1,"min-w-full"],[1,"bg-olive-100","border-b","border-t","border-t-olive-200","border-b-olive-200"],["scope","col",1,"py-3","px-4","text-md","font-bold","text-left","w-100"],["scope","col",1,"py-3","px-4","text-md","font-bold","text-center","w-60"],[1,"bg-white","text-md","text-black","h-[64px]","border-b"],[1,"p-4","whitespace-nowrap"],[1,"text-gray-500","text-sm","font-normal","leading-20","tracking-tight","hover:underline","cursor-pointer"],[1,"text-gray-500","text-sm","font-normal","leading-20","tracking-tight","underline"],[1,"flex","items-center","justify-center","text-center"],[1,"bg-gray-500","border","border-gray-500","px-4","m-1","w-[60px]","h-[21px]","flex","items-center","justify-center","text-white","text-sm","font-thin"],[1,"text-center"],[1,"text-gray-200","text-sm","font-normal","leading-20","tracking-tight","hover:underline","cursor-pointer"],[1,"text-gray-200","text-sm","font-normal","leading-20","tracking-tight","underline"],[1,"bg-gray-200","border","border-gray-200","px-4","m-1","w-[60px]","h-[21px]","flex","items-center","justify-center","text-gray-700","text-sm","font-light"],[1,"flex","flex-row","justify-items-center","items-center","mt-80"],[1,"overflow-x-auto"],[1,"inline-block","py-2","min-w-full"],["scope","col",1,"py-3","px-4","text-md","font-bold","text-left"],["scope","col",1,"py-3","px-4","text-md","font-bold","text-center"],[1,"bg-white","text-md","text-black","font-light","h-[64px]","border-b"],[1,"p-4","whitespace-nowrap","text-left","align-top"],[1,"p-4","whitespace-nowrap","text-center","align-top"],["href","https://www.kakaocorp.com/","target","_blank"],["href","https://www.kakao.com/policy/terms?lang=ko",1,"text-gray-200","mx-3"],["href","https://www.kakao.com/policy/privacy?lang=ko",1,"text-gray-200","mx-3"],[1,"relative","border-b"],[3,"highlight","languages"]],template:function(o,u){if(1&o&&(t.TgZ(0,"div",0),t._uU(1," Footer\n"),t.qZA(),t.TgZ(2,"div",1),t._uU(3,"Footer\ub294 GNB\uc640 \ud568\uaed8 \ubaa8\ub4e0 \ud398\uc774\uc9c0\uc5d0\uc11c \uacf5\ud1b5\uc801\uc73c\ub85c \uc0ac\uc6a9\ub429\ub2c8\ub2e4. PC\uc640 \ubaa8\ubc14\uc77c\uc5d0\uc11c \ub808\uc774\uc544\uc6c3\uc774 \ub2e4\ub974\uac8c \uc801\uc6a9\ub429\ub2c8\ub2e4."),t.qZA(),t.TgZ(4,"div",2),t.TgZ(5,"div",3),t._uU(6,"Type"),t.qZA(),t.TgZ(7,"div",4),t._uU(8," \ub514\ubc14\uc774\uc2a4\ubcc4\ub85c \ub2e4\ub974\uac8c \uc801\uc6a9\ub418\uba70, \uac01 \ud654\uba74\uc758 width 100%\ub85c \uc801\uc6a9\ud569\ub2c8\ub2e4. "),t.qZA(),t.qZA(),t.TgZ(9,"div",5),t._uU(10,"Basic"),t.qZA(),t._UZ(11,"olv-footer",6),t.YNc(12,tt,7,0,"ng-template",null,7,t.W1O),t.YNc(14,et,4,0,"ng-template",null,8,t.W1O),t.TgZ(16,"div",5),t._uU(17,"Custom"),t.qZA(),t.TgZ(18,"div",9),t._UZ(19,"olv-footer",10),t.qZA(),t.TgZ(20,"div",11),t.TgZ(21,"div",12),t.NdJ("click",function(){return u.showArea()}),t._UZ(22,"mat-icon",13),t.TgZ(23,"span",14),t._uU(24,"Show Code"),t.qZA(),t.qZA(),t.TgZ(25,"div",15),t.NdJ("click",function(){return u.copyText(u.footer)}),t._UZ(26,"mat-icon",13),t.TgZ(27,"span",14),t._uU(28,"Copy Code"),t.qZA(),t.qZA(),t.qZA(),t.YNc(29,nt,6,3,"ng-container",16),t.TgZ(30,"div",17),t.TgZ(31,"div",3),t._uU(32,"Style"),t.qZA(),t.TgZ(33,"div",4),t._uU(34," Footer\uc5d0 \uc0ac\uc6a9\ub41c \uc2a4\ud0c0\uc77c\uacfc \uc0ac\uc774 \uac04\uaca9\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. "),t.qZA(),t.qZA(),t.TgZ(35,"div",18),t._uU(36,"Color"),t.qZA(),t.TgZ(37,"div",19),t.TgZ(38,"div",20),t._uU(39,"#222222"),t.qZA(),t.TgZ(40,"div",21),t._uU(41,"#888888"),t.qZA(),t.TgZ(42,"div",22),t._uU(43,"#D6D6D6"),t.qZA(),t.qZA(),t.TgZ(44,"div",18),t._uU(45,"Text"),t.qZA(),t.TgZ(46,"div",23),t.TgZ(47,"div",24),t.TgZ(48,"div",25),t.TgZ(49,"div",26),t.TgZ(50,"table",27),t.TgZ(51,"thead",28),t.TgZ(52,"tr"),t.TgZ(53,"th",29),t._uU(54," Type "),t.qZA(),t.TgZ(55,"th",30),t._uU(56," Color "),t.qZA(),t.TgZ(57,"th",30),t._uU(58," Size "),t.qZA(),t.TgZ(59,"th",30),t._uU(60," Style "),t.qZA(),t.TgZ(61,"th",30),t._uU(62," Line Height "),t.qZA(),t.TgZ(63,"th",30),t._uU(64," Letter Spacing "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(65,"tbody"),t.TgZ(66,"tr",31),t.TgZ(67,"td",32),t.TgZ(68,"div",33),t._uU(69,"Copyright"),t.qZA(),t.TgZ(70,"div",34),t._uU(71,"Copyright Hover / Press"),t.qZA(),t.qZA(),t.TgZ(72,"td"),t.TgZ(73,"div",35),t.TgZ(74,"div",36),t._uU(75,"#888888"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(76,"td"),t.TgZ(77,"div",37),t._uU(78,"12"),t.qZA(),t.qZA(),t.TgZ(79,"td"),t.TgZ(80,"div",37),t._uU(81,"Regular"),t.qZA(),t.qZA(),t.TgZ(82,"td"),t.TgZ(83,"div",37),t._uU(84,"20"),t.qZA(),t.qZA(),t.TgZ(85,"td"),t.TgZ(86,"div",37),t._uU(87,"0"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(88,"tr",31),t.TgZ(89,"td",32),t.TgZ(90,"div",38),t._uU(91,"Link Select"),t.qZA(),t.TgZ(92,"div",39),t._uU(93,"Link Select Hover / Press"),t.qZA(),t.qZA(),t.TgZ(94,"td"),t.TgZ(95,"div",35),t.TgZ(96,"div",40),t._uU(97,"#D6D6D6"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(98,"td"),t.TgZ(99,"div",37),t._uU(100,"12"),t.qZA(),t.qZA(),t.TgZ(101,"td"),t.TgZ(102,"div",37),t._uU(103,"Regular"),t.qZA(),t.qZA(),t.TgZ(104,"td"),t.TgZ(105,"div",37),t._uU(106,"20"),t.qZA(),t.qZA(),t.TgZ(107,"td"),t.TgZ(108,"div",37),t._uU(109,"0"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(110,"div",41),t.TgZ(111,"div",3),t._uU(112,"Footer"),t.qZA(),t.TgZ(113,"div",4),t._uU(114," component "),t.qZA(),t.qZA(),t.TgZ(115,"div",23),t.TgZ(116,"div",42),t.TgZ(117,"div",43),t.TgZ(118,"div",26),t.TgZ(119,"table",27),t.TgZ(120,"thead",28),t.TgZ(121,"tr"),t.TgZ(122,"th",44),t._uU(123," Property "),t.qZA(),t.TgZ(124,"th",45),t._uU(125," Description "),t.qZA(),t.TgZ(126,"th",45),t._uU(127," Type "),t.qZA(),t.TgZ(128,"th",45),t._uU(129," Default "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(130,"tbody"),t.TgZ(131,"tr",46),t.TgZ(132,"td",47),t._uU(133," olvFooterType "),t.qZA(),t.TgZ(134,"td",48),t._uU(135," - "),t.qZA(),t.TgZ(136,"td",48),t._uU(137," 'basic' | 'custom' "),t.qZA(),t.TgZ(138,"td",48),t._uU(139," basic "),t.qZA(),t.qZA(),t.TgZ(140,"tr",46),t.TgZ(141,"td",47),t._uU(142," olvContentMessage "),t.qZA(),t.TgZ(143,"td",48),t._uU(144," Copyright "),t.qZA(),t.TgZ(145,"td",48),t._uU(146," - "),t.qZA(),t.TgZ(147,"td",48),t._uU(148," Template "),t.qZA(),t.qZA(),t.TgZ(149,"tr",46),t.TgZ(150,"td",47),t._uU(151," olvExtraMessage "),t.qZA(),t.TgZ(152,"td",48),t._uU(153," Extra links "),t.qZA(),t.TgZ(154,"td",48),t._uU(155," - "),t.qZA(),t.TgZ(156,"td",48),t._uU(157," Template "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o){const r=t.MAs(13),c=t.MAs(15);t.xp6(11),t.Q6J("olvContentMessage",r)("olvExtraMessage",c),t.xp6(8),t.Q6J("olvContentMessage",r)("olvExtraMessage",c),t.xp6(3),t.Q6J("svgIcon","CodeCopyIcon"),t.xp6(4),t.Q6J("svgIcon","CodeShowIcon"),t.xp6(3),t.Q6J("ngIf",u.isShown)}},directives:[K.Z,i.Hw,C.O5,s.y$],encapsulation:2}),e})(),h=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["style-color"]],decls:2,vars:0,template:function(o,u){1&o&&(t.TgZ(0,"h1"),t._uU(1,"GNB"),t.qZA())},encapsulation:2}),e})(),y=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["style-color"]],decls:2,vars:0,template:function(o,u){1&o&&(t.TgZ(0,"h1"),t._uU(1,"Icon & Image"),t.qZA())},encapsulation:2}),e})(),b=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["style-color"]],decls:2,vars:0,template:function(o,u){1&o&&(t.TgZ(0,"h1"),t._uU(1,"Inputbox"),t.qZA())},encapsulation:2}),e})(),_=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["style-color"]],decls:2,vars:0,template:function(o,u){1&o&&(t.TgZ(0,"h1"),t._uU(1,"Navigation"),t.qZA())},encapsulation:2}),e})(),q=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["style-color"]],decls:2,vars:0,template:function(o,u){1&o&&(t.TgZ(0,"h1"),t._uU(1,"Other"),t.qZA())},encapsulation:2}),e})(),D=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["style-color"]],decls:2,vars:0,template:function(o,u){1&o&&(t.TgZ(0,"h1"),t._uU(1,"Paging"),t.qZA())},encapsulation:2}),e})(),U=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["style-color"]],decls:2,vars:0,template:function(o,u){1&o&&(t.TgZ(0,"h1"),t._uU(1,"Popup"),t.qZA())},encapsulation:2}),e})(),w=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["style-color"]],decls:2,vars:0,template:function(o,u){1&o&&(t.TgZ(0,"h1"),t._uU(1,"Radiobutton"),t.qZA())},encapsulation:2}),e})(),F=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["style-color"]],decls:2,vars:0,template:function(o,u){1&o&&(t.TgZ(0,"h1"),t._uU(1,"Tab"),t.qZA())},encapsulation:2}),e})(),E=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["style-color"]],decls:2,vars:0,template:function(o,u){1&o&&(t.TgZ(0,"h1"),t._uU(1,"Table"),t.qZA())},encapsulation:2}),e})(),M=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["style-color"]],decls:2,vars:0,template:function(o,u){1&o&&(t.TgZ(0,"h1"),t._uU(1,"Tag & Badge"),t.qZA())},encapsulation:2}),e})();const ut=[{path:"",redirectTo:"color",pathMatch:"full"},{path:"box",component:x},{path:"button",component:A},{path:"card",component:(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["component-card"]],decls:2,vars:0,template:function(o,u){1&o&&(t.TgZ(0,"h1"),t._uU(1,"Card"),t.qZA())},encapsulation:2}),e})()},{path:"checkbox",component:v},{path:"collapse",component:(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["component-collapse"]],decls:2,vars:0,template:function(o,u){1&o&&(t.TgZ(0,"h1"),t._uU(1,"Collapse"),t.qZA())},encapsulation:2}),e})()},{path:"datePicker",component:(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["component-datePicker"]],decls:2,vars:0,template:function(o,u){1&o&&(t.TgZ(0,"h1"),t._uU(1,"DatePicker"),t.qZA())},encapsulation:2}),e})()},{path:"dropdown",component:B},{path:"footer",component:f},{path:"gnb",component:h},{path:"iconImage",component:y},{path:"inputBox",component:b},{path:"navigation",component:_},{path:"paging",component:D},{path:"popup",component:U},{path:"radioButton",component:w},{path:"tab",component:F},{path:"table",component:E},{path:"tagBadge",component:M},{path:"tree",component:(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["component-tree"]],decls:2,vars:0,template:function(o,u){1&o&&(t.TgZ(0,"h1"),t._uU(1,"Tree"),t.qZA())},encapsulation:2}),e})()},{path:"other",component:q},{path:"**",redirectTo:"exception/404"}];let lt=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[T.Bz.forChild(ut)],T.Bz]}),e})();var rt=l(4448);let Ct=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[C.ez]]}),e})();var it=l(311);let st=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[{provide:s.rN,useValue:{coreLibraryLoader:()=>l.e(112).then(l.bind(l,9112)),lineNumbersLoader:()=>l.e(859).then(l.t.bind(l,859,23)),languages:{typescript:()=>l.e(535).then(l.bind(l,2535)),css:()=>l.e(403).then(l.bind(l,4403)),xml:()=>l.e(142).then(l.bind(l,9142))}}}],imports:[[rt.m,lt,a.Iq,Ct,s._l,i.Ps,it.j]]}),e})()}}]);