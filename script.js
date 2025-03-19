const inputUser = document.querySelector("input");
const button = document.querySelector("button");
const spanContent = document.querySelector("ul");

inputUser.addEventListener("input", () => {
  const hashcCodeRegex = /[^a-z ]+/gi;
  // const hashcCodeRegex = /^(\w+ ?)*$/

  inputUser.value = inputUser.value.replace(hashcCodeRegex, "");
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  const newElement = document.createElement("li");
  const input = document.createElement("input");
  input.type = "checkbox";

  const span = document.createElement("span");
  span.innerText = `${inputUser.value}`;
  console.log(span);

  const a = document.createElement("a");
  a.href = "#";
  a.innerHTML = `<i class="hgi hgi-stroke hgi-delete-02"></i>`;

  newElement.classList.add("label", "margin-botton");
  console.log(newElement);

  newElement.appendChild(input);
  newElement.appendChild(span);
  newElement.appendChild(a);

  // newElement.innerHTML = `<input type="checkbox"/> <span>${input.value}</span><a href=""><i class="hgi hgi-stroke hgi-delete-02"></i></a>`;
  spanContent.appendChild(newElement);
});
