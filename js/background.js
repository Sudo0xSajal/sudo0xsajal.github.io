// background.js — animated particle network

(function () {
  const c   = document.getElementById('bgc');
  if (!c) return;
  const ctx = c.getContext('2d');
  let W = innerWidth, H = innerHeight;

  function resize() { W = innerWidth; H = innerHeight; c.width = W; c.height = H; }
  resize();
  addEventListener('resize', resize);

  const N   = 50;
  const pts = Array.from({ length: N }, () => ({
    x:  Math.random() * W,
    y:  Math.random() * H,
    vx: (Math.random() - 0.5) * 0.2,
    vy: (Math.random() - 0.5) * 0.2,
    r:  Math.random() * 1.4 + 0.4,
  }));
  let mx = W / 2, my = H / 2;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  function frame() {
    ctx.clearRect(0, 0, W, H);

    // Subtle radial gradient
    const g = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H) * 0.65);
    g.addColorStop(0, 'rgba(31,111,235,0.03)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

    // Move points
    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
    });

    // Connections between nearby points
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 120) {
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = 'rgba(88,166,255,' + (0.04 * (1 - d / 120)) + ')';
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
      // Mouse influence lines
      const dx2 = pts[i].x - mx, dy2 = pts[i].y - my;
      const d2  = Math.sqrt(dx2 * dx2 + dy2 * dy2);
      if (d2 < 150) {
        ctx.beginPath();
        ctx.moveTo(pts[i].x, pts[i].y);
        ctx.lineTo(mx, my);
        ctx.strokeStyle = 'rgba(61,201,192,' + (0.05 * (1 - d2 / 150)) + ')';
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }
      // Dots
      ctx.beginPath();
      ctx.arc(pts[i].x, pts[i].y, pts[i].r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(88,166,255,0.3)';
      ctx.fill();
    }
    requestAnimationFrame(frame);
  }
  frame();
})();
