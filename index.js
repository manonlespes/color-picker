const submitButton = document.getElementById("submitButton");
const colorContainer = document.getElementById("container");
const title = document.getElementById("title");

async function getColor(value) {
  const response = await fetch(
    `https://www.thecolorapi.com/scheme?hex=${value}&count=6`
  );
  const data = await response.json();

  if (data) {
    data.colors;
  }
}

submitButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const value = document.getElementById("colorSelected").value.replace("#", "");

  let mode = document.getElementById("mode").value;
  console.log(mode);

  if (!mode) {
    mode = "monochrome";
  }

  const response = await fetch(
    `https://www.thecolorapi.com/scheme?hex=${value}&mode=${mode}&count=5`
  );
  const data = await response.json();

  if (data) {
    const coloredSquare = data.colors
      .map((element) => {
        return `<div style="background-color:${element.hex.value};" class="color"><div>${element.hex.clean}</div></div>`;
      })
      .join("");

    colorContainer.innerHTML = `
        ${coloredSquare}
        `;

    title.innerHTML = `<p class="title">${data.mode}</p>`;
  }
});
