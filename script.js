const body = document.body;
const interruptor = document.getElementById("interruptor");

// Determinar o estado inicial com base na classe do body
let luzAcesa = false;

// Configurar o texto inicial do botão

// Adicionar o evento de clique para alternar o estado da luz
interruptor.addEventListener("click", () => {

    if (luzAcesa) {
        body.classList.remove("apagada");
        body.classList.add("acesa");
        interruptor.textContent = "Apagar"; // Atualiza o texto do botão
        luzAcesa = !luzAcesa; // Alterna o estado da luz

    } else {
        body.classList.remove("acesa");
        body.classList.add("apagada");
        interruptor.textContent = "Acender"; // Atualiza o texto do botão
        luzAcesa = !luzAcesa; // Alterna o estado da luz

    }
});

