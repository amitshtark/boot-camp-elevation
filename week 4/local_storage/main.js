
let input = document.getElementById("input");
let box = document.getElementById("box");
let wisdom = [];

function showInput(){
    let inputValue = input.value.trim();
    if(!inputValue)
        return;
    wisdom.push({ id: Date.now(), text: inputValue });
    if(wisdom.length % 2 === 0)
    {
        localStorage.setItem("wisdom", JSON.stringify(wisdom));
    }
    render();
    input.value = "";
    
}
function render(){
    box.innerHTML = "";

    wisdom.forEach((item) => {
        const wisdomDiv = document.createElement("div");
        wisdomDiv.id = `wisdom-${item.id}`;

        const textSpan = document.createElement("span");
        textSpan.textContent = item.text;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "x";

        deleteBtn.addEventListener("click", function(){
            wisdom = wisdom.filter(w => w.id !== item.id);
            localStorage.setItem("wisdom", JSON.stringify(wisdom));
            render();
        });

        wisdomDiv.appendChild(textSpan);
        wisdomDiv.appendChild(deleteBtn);
        box.appendChild(wisdomDiv);
    });
}

function clearWisdom(){
    localStorage.removeItem("wisdom");
    wisdom = [];
    render();
}

document.addEventListener("DOMContentLoaded", function () {
    const storedWisdom = localStorage.getItem("wisdom");

    if (storedWisdom) {
        wisdom = JSON.parse(storedWisdom);
        render();
    }
});