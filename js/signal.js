/* ═══════════════════════════════════════════════════
   signal.js — Bottom signal waveform canvas
═══════════════════════════════════════════════════ */

const sigC = document.getElementById('sigc');
const sigX = sigC.getContext('2d');
let sigT = 0;

function drawSig() {
  sigC.width  = sigC.offsetWidth;
  sigC.height = 16;
  sigX.clearRect(0, 0, sigC.width, sigC.height);
  sigT += .06;
  sigX.beginPath();
  for (let x = 0; x < sigC.width; x++) {
    const y = 8 + Math.sin(x * .04 + sigT) * (4 + 2.5 * Math.sin(x / 25)) * (0.5 + .5 * Math.sin(x * .02 + sigT * .4));
    x === 0 ? sigX.moveTo(x, y) : sigX.lineTo(x, y);
  }
  sigX.strokeStyle = 'rgba(0,242,255,0.38)';
  sigX.lineWidth   = 1;
  sigX.stroke();
  requestAnimationFrame(drawSig);
}
drawSig();
