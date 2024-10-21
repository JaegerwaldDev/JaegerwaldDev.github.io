let slotMachine = document.getElementById("slotMachine");
let slotButton = document.getElementById("spinSlots");

let slotList = [];
for (let i=0;i<12;i++) {
    let slot = document.createElement("span");
    slot.className = `slot i${i}`;
    slot.innerText = i+1

    slotList.push(slot);
};

function finishSpinning() {
    for (let i=0;i<3;i++) {
        setTimeout(function () {
            slotMachine.appendChild(slotList[Math.round(11*Math.random())]);
            slotMachine.querySelectorAll(".slot.temp").array.forEach(element => {
                element.remove();
            });
            for (let j=0;j<2-i;j++) {
                let slot = document.createElement("span");
                slot.className = `slot temp`;
                slotMachine.appendChild(slot);
            };
        }, i*2000);
    };
};

slotButton.addEventListener("click", function () {
    slotMachine.innerText = "";
    setTimeout(finishSpinning, 3000);
});