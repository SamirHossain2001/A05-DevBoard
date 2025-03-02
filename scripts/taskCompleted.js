//

document
  .getElementById("all-cards")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("btn")) {
      const btn = event.target;
      btn.setAttribute("disabled", true);
      btn.style.opacity = "0.2";
      alert("Board updated successfully.");

      const currentTask = updateTaskCount("task-assigned", false);
      if (parseInt(currentTask) === 0) {
        alert("Congrats!!! You have completed all the current task.");
      }
      updateTaskCount("task-count", true);
      // Text
      const h2 = btn.parentNode.parentNode.querySelector("h2").innerText;

      const time = getTime();
      // activity-log
      const activityLog = document.getElementById("activity-log");
      // child
      const p = document.createElement('p');
      p.classList.add(
        "mt-6",
        "bg-[#F4F7FF]",
        "rounded-lg",
        "opacity-70",
        "p-3"
      );
      p.innerText = `You have Complete The Task ${h2} at ${time}.`;
      activityLog.appendChild(p);
    }
  });
