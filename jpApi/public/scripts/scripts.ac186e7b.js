"use strict";angular.module("jpApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/jobs",{templateUrl:"views/jobs.html",controller:"JobsCtrl",controllerAs:"jobs"}).otherwise({redirectTo:"/"})}]),angular.module("jpApp",[]).controller("MainCtrl",function(){}),angular.module("jpApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("jpApp").controller("JobsCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("jpApp",[]).service("modalService",["$q","$compile",function(a,b){return{modal:function(c,d,e,f,g){var h="",i=a.defer();return h+='<div id="modal" class="modal fade" tabindex="-1" role="dialog">',h+='<div class="modal-dialog '+("small"===c?"modal-sm":"large "===c?"modal-lg":"")+'" role="document">',h+='<div class="modal-content">',h+='<div class="modal-header">',h+='<button type="button" class="close" data-dismiss="modal" aria-label="Close" ng-click="closeModal($event)"><span aria-hidden="true">&times;</span></button>',h+='<h4 class="modal-title">'+d+"</h4>",h+="</div>",h+='<div class="modal-body">'+e+"</div>",h+=f?'<div class="modal-footer">'+f+"</div>":"",h+="</div>",h+="</div>",h+="</div>",angular.element("body").append(b(h)(g)),i.resolve(h),angular.element("#modal").modal("show").on("hidden.bs.modal",function(){this.remove()}),i.promise}}}]),angular.module("jpApp").controller("UserCtrl",["$scope","modalService","elements","validation","auth",function(a,b,c,d,e){a.signIn=function(){var d="small",e="Login",f="",g=c.button({type:"submit",cls:"btn-primary btn-lg btn-block",ngClick:"login($event)"},"Login");f+="<form>",f+='<div class="row form-group">',f+=c.column(12,c.form.inputGroup(c.glyph("user"),{type:"email",cls:"input-lg",placeholder:"Email",model:"",name:"email",required:!0})),f+="</div>",f+='<div class="row form-group">',f+=c.column(12,c.form.inputGroup(c.glyph("lock"),{type:"password",cls:"input-lg",placeholder:"Password",model:"",name:"password",required:!0})),f+="</div>",f+="</form>",b.modal(d,e,f,g,a).then(function(a){console.log(a)})},a.login=function(a){a.preventDefault();var b=angular.element(a.currentTarget).parents()[1],c=angular.element(b).find("form");d.validate(c).then(function(a){angular.element(".spinner").remove(),a.valid?e.authenticate(c.serializeArray()).then(function(a){console.log("Authentication Result",a)}):console.log(a)})},a.closeModal=function(a){console.log("Modal Close Event",a),angular.element("#modal").modal("hide")}}]),angular.module("jpApp").factory("elements",function(){return{column:function(a,b){var c="";return"number"==typeof a?(c+='<div class="col-md-'+a+'">',c+=b,c+="</div>"):(c+='<div class="col-md-'+a[0]+" col-xs-"+a[1]+'">',c+=b,c+="</div>")},button:function(a,b){var c="";return c+='<button class="btn '+a.cls+'"',c+=a.type?'type="'+a.type+'"':"",c+=a.ngClick?'ng-click="'+a.ngClick+'">':">",c+=b,c+="</button>"},form:{input:function(a){var b="";return b+='<input type="'+a.type+'"',b+='class="form-control '+a.cls+'"',b+=a.id?' id="'+a.id+'"':"",b+=' placeholder="'+a.placeholder+'"',b+=a.model?' ng-model="'+a.model+'"':"",b+=a.name?' name="'+a.name+'"':"",b+=a.required?' data-required="true"':"",b+=">"},inputGroup:function(a,b){var c="",d=this;return c+='<div class="input-group">',c+='<span class="input-group-addon">'+a+"</span>",c+=d.input(b),c+="</div>"}},glyph:function(a){var b="";return b+='<span class="glyphicon glyphicon-'+a+'" aria-hidden="true"></span>'}}}),angular.module("jpApp").service("validation",["$q",function(a){return{validate:function(b){var c=a.defer(),d=[],e=angular.element(b),f=0,g=e.find("input").length;return e.find("input").each(function(){var a=angular.element(this);a[0].dataset.required?a.val()?(a.parent().removeClass("has-success").removeClass("has-error").addClass("has-success"),d.push({name:a[0].name,value:a.val(),validated:!0}),f++):(a.parent().removeClass("has-success").removeClass("has-error").addClass("has-error"),d.push({name:a[0].name,value:a.val(),validated:!1})):(a.parent().removeClass("has-error").addClass("has-success"),d.push({name:a[0].name,value:a.val(),validated:!0}))}),console.log("Form Object",f,g),f===g?c.resolve({valid:!0,form:b}):c.resolve({valid:!1,form:b}),c.promise}}}]),angular.module("jpApp").service("auth",["$q","$http",function(a,b){return{authenticate:function(c){var d=a.defer();return console.log("Form Object",c),b.post("/api/authenticate",c).then(function(a){console.log(a),d.resolve(a)},function(a){console.log(a),d.resolve(a)}),d.promise}}}]),angular.module("jpApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/jobs.html",'<main class="container-fluid" ng-controller="JobsCtrl"> <div class="row"> <aside class="sidebar col-md-3"> </aside> <section id="jobs" class="main col-md-9"> <p>This is a jobs view</p> </section> </div> </main><!-- /.container -->'),a.put("views/main.html",'<main class="container-fluid" ng-controller="MainCtrl"> <div class="row"> <section id="home" class="col-md-8 center-block"> <form class="valign"> <div class="row"> <div class="col-md-5"> <div class="form-group"> <input type="text" class="form-control input-lg" id="job-title" placeholder="Job Title"> </div> </div> <div class="col-md-5"> <div class="form-group"> <input type="text" class="form-control input-lg" id="job-location" placeholder="Location"> </div> </div> <div class="col-md-2"> <button class="btn btn-primary btn-block btn-lg" type="submit">Find Jobs</button> </div> </div> </form> </section> </div> </main><!-- /.container -->')}]);