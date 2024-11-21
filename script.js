const lampada = document.getElementById('lampada');
const interruptor = document.getElementById('interruptor');

let isLampadaAcesa = false;

interruptor.addEventListener('click', () => {
    isLampadaAcesa = !isLampadaAcesa;

    if (isLampadaAcesa) {
        lampada.src = "https://via.placeholder.com/150/FFFF00/000000?text=Acesa";
        lampada.alt = "Lâmpada acesa";
        interruptor.textContent = "Apagar";
    } else {
        lampada.src = "https://via.placeholder.com/150/000000/FFFFFF?text=Apagada";
        lampada.alt = "Lâmpada apagada";
        interruptor.textContent = "Acender";
    }
});
