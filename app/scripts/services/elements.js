'use strict';

/**
 * @ngdoc service
 * @name jpApp.elements
 * @description
 * # elements
 * Factory in the jpApp.
 */
angular.module('jpApp')
  .factory('elements', function () {
    return {
		column	:	function(num,body){
			var str=	'';
			if( typeof num ===	'number'){
				str	+=	'<div class="col-md-'+num+'">';
				str	+=		body;
				str	+=	'</div>';
				
				return str;
			}else{
				str	+=	'<div class="col-md-'+num[0]+' col-xs-'+num[1]+'">';
				str	+=		body;
				str	+=	'</div>';
				
				return str;
			}
		},
		button	:	function(object,body){
			var str	=	'';
			
			str	+=	'<button class="btn '+object.cls+'"';
			str	+=		object.type		?	'type="'+object.type+'"'	:	'';
			str	+=		object.ngClick	?	'ng-click="'+object.ngClick+'">'	:	'>';
			str	+=		body;
			str	+=	'</button>';
			
			return str;
		},
		form	:	{
			
			input	:	function(object){
				var	str	=	'';
				
				str	+=	'<input type="'+object.type+'"';
				str	+=	'class="form-control '+object.cls+'"';
				str	+=	object.id	?	' id="'+object.id+'"'	:	'';
				str	+=	' placeholder="'+object.placeholder+'"';
				str	+=	object.model	?	' ng-model="'+object.model+'"'	:	'';
				str	+=	object.name	?	' name="'+object.name+'"'	:	'';
				str	+=	object.required	?	' data-required="true"'	:	'';
				str	+=	'>';
			
				return str;
			},
			
			inputGroup	:	function(icon,object){
				var str		=	'',
					self	=	this;
				
				str	+=	'<div class="input-group">';
				str	+=		'<span class="input-group-addon">'+icon+'</span>';
				str	+=		self.input(object);
				str	+=	'</div>';
				
				return str;
			}
		},
		
		glyph	:	function(type){
			var str	=	'';
			
			str	+=	'<span class="glyphicon glyphicon-'+type+'" aria-hidden="true"></span>';

			return str;
		}
    };
  });
