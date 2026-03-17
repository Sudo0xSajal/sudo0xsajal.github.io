// signal.js — animated waveform in status bar

const sigC = document.getElementById('sigc');
const sigX = sigC && sigC.getContext('2d');
let sigT = 0;

function drawSig() {
  if (!sigC || !sigX) return;
  sigC.width  = sigC.offsetWidth;
  sigC.height = 14;
  sigX.clearRect(0, 0, sigC.width, sigC.height);
  sigT += 0.05;

  sigX.beginPath();
  for (let x = 0; x < sigC.width; x++) {
    const y = 7
      + Math.sin(x * 0.035 + sigT) * (3 + 2 * Math.sin(x / 30))
      * (0.5 + 0.5 * Math.sin(x * 0.018 + sigT * 0.4));
    x === 0 ? sigX.moveTo(x, y) : sigX.lineTo(x, y);
  }
  sigX.strokeStyle = 'rgba(88,166,255,0.35)';
  sigX.lineWidth   = 1;
  sigX.stroke();
  requestAnimationFrame(drawSig);
}
drawSig();
