let count = 1;
document.querySelector("#add").onclick = function () {

    const todo = document.querySelector("#todo");
    const task = todo.value;

if (count===1){ 
    const p_task1 = document.querySelector("#task1");
    p_task1.textContent = task;
} else if (count===2){
     const p_task2 = document.querySelector("#task2");
    p_task2.textContent = task;
}else if(count===3){
     const p_task3 = document.querySelector("#task3");
    p_task3.textContent = task;
}else if (count===4){
     const p_task4 = document.querySelector("#task4");
    p_task4.textContent = task;
}else if(count===5){
     const p_task5 = document.querySelector("#task5");
    p_task5.textContent = task;
}
count ++ ;
}

