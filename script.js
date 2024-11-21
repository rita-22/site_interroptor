const body = document.body;
const interruptor = document.getElementById("interruptor");

// Define estado inicial (apagada)
let luzAcesa = false;

// Adiciona evento ao botão
interruptor.addEventListener("click", () => {
    luzAcesa = !luzAcesa;

    // Alterna entre as classes "acesa" e "apagada"
    if (luzAcesa) {
        body.classList.remove("apagada");
        body.classList.add("acesa");
        interruptor.textContent = "Apagar";
    } else {
        body.classList.remove("acesa");
        body.classList.add("apagada");
        interruptor.textContent = "Acender";
    }
});

// Define o estado inicial como "apagada"
body.classList.add("apagada");

