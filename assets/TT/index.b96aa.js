window.__require=function t(e,o,n){function r(i,a){if(!o[i]){if(!e[i]){var p=i.split("/");if(p=p[p.length-1],!e[p]){var f="function"==typeof __require&&__require;if(!a&&f)return f(p,!0);if(c)return c(p,!0);throw new Error("Cannot find module '"+i+"'")}i=p}var l=o[i]={exports:{}};e[i][0].call(l.exports,function(t){return r(e[i][1][t]||t)},l,l.exports,t,e,o,n)}return o[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<n.length;i++)r(n[i]);return r}({Egg:[function(t,e,o){"use strict";cc._RF.push(e,"19fffXvJ5BLI5X/DGqmGkkl","Egg");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(o,"__esModule",{value:!0});var a=t("../Apply/audio_mgr"),p=t("../Apply/Data"),f=t("../Export/Export"),l=t("../Framework/View/ViewZOrder"),u=t("../Main/Main"),d=cc._decorator,s=d.ccclass,_=(d.property,lw._decorator.metadata),y=function(t){function e(){var e=t.call(this)||this;return e._rew=null,e._true=null,e._pro_pro=null,e._btn_open=null,e._false=null,e._btn_rece=null,e._btn_close=null,e._get=null,e._lab_lab=null,e._btn_get=null,e._autoBind=!0,e.proNum=0,e.LayerOrder=l.ViewZOrder.Egg,e}var o,n,d,y,g,v,h,b,w,O;return r(e,t),e.prototype.init=function(){this._get.active=!1,this._rew.active=!0,this._false.active=!1,this._true.active=!1,this.proNum=0,0!=u.default.instance.userData.banner_data.boxProbability?(this._true.active=!0,this._pro_pro.progress=this.proNum,this._btn_open.node.getChildByName("video").active=!1,this._btn_close.node.active=!1):(this._false.active=!0,this._btn_close.node.active=!0)},e.prototype._initUI=function(){},e.prototype._initEvent=function(){},e.prototype.onClose=function(){},e.prototype.getRew=function(){this._rew.active=!1,this._get.active=!0,this._lab_lab.string=500..toString(),p.default.ware_change(101,500),this._btn_close.node.active=!0},e.prototype.clickBtnRece=function(){var t=this;a.default.playEffect(a.SfxType.kclick),f.default.instance.wacth_video(function(){t.getRew()})},e.prototype.clickBtnGet=function(){a.default.playEffect(a.SfxType.kclick),lw.viewMgr.close(p.Game_inter.Egg)},e.prototype.clickBtnClose=function(){a.default.playEffect(a.SfxType.kclick),lw.viewMgr.close(p.Game_inter.Egg)},e.prototype.clickBtnOpen=function(){a.default.playEffect(a.SfxType.kclick),this._btn_open.node.getChildByName("video").active?f.default.instance.wacth_video(this.getRew.bind(this)):(this.proNum+=.2,this._pro_pro.progress=this.proNum,this.proNum>=.8&&(this._btn_close.node.active=!0,this._btn_open.node.getChildByName("video").active=!0))},c([_("cc.Node"),i("design:type","function"==typeof(o="undefined"!=typeof cc&&cc.Node)?o:Object)],e.prototype,"_rew",void 0),c([_("cc.Node"),i("design:type","function"==typeof(n="undefined"!=typeof cc&&cc.Node)?n:Object)],e.prototype,"_true",void 0),c([_("cc.ProgressBar"),i("design:type","function"==typeof(d="undefined"!=typeof cc&&cc.ProgressBar)?d:Object)],e.prototype,"_pro_pro",void 0),c([_("cc.Button"),i("design:type","function"==typeof(y="undefined"!=typeof cc&&cc.Button)?y:Object)],e.prototype,"_btn_open",void 0),c([_("cc.Node"),i("design:type","function"==typeof(g="undefined"!=typeof cc&&cc.Node)?g:Object)],e.prototype,"_false",void 0),c([_("cc.Button"),i("design:type","function"==typeof(v="undefined"!=typeof cc&&cc.Button)?v:Object)],e.prototype,"_btn_rece",void 0),c([_("cc.Button"),i("design:type","function"==typeof(h="undefined"!=typeof cc&&cc.Button)?h:Object)],e.prototype,"_btn_close",void 0),c([_("cc.Node"),i("design:type","function"==typeof(b="undefined"!=typeof cc&&cc.Node)?b:Object)],e.prototype,"_get",void 0),c([_("cc.Label"),i("design:type","function"==typeof(w="undefined"!=typeof cc&&cc.Label)?w:Object)],e.prototype,"_lab_lab",void 0),c([_("cc.Button"),i("design:type","function"==typeof(O="undefined"!=typeof cc&&cc.Button)?O:Object)],e.prototype,"_btn_get",void 0),c([s,i("design:paramtypes",[])],e)}(lw.BaseView);o.default=y,cc._RF.pop()},{"../Apply/Data":void 0,"../Apply/audio_mgr":void 0,"../Export/Export":void 0,"../Framework/View/ViewZOrder":void 0,"../Main/Main":void 0}],Trial:[function(t,e,o){"use strict";cc._RF.push(e,"eaf55L8nGNLZZVKPcaNjk4B","Trial");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(o,"__esModule",{value:!0});var a=t("../Apply/Apply"),p=t("../Apply/Data"),f=t("../Export/Export"),l=t("../Framework/View/ViewZOrder"),u=t("../Start/Start"),d=cc._decorator,s=d.ccclass,_=(d.property,lw._decorator.metadata),y=function(t){function e(){var e=t.call(this)||this;return e._autoBind=!0,e._drag_drag=null,e._btn_trial=null,e._btn_close=null,e.dragIdx=0,e.LayerOrder=l.ViewZOrder.Trial,e}var o,n,d;return r(e,t),e.prototype.init=function(t){f.default.instance.hideBanner(),this.loadeDrag(t)},e.prototype.loadeDrag=function(t){var e=this;this.dragIdx=t;var o="Sprite/DragonBones/player"+t;a.default.loadDragonBones(this._drag_drag,"Start",o,function(){e._drag_drag.armatureName="armatureName",e._drag_drag.playAnimation("run",0)})},e.prototype._initUI=function(){},e.prototype._initEvent=function(){},e.prototype.onClose=function(){},e.prototype.clickBtnTrial=function(){var t=this;f.default.instance.wacth_video(function(){p.default.warehouse[201].SKIN.trial=t.dragIdx,t.clickBtnClose(),u.default.instance.loadeDrag(),t.clickBtnClose()})},e.prototype.clickBtnClose=function(){lw.viewMgr.close(p.Game_inter.Trial),lw.viewMgr.open(p.Game_inter.Draw)},c([_("dragonBones.ArmatureDisplay"),i("design:type","function"==typeof(o="undefined"!=typeof dragonBones&&dragonBones.ArmatureDisplay)?o:Object)],e.prototype,"_drag_drag",void 0),c([_("cc.Button"),i("design:type","function"==typeof(n="undefined"!=typeof cc&&cc.Button)?n:Object)],e.prototype,"_btn_trial",void 0),c([_("cc.Button"),i("design:type","function"==typeof(d="undefined"!=typeof cc&&cc.Button)?d:Object)],e.prototype,"_btn_close",void 0),c([s,i("design:paramtypes",[])],e)}(lw.BaseView);o.default=y,cc._RF.pop()},{"../Apply/Apply":void 0,"../Apply/Data":void 0,"../Export/Export":void 0,"../Framework/View/ViewZOrder":void 0,"../Start/Start":void 0}],Video:[function(t,e,o){"use strict";cc._RF.push(e,"047478GFDNPoYqZ+Cuuygyn","Video");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(o,"__esModule",{value:!0});var a=t("../Apply/Data"),p=t("../Apply/Plat"),f=t("../Framework/View/ViewZOrder"),l=cc._decorator,u=l.ccclass,d=(l.property,lw._decorator.metadata),s=function(t){function e(){var e=t.call(this)||this;return e._autoBind=!0,e._lab_num=null,e._btn_share=null,e._btn_close=null,e.LayerOrder=f.ViewZOrder.Video,e}var o,n,l;return r(e,t),e.prototype.init=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];p.default.stopGameRecord()},e.prototype._initUI=function(){},e.prototype._initEvent=function(){var t=this;this._btn_share.node.on(cc.Node.EventType.TOUCH_END,function(){p.default.shareRecordVideo(function(){console.log("\u5206\u4eab\u5b8c\u6210"),a.default.ware_change(101,200),t.clickBtnClose()},function(){console.log("\u5206\u4eab\u5931\u8d25"),t.clickBtnClose()})})},e.prototype.onClose=function(){},e.prototype.clickBtnClose=function(){lw.viewMgr.close(a.Game_inter.Video),lw.viewMgr.open(a.Game_inter.Sett,!0)},c([d("cc.Label"),i("design:type","function"==typeof(o="undefined"!=typeof cc&&cc.Label)?o:Object)],e.prototype,"_lab_num",void 0),c([d("cc.Button"),i("design:type","function"==typeof(n="undefined"!=typeof cc&&cc.Button)?n:Object)],e.prototype,"_btn_share",void 0),c([d("cc.Button"),i("design:type","function"==typeof(l="undefined"!=typeof cc&&cc.Button)?l:Object)],e.prototype,"_btn_close",void 0),c([u,i("design:paramtypes",[])],e)}(lw.BaseView);o.default=s,cc._RF.pop()},{"../Apply/Data":void 0,"../Apply/Plat":void 0,"../Framework/View/ViewZOrder":void 0}]},{},["Egg","Trial","Video"]);