const input = document.querySelector("input");
const button = document.querySelector("button");
const spanContent = document.querySelector("ul");
const newElement = document.createElement("li");

input.addEventListener("input", () => {
  const hashcCodeRegex = /[^a-z]+/g;
  input.value = input.value.replace(hashcCodeRegex, "");
});

newElement.innerHTML =
  '<input type="checkbox"/><span>teste</span><a href=""><i class="hgi hgi-stroke hgi-delete-02"></i></a>';

spanContent.appendChild(newElement);
