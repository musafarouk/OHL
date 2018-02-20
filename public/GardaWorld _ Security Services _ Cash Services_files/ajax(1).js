(function($,window,Drupal,drupalSettings){Drupal.Ajax.prototype.findGlyphicon=function(element){return $(element).closest('.form-item').find('.ajax-progress.glyphicon')};Drupal.Ajax.prototype.glyphiconStart=function(element,message){var $glyphicon=this.findGlyphicon(element);if($glyphicon[0]){$glyphicon.addClass('glyphicon-spin');if(drupalSettings.bootstrap.tooltip_enabled){$glyphicon.removeAttr('data-toggle').removeAttr('data-original-title').removeAttr('title').tooltip('destroy');if(message){$glyphicon.attr('data-toggle','tooltip').attr('title',message).tooltip();}}
if(message){$glyphicon.parent().append('<div class="sr-only message">'+ message+'</div>');}}
return $glyphicon;};Drupal.Ajax.prototype.glyphiconStop=function(element){var $glyphicon=this.findGlyphicon(element);if($glyphicon[0]){$glyphicon.removeClass('glyphicon-spin');if(drupalSettings.bootstrap.tooltip_enabled){$glyphicon.removeAttr('data-toggle').removeAttr('data-original-title').removeAttr('title').tooltip('destroy');}}};Drupal.Ajax.prototype.setProgressIndicatorThrobber=function(){var $element=$(this.element);var $glyphicon=this.glyphiconStart($element,this.progress.message);if($glyphicon[0]){this.progress.element=$glyphicon.parent();this.progress.glyphicon=true;return;}
if(!this.progress.element){this.progress.element=$(Drupal.theme('ajaxThrobber'));}
if(this.progress.message){this.progress.element.after('<div class="message">'+ this.progress.message+'</div>');}
if($element.is('input')){$element.after(this.progress.element);}
else{$element.append(this.progress.element);}};Drupal.Ajax.prototype.success=function(response,status){if(this.progress.element){if(this.progress.glyphicon){this.glyphiconStop(this.progress.element);}
else{this.progress.element.remove();}
this.progress.element.parent().find('.message').remove();}
if(this.progress.object){this.progress.object.stopMonitoring();}
$(this.element).prop('disabled',false);var elementParents=$(this.element).parents('[data-drupal-selector]').addBack().toArray();var focusChanged=false;for(var i in response){if(response.hasOwnProperty(i)&&response[i].command&&this.commands[response[i].command]){this.commands[response[i].command](this,response[i],status);if(response[i].command==='invoke'&&response[i].method==='focus'){focusChanged=true;}}}
if(!focusChanged&&this.element&&!$(this.element).data('disable-refocus')){var target=false;for(var n=elementParents.length- 1;!target&&n>0;n--){target=document.querySelector('[data-drupal-selector="'+ elementParents[n].getAttribute('data-drupal-selector')+'"]');}
if(target){$(target).trigger('focus');}}
if(this.$form){var settings=this.settings||drupalSettings;Drupal.attachBehaviors(this.$form.get(0),settings);}
this.settings=null;};})(jQuery,this,Drupal,drupalSettings);