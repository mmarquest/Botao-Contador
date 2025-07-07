const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const counterBtn = document.getElementById("counterBtn");

let count = 0;

increaseBtn.addEventListener("click", function(){
    document.getElementById("increaseBtn");
    count++;
    counterBtn.textContent = count;
});

decreaseBtn.addEventListener("click", function(){
    document.getElementById("decreaseBtn");
    count--;
    counterBtn.textContent = count;
});

resetBtn.addEventListener("click", function(){
    document.getElementById("resetBtn");
    count = 0;
    counterBtn.textContent = count;
})