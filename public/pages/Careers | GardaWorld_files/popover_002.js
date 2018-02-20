var Drupal=Drupal||{};(function($,Drupal,Bootstrap){"use strict";Bootstrap.extendPlugin('popover',function(settings){return{DEFAULTS:{animation:!!settings.popover_animation,enabled:settings.popover_enabled,html:!!settings.popover_html,placement:settings.popover_placement,selector:settings.popover_selector,trigger:settings.popover_trigger,triggerAutoclose:!!settings.popover_trigger_autoclose,title:settings.popover_title,content:settings.popover_content,delay:parseInt(settings.popover_delay,10),container:settings.popover_container}};});Drupal.behaviors.bootstrapPopovers={attach:function(context){if(!$.fn.popover||!$.fn.popover.Constructor.DEFAULTS.enabled){return;}
if($.fn.popover.Constructor.DEFAULTS.triggerAutoclose){var $currentPopover=null;$(document).on('show.bs.popover','[data-toggle=popover]',function(){var $trigger=$(this);var popover=$trigger.data('bs.popover');if(popover.options.originalTrigger==='click'){if($currentPopover&&!$currentPopover.is($trigger)){$currentPopover.popover('hide');}
$currentPopover=$trigger;}}).on('click',function(e){var $target=$(e.target);var popover=$target.is('[data-toggle=popover]')&&$target.data('bs.popover');if($currentPopover&&!$target.is('[data-toggle=popover]')&&!$target.closest('.popover.in')[0]){$currentPopover.popover('hide');$currentPopover=null;}});}
var elements=$(context).find('[data-toggle=popover]').toArray();for(var i=0;i<elements.length;i++){var $element=$(elements[i]);var options=$.extend({},$.fn.popover.Constructor.DEFAULTS,$element.data());options.originalTrigger=options.trigger;if(options.trigger==='click'){options.trigger='manual';}
var $target=$(options.target||$element.is('a[href^="#"]')&&$element.attr('href')).clone();if(!options.content&&$target[0]){$target.removeClass('visually-hidden hidden').removeAttr('aria-hidden');options.content=$target.wrap('<div/>').parent()[options.html?'html':'text']()||'';}
$element.popover(options);if(options.originalTrigger==='click'){$element.off('click.drupal.bootstrap.popover').on('click.drupal.bootstrap.popover',function(e){$(this).popover('toggle');e.preventDefault();e.stopPropagation();});}}},detach:function(context){if(!$.fn.popover||!$.fn.popover.Constructor.DEFAULTS.enabled){return;}
$(context).find('[data-toggle="popover"]').off('click.drupal.bootstrap.popover').popover('destroy');}};})(window.jQuery,window.Drupal,window.Drupal.bootstrap);