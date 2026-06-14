
const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

const getRandomColor = function () {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
};

const container = document.getElementById("container");
for(let i = 0; i < 130; i++)
{
    const box = document.createElement("div");
    box.classList.add("box");
    box.onmouseenter = function () {
        box.style.backgroundColor = getRandomColor();
    };

    container.appendChild(box);

}
