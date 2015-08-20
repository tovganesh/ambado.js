/**
 * ambado.js - simple experimental webapp framework
 * (c) V. Ganesh, http://www.tovganesh.in
 * 
 * License: MIT License
 * v 0.0.1
 * 
 * Uses: basket.js, jQuery, AngularJS, Bootstrap
 */

basket.require(
  { url: 'css/bootstrap.min.css', execute: false },
  { url: 'css/bootstrap-theme.min.css', execute: false },
  { url: 'js/jquery.js' },
  { url: 'js/bootstrap.min.js' }
).then(function() {
   $('head').append( $('<style type="text/css" />').append(basket.get('css/bootstrap.min.css').data) );
   $('head').append( $('<style type="text/css" />').append(basket.get('css/bootstrap-theme.min.css').data) );
 }
);

(
 function(window, document) {

   window.ambado = {
     _handler: function(handlerType) { 
        var theHandlers = { 
                    content: this._uiHandler_Content,
                    form:    this._uiHandler_Form,
                    text:    this._uiHandler_Text,
                    button:  this._uiHandler_Button
                 };

        return theHandlers[handlerType];
     },

     _uiHandler_Content: function(uiParams, id, obj) {
       console.log(JSON.stringify(uiParams));
       $('body').html('<div id="' + id + '"></div>');
       for(var idx=0; idx<uiParams.length; idx++) {
         var uiElement = uiParams[idx];
         obj._handler(uiElement["nodeType"])(uiElement["elements"], uiElement["id"], id, obj);
       } 
     },

     _uiHandler_Form: function(uiParams, id, parentID, obj) {
       $('#' + parentID).html($('#' + parentID).html() + ' <form role="form" id="' + id + '"></form>');
       for(var idx=0; idx<uiParams.length; idx++) {
         var uiElement = uiParams[idx];
	 console.log("UI " + JSON.stringify(uiElement));
         obj._handler(uiElement["nodeType"])(uiElement["elements"][0], uiElement["id"], id, obj);
       } 
     },

     _uiHandler_Text: function(uiParams, id, parentID, obj) {
       $('#' + parentID).html($('#' + parentID).html() + ' <div class="form-group">'
                                   + '  <lable for="' + id + '">' + uiParams["label"] + '</label>'
			           + '  <input class="form-control" id="' + id + '" type="text">'
			           + '</div>');

     },

     _uiHandler_Button: function(uiParams, id, parentID, obj) {
       $('#' + parentID).html($('#' + parentID).html() 
                                   + ' <button type="button" class="btn btn-default" id="' + id + '" onclick="' + uiParams["onclick"]
				   + '" >' + uiParams["label"] + '</button>');
     },

     _uiGenerator: function(uiParams) {
       this._handler(uiParams["nodeType"])(uiParams["elements"], uiParams["id"], this);
     }, 

     require: function(libs, afterLoad) {
       if (typeof(afterLoad) != 'undefined') {
         basket.require(libs).then(function() { afterLoad() });
       } else {
         basket.require(libs);
       } // end if

       return this;
     },

     app: function(params) {
       if (typeof(params["title"]) != 'undefined') { 
         $(document).prop('title', params["title"]);
       } 
       return this;
     },

     run: function() {
       this.out("running!");
       return this;
     },

     ui: function(uiParams) {
       this._uiGenerator(uiParams);
       return this;
     }, 

     out: function(str) {
       console.log(str);
       return this;
     }
   };
 }

)(this, document);

basket.require(
  { url: 'js/app.js', skipCache: true }
);

