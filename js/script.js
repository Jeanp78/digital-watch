const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const year = document.getElementById("year");
const month = document.getElementById("month");
const day = document.getElementById("date");
const updateWatch = () => {
  const date = new Date();
  hours.textContent = date.getHours();
  minutes.textContent = date.getMinutes().toString().padStart(2, "0");
  seconds.textContent = date.getSeconds();
  year.textContent = date.getFullYear();
  month.textContent = date.getMonth() + 1;
  day.textContent = date.getDay();
};
updateWatch();
setInterval(updateWatch, 1000);
