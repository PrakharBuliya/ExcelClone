let rows = 100;
let cols = 26;

let addressColCont = document.querySelector(".address-col-cont");
let addressRowCont = document.querySelector(".address-row-cont");

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
