window.__require=function t(e,n,o){function i(r,c){if(!n[r]){if(!e[r]){var s=r.split("/");if(s=s[s.length-1],!e[s]){var p="function"==typeof __require&&__require;if(!c&&p)return p(s,!0);if(a)return a(s,!0);throw new Error("Cannot find module '"+r+"'")}r=s}var l=n[r]={exports:{}};e[r][0].call(l.exports,function(t){return i(e[r][1][t]||t)},l,l.exports,t,e,n,o)}return n[r].exports}for(var a="function"==typeof __require&&__require,r=0;r<o.length;r++)i(o[r]);return i}({Attk:[function(t,e,n){"use strict";cc._RF.push(e,"35722Mdrb9L7qd5eSi+v2m0","Attk");var o=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r};Object.defineProperty(n,"__esModule",{value:!0});var i=cc._decorator,a=i.ccclass,r=(i.property,function(){function t(){}return t.isM_Attack=function(t,e,n){var o=!1,i=n.y+90,a=t.y+90;return i>=a-e.y&&i<=a+e.y&&(t.x<=n.x?t.x+e.x>=n.x&&(o=!0):t.x-e.x<=n.x&&(o=!0)),o},t.isP_Attack=function(t,e,n){var o=!1,i=t.getChildByName("drag").getChildByName("drag").scaleX,a=n.y+90,r=t.y+90;return a>=r-e.y&&a<=r+e.y&&(t.x<=n.x&&i<0?t.x+e.x>=n.x&&(o=!0):t.x>n.x&&i>0&&(console.log(),t.x-e.x<=n.x&&(o=!0))),o},t.isB_Attack=function(t,e,n){var o=!1,i=n.y+90;return i>=t.y-e.y&&i<=t.y+e.y&&t.x+e.x>=n.x&&t.x-e.x<=n.x&&(o=!0),o},o([a],t)}());n.default=r,cc._RF.pop()},{}],Game:[function(t,e,n){"use strict";cc._RF.push(e,"7950eIatxFO+bzmL7i42J8T","Game");var o,i=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(n,"__esModule",{value:!0});var c=t("../Apply/Apply"),s=t("../Apply/audio_mgr"),p=t("../Apply/Data"),l=t("../Apply/Plat"),u=t("../Apply/PoolMgr"),f=t("../Draw/Draw"),d=t("../Export/Export"),h=t("./script/player"),y=cc._decorator,_=y.ccclass,m=(y.property,lw._decorator.metadata),v=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._autoBind=!0,e._UICamera=null,e._sp_bg1=null,e._sp_bg2=null,e._sp_bg3=null,e._rode=null,e._player=null,e._monster=null,e._btn_attack=null,e._btn_skill=null,e._sp_cool=null,e._btn_set=null,e._lab_lenum=null,e._lab_monNum=null,e._tipy=null,e._tipz=null,e._start=null,e._Boss=null,e._doubleHit=null,e._lab_hit_num=null,e._set_inter=null,e._btn_agin=null,e._btn_back=null,e._btn_conti=null,e._revive=null,e._ani_num=null,e._btn_revive=null,e._btn_reviveno=null,e.settAbv=0,e.GameOver=!1,e.GameStop=!1,e.GameRank=1,e.GameSpeed=1,e.monsterPool=null,e.hitLabPool=null,e.bullPool=null,e.M_bullPool=null,e.monsterArr=[],e.diyMonsterArr=[],e.hitNum=0,e.hitTime=0,e.cool_state=!0,e.cool_time=1,e.cNowtime=0,e}var n,o,y,v,g,b,A,P,k,x,O,j,M,R,w,B,E,N,S,C,D,H,T,F,G,L,X,I;return i(e,t),n=e,e.prototype.init=function(){for(var t=this,e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];n.instance=this,this._sp_cool.fillRange=0,this.GameRank=1,this.loadMonster(),this.initBg(),this._start.active=!0,cc.tween(this._start).to(.5,{scaleX:1.2,scaleY:1.2}).to(.1,{scaleY:0}).call(function(){t._start.active=!1}).start(),s.default.stopMusic(),s.default.playMusic(s.BgmType.kMenu),l.default.startGameRecord()},e.prototype.initBg=function(){var t=this,e="Sprite/GameUi/back_"+p.default.game_level.json[p.default.game_level.num-1].level_bg;c.default.loadDras("Game",e,function(e){var n=function(t){for(var n=0;n<e.length;n++)if(e[n].name==t)return e[n]};t._sp_bg1.spriteFrame=n("res_1"),t._sp_bg2.spriteFrame=n("res_2"),t._sp_bg3.spriteFrame=n("res_1"),t._rode.getComponent(cc.Sprite).spriteFrame=n("rode")})},e.prototype.loadMonster=function(){var t=this,e=function(t,e){var n="Sprite/prefab/"+t;cc.assetManager.getBundle("Game").load(n,cc.Prefab,function(t,n){t||e(n)})};e("monster",function(e){t.monsterPool=new u.default(e,15),t.creatMonster()}),e("hitLab",function(e){t.hitLabPool=new u.default(e,50)}),e("PL_Bullet",function(e){t.bullPool=new u.default(e,20)}),e("M_Bullet",function(e){t.M_bullPool=new u.default(e,20)})},e.prototype.hitLabinit=function(t,e){var n=this,o=this.hitLabPool.get();o.parent=t,o.getComponent(cc.Label).string=Math.floor(e).toString(),o.x=0,o.y=180,o.scaleX=1,o.scaleY=1;var i=cc.callFunc(function(){o.parent=null,n.hitLabPool.put(o)});o.runAction(cc.sequence(cc.spawn(cc.moveTo(.5,0,260),cc.scaleTo(.5,0)),i))},e.prototype.creatMonster=function(){var t=this;this._lab_lenum.string=this.GameRank.toString()+"/"+p.default.game_level.json[p.default.game_level.num-1].level_num.toString();var e=p.default.game_level.json[p.default.game_level.num-1].level_json[this.GameRank-1];h.default.instance.initBuff(e),this.monsterArr=[],this.diyMonsterArr=[];var n=0,o=function(e,o){for(var i=function(){var e=t.monsterPool.get();e.getComponent("monster").init(o);var i=c.default.randRange(1,10),a=t._rode.width/2-100;i>5&&(a*=-1),e.x=a,e.y=t.minY,t.monsterArr.push(e),t.scheduleOnce(function(){e.active=!0,t._monster.addChild(e)},n),n++},a=0;a<e;a++)i();t._lab_monNum.string="\u5269\u4f59\u654c\u4eba:    "+n};o(e.sm_mons1,"sm_mons1"),o(e.sm_mons2,"sm_mons2"),o(e.sm_mons3,"sm_mons3"),o(e.boos1,"boos1"),o(e.boos2,"boos2")},e.prototype.creatBullet=function(t){var e=this.bullPool.get();e.active=!0,e.x=h.default.instance.node.x,e.y=h.default.instance.node.y+130,e.getComponent("P_bull").init(t),e.parent=this._player.parent},e.prototype.creatMBullet=function(t,e,n,o){var i=this.M_bullPool.get();i.active=!0,i.x=o.x,i.y=o.y,i.getComponent("M_bull").init(t,e,n),i.parent=this._player.parent},e.prototype._initUI=function(){var t=function(t){cc.tween(t).repeatForever(cc.tween().to(.3,{opacity:0}).to(.3,{opacity:255})).start()};t(this._tipz),t(this._tipy)},e.prototype._initEvent=function(){cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this)},e.prototype.onKeyDown=function(t){switch(t.keyCode){case cc.macro.KEY.a:h.default.instance.dire=-1;break;case cc.macro.KEY.d:h.default.instance.dire=1}},e.prototype.onKeyUp=function(t){switch(t.keyCode){case cc.macro.KEY.a:case cc.macro.KEY.d:h.default.instance.stopMove()}},e.prototype.onClose=function(){f.default.instance.dragBack()},Object.defineProperty(e.prototype,"getDrag",{get:function(){return null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sprRode",{get:function(){return this._rode},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"minY",{get:function(){return this._rode.y},enumerable:!1,configurable:!0}),e.prototype.double_Hit=function(){this._doubleHit.active=!0,this.hitNum++,this.hitTime=2,this._lab_hit_num.string=this.hitNum.toString(),cc.tween(this._doubleHit).to(0,{scaleX:0,scaleY:0}).to(.2,{scaleX:1.2,scaleY:1.2}).to(.1,{scaleX:1,scaleY:1}).start()},e.prototype.Boss_com=function(){var t=this;this._Boss.active=!0,cc.tween(this._Boss).repeat(5,cc.tween().to(.3,{opacity:0}).to(.3,{opacity:255})).call(function(){t._Boss.active=!1}).start()},e.prototype.clickBtnAttack=function(){h.default.instance.attackFun()},e.prototype.clickBtnSkill=function(){this.cool_state&&(this.cNowtime=0,this.cool_state=!1,h.default.instance.skillFun())},e.prototype.clickBtnSet=function(){s.default.playEffect(s.SfxType.kclick),this.GameStop=!0,this._set_inter.active=!0},e.prototype.clickBtnAgin=function(){s.default.playEffect(s.SfxType.kclick),lw.viewMgr.close(p.Game_inter.Game),lw.viewMgr.open(p.Game_inter.Start)},e.prototype.clickBtnBack=function(){s.default.playEffect(s.SfxType.kclick),lw.viewMgr.close(p.Game_inter.Game),lw.viewMgr.open(p.Game_inter.Start)},e.prototype.clickBtnConti=function(){s.default.playEffect(s.SfxType.kclick),this.GameStop=!1,this._set_inter.active=!1},e.prototype.isGameover=function(){this._lab_monNum.string="\u5269\u4f59\u654c\u4eba:    "+(n.instance.monsterArr.length-n.instance.diyMonsterArr.length),n.instance.monsterArr.length==n.instance.diyMonsterArr.length&&(n.instance.GameRank++,p.default.game_level.json[p.default.game_level.num-1].level_json.length>=n.instance.GameRank?lw.viewMgr.open(p.Game_inter.Buff):(lw.viewMgr.open(p.Game_inter.Video),n.instance.GameOver=!0))},e.prototype.reviInter=function(){this.GameStop=!0,this._ani_num.stop(),this._ani_num.play(),this._revive.active=!0},e.prototype.clickBtnReviveno=function(){this._revive.active&&this.reviveSucc(!1)},e.prototype.clickBtnRevive=function(){var t=this;s.default.playEffect(s.SfxType.kclick),d.default.instance.wacth_video(function(){t.reviveSucc(!0)})},e.prototype.reviveSucc=function(t){t?(this.GameStop=!1,this.GameOver=!1,this._revive.active=!1,h.default.instance.reviveSucc()):(this._revive.active=!1,l.default.stopGameRecord(),lw.viewMgr.open(p.Game_inter.Sett,!1))},e.prototype.isStop=function(){var t=!1;return(this.GameOver||this.GameStop)&&(t=!0),t},e.prototype.update=function(t){if(!this.isStop()){this.hitTime>0&&(this.hitTime-=t,this.hitTime<=0&&(this._doubleHit.active=!1,this.hitNum=0)),this._tipz.active=!1,this._tipy.active=!1;for(var e=0;e<this.monsterArr.length;e++)if(this.monsterArr[e].active){var n=this._UICamera.x-cc.winSize.width/2-30,o=this._UICamera.x+cc.winSize.width/2+30;this.monsterArr[e].x<n?this._tipz.active=!0:this.monsterArr[e].x>o&&(this._tipy.active=!0)}this.cool_state||(this.cNowtime+=t,this.cNowtime>=this.cool_time&&(this.cool_state=!0,this._sp_cool.fillRange=0),this._sp_cool.fillRange=1-this.cNowtime/this.cool_time);var i=this._rode.width/2-cc.winSize.width/2;h.default.instance.node.x<i&&h.default.instance.node.x>-i&&(this._UICamera.x=h.default.instance.node.x)}},e.instance=null,a([m("cc.Node"),r("design:type","function"==typeof(o="undefined"!=typeof cc&&cc.Node)?o:Object)],e.prototype,"_UICamera",void 0),a([m("cc.Sprite"),r("design:type","function"==typeof(y="undefined"!=typeof cc&&cc.Sprite)?y:Object)],e.prototype,"_sp_bg1",void 0),a([m("cc.Sprite"),r("design:type","function"==typeof(v="undefined"!=typeof cc&&cc.Sprite)?v:Object)],e.prototype,"_sp_bg2",void 0),a([m("cc.Sprite"),r("design:type","function"==typeof(g="undefined"!=typeof cc&&cc.Sprite)?g:Object)],e.prototype,"_sp_bg3",void 0),a([m("cc.Node"),r("design:type","function"==typeof(b="undefined"!=typeof cc&&cc.Node)?b:Object)],e.prototype,"_rode",void 0),a([m("cc.Node"),r("design:type","function"==typeof(A="undefined"!=typeof cc&&cc.Node)?A:Object)],e.prototype,"_player",void 0),a([m("cc.Node"),r("design:type","function"==typeof(P="undefined"!=typeof cc&&cc.Node)?P:Object)],e.prototype,"_monster",void 0),a([m("cc.Button"),r("design:type","function"==typeof(k="undefined"!=typeof cc&&cc.Button)?k:Object)],e.prototype,"_btn_attack",void 0),a([m("cc.Button"),r("design:type","function"==typeof(x="undefined"!=typeof cc&&cc.Button)?x:Object)],e.prototype,"_btn_skill",void 0),a([m("cc.Sprite"),r("design:type","function"==typeof(O="undefined"!=typeof cc&&cc.Sprite)?O:Object)],e.prototype,"_sp_cool",void 0),a([m("cc.Button"),r("design:type","function"==typeof(j="undefined"!=typeof cc&&cc.Button)?j:Object)],e.prototype,"_btn_set",void 0),a([m("cc.Label"),r("design:type","function"==typeof(M="undefined"!=typeof cc&&cc.Label)?M:Object)],e.prototype,"_lab_lenum",void 0),a([m("cc.Label"),r("design:type","function"==typeof(R="undefined"!=typeof cc&&cc.Label)?R:Object)],e.prototype,"_lab_monNum",void 0),a([m("cc.Node"),r("design:type","function"==typeof(w="undefined"!=typeof cc&&cc.Node)?w:Object)],e.prototype,"_tipy",void 0),a([m("cc.Node"),r("design:type","function"==typeof(B="undefined"!=typeof cc&&cc.Node)?B:Object)],e.prototype,"_tipz",void 0),a([m("cc.Node"),r("design:type","function"==typeof(E="undefined"!=typeof cc&&cc.Node)?E:Object)],e.prototype,"_start",void 0),a([m("cc.Node"),r("design:type","function"==typeof(N="undefined"!=typeof cc&&cc.Node)?N:Object)],e.prototype,"_Boss",void 0),a([m("cc.Node"),r("design:type","function"==typeof(S="undefined"!=typeof cc&&cc.Node)?S:Object)],e.prototype,"_doubleHit",void 0),a([m("cc.Label"),r("design:type","function"==typeof(C="undefined"!=typeof cc&&cc.Label)?C:Object)],e.prototype,"_lab_hit_num",void 0),a([m("cc.Node"),r("design:type","function"==typeof(D="undefined"!=typeof cc&&cc.Node)?D:Object)],e.prototype,"_set_inter",void 0),a([m("cc.Button"),r("design:type","function"==typeof(H="undefined"!=typeof cc&&cc.Button)?H:Object)],e.prototype,"_btn_agin",void 0),a([m("cc.Button"),r("design:type","function"==typeof(T="undefined"!=typeof cc&&cc.Button)?T:Object)],e.prototype,"_btn_back",void 0),a([m("cc.Button"),r("design:type","function"==typeof(F="undefined"!=typeof cc&&cc.Button)?F:Object)],e.prototype,"_btn_conti",void 0),a([m("cc.Node"),r("design:type","function"==typeof(G="undefined"!=typeof cc&&cc.Node)?G:Object)],e.prototype,"_revive",void 0),a([m("cc.Animation"),r("design:type","function"==typeof(L="undefined"!=typeof cc&&cc.Animation)?L:Object)],e.prototype,"_ani_num",void 0),a([m("cc.Button"),r("design:type","function"==typeof(X="undefined"!=typeof cc&&cc.Button)?X:Object)],e.prototype,"_btn_revive",void 0),a([m("cc.Button"),r("design:type","function"==typeof(I="undefined"!=typeof cc&&cc.Button)?I:Object)],e.prototype,"_btn_reviveno",void 0),n=a([_],e)}(lw.BaseView);n.default=v,cc._RF.pop()},{"../Apply/Apply":void 0,"../Apply/Data":void 0,"../Apply/Plat":void 0,"../Apply/PoolMgr":void 0,"../Apply/audio_mgr":void 0,"../Draw/Draw":void 0,"../Export/Export":void 0,"./script/player":"player"}],M_bull:[function(t,e,n){"use strict";cc._RF.push(e,"0fad9+tMEdGR5WuUp3mZlwU","M_bull");var o,i=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(n,"__esModule",{value:!0});var c=t("../Game"),s=t("./Attk"),p=t("./player"),l=cc._decorator,u=l.ccclass,f=l.property,d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mat=null,e.boss=null,e.attk=0,e.hitArr=null,e.attakRange={x:80,y:100},e.speed_x=20,e}var n,o;return i(e,t),e.prototype.init=function(t,e,n){this.mat.active=!1,this.boss.active=!1,this.attk=n,this.node.scaleX=-1,e>0&&(this.node.scaleX=1),"boss"==t?this.boss.active=!0:this.mat.active=!0},e.prototype.onEnable=function(){this.hitArr=null},e.prototype.update=function(){var t=(this.speed_x,this.node.scaleX);t=this.node.scaleX>0?1*this.speed_x:-1*this.speed_x,this.node.x+=t*c.default.instance.GameSpeed;var e=c.default.instance.sprRode.width/2;if(this.node.x>e||this.node.x<-e)return this.node.active=!1,c.default.instance.M_bullPool.put(this.node),void(this.node.parent=null);this.hitArr||c.default.instance.isStop()||s.default.isB_Attack(this.node,this.attakRange,p.default.instance.node)&&(this.hitArr=!0,p.default.instance.hit_(this.attk))},a([f(cc.Node),r("design:type","function"==typeof(n="undefined"!=typeof cc&&cc.Node)?n:Object)],e.prototype,"mat",void 0),a([f(cc.Node),r("design:type","function"==typeof(o="undefined"!=typeof cc&&cc.Node)?o:Object)],e.prototype,"boss",void 0),a([u],e)}(cc.Component);n.default=d,cc._RF.pop()},{"../Game":"Game","./Attk":"Attk","./player":"player"}],P_bull:[function(t,e,n){"use strict";cc._RF.push(e,"a8ae5eBD7VFFa64b0xVZMTx","P_bull");var o,i=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r};Object.defineProperty(n,"__esModule",{value:!0});var r=t("../../Apply/Apply"),c=t("../Game"),s=t("./Attk"),p=t("./player"),l=cc._decorator,u=l.ccclass,f=(l.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.hitArr=[],e.attakRange={x:50,y:120},e.speed_x=20,e}return i(e,t),e.prototype.init=function(t){this.node.scaleX=1,t>0&&(this.node.scaleX=-1)},e.prototype.onEnable=function(){this.hitArr=[]},e.prototype.update=function(){var t=(this.speed_x,this.node.scaleX);t=this.node.scaleX>0?1*this.speed_x:-1*this.speed_x,this.node.x+=t*c.default.instance.GameSpeed;var e=c.default.instance.sprRode.width/2;if(this.node.x>e||this.node.x<-e)return this.node.active=!1,c.default.instance.bullPool.put(this.node),void(this.node.parent=null);for(var n=0;n<c.default.instance.monsterArr.length;n++){var o=c.default.instance.monsterArr[n];if(!r.default.isEqual(o,this.hitArr)&&!o.getComponent("monster").lifeover&&s.default.isB_Attack(this.node,this.attakRange,o)){var i=r.default.randRange(p.default.instance._attr.ATTK_MIN,p.default.instance._attr.ATTK_MAX);o.getComponent("monster").hit_(i),this.hitArr.push(o),p.default.instance.MeteoriteState&&p.default.instance.mateRefresh(o)}}},a([u],e)}(cc.Component));n.default=f,cc._RF.pop()},{"../../Apply/Apply":void 0,"../Game":"Game","./Attk":"Attk","./player":"player"}],monster:[function(t,e,n){"use strict";cc._RF.push(e,"1767fR+tShMJaFdV5UZW65N","monster");var o,i=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(n,"__esModule",{value:!0});var c=t("../../Apply/Apply"),s=t("../../Apply/Data"),p=t("../Game"),l=t("./Attk"),u=t("./player"),f=cc._decorator,d=f.ccclass,h=f.property,y=[null,"run","jump",null,"hit","death","attack01","attack02","attack03"],_={x:100,y:200},m={x:400,y:200},v=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.drag=null,e.HPpro=null,e.effe=null,e._attr={max_HP:0,HP:100,AtkMin:50,AtkMax:70,Att_type:1},e.attakRange=null,e.isBoss=!1,e.hitState=!1,e.lifeover=!1,e.monX=0,e.stageNum=1,e.attkCool=!1,e.attnow=!1,e.skillTime=0,e}var n,o,f;return i(e,t),e.prototype.init=function(t){var e=this;this.isBoss=!1,this.attakRange=m,1==s.default.monster_data[t].attk_type&&(this.attakRange=_),"boos1"!=t&&"boos2"!=t||(this.isBoss=!0,lw.evtMgr.emit("Boss_com"));var n=s.default.monster_data[t],o=s.default.game_level.json[s.default.game_level.num-1].level_json[p.default.instance.GameRank-1].coef;this._attr.HP=n.HP*o,this._attr.max_HP=this._attr.HP,this._attr.AtkMin=n.AtkMin*o,this._attr.AtkMax=n.AtkMax*o,this._attr.Att_type=s.default.monster_data[t].attk_type,this.monX=n.move,this.playdragon(1,0);var i="Sprite/DragonBones/"+t;c.default.loadDragonBones(this.drag,"Game",i,function(){e.drag.armatureName="armatureName",e.playdragon(1,0)}),this.HPpro.progress=1,this.HPpro.node.getChildByName("lab").getComponent(cc.Label).string=Math.floor(this._attr.HP).toString(),this.stageNum=1,this.lifeover=!1},e.prototype.playdragon=function(t,e,n){var o=this;void 0===n&&(n=null);var i=y[t];this.drag.animationName!=i&&(i==y[1]&&(e=0),this.drag.playAnimation(i,e),this.drag.once(dragonBones.EventObject.COMPLETE,function(){if(n)n();else{if(o.lifeover)return;o.playdragon(1,0)}}),this.scheduleOnce(function(){if(o.isBoss)o.boosAttk(i);else if(i==y[7]&&1==o._attr.Att_type)if(l.default.isM_Attack(o.node,o.attakRange,u.default.instance.node)){o.stageNum++,o.attkCool=!0;var t=c.default.randRange(o._attr.AtkMin,o._attr.AtkMax);u.default.instance.hit_(t);var e=c.default.randRangeF(3,5);o.scheduleOnce(function(){o.attkCool=!1},e)}else o.attkCool=!1,o.stageNum--;else if(i==y[6]&&2==o._attr.Att_type){o.stageNum++,o.attkCool=!0;var n=c.default.randRange(o._attr.AtkMin,o._attr.AtkMax),a=cc.v2(o.node.x,o.node.y+80);p.default.instance.creatMBullet("mat",o.drag.node.scaleX,n,a),e=c.default.randRangeF(3,5),o.scheduleOnce(function(){o.attkCool=!1},e)}},.3))},e.prototype.boosAttk=function(t){var e=this;if(t==y[6])if(0==this.skillTime){this.stageNum++,this.attkCool=!0;var n=c.default.randRange(this._attr.AtkMin,this._attr.AtkMax),o=cc.v2(this.node.x,this.node.y);this.drag.node.scaleX>0?o.x+=150:o.x-=150,p.default.instance.creatMBullet("boss",this.drag.node.scaleX,n,o);var i=c.default.randRangeF(3,5);this.scheduleOnce(function(){e.attkCool=!1},i),this.skillTime=1e5,this.scheduleOnce(function(){e.skillTime=0},8)}else{var a={x:_.x+80,y:_.y};if(l.default.isM_Attack(this.node,a,u.default.instance.node)){this.stageNum++,this.attkCool=!0;var r=c.default.randRange(this._attr.AtkMin,this._attr.AtkMax);u.default.instance.hit_(r),i=c.default.randRangeF(3,5),this.scheduleOnce(function(){e.attkCool=!1},i)}else this.attkCool=!1,this.stageNum--}},e.prototype.hit_=function(t){var e=this,n=t;this.plHP(-n),lw.evtMgr.emit("double_Hit"),c.default.randRange(1,10)>5?this.effe.playAnimation("hit_1",1):this.effe.playAnimation("hit_2",1),this.lifeover||(this.hitState=!0,this.playdragon(4,1,function(){e.hitState=!1}))},e.prototype.plHP=function(t){var e=this;this._attr.HP+=t,this._attr.HP<=0&&(this._attr.HP=0,this.lifeover=!0,this.playdragon(5,1,function(){e.node.active=!1,e.node.parent=null,s.default.set.shock&&s.default.vibrateShort(),p.default.instance.diyMonsterArr.push(e.node),p.default.instance.monsterPool.put(e.node),p.default.instance.isGameover()})),this.HPpro.progress=this._attr.HP/this._attr.max_HP,this.HPpro.node.getChildByName("lab").getComponent(cc.Label).string=Math.floor(this._attr.HP).toString(),p.default.instance.hitLabinit(this.node,t)},e.prototype.update=function(){var t=this;if(!(p.default.instance.isStop()||this.lifeover||this.hitState||this.attnow))if(1==this.stageNum){if(this.isBoss){var e=_.x+80;if(0==this.skillTime&&(e=m.x),Math.abs(u.default.instance.node.x-this.node.x)<=e)return void this.stageNum++}else if(Math.abs(u.default.instance.node.x-this.node.x)<=this.attakRange.x)return void this.stageNum++;var n=1;u.default.instance.node.x<this.node.x&&(n=-1),this.drag.node.scaleX=n,this.node.x+=this.monX*n*p.default.instance.GameSpeed}else 2==this.stageNum?(this.attnow=!0,this.isBoss?this.playdragon(6,1):1==this._attr.Att_type?this.playdragon(7,1):this.playdragon(6,1),this.drag.once(dragonBones.EventObject.COMPLETE,function(){t.attnow=!1})):3==this.stageNum&&(this.attkCool?(n=1,u.default.instance.node.x<this.node.x&&(n=-1),this.drag.node.scaleX=n,this.node.x-=this.monX*n):(this.attkCool=!1,this.stageNum=1))},a([h(dragonBones.ArmatureDisplay),r("design:type","function"==typeof(n="undefined"!=typeof dragonBones&&dragonBones.ArmatureDisplay)?n:Object)],e.prototype,"drag",void 0),a([h(cc.ProgressBar),r("design:type","function"==typeof(o="undefined"!=typeof cc&&cc.ProgressBar)?o:Object)],e.prototype,"HPpro",void 0),a([h(dragonBones.ArmatureDisplay),r("design:type","function"==typeof(f="undefined"!=typeof dragonBones&&dragonBones.ArmatureDisplay)?f:Object)],e.prototype,"effe",void 0),a([d],e)}(cc.Component);n.default=v,cc._RF.pop()},{"../../Apply/Apply":void 0,"../../Apply/Data":void 0,"../Game":"Game","./Attk":"Attk","./player":"player"}],player:[function(t,e,n){"use strict";cc._RF.push(e,"24a9bx4QlZBbYqEnm/g7lC9","player");var o,i=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(n,"__esModule",{value:!0});var c=t("../../Apply/Apply"),s=t("../../Apply/audio_mgr"),p=t("../../Apply/Data"),l=t("../../Apply/PoolMgr"),u=t("../../Draw/Draw"),f=t("../Game"),d=t("./Attk"),h=[0,"run","jump","idle","hit","death","attack1","attack2","attack3","skill"],y=cc._decorator,_=y.ccclass,m=y.property,v=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.Rect=new cc.Rect(0,0,0,0),e.HPpro=null,e.DEFpro=null,e.Effe=null,e.hit=null,e.buff=null,e.metaPool=null,e.metaPre=null,e.jump_max=20,e.jump_num=1,e.jump_speed=0,e.gravity_max=1,e.gravity=1,e.run_speed=5,e.dire=0,e._attr={max_HP:0,HP:100,ATTK_MIN:100,ATTK_MAX:100,DEF:100,BUFF:[]},e.revive_num=0,e.Dragon=null,e.dragNode=null,e.nowPlActive=null,e.hitState=!1,e.hitTIme=0,e.invin=!1,e.DEF_num=0,e.DEFMAX_num=0,e.attack_num=1,e.atta_state=!1,e.attaCool=!1,e.attakRange=[{x:200,y:200},{x:170,y:300},{x:350,y:300}],e.buffArg={maxHP:200,HP:400,attk:30,def:500,mete:0,shie:0},e.MeteoriteState=!1,e}var n,o,y,v,g,b,A,P;return i(e,t),n=e,e.prototype.onLoad=function(){n.instance=this;var t=u.default.instance.dragFun;this.dragNode=this.node.getChildByName("drag").getChildByName("drag"),t.parent=this.dragNode,t.zIndex=this.dragNode.getChildByName("effe").zIndex-1,t.scaleX=.5,t.scaleY=.5,this.Dragon=t.getComponent(dragonBones.ArmatureDisplay),this.playdragon(3,0),this.attInit(),this.metaPool=new l.default(this.metaPre,10)},e.prototype.attInit=function(){var t=this,e=p.default.warehouse[201];this._attr.HP=e.HP.num,this._attr.max_HP=e.HP.num,this._attr.ATTK_MIN=e.ATTK.num_min,this._attr.ATTK_MAX=e.ATTK.num_max,this._attr.DEF=e.DEF.num,this.Dragon.off(dragonBones.EventObject.COMPLETE),this.Dragon.on(dragonBones.EventObject.COMPLETE,function(){t.nowPlActive==h[6]||t.nowPlActive==h[7]||t.nowPlActive==h[8]||t.nowPlActive==h[9]?(t.atta_state=!1,t.attack_num=1):t.nowPlActive==h[4]?(t.atta_state=!1,t.attack_num=1):t.nowPlActive==h[9]&&(t.atta_state=!1),f.default.instance.isStop()||(0!=t.dire?t.playdragon(1,0):t.playdragon(3,0))}),this.Dragon.removeEventListener(dragonBones.EventObject.FRAME_EVENT),this.Dragon.addEventListener(dragonBones.EventObject.FRAME_EVENT,function(e){"attk1"==e.name?t.displayEffec(1):"attk2"==e.name?t.displayEffec(2):"attk3"==e.name?t.displayEffec(3):"skill"==e.name&&f.default.instance.creatBullet(t.dragNode.scaleX)}),this.HPpro.progress=1,this.HPpro.node.getChildByName("lab").getComponent(cc.Label).string=Math.ceil(this._attr.HP).toString(),this.DEFpro.node.active=!1,this.buff.node.active=!1},e.prototype.start=function(){},e.prototype.playdragon=function(t,e,n){void 0===n&&(n=null);var o=h[t];if(this.Dragon.animationName!=o){if(this.atta_state&&(o==h[1]||o==h[2]||o==h[3]))return;this.Dragon.animationName=o,o==h[1]&&(e=0),9==t&&this.displayEffec(4),this.Dragon.playAnimation(o,e),this.nowPlActive=o,this.Dragon.once(dragonBones.EventObject.COMPLETE,function(){n&&n()})}},e.prototype.hit_=function(t){this.atta_state=!1,this.attack_num=1;var e=t-this._attr.DEF;e<=0&&(e=1),this.plHP(-e),f.default.instance.isStop()||(this.hit.playAnimation("hit",1),this.hitState=!0,this.hitTIme=.5,this.playdragon(4,1))},e.prototype.plHP=function(t){this.DEF_num>0&&t<0?(this.DEF_num+=t,this.DEFpro.progress=this.DEF_num/this.DEFMAX_num,this.DEFpro.node.getChildByName("lab").getComponent(cc.Label).string=Math.floor(this.DEF_num).toString(),this.DEF_num<=0&&(this.DEFpro.node.active=!1,this.buff.node.active=!1,this._attr.HP+=this.DEF_num)):this._attr.HP+=t,t<0&&s.default.playEffect(s.SfxType.khit),this._attr.HP<=0&&(this._attr.HP=0,this.revive_num>0?(this.reviveSucc(),this.revive_num=0):(f.default.instance.GameOver=!0,this.playdragon(5,1,function(){f.default.instance.reviInter()}))),this._attr.HP>=this._attr.max_HP&&(this._attr.HP=this._attr.max_HP),f.default.instance.hitLabinit(this.node,t),this.HPpro.progress=this._attr.HP/this._attr.max_HP,this.HPpro.node.getChildByName("lab").getComponent(cc.Label).string=Math.ceil(this._attr.HP).toString()},e.prototype.reviveSucc=function(){var t=this;this._attr.HP=this._attr.max_HP,this.invin=!0,this.dragNode.opacity=150,this.scheduleOnce(function(){t.invin=!1,t.dragNode.opacity=255},2),this.HPpro.progress=this._attr.HP/this._attr.max_HP,this.HPpro.node.getChildByName("lab").getComponent(cc.Label).string=Math.ceil(this._attr.HP).toString(),this.playdragon(3,0)},e.prototype.plDEF=function(t){this.DEFpro.node.active=!0,this.DEF_num=t,this.DEFMAX_num=t,this.DEFpro.progress=1,this.DEFpro.node.getChildByName("lab").getComponent(cc.Label).string=Math.ceil(this.DEF_num).toString()},e.prototype.attackFun=function(){var t=this;f.default.instance.isStop()||this.attaCool||(this.attaCool=!0,this.scheduleOnce(function(){t.attaCool=!1},.3),this.atta_state=!0,s.default.playEffect(s.SfxType.kattack2),this.playdragon(this.attack_num+5,1),this.attack_num++,this.attack_num>3&&(this.attack_num=1))},e.prototype.displayEffec=function(t){if(this.Effe.playAnimation([null,"attack_001","attack_002","attack_003","skill","skill_fly","hit_2"][t],1),this.Effe.node.x=[null,{x:-40,y:90},{x:-90,y:90},{x:-150,y:115},{x:-40,y:0}][t].x,this.Effe.node.y=0,4!=t&&(1==t||2==t||3==t))for(var e=0;e<f.default.instance.monsterArr.length;e++){var n=f.default.instance.monsterArr[e];if(!n.getComponent("monster").lifeover){var o;if(o=2==this.attack_num?this.attakRange[0]:3==this.attack_num?this.attakRange[1]:this.attakRange[2],d.default.isP_Attack(this.node,o,n)){var i=c.default.randRange(this._attr.ATTK_MIN,this._attr.ATTK_MAX);n.getComponent("monster").hit_(i),this.MeteoriteState&&this.mateRefresh(n)}}}},e.prototype.mateRefresh=function(t){var e=this;if(c.default.randRange(1,100)<40){var n=this.metaPool.get(),o={x:n.width,y:n.height};n.active=!0,n.x=t.x,n.y=t.y;var i=n.getComponent(dragonBones.ArmatureDisplay);i.playAnimation("newAnimation",1),this.scheduleOnce(function(){for(var t=0;t<f.default.instance.monsterArr.length;t++){var i=f.default.instance.monsterArr[t];i.getComponent("monster").lifeover||d.default.isB_Attack(n,o,i)&&i.getComponent("monster").hit_(e.buffArg.mete)}},.4),i.off(dragonBones.EventObject.COMPLETE),i.on(dragonBones.EventObject.COMPLETE,function(){n.parent=null,n.active=!1,e.metaPool.put(n)}),this.node.parent.addChild(n)}},e.prototype.skillFun=function(){f.default.instance.isStop()||(this.atta_state=!0,this.playdragon(9,1))},e.prototype.update=function(t){if(!f.default.instance.isStop()){if(this.hitState)return this.hitTIme-=t,void(this.hitTIme<=0&&(this.hitState=!1));var e=this.run_speed*this.dire*f.default.instance.GameSpeed;this.changSca(e),this.setPos(this.node.x+e,null),this.decline()}},e.prototype.jumpFun=function(){this.jump_num>0&&(this.jump_speed=this.jump_max,this.jump_num--,this.playdragon(2,1))},e.prototype.collision=function(){},e.prototype.changSca=function(t){var e=this.dragNode.scaleX,n=Math.abs(this.dragNode.scaleX);t>0&&e>0?this.dragNode.scaleX=-1*n:t<0&&e<0&&(this.dragNode.scaleX=1*n)},e.prototype.stopMove=function(){this.dire=0,this.playdragon(3,0)},e.prototype.setPos=function(t,e){void 0===t&&(t=null),void 0===e&&(e=null);var n=f.default.instance.sprRode;if(null!=t){var o=n.width/2-this.Rect.width/2;t>-o&&t<o&&(this.node.x=t)}if(e){var i=f.default.instance.minY;e<i?(e=i,this.jump_num=1,this.jump_speed=0,0!=this.dire&&this.playdragon(1,0)):this.node.y=e}},e.prototype.decline=function(){this.node.y<=f.default.instance.minY?this.node.y=f.default.instance.minY:(this.setPos(null,this.node.y+this.jump_speed),this.jump_speed-=this.gravity*f.default.instance.GameSpeed,this.jump_speed<=-30&&(this.jump_speed=-30))},e.prototype.initBuff=function(t){this.buffArg.maxHP=t.maxHP,this.buffArg.HP=t.HP,this.buffArg.attk=t.attk,this.buffArg.def=t.def,this.buffArg.shie=t.shie,this.buffArg.mete=t.mete},e.prototype.getBuff=function(t){var e=this;console.log(t);var n=function(t){e.buff.node.active=!0,e.buff.playAnimation(t,0),cc.tween(e.buff.node).delay(3).call(function(){e.buff.node.active=!1}).start()};1==t?(this._attr.max_HP+=this.buffArg.maxHP,this.plHP(this.buffArg.maxHP),n("jiaxue")):2==t?(this.plHP(this.buffArg.HP),n("jiaxue")):3==t?(this._attr.ATTK_MIN+=this.buffArg.attk,this._attr.ATTK_MAX+=this.buffArg.attk):4==t?this.revive_num=1:5==t?this._attr.DEF+=this.buffArg.def:6==t?this.MeteoriteState=!0:7==t&&this.plDEF(this.buffArg.shie)},e.instance=null,a([m({displayName:"\u77e9\u5f62\u6846",tooltip:"\u81ea\u8eab\u7684\u78b0\u649e\u7ea6\u675f\u6846"}),r("design:type","function"==typeof(o="undefined"!=typeof cc&&cc.Rect)?o:Object)],e.prototype,"Rect",void 0),a([m(cc.ProgressBar),r("design:type","function"==typeof(y="undefined"!=typeof cc&&cc.ProgressBar)?y:Object)],e.prototype,"HPpro",void 0),a([m(cc.ProgressBar),r("design:type","function"==typeof(v="undefined"!=typeof cc&&cc.ProgressBar)?v:Object)],e.prototype,"DEFpro",void 0),a([m(dragonBones.ArmatureDisplay),r("design:type","function"==typeof(g="undefined"!=typeof dragonBones&&dragonBones.ArmatureDisplay)?g:Object)],e.prototype,"Effe",void 0),a([m(dragonBones.ArmatureDisplay),r("design:type","function"==typeof(b="undefined"!=typeof dragonBones&&dragonBones.ArmatureDisplay)?b:Object)],e.prototype,"hit",void 0),a([m(dragonBones.ArmatureDisplay),r("design:type","function"==typeof(A="undefined"!=typeof dragonBones&&dragonBones.ArmatureDisplay)?A:Object)],e.prototype,"buff",void 0),a([m(cc.Prefab),r("design:type","function"==typeof(P="undefined"!=typeof cc&&cc.Prefab)?P:Object)],e.prototype,"metaPre",void 0),n=a([_],e)}(cc.Component);n.default=v,cc._RF.pop()},{"../../Apply/Apply":void 0,"../../Apply/Data":void 0,"../../Apply/PoolMgr":void 0,"../../Apply/audio_mgr":void 0,"../../Draw/Draw":void 0,"../Game":"Game","./Attk":"Attk"}],remote:[function(t,e,n){"use strict";cc._RF.push(e,"0f5f7fSh31MkITMehJ69U2I","remote");var o,i=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(n,"__esModule",{value:!0});var c=t("../../Apply/Apply"),s=t("../Game"),p=t("./player"),l=cc._decorator,u=l.ccclass,f=l.property,d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.remote=null,e}var n;return i(e,t),e.prototype.onLoad=function(){this._initEvent()},e.prototype._initEvent=function(){var t=this;this.remote.parent.on(cc.Node.EventType.TOUCH_START,function(e){if(!s.default.instance.isStop()){var n=cc.v2(e.getLocation().x,e.getLocation().y),o=c.default.worldConvertLocalPointAR(t.remote.parent,n);t.remote.position=o,t.playerMove(o),p.default.instance.playdragon(1,0)}}),this.remote.parent.on(cc.Node.EventType.TOUCH_MOVE,function(e){if(!s.default.instance.isStop()){var n=cc.v2(e.getLocation().x,e.getLocation().y),o=c.default.worldConvertLocalPointAR(t.remote.parent,n),i=cc.v3(0,0,0);if(t.compR(o.x,o.y)<=t.remote.parent.width/2)i.x=o.x,i.y=o.y;else{var a=t.remote.parent.width/2/Math.sqrt(Math.pow(o.x,2)+Math.pow(o.y,2));i.x=o.x*a,i.y=o.y*a}t.remote.position=i,t.playerMove(i)}}),this.remote.parent.on(cc.Node.EventType.TOUCH_END,function(){s.default.instance.isStop()||(t.remote.position=cc.v3(0,0,0),p.default.instance.stopMove())}),this.remote.parent.on(cc.Node.EventType.TOUCH_CANCEL,function(){s.default.instance.isStop()||(t.remote.position=cc.v3(0,0,0),p.default.instance.stopMove())})},e.prototype.playerMove=function(t){t.x>0?p.default.instance.dire=1:t.x<0&&(p.default.instance.dire=-1),t.y>30&&p.default.instance.jumpFun()},e.prototype.compR=function(t,e){return Math.sqrt(Math.pow(t,2)+Math.pow(e,2))},a([f(cc.Node),r("design:type","function"==typeof(n="undefined"!=typeof cc&&cc.Node)?n:Object)],e.prototype,"remote",void 0),a([u],e)}(cc.Component);n.default=d,cc._RF.pop()},{"../../Apply/Apply":void 0,"../Game":"Game","./player":"player"}]},{},["Game","Attk","M_bull","P_bull","monster","player","remote"]);