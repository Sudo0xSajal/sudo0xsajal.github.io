/* ═══════════════════════════════════════════════════
   glyph.js — Alien glyph encryption toggle
═══════════════════════════════════════════════════ */

const GM = {
  'A':'◊','B':'◈','C':'⊂','D':'⊃','E':'△','F':'▽','G':'□','H':'◇',
  'I':'|','J':'⌐','K':'⌐╗','L':'└','M':'╦','N':'╬','O':'○','P':'◗',
  'Q':'◎','R':'◄','S':'⌂','T':'┬','U':'∪','V':'▼','W':'╥','X':'╳',
  'Y':'⌥','Z':'╫',
  'a':'·','b':'∘','c':'ε','d':'δ','e':'ε','f':'φ','g':'γ','h':'η',
  'i':'ι','j':'j','k':'κ','l':'λ','m':'μ','n':'ν','o':'ο','p':'π',
  'q':'θ','r':'ρ','s':'σ','t':'τ','u':'υ','v':'ν̈','w':'ω','x':'ξ',
  'y':'ψ','z':'ζ',
  ' ':' ','.':'⊙',',':'∙',':':'÷','-':'—','!':'↯','?':'¿','/':'⟋',
  '0':'⓪','1':'①','2':'②','3':'③','4':'④','5':'⑤','6':'⑥','7':'⑦','8':'⑧','9':'⑨'
};

let gMode = false;
const origTxt = new Map();

function toG(s) {
  return s.split('').map(c => GM[c] || GM[c.toUpperCase()] || c).join('');
}

function toggleGlyph() {
  playClk(); gMode = !gMode;
  const db = document.getElementById('dbtn');
  const dl = document.getElementById('dlbl');
  const eb = document.getElementById('encbtn');

  if (gMode) {
    db.classList.add('on');
    dl.textContent          = toG('DECODE: OFF');
    eb.textContent          = '◈ ENCODE';
    eb.style.borderColor    = 'rgba(255,51,85,0.25)';
    eb.style.color          = 'var(--red)';
    document.querySelectorAll('.translatable').forEach(el => {
      if (!origTxt.has(el)) origTxt.set(el, el.innerHTML);
      el.innerHTML        = toG(el.textContent);
      el.style.letterSpacing = '2px';
      el.style.color         = 'rgba(255,204,51,0.6)';
    });
  } else {
    db.classList.remove('on');
    dl.textContent       = 'DECRYPT: ON';
    eb.textContent       = '◈ DECODE';
    eb.style.borderColor = '';
    eb.style.color       = '';
    document.querySelectorAll('.translatable').forEach(el => {
      if (origTxt.has(el)) {
        el.innerHTML           = origTxt.get(el);
        el.style.letterSpacing = '';
        el.style.color         = '';
      }
    });
  }
}
