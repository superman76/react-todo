//MOCK OBJECT FOR TODO


{ "name": "Learn React",
"id": 1,
"dueDate": "2/23/16",
"description": "self explanatory",
}

//MOCK API FOR TODO


{ "GET /Todo": { "desc": "returns all Todo", "response": "200 application/json", "data": [{}, {}, {}] },

"GET /Todo/:id": { "desc": "returns one Todo respresented by its id", "response": "200 application/json", "data": {} },

"POST /Todo": { "desc": "create and returns a new Todo uisng the posted object as the Todo", "response": "201 application/json", "data": {} },

"PUT /Todo/:id": { "desc": "updates and returns the matching Todo with the posted update object", "response": "200 application/json", "data": {} },

"DELETE /Todo/:id": { "desc": "deletes and returns the matching Todo", "response": "200 application/json", "data": {} } }