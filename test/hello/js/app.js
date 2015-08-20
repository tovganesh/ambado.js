ambado.app(
  {"title": "Hello Fruit!"}
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
	      { "tip": "Type your name", "label": "Ok" } 
	    ], 
	    operations: [
	      'onclick': function() { alert("hello " + $('#name').text()); }
	    ] 
	  }
        ]
      } 
    ] 
  }
).run();
