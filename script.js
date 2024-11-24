const body = document.body;
const interruptor = document.getElementById("interruptor");

// Determinar o estado inicial com base na classe do body
let luzAcesa = body.classList.contains("acesa");

// Configurar o texto inicial do botão
interruptor.textContent = luzAcesa ? "Apagar" : "Acender";

// Adicionar o evento de clique para alternar o estado da luz
interruptor.addEventListener("click", () => {
    luzAcesa = !luzAcesa; // Alterna o estado da luz

    if (luzAcesa) {
        body.classList.remove("apagada");
        body.classList.add("acesa");
        interruptor.textContent = "Apagar"; // Atualiza o texto do botão
    } else {
        body.classList.remove("acesa");
        body.classList.add("apagada");
        interruptor.textContent = "Acender"; // Atualiza o texto do botão
    }
});

