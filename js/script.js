// Capturando el objeto canvas
const canvas = document.getElementById("barChart");
const ctx = canvas.getContext("2d");

// Datos o valores de la gráfica
const labels = ["Baloncesto", "Beisbol", "Futbol"];
const values = [300,200,400];
const colors = ["#E74C3C", "#3498DB", "#E67E22"]

const charWidth = canvas.width - 100; // Área horizontal utilizable del gráfico
const charHeight = canvas.height - 100; // Área vertical utilizable del gráfico
const barWidth = 50; // Ancho de cada barra
const gap = (charWidth - labels.length * barWidth) / (labels.length + 1); // Espacio entre barras
const maxValue = 500; // Valor máximo del eje "y"
const numSteps = 5; // Cantidad de divisiones del eje "y"
const stepValue = maxValue/numSteps;

function drawGrid(){
    // En esta función se dibuja una cuadrícula
    ctx.strokeStyle = "#CCC";
    ctx.lineWidth = 1;

    for(let i = 0; i <= numSteps; i++){
        const y = canvas.height - 50 - (i * charHeight/numSteps); // Altura de cada línea en el eje y
        ctx.beginPath();
        ctx.moveTo(50,y);
        ctx.lineTo(canvas.width - 50, y); // Posición de la línea de cuadrícula (Cambiará de acuerdo al cálculo anterior)
        ctx.stroke();

        ctx.fillStyle = "#000";
        ctx.font = "12px Arial";
        ctx.fillText(stepValue * i, 20, y + 5); // Se colocará una etiqueta en el eje y en la posición eje x = 20, eje y = y + 5
        
    }

    ctx.beginPath();
    ctx.moveTo(50, 50); // Inicia el eje y
    ctx.lineTo(50, canvas.height - 50);
    ctx.moveTo(50, canvas.height - 50); // Inicia el eje x
    ctx.lineTo(canvas.width - 50, canvas.height - 50);
    ctx.strokeStyle = "#000";
    ctx.stroke();
}

function drawBars(){
    for(let i = 0; i < labels.length; i++){
        const x = 50 + gap * (i + 1) + barWidth * i; // Esta es la posición inicial de la barra en el eje x
        const barHeight = (values[i] / maxValue) * charHeight; // Esta es la altura proporcional de cada barra
        const y = canvas.height - 50 - barHeight; // Esta es la posición "y" de la barra (Puede considerarse como altura)

        ctx.fillStyle = colors[i];
        ctx.fillRect(x, y, barWidth, barHeight); // Se dibuja el rectángulo de la barra con la posición y la altura

        ctx.fillStyle = "#000";
        ctx.font = "12px Arial";
        ctx.fillText(values[i], x + barWidth / 4, y - 10); // Se coloca el valor de la barra sobre la misma

        ctx.fillText(labels[i], x + barWidth / 4, canvas.height - 30); // Se coloca la etiqueta o nombre de la barra
    }
}

function drawTitle(){
    ctx.font = "16px Arial";
    ctx.fillStyle = "#000";
    ctx.fillText("Unidades vendidas en categorías deportivas", canvas.width / 2 - 150, 20); // Se coloca una leyenda o título
}

drawGrid();
drawBars();
drawTitle();