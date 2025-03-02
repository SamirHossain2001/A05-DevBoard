function updateTaskCount(id, increment) {
  const taskEle = document.getElementById(id);
  let taskCount = parseInt(taskEle.innerText);
  if (increment) {
    taskCount++;
  } else {
    taskCount--;
  }
  if (taskCount < 10) {
    taskCount = "0" + taskCount;
  }
  taskEle.innerText = taskCount;
  return taskCount;
}

// time
function getDay() {
  const d = new Date();
  const day = d.toLocaleString("en-us", { weekday: "long" });
  return day;
}

function getTime() {
  const d = new Date();
  const time = d.toLocaleString("en-us", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  return time;
}

function getDate(){
    const d = new Date();
    const date = d.toLocaleString("en-us", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return date;
}

