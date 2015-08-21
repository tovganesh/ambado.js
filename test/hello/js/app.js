ambado.app(
  {"title": "Hello Fruit!"}
).require(
  { url: 'js/local.js' },
  function() {
    console.log("after load");
  }
).ui(
  {
    nodeType: "content",
    id: "mycontent",
    elements: [
      { 
        nodeType: "form",
        id: "myform",
        elements: [
          { 
	    "id": "name", 
	    "nodeType": "text", 
	    elements: [ 
	       { "tip": "Type your name", "label": "Name" } 
	    ] 
	  }, 
          { 
	    "id": "ok", 
	    "nodeType": "button", 
	    elements: [ 
	      { "tip": "Type your name", "label": "Ok", "onclick": "okOnclick()" } 
	    ] 
	  }
        ]
      },
      {
        nodeType: "template",
	id: "mytemplate",
	elements: [
	  { "url": "html/form.html" }
	]
      }
    ] 
  }
).run();
