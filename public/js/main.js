$( document ).on( "click",".delete", deleteTodo);
$( document ).on( "click", ".edit", editTodo )
$( document ).on("input", "listItem", inputListen)

getTodos();
   
   function getTodos(){
       $.get("/api/task", data=>{
        console.log(data)
           $("#task-list").html(`${data.map((todo)=>{
               //console.log(todo.text)
               return`<li class="listItem" id=${todo.id} contenteditable="true" >${todo.text}</li><button class='delete' type="button"  id=${todo.id}  >delete</button><button class="edit" id=${todo.id}>edit</button>`
           }).join("")}`);
          
           
       });
   };

   function inputListen(){
       console.log("input fired")
   }

   function editTodo(){
       
       var id = $(this).attr("id")
       console.log(id)
       return $(`#${id}`).html( `<li class="listItem"  contenteditable="true" ></li`)
       
       
   }

   function deleteTodo(event) {
    event.stopPropagation();
    var id = $(this).attr("id")
    $.ajax({
        method: "DELETE",
        url: "/api/task/" + id
      }).then(getTodos);
    
   console.log(id)
  }
  

   $("#submit").on("click",(event)=>{
       event.preventDefault();
       var todo = {
           text:$("#task-value").val().trim(),
            complete: false
        };
        console.log(todo)
        $.post("/api/task",todo,getTodos);
        $("#task-value").val("");
   });

  



   
    