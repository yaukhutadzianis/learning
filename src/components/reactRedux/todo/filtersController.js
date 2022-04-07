export default function fCheckOnVisibleTodoItem(
  todo,
  fCompletedVal,
  fPriorityVal
) {
  let vsCompleted = 1;
  let vsPriority = 1;

  //All
  if (fCompletedVal === "0") {
    vsCompleted = 1;
  }
  //Completed & Todo Checked
  else if (fCompletedVal === "1" && todo.isChecked === true) {
    vsCompleted = 1;
  }
  //Completed & Todo Unchecked
  else if (fCompletedVal === "1" && todo.isChecked === false) {
    vsCompleted = 0;
  }
  //Uncompleted & Todo Checked
  else if (fCompletedVal === "2" && todo.isChecked === true) {
    vsCompleted = 0;
  }
  //Uncompleted & Todo Checked
  else if (fCompletedVal === "2" && todo.isChecked === false) {
    vsCompleted = 1;
  }

  //All
  if (fPriorityVal === "0") {
    vsPriority = 1;
  }
  //LP & Todo LP
  else if (fPriorityVal === "1" && todo.priorityVal === "0") {
    vsPriority = 1;
  }
  //LP & Todo Not LP
  else if (fPriorityVal === "1" && todo.priorityVal !== "0") {
    vsPriority = 0;
  }
  //MP & Todo MP
  else if (fPriorityVal === "2" && todo.priorityVal === "1") {
    vsPriority = 1;
  }
  //MP & Todo Not MP
  else if (fPriorityVal === "2" && todo.priorityVal !== "1") {
    vsPriority = 0;
  }
  //HP & Todo HP
  else if (fPriorityVal === "3" && todo.priorityVal === "2") {
    vsPriority = 1;
  }
  //HP & Todo Not HP
  else if (fPriorityVal === "3" && todo.priorityVal !== "2") {
    vsPriority = 0;
  }

  if (vsCompleted === 1 && vsPriority === 1) {
    let classSubstring = "d-block";
    if (todo.isChecked === true) {
      classSubstring += " bg-gradient";
    }
    return classSubstring;
  } else {
    let classSubstring = "d-none";
    return classSubstring;
  }
}
