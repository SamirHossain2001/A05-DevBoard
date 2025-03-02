//

document.getElementById("theme-logo").addEventListener("click", function () {
  //document.body.style.backgroundColor = "red";
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = Math.random().toFixed(2);
  const randomColor = `rgba(${r}, ${g}, ${b}, ${a})`;
  document.body.style.backgroundColor = randomColor;
});
