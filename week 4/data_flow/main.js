const nameInput = document.getElementById("nameInput");
const textInput = document.getElementById("textInput");
const submitBtn = document.getElementById("submitBtn");
const postsContainer = document.getElementById("postsContainer");

const posts = [
  { name: "Amit", text: "Hello everyone" },
  { name: "Dana", text: "This is my first post" },
  { name: "Yossi", text: "Nice to meet you" }
];

function render() {
  postsContainer.innerHTML = "";

  for (let post of posts) {
    const postDiv = document.createElement("div");

    postDiv.innerHTML = `
    <h3>${post.name}</h3>
    <p>${post.text}</p>`;

    postsContainer.appendChild(postDiv);
  }
}

submitBtn.addEventListener("click", function () {
  const name = nameInput.value;
  const text = textInput.value;

  posts.push({
    name: name,
    text: text
  });

  render();

  nameInput.value = "";
  textInput.value = "";
});

render();