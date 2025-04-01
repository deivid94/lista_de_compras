const inputUser = document.querySelector("input");
const button = document.querySelector("button");
const spanContent = document.querySelector("ul");
const a = document.querySelector("a");
const checkboxList = document.querySelector("input[type=checkbox]");

function InputItemListaUsuario() {
  inputUser.addEventListener("input", () => {
    const hashcCodeRegex = /[^a-z ]+/gi;
    inputUser.value = inputUser.value.replace(hashcCodeRegex, "");
    return inputUser.value;
  });
}

function CriaElementoHtml() {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const newElement = document.createElement("li");
    const input = document.createElement("input");
    input.type = "checkbox";
    const span = document.createElement("span");

    span.innerText = `${inputUser.value}`;
    inputUser.value = "";
    const a = document.createElement("a");
    a.href = "#";
    a.innerHTML = `<i class="hgi hgi-stroke hgi-delete-02"></i>`;
    a.classList.add("delete");
    newElement.classList.add("label", "margin-botton");

    newElement.appendChild(input);
    newElement.appendChild(span);
    newElement.appendChild(a);
    spanContent.appendChild(newElement);
  });
}

function DeleteItemList() {
  const iconDelete = document.querySelector("delete");
  iconDelete.addEventListener("click", (e) => {
    alert("ouviu o eevento");
    spanContent.remove();
  });
}

InputItemListaUsuario();
CriaElementoHtml();
DeleteItemList();
