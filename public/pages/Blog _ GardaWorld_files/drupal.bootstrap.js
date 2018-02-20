(function($,Drupal,drupalSettings){'use strict';Drupal.bootstrap={settings:drupalSettings.bootstrap||{}};Drupal.bootstrap.checkPlain=function(str){return str&&Drupal.checkPlain(str)||'';};Drupal.bootstrap.extendPlugin=function(id,callback){if(!$.fn[id]||!$.fn[id].Constructor)return false;if($.isFunction(callback)){var ret=callback.apply($.fn[id].Constructor,[this.settings]);if($.isPlainObject(ret)){$.extend(true,$.fn[id].Constructor,ret);}}
if($.fn[id].Constructor.prototype.option===void(0)){$.fn[id].Constructor.prototype.option=this.option;}
return $.fn[id].Constructor;};Drupal.bootstrap.replacePlugin=function(id,callback){if(!$.fn[id]||!$.fn[id].Constructor||!$.isFunction(callback))return false;var constructor=$.fn[id].Constructor;var plugin=callback.apply(constructor);if($.isFunction(plugin)){plugin.Constructor=constructor;var old=$.fn[id];plugin.noConflict=function(){$.fn[id]=old;return this;};$.fn[id]=plugin;}};Drupal.bootstrap.eventMap={Event:/^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,MouseEvent:/^(?:click|dblclick|mouse(?:down|enter|leave|up|over|move|out))$/,KeyboardEvent:/^(?:key(?:down|press|up))$/,TouchEvent:/^(?:touch(?:start|end|move|cancel))$/};Drupal.bootstrap.simulate=function(element,type,options){if(typeof $.simulate==='function'){new $.simulate(element,type,options);return;}
var event;var ctor;for(var name in Drupal.bootstrap.eventMap){if(Drupal.bootstrap.eventMap[name].test(type)){ctor=name;break;}}
if(!ctor){throw new SyntaxError('Only rudimentary HTMLEvents, KeyboardEvents and MouseEvents are supported: '+ type);}
var opts={bubbles:true,cancelable:true};if(ctor==='KeyboardEvent'||ctor==='MouseEvent'){$.extend(opts,{ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1});}
if(ctor==='MouseEvent'){$.extend(opts,{button:0,pointerX:0,pointerY:0,view:window});}
if(options){$.extend(opts,options);}
if(typeof window[ctor]==='function'){event=new window[ctor](type,opts);element.dispatchEvent(event);}
else if(document.createEvent){event=document.createEvent(ctor);event.initEvent(type,opts.bubbles,opts.cancelable);element.dispatchEvent(event);}
else if(typeof element.fireEvent==='function'){event=$.extend(document.createEventObject(),opts);element.fireEvent('on'+ type,event);}
else if(typeof element[type]){element[type]();}};Drupal.bootstrap.option=function(key,value){var options=key;var parts,curOption,i;if(arguments.length===0){return $.extend({},this.options);}
if(typeof key==="string"){options={};parts=key.split(".");key=parts.shift();if(parts.length){curOption=options[key]=$.extend({},this.options[key]);for(i=0;i<parts.length- 1;i++){curOption[parts[i]]=curOption[parts[i]]||{};curOption=curOption[parts[i]];}
key=parts.pop();if(arguments.length===1){return curOption[key]===undefined?null:curOption[key];}
curOption[key]=value;}
else{if(arguments.length===1){return this.options[key]===undefined?null:this.options[key];}
options[key]=value;}}
for(key in options){if(!options.hasOwnProperty(key))continue;this.options[key]=options[key];}
return this;};})(window.jQuery,window.Drupal,window.drupalSettings);