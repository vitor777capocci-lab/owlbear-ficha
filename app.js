function recalc() {
  const forca = Number(document.getElementById("for").value);
  const vig = Number(document.getElementById("vig").value);
  const agi = Number(document.getElementById("agi").value);

  let defesa = forca + vig;

  let deslocamento = 5 + agi * 2;
  if (deslocamento > 12) deslocamento = 12;

  document.getElementById("resultado").innerText =
    "Defesa: " + defesa + " | Deslocamento: " + deslocamento;
}
