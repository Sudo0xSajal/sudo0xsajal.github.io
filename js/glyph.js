// glyph.js — alien glyph encryption toggle

const GM = {
  A:'◊', B:'◈', C:'⊂', D:'⊃', E:'△', F:'▽', G:'□', H:'◇', I:'|',
  J:'⌐', K:'⌐╗', L:'└', M:'╦', N:'╬', O:'○', P:'◗', Q:'◎', R:'◄',
  S:'⌂', T:'┬', U:'∪', V:'▼', W:'╥', X:'╳', Y:'⌥', Z:'╫',
  a:'·', b:'∘', c:'ε', d:'δ', e:'ε', f:'φ', g:'γ', h:'η', i:'ι',
  j:'j', k:'κ', l:'λ', m:'μ', n:'ν', o:'ο', p:'π', q:'θ', r:'ρ',
  s:'σ', t:'τ', u:'υ', v:'ν', w:'ω', x:'ξ', y:'ψ', z:'ζ',
  ' ':' ', '.':'⊙', '-':'—', '!':'↯', '?':'¿',
};

let gMode   = false;
const saved = new Map();

function toGlyph(str) {
  return str.split('').map(c => GM[c] || GM[c.toUpperCase()] || c).join('');
}

function toggleGlyph() {
  gMode = !gMode;
  const db  = document.getElementById('dbtn');
  const dl  = document.getElementById('dlbl');
  const btn = document.getElementById('encbtn');

  const targets = document.querySelectorAll(
    '.txt, .edu-d, .bst .val, .proj-name, .proj-desc'
  );

  if (gMode) {
    db.classList.add('on');
    dl.textContent     = 'Decode: Off';
    btn.textContent    = 'Encode';
    btn.style.color    = 'var(--red)';
    targets.forEach(el => {
      if (!saved.has(el)) saved.set(el, el.innerHTML);
      el.innerHTML = toGlyph(el.textContent);
    });
  } else {
    db.classList.remove('on');
    dl.textContent     = 'Decode: On';
    btn.textContent    = '◈ Decode';
    btn.style.color    = '';
    targets.forEach(el => {
      if (saved.has(el)) el.innerHTML = saved.get(el);
    });
  }
}
