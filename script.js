const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  const new_todo = document.createElement("li");
  const checkTodo = document.createElement("input");
  const contentTodo = document.createElement("input");
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  checkTodo.type = "checkbox";
  checkTodo.name = "checkTodo"
  contentTodo.className = "input_todo";
  contentTodo.placeholder = "To-do";
  span.className = "close";
  span.appendChild(txt);
  new_todo.appendChild(checkTodo);
  new_todo.appendChild(contentTodo);
  new_todo.appendChild(span);
  list.appendChild(new_todo);
  itemCountSpan.innerHTML = ++  itemCountSpan.firstChild.nodeValue;
  uncheckedCountSpan.innerHTML = ++ uncheckedCountSpan.firstChild.nodeValue;
  update();
}

function update(){
  const checkList = document.getElementsByName("checkTodo");
  const todoList = document.getElementsByClassName("input_todo");
  var close = document.getElementsByClassName("close");
  for (let i=0; i < checkList.length; i++){
    checkList[i].onchange = function(){
      console.log(checkList[i].checked);
      if (this.checked){
        todoList[i].classList.add("checked");
        uncheckedCountSpan.innerHTML = uncheckedCountSpan.firstChild.nodeValue -1;
        }
      else{
        todoList[i].classList.remove("checked");
        uncheckedCountSpan.innerHTML =  uncheckedCountSpan.firstChild.nodeValue + 1;
        }
      }
    } 
    for (let i = 0; i < close.length; i++) {
      // console.log(checkList[i]); 
      close[i].onclick = function() {  
        console.log(i); 
        this.parentElement.style.display = "none";   
        if(checkList[i].checked){
          itemCountSpan.innerHTML = itemCountSpan.firstChild.nodeValue -1;
        }else{
          itemCountSpan.innerHTML = itemCountSpan.firstChild.nodeValue -1;
          uncheckedCountSpan.innerHTML =  uncheckedCountSpan.firstChild.nodeValue - 1;
        }
        // this.parentElement.style.display = "none";
      }
    }
}

