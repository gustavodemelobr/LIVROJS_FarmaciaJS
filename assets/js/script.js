const frm = document.querySelector("form");
const medicamento = document.querySelector("#outNome");
const preco = document.querySelector("#outPreco");

frm.addEventListener("submit", (e) => {
    const nomeMedicamento = frm.inMedicamento.value;
    const precoMedicamento = Number(frm.inPreco.value);

    const promo = Math.floor(precoMedicamento * 2);

    medicamento.innerText = `Promoção de ${nomeMedicamento}:`;
    preco.innerText = `Leve 02 por apenas R$ ${promo.toFixed(2)}`;

    e.preventDefault();
})