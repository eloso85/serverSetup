$(()=>{
    
    var taskValue = $("#task-value");
    var taskList = $("#task-list");
    
   var todo = []
   getTodos()

   function initializeRows(){
       taskList.empty();
       var rowsToAdd = [];
       for (var i = 0 ; i< todo.length; i++ ){
           rowsToAdd.push(createNewRow(todo[i]));
       }
       taskList.prepend(rowsToAdd);
   }

   function getTodos(){
       $.get("/api/task", data=>{
           todo = data;
           console.log(todo)
           initializeRows()
       });
   }
   function createNewRow(todo) {
    var $newInputRow = $(
      [
        "<li class='list-group-item todo-item'>",
        "<span>",
        todo.text,
        "</span>",
        "<input type='text' class='edit' style='display: none;'>",
        "<button class='delete btn btn-danger'>x</button>",
        "<button class='complete btn btn-primary'>✓</button>",
        "</li>"
      ].join("")
    );
   return $newInputRow

    }
   
    
})