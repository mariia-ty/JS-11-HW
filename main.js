//task 1
/*
let minutes = 60; 
let timer; 
document.getElementById("btn").addEventListener("click", () => {
    timer = setInterval(() => {
        minutes--; 
        document.getElementById("txt").textContent = `${minutes} minutes left`; 
        if (minutes === 30) {
            alert("Less than 30 minutes left!"); 
        }
        if (minutes <= 0) {
            clearInterval(timer); 
            alert("Time is UP!"); 
        }
    }, 60000);
}); 
// */

//task 2

let seconds = 30000;
let timer;

document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("btn").disabled = true;
  timer = setInterval(() => {
    seconds -= 10;
    document.getElementById("txt").textContent = `${seconds / 1000} seconds left`;
    if (seconds <= 10000) {
      document.getElementById("txt").style.color = "red";
      document.getElementById("txt").style.fontSize = "20px";
    }
    if (seconds <= 0) {
      clearInterval(timer);
      seconds = 30000;
      document.getElementById("txt").textContent = `${
        seconds / 1000
      } seconds left`;

      document.getElementById("btn").textContent = "Try again";
        document.getElementById("btn").disabled = false;
        document.getElementById("txt").style.color = "black";
        document.getElementById("txt").style.fontSize = "16px";
    }
  }, 10);
});
