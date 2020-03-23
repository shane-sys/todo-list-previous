const taskItem = document.querySelectorAll(".toDoList")
const trash = document.getElementsByClassName("fa-trash");


Array.from(taskItem).forEach(function(element) {
  element.addEventListener('click', function(){
    const taskCompleted = this.childNodes[1].innerText
    console.log(taskCompleted, 'is the task')
    fetch('/update', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},

      body: JSON.stringify({
        'task': taskCompleted
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      window.location.reload(true)
    })

  });
})

Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function(){
    console.log("click event working")
    const task = this.parentNode.parentNode.childNodes[1].innerText
    console.log(task)
    fetch('/remove', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'task': task
      })
    }).then(function (response) {
      console.log(response)
      // window.location.reload()
    })
  });
});
