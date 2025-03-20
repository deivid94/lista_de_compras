const inputUser = document.querySelector("input");

const button = document.querySelector("button");
const spanContent = document.querySelector("ul");
const a = document.querySelector("a");

inputUser.addEventListener("input", () => {
  const hashcCodeRegex = /[^a-z ]+/gi;
  // const hashcCodeRegex = /^(\w+ ?)*$/

  inputUser.value = inputUser.value.replace(hashcCodeRegex, "");
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  const newElement = document.createElement("li");
  const input = document.createElement("input");
  const span = document.createElement("span");

  input.type = "checkbox";

  span.innerText = `${inputUser.value}`;

  const a = document.createElement("a");
  a.href = "#";
  a.innerHTML = `<i class="hgi hgi-stroke hgi-delete-02"></i>`;
  a.classList.add("delete");
  newElement.classList.add("label", "margin-botton");

  newElement.appendChild(input);
  newElement.appendChild(span);
  newElement.appendChild(a);

  // newElement.innerHTML = `<input type="checkbox"/> <span>${input.value}</span><a href=""><i class="hgi hgi-stroke hgi-delete-02"></i></a>`;
  spanContent.appendChild(newElement);

  const checkboxList = document.querySelector("input[type=checkbox]");
  const deleteItemList = (document.getElementsByClassName("delete").onclick = (
    e
  ) => {
    alert("item deletado");
  }); // resolver deletar item

  checkboxList.addEventListener("change", (e) => {
    if (e.target.checked) {
      alert("caixa marcada");
    }
  });
});
