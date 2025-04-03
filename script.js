const inputUser = document.querySelector("input");
const button = document.querySelector("button");
const spanContent = document.querySelector("ul");

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
    a.setAttribute("id", "deleteIcon");
    newElement.classList.add("label", "margin-botton");

    newElement.appendChild(input);
    newElement.appendChild(span);
    newElement.appendChild(a);
    spanContent.appendChild(newElement);
  });
}

function DeleteItemList() {
  // Delegação de eventos para deletar e checkbox
  spanContent.addEventListener("click", (e) => {
    // Verifica se o clique foi no ícone de deletar
    if (e.target && e.target.classList.contains("deleteIcon")) {
      const item = e.target.closest("li"); // Encontra o li mais próximo
      const checkbox = item.querySelector("input[type=checkbox]");

      if (checkbox.checked) {
        item.remove(); // Remove o item da lista
      } else {
        alert("Você precisa selecionar um item da lista para deletar");
      }
    }
  });
}

InputItemListaUsuario();
CriaElementoHtml();
DeleteItemList();
