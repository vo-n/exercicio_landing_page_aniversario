AOS.init();

const aniversario = new Date("Nov 13, 2025 00:00:00");
const timeStampDoEvento = aniversario.getTime();

const contaAsHoras = setInterval(function() {
  const agora = new Date();
  const timeStampatual = agora.getTime();

  const distanciaAteOEvento = timeStampDoEvento - timeStampatual;

  const diaEmMs = 1000 * 60 * 60 * 24;
  const horaEmMs = 1000 * 60 * 60;
  const minutoEmMs = 1000 * 60;

  const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
  const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
  const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
  const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

  document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

  if (distanciaAteOEvento < 0) {
    clearInterval(contaAsHoras);
    document.getElementById('contador').innerHTML = 'Evento expirado';
  }
}, 1000);