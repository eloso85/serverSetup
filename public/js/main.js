$(()=>{
    
    var taskValue = $("#task-value");
    var taskList = $("#task-list");
    
    console.log(taskList)
    //console.log(taskValue.val())

    $(document).on("submit", "#notes", insertTask )

    function insertTask(){
        event.preventDefault()
        console.log(taskValue.val());
    }
    
})