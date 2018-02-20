(function($,Drupal){var $invoicesFieldset,$invoicesTotals,$paymentForm,$counter;Drupal.behaviors.gardaPayments={attach:function(context){$paymentForm=$('form.garda-payment-form');if($paymentForm.length===0)return;$invoicesFieldset=$('.invoices-fieldset .panel-body');$counter=$paymentForm.find('.invoices-counter');if($counter.length===0){$counter=$('<div class="invoices-counter"/>').append('<div class="total">TOTAL : </div>').append('<div class="amount">0.00</div>').appendTo($invoicesFieldset);}
count();$(document).once('gardaPayment').on('keyup',"input[name^='invoices'][name$='[total]']",Drupal.debounce(count,50));$paymentForm.find(":input").inputmask();$paymentForm.find(".payment-cardexpire").inputmask("option",{onUnMask:function(maskedValue,unmaskedValue){return unmaskedValue.substr(0,2)+ unmaskedValue.substr(4);}});}}
function count(){console.log("count");$invoicesTotals=$("input[name^='invoices']").filter("input[name$='[total]']");var amounts=$invoicesTotals.map(function(){var value=this.inputmask?this.inputmask.unmaskedvalue():0;if(value=="")
value=0;return value;}).toArray();var total=amounts.reduce(function(count,value){return count+ value;},0);$counter.find('.amount').text("$"+ total.toFixed(2)+" CAD");}})(jQuery,Drupal);if(!Array.prototype.reduce){Object.defineProperty(Array.prototype,'reduce',{value:function(callback){if(this===null){throw new TypeError('Array.prototype.reduce called on null or undefined');}
if(typeof callback!=='function'){throw new TypeError(callback+' is not a function');}
var o=Object(this);var len=o.length>>>0;var k=0;var value;if(arguments.length==2){value=arguments[1];}else{while(k<len&&!(k in o)){k++;}
if(k>=len){throw new TypeError('Reduce of empty array with no initial value');}
value=o[k++];}
while(k<len){if(k in o){value=callback(value,o[k],k,o);}
k++;}
return value;}});}