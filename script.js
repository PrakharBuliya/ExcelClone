let rows = 100;
let cols = 26;

let addressColCont = document.querySelector(".address-col-cont");
let addressRowCont = document.querySelector(".address-row-cont");
let cellsCont = document.querySelector(".cells-cont");
let addressBar = document.querySelector(".address-bar");

for (let i = 0; i < rows; i++) {
  let addresscol = document.createElement("div");
  addresscol.setAttribute("class", "address-col");
  addresscol.innerText = i + 1;
  addressColCont.appendChild(addresscol);
}

for (let i = 0; i < cols; i++) {
  let addressrow = document.createElement("div");
  addressrow.setAttribute("class", "address-row");
  addressrow.innerText = String.fromCharCode(65 + i);
  addressRowCont.appendChild(addressrow);
}

for (let i = 0; i < rows; i++) {
  let rowCont = document.createElement("div");
  rowCont.setAttribute("class", "row-cont");
  for (let j = 0; j < cols; j++) {
    let cell = document.createElement("div");
    cell.setAttribute("class", "cell");
    cell.setAttribute("contenteditable", "true");
    rowCont.appendChild(cell);
    addListnerForAddressBarDisplay(cell, i, j);
  }
  cellsCont.appendChild(rowCont);
}

function addListnerForAddressBarDisplay(cell, i, j) {
  cell.addEventListener("click", (e) => {
    let rowID = i + 1;
    let colID = String.fromCharCode(65 + j);

    addressBar.value = `${colID}${rowID}`;
  });
}
