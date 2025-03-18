const input = document.querySelector("input");
const button = document.querySelector("button");
const spanContent = document.querySelector("ul");

input.addEventListener("input", () => {
  const hashcCodeRegex = /[^a-z ]+/gi;
  // const hashcCodeRegex = /^(\w+ ?)*$/

  input.value = input.value.replace(hashcCodeRegex, "");
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  const newElement = document.createElement("li");
  const input = document.createElement("input");
  input.type = "checkbox";

  newElement.classList.add("label", "margin-botton");
  console.log(newElement);

  newElement.appendChild(input);

  // newElement.innerHTML = `<input type="checkbox"/> <span>${input.value}</span><a href=""><i class="hgi hgi-stroke hgi-delete-02"></i></a>`;
  spanContent.appendChild(newElement);
});
