window.__require=function e(t,n,o){function i(a,r){if(!n[a]){if(!t[a]){var l=a.split("/");if(l=l[l.length-1],!t[l]){var d="function"==typeof __require&&__require;if(!r&&d)return d(l,!0);if(c)return c(l,!0);throw new Error("Cannot find module '"+a+"'")}a=l}var _=n[a]={exports:{}};t[a][0].call(_.exports,function(e){return i(t[a][1][e]||e)},_,_.exports,e,t,n,o)}return n[a].exports}for(var c="function"==typeof __require&&__require,a=0;a<o.length;a++)i(o[a]);return i}({Sett:[function(e,t,n){"use strict";cc._RF.push(t,"1d6e0sTglFGJq1E2xNo9o4E","Sett");var o,i=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=this&&this.__decorate||function(e,t,n,o){var i,c=arguments.length,a=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(a=(c<3?i(a):c>3?i(t,n,a):i(t,n))||a);return c>3&&a&&Object.defineProperty(t,n,a),a},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(n,"__esModule",{value:!0});var r=e("../Apply/audio_mgr"),l=e("../Apply/Data"),d=e("../Export/Export"),_=e("../Framework/View/ViewZOrder"),f=e("../Game/Game"),u=cc._decorator,p=u.ccclass,s=(u.property,lw._decorator.metadata),y=function(e){function t(){var t=e.call(this)||this;return t._autoBind=!0,t._succ=null,t._btn_next=null,t._fail=null,t._btn_agin=null,t._btn_back=null,t._lab_aft=null,t._lab_now=null,t._lab_next=null,t._btn_dou=null,t._rew=null,t._lab_coin=null,t.coinNode=null,t.diamNode=null,t.LayerOrder=_.ViewZOrder.Sett,t}var n,o,u,y,g,v,h,m,w,b,N;return i(t,e),t.prototype.init=function(e){this._succ.active=!1,this._fail.active=!1;var t=l.default.game_level.json[l.default.game_level.num-1].level_json;this.coinNode=this._rew.getChildByName("coin"),this.diamNode=this._rew.getChildByName("diam");var n=this.coinNode.getChildByName("lab").getComponent(cc.Label),o=this.diamNode.getChildByName("lab").getComponent(cc.Label);if(e)l.default.finishLevel(),r.default.playEffect(r.SfxType.kvictory),this._succ.active=!0,n.string=t[t.length-1].win_coin.toString(),t[t.length-1].win_diam>0?(this.diamNode.parent=this._rew,l.default.ware_change(102,t[t.length-1].win_diam),o.string=t[t.length-1].win_diam.toString()):this.diamNode.parent=null,l.default.ware_change(101,t[t.length-1].win_coin);else{this._fail.active=!0;var i=(f.default.instance.GameRank-1)/l.default.game_level.json[l.default.game_level.num-1].level_num,c=Math.floor(t[t.length-1].win_coin*i);if(n.string=c.toString(),t[t.length-1].win_diam>0){this.diamNode.parent=this._rew;var a=Math.floor(t[t.length-1].win_coin*i);n.string=a.toString(),l.default.ware_change(102,a),o.string=a.toString()}else this.diamNode.parent=null;l.default.ware_change(101,c)}this._lab_now.string=l.default.game_level.num.toString(),l.default.game_level.num>1?(this._lab_aft.node.active=!0,this._lab_aft.string=(l.default.game_level.num-1).toString()):this._lab_aft.node.active=!1,this._lab_next.string=(l.default.game_level.num+1).toString()},t.prototype._initUI=function(){},t.prototype._initEvent=function(){var e=this;this._btn_dou.node.on(cc.Node.EventType.TOUCH_END,function(){d.default.instance.wacth_video(function(){var t=l.default.game_level.json[l.default.game_level.num-1].level_json;l.default.ware_change(101,t[t.length-1].win_coin),l.default.ware_change(101,t[t.length-1].win_diam),e._btn_dou.node.active=!1})}),this._btn_next.node.on(cc.Node.EventType.TOUCH_END,function(){l.default.finishLevel(),lw.viewMgr.close(l.Game_inter.Sett),lw.viewMgr.close(l.Game_inter.Game),lw.viewMgr.open(l.Game_inter.Start)}),this._btn_agin.node.on(cc.Node.EventType.TOUCH_END,function(){lw.viewMgr.close(l.Game_inter.Sett),lw.viewMgr.close(l.Game_inter.Game),lw.viewMgr.open(l.Game_inter.Start)})},t.prototype.onClose=function(){},t.prototype.clickBtnBack=function(){lw.viewMgr.close(l.Game_inter.Sett),lw.viewMgr.close(l.Game_inter.Game),lw.viewMgr.open(l.Game_inter.Start)},c([s("cc.Node"),a("design:type","function"==typeof(n="undefined"!=typeof cc&&cc.Node)?n:Object)],t.prototype,"_succ",void 0),c([s("cc.Button"),a("design:type","function"==typeof(o="undefined"!=typeof cc&&cc.Button)?o:Object)],t.prototype,"_btn_next",void 0),c([s("cc.Node"),a("design:type","function"==typeof(u="undefined"!=typeof cc&&cc.Node)?u:Object)],t.prototype,"_fail",void 0),c([s("cc.Button"),a("design:type","function"==typeof(y="undefined"!=typeof cc&&cc.Button)?y:Object)],t.prototype,"_btn_agin",void 0),c([s("cc.Button"),a("design:type","function"==typeof(g="undefined"!=typeof cc&&cc.Button)?g:Object)],t.prototype,"_btn_back",void 0),c([s("cc.Label"),a("design:type","function"==typeof(v="undefined"!=typeof cc&&cc.Label)?v:Object)],t.prototype,"_lab_aft",void 0),c([s("cc.Label"),a("design:type","function"==typeof(h="undefined"!=typeof cc&&cc.Label)?h:Object)],t.prototype,"_lab_now",void 0),c([s("cc.Label"),a("design:type","function"==typeof(m="undefined"!=typeof cc&&cc.Label)?m:Object)],t.prototype,"_lab_next",void 0),c([s("cc.Button"),a("design:type","function"==typeof(w="undefined"!=typeof cc&&cc.Button)?w:Object)],t.prototype,"_btn_dou",void 0),c([s("cc.Node"),a("design:type","function"==typeof(b="undefined"!=typeof cc&&cc.Node)?b:Object)],t.prototype,"_rew",void 0),c([s("cc.Label"),a("design:type","function"==typeof(N="undefined"!=typeof cc&&cc.Label)?N:Object)],t.prototype,"_lab_coin",void 0),c([p,a("design:paramtypes",[])],t)}(lw.BaseView);n.default=y,cc._RF.pop()},{"../Apply/Data":void 0,"../Apply/audio_mgr":void 0,"../Export/Export":void 0,"../Framework/View/ViewZOrder":void 0,"../Game/Game":void 0}]},{},["Sett"]);