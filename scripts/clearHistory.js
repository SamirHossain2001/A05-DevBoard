document
  .getElementById("clear-history-btn")
  .addEventListener("click", function () {
    const div = document.getElementById("activity-log");
    div.innerHTML = ``;
  });
