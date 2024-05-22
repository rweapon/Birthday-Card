import names from "./data/names.js";
renderName();

function renderName() {
  const url = new URL(window.location.href);
  const text = document.querySelector(".text__name");
  const param = url.searchParams.get("name");

  names.forEach((person) => {
    if (person.url === param) {
      text.innerText = `Дорог${person.sex === "M" ? "ой" : "ая"} ${
        person.name
      }`;
    }
  });
}
