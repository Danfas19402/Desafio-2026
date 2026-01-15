const meses = [
  "Jan","Fev","Mar","Abr",
  "Mai","Jun","Jul","Ago",
  "Set","Out","Nov","Dez"
];

const lista = document.getElementById("lista");
const totalEl = document.getElementById("total");
const valorInput = document.getElementById("valorInicial");

function gerar() {
  lista.innerHTML = "";
  let total = 0;
  const base = Number(valorInput.value);

  meses.forEach((mes, i) => {
    const valor = base * (i + 1);
    total += valor;

    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <span>${mes}</span>
      <strong>R$ ${valor.toFixed(2)}</strong>
    `;
    lista.appendChild(div);
  });

  totalEl.innerText = `R$ ${total.toFixed(2)}`;
  salvar();
}

function salvar() {
  localStorage.setItem("valorInicial", valorInput.value);
}

function carregar() {
  const v = localStorage.getItem("valorInicial");
  if (v) {
    valorInput.value = v;
    gerar();
  }
}

function limpar() {
  if (!confirm("Deseja limpar tudo?")) return;
  localStorage.clear();
  lista.innerHTML = "";
  totalEl.innerText = "R$ 0,00";
}

document.getElementById("toggleTheme").onclick = () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
};

carregar();
