// tools.js — 8 live canvas tool visualisations
const TOOLS=[
  {id:'NMAP',n:'NMAP',c:'RECON',d:'Radar-style host discovery & port scanning across local networks.',
   draw(cv,t){
     const x=cv.getContext('2d'),w=cv.width,h=cv.height;x.clearRect(0,0,w,h);
     const hosts=[{px:.2,py:.28},{px:.75,py:.2},{px:.85,py:.65},{px:.15,py:.72},{px:.5,py:.5},{px:.6,py:.78},{px:.3,py:.5},{px:.68,py:.42}];
     const angle=(t*.5)%(Math.PI*2);const o={x:w/2,y:h/2};
     x.save();x.beginPath();x.moveTo(o.x,o.y);
     x.arc(o.x,o.y,Math.min(w,h)*.46,angle-.4,angle);x.closePath();
     x.fillStyle='rgba(88,166,255,0.06)';x.fill();x.restore();
     x.beginPath();x.moveTo(o.x,o.y);
     x.lineTo(o.x+Math.cos(angle)*w*.46,o.y+Math.sin(angle)*h*.46);
     x.strokeStyle='rgba(88,166,255,0.7)';x.lineWidth=1.5;x.stroke();
     [.25,.38,.46].forEach(r=>{x.beginPath();x.arc(o.x,o.y,Math.min(w,h)*r,0,Math.PI*2);x.strokeStyle='rgba(88,166,255,0.07)';x.lineWidth=.7;x.stroke();});
     hosts.forEach((h2,i)=>{
       const hx=h2.px*w,hy=h2.py*h;
       const ang=Math.atan2(hy-o.y,hx-o.x);
       const diff=((ang-angle)%(Math.PI*2)+Math.PI*2)%(Math.PI*2);
       const glow=diff<.55?Math.max(0,1-diff/.55):0;
       x.beginPath();x.arc(hx,hy,2.5+glow*4,0,Math.PI*2);
       x.fillStyle=glow>.4?`rgba(57,255,20,${.6+glow*.4})`:`rgba(0,242,255,${.25+glow*.4})`;x.fill();
       if(glow>.3){x.beginPath();x.arc(hx,hy,9+glow*7,0,Math.PI*2);x.strokeStyle=`rgba(57,255,20,${glow*.35})`;x.lineWidth=1;x.stroke();}
       if(glow>.2){const ports=[22,80,443];ports.slice(0,1+(i%2)).forEach((p,j)=>{const px2=hx+Math.cos(i+j*1.2)*18,py2=hy+Math.sin(i+j*1.2)*18;x.beginPath();x.moveTo(hx,hy);x.lineTo(px2,py2);x.strokeStyle=`rgba(255,204,51,${glow*.3})`;x.lineWidth=.7;x.stroke();x.fillStyle=`rgba(255,204,51,${glow*.6})`;x.font='6px JetBrains Mono';x.fillText(p,px2-5,py2+3);});}
     });
     x.beginPath();x.arc(o.x,o.y,4,0,Math.PI*2);x.fillStyle='rgba(255,204,51,0.9)';x.fill();
     x.fillStyle='rgba(88,166,255,0.4)';x.font='7px JetBrains Mono';x.fillText(`HOSTS:${hosts.length} SCAN:${Math.round((angle/(Math.PI*2))*100)}%`,4,h-5);
   }},
  {id:'BURP',n:'BURP SUITE',c:'WEB_PROXY',d:'Intercept, replay & fuzz HTTP/S requests to discover web vulnerabilities.',
   draw(cv,t){
     const x=cv.getContext('2d'),w=cv.width,h=cv.height;x.clearRect(0,0,w,h);
     const ic=w*.52;x.beginPath();x.moveTo(ic,0);x.lineTo(ic,h);x.strokeStyle='rgba(255,140,66,0.4)';x.lineWidth=1.5;x.stroke();
     x.fillStyle='rgba(255,140,66,0.25)';x.font='7px JetBrains Mono';x.fillText('INTERCEPT',ic-28,h-5);
     const types=['GET /login','POST /api','GET /admin','PUT /user','DELETE /','GET /secret','POST /upload'];
     const colors=['rgba(88,166,255,.75)','rgba(57,255,20,.75)','rgba(255,51,85,.8)','rgba(255,204,51,.75)','rgba(192,132,252,.7)','rgba(255,51,85,.9)','rgba(57,255,20,.7)'];
     for(let i=0;i<6;i++){
       const spd=25+i*8;const x2=((t*spd+i*55)%w+w)%w;const y2=16+i*18;
       const near=Math.abs(x2-ic)<20;
       if(near){x.fillStyle='rgba(255,140,66,0.06)';x.fillRect(0,y2-10,w,16);}
       x.fillStyle=near?'rgba(255,204,51,0.9)':colors[i%colors.length];
       x.font=`${near?8.5:7.5}px JetBrains Mono`;x.fillText(types[i%types.length],x2-28,y2+3);
       x.beginPath();x.moveTo(x2,y2);x.lineTo(Math.max(0,x2-24),y2);
       x.strokeStyle=colors[i%colors.length].replace('.75','0.2').replace('.8','0.2').replace('.9','0.2');x.lineWidth=1;x.stroke();
     }
     const cnt=Math.floor(t*2.5)%500;
     x.fillStyle='rgba(255,204,51,0.45)';x.font='7px JetBrains Mono';x.fillText(`REQ:${cnt} | XSS:${Math.floor(t*.3)%8} | SQLi:${Math.floor(t*.2)%4}`,4,h-5);
   }},
  {id:'MSPL',n:'METASPLOIT',c:'EXPLOIT',d:'Automated vulnerability exploitation framework with payload delivery.',
   draw(cv,t){
     const x=cv.getContext('2d'),w=cv.width,h=cv.height;x.clearRect(0,0,w,h);
     const root={x:w*.5,y:h*.12};const mods=[{x:.2,y:.42,l:'exploit'},{x:.5,y:.42,l:'auxiliary'},{x:.8,y:.42,l:'post'}];
     const pls=[[{x:.1,y:.76,l:'rev_tcp'},{x:.24,y:.76,l:'meterp'}],[{x:.42,y:.76,l:'shell'},{x:.56,y:.76,l:'bind'}],[{x:.68,y:.76,l:'hash'},{x:.83,y:.76,l:'migrate'}]];
     const pulse=(t*.55)%1;
     mods.forEach((m,i)=>{
       const mx=m.x*w,my=m.y*h;
       x.beginPath();x.moveTo(root.x,root.y);x.lineTo(mx,my);x.strokeStyle='rgba(255,51,85,0.28)';x.lineWidth=1;x.stroke();
       const px2=root.x+(mx-root.x)*pulse,py2=root.y+(my-root.y)*pulse;
       x.beginPath();x.arc(px2,py2,3,0,Math.PI*2);x.fillStyle='rgba(255,204,51,0.9)';x.fill();
       pls[i].forEach((pl,j)=>{
         const plx=pl.x*w,ply=pl.y*h;
         x.beginPath();x.moveTo(mx,my);x.lineTo(plx,ply);x.strokeStyle='rgba(192,132,252,0.2)';x.lineWidth=.8;x.stroke();
         const pPulse=((t*.55+.5)%1);const ppx=mx+(plx-mx)*pPulse,ppy=my+(ply-my)*pPulse;
         x.beginPath();x.arc(ppx,ppy,2.5,0,Math.PI*2);x.fillStyle='rgba(255,204,51,0.7)';x.fill();
         x.beginPath();x.arc(plx,ply,3.5,0,Math.PI*2);x.fillStyle='rgba(192,132,252,0.7)';x.fill();
         x.fillStyle='rgba(192,132,252,0.55)';x.font='6.5px JetBrains Mono';x.fillText(pl.l,plx-14,ply+12);
       });
       x.beginPath();x.arc(mx,my,5.5,0,Math.PI*2);x.fillStyle='rgba(255,51,85,0.75)';x.fill();
       x.fillStyle='rgba(255,140,66,0.75)';x.font='7px JetBrains Mono';x.fillText(m.l,mx-15,my-9);
     });
     x.beginPath();x.arc(root.x,root.y,7+Math.sin(t*3)*2,0,Math.PI*2);x.fillStyle='rgba(255,51,85,0.85)';x.fill();
     x.beginPath();x.arc(root.x,root.y,14+Math.sin(t*3)*3,0,Math.PI*2);x.strokeStyle='rgba(255,51,85,0.28)';x.lineWidth=1;x.stroke();
     x.fillStyle='rgba(255,204,51,0.55)';x.font='7px JetBrains Mono';x.fillText('TARGET',root.x-18,root.y+20);
     x.fillStyle='rgba(57,255,20,0.45)';x.font='7px JetBrains Mono';x.fillText(`SESSIONS:${Math.floor(t*.3)%5}`,4,h-5);
   }},
  {id:'WIRE',n:'WIRESHARK',c:'PACKET_ANALYSIS',d:'Deep packet inspection & live network traffic capture.',
   draw(cv,t){
     const x=cv.getContext('2d'),w=cv.width,h=cv.height;x.clearRect(0,0,w,h);
     const protos=['TCP','UDP','HTTP','DNS','ARP','ICMP','TLS','SSH'];
     const cols={'TCP':'rgba(88,166,255,.7)','UDP':'rgba(57,255,20,.7)','HTTP':'rgba(255,140,66,.7)','DNS':'rgba(192,132,252,.7)','ARP':'rgba(255,204,51,.7)','ICMP':'rgba(255,51,85,.7)','TLS':'rgba(88,166,255,.5)','SSH':'rgba(57,255,20,.5)'};
     const rh=14,rows=8;
     for(let i=0;i<rows;i++){
       const row=(Math.floor(t*7+i))%16;const proto=protos[row%protos.length];
       const hl=row%4===0&&Math.sin(t+i)>.4;
       if(hl){x.fillStyle='rgba(255,204,51,0.05)';x.fillRect(0,i*rh,w,rh);}
       x.fillStyle=hl?'rgba(255,204,51,.85)':(cols[proto]||'rgba(88,166,255,.5)');
       x.font='7.5px JetBrains Mono';x.fillText(proto,3,i*rh+10);
       x.fillStyle='rgba(88,166,255,0.28)';
       const ip=`${192+row%2}.168.${i}.${1+row*3%254}→10.0.${row%5}.${2+i*7%254}`;
       x.fillText(ip,36,i*rh+10);
       x.fillStyle='rgba(88,166,255,.18)';x.fillText(`${64+row*37}B`,w-32,i*rh+10);
     }
     x.fillStyle='rgba(255,204,51,0.38)';x.font='7px JetBrains Mono';x.fillText('PROTO  SRC→DST                       LEN',3,h-4);
   }},
  {id:'SQLM',n:'SQLMAP',c:'SQL_INJECTION',d:'Automated SQL injection detection, exploitation & database extraction.',
   draw(cv,t){
     const x=cv.getContext('2d'),w=cv.width,h=cv.height;x.clearRect(0,0,w,h);
     const pls=["' OR 1=1--","' UNION SELECT--","1;DROP TABLE--","' OR '1'='1","admin'--"];
     const res=['200 VULNERABLE','500 ERROR','200 REFLECTED','403 FILTERED','200 DUMPED'];
     const cols=['rgba(255,51,85,.85)','rgba(255,204,51,.8)','rgba(255,51,85,.85)','rgba(57,255,20,.8)','rgba(57,255,20,.85)'];
     const row=Math.floor(t*1.1)%pls.length;
     x.fillStyle='rgba(0,0,0,0.35)';x.fillRect(0,3,w,15);x.strokeStyle='rgba(88,166,255,0.15)';x.lineWidth=.5;x.strokeRect(0,3,w,15);
     x.fillStyle='rgba(88,166,255,0.45)';x.font='7.5px JetBrains Mono';x.fillText('http://target.com/item?id=',3,13);
     x.fillStyle='rgba(255,51,85,0.9)';
     const typed=pls[row].slice(0,Math.floor((t*4)%pls[row].length+1));x.fillText(typed,3+168,13);
     for(let i=0;i<pls.length;i++){
       const a=i===row?.92:.38;const y2=30+i*19;
       if(i===row){x.fillStyle='rgba(192,132,252,0.06)';x.fillRect(0,y2-11,w,16);}
       x.fillStyle=`rgba(192,132,252,${a})`;x.font=`${i===row?8:7}px JetBrains Mono`;
       x.fillText(`[${i+1}] ${pls[i]}`,3,y2);
       x.fillStyle=cols[i].replace('.85',String(a)).replace('.8',String(a));
       x.fillText(res[i],w-90,y2);
     }
     x.fillStyle='rgba(255,204,51,0.42)';x.font='7px JetBrains Mono';x.fillText(`DB:mysql | TABLES:${3+row} | COLS:${5+row*2}`,3,h-4);
   }},
  {id:'HYDR',n:'HYDRA',c:'BRUTE_FORCE',d:'Fast online password cracker for SSH, FTP, HTTP and 50+ protocols.',
   draw(cv,t){
     const x=cv.getContext('2d'),w=cv.width,h=cv.height;x.clearRect(0,0,w,h);
     const users=['admin','root','user','guest','test'];const pass=['admin','123456','password','root','test123'];
     const tot=users.length*pass.length;const idx=Math.floor(t*5)%tot;const prog=idx/(tot-1);
     x.fillStyle='rgba(0,0,0,0.3)';x.fillRect(3,3,w-6,10);
     x.fillStyle='rgba(57,255,20,0.55)';x.fillRect(3,3,(w-6)*prog,10);
     x.strokeStyle='rgba(57,255,20,0.18)';x.lineWidth=.5;x.strokeRect(3,3,w-6,10);
     x.fillStyle='rgba(255,204,51,0.5)';x.font='7px JetBrains Mono';x.fillText(`${Math.round(prog*100)}% — ${idx+1}/${tot}`,5,11);
     for(let i=0;i<6;i++){
       const ai=(idx+i-1+tot)%tot;const u=users[ai%users.length],p=pass[Math.floor(ai/users.length)%pass.length];
       const cur=i===1;const hit=u==='admin'&&p==='admin'&&prog>.5;
       x.fillStyle=hit?'rgba(57,255,20,0.06)':cur?'rgba(255,204,51,0.04)':'transparent';
       if(hit||cur)x.fillRect(0,18+i*17,w,17);
       x.fillStyle=hit?'rgba(57,255,20,.9)':cur?'rgba(255,204,51,.85)':'rgba(88,166,255,.28)';
       x.font=`${cur?8:7}px JetBrains Mono`;
       x.fillText(`[${cur?'>>':(hit?'✓ ':' ')} ] ${u}:${p}${hit?' ACCESS GRANTED':''}`,4,29+i*17);
     }
     x.fillStyle='rgba(255,204,51,0.4)';x.font='7px JetBrains Mono';x.fillText(`TARGET:SSH:22 | ${Math.round(4+Math.sin(t)*2)} att/s`,3,h-4);
   }},
  {id:'FFUF',n:'FFUF',c:'WEB_FUZZER',d:'Fast web fuzzer for directory brute-forcing & parameter discovery.',
   draw(cv,t){
     const x=cv.getContext('2d'),w=cv.width,h=cv.height;x.clearRect(0,0,w,h);
     const paths=['admin','login','backup','.git','api','config','secret','panel','uploads','dashboard'];
     const sts=[200,404,200,200,301,403,200,200,200,302];
     const scol={200:'rgba(57,255,20,.8)',404:'rgba(88,166,255,.28)',403:'rgba(255,51,85,.7)',301:'rgba(255,204,51,.7)',302:'rgba(255,140,66,.7)'};
     const cur=Math.floor(t*3)%paths.length;
     x.fillStyle='rgba(88,166,255,0.38)';x.font='7.5px JetBrains Mono';x.fillText(`http://target.com/FUZZ`,3,11);
     x.strokeStyle='rgba(88,166,255,0.1)';x.lineWidth=.5;x.beginPath();x.moveTo(0,14);x.lineTo(w,14);x.stroke();
     for(let i=0;i<paths.length;i++){
       const done=i<cur;const active=i===cur;const y2=26+i*10.5;
       if(active){x.fillStyle='rgba(255,204,51,0.04)';x.fillRect(0,y2-8,w,11);}
       x.fillStyle=done?(scol[sts[i]]||'rgba(88,166,255,.5)'):active?'rgba(255,204,51,.9)':'rgba(88,166,255,.2)';
       x.font=`${active?8:7}px JetBrains Mono`;
       x.fillText(`[${sts[i]}] /${paths[i].padEnd(10)}${done&&sts[i]!==404?' ◄ FOUND':''}`,3,y2);
     }
     x.fillStyle='rgba(255,140,66,0.4)';x.font='7px JetBrains Mono';
     x.fillText(`${cur*120}/s | FOUND:${paths.slice(0,cur).filter((_,i)=>sts[i]!==404).length}`,3,h-4);
   }},
  {id:'HASH',n:'HASHCAT',c:'PASSWORD_CRACK',d:'GPU-accelerated hash cracking via dictionary, rules & brute-force.',
   draw(cv,t){
     const x=cv.getContext('2d'),w=cv.width,h=cv.height;x.clearRect(0,0,w,h);
     const hashes=['5f4dcc3b5aa765d61d83','098f6bcd4621d373cade','d8578edf8458ce06fbc5','827ccb0eea8a706c4c34'];
     const cracked=['password','test','qwerty','12345'];const prog=(t*.07)%1;
     const bars=10;for(let i=0;i<bars;i++){
       const bh=(.3+.7*Math.abs(Math.sin(t*2.5+i*.9)))*h*.2;const bx=3+i*(w-6)/bars;const bw=(w-6)/bars-1.5;
       x.fillStyle='rgba(192,132,252,0.06)';x.fillRect(bx,h*.55-bh,bw,bh);
       x.fillStyle=`rgba(192,132,252,${.28+.35*Math.abs(Math.sin(t*2.5+i*.9))})`;x.fillRect(bx,h*.55-bh,bw,1.5);
     }
     x.fillStyle='rgba(192,132,252,0.28)';x.font='7px JetBrains Mono';x.fillText('GPU LOAD',3,h*.55+10);
     hashes.forEach((h2,i)=>{const done=prog>(i+1)*.22;const cur=!done&&prog>i*.22;
       x.fillStyle=done?'rgba(57,255,20,.55)':cur?'rgba(255,204,51,.75)':'rgba(88,166,255,.22)';
       x.font='7.5px JetBrains Mono';
       x.fillText(`${h2.slice(0,16)}...→${done?cracked[i]:cur?cracked[i].slice(0,Math.floor(prog*16)):'???'}`,3,13+i*13);
     });
     const spd=Math.round(1850+Math.sin(t*2)*200);
     x.fillStyle='rgba(255,204,51,0.45)';x.font='7px JetBrains Mono';x.fillText(`${spd} MH/s | rockyou.txt`,3,h-4);
   }},
];
function renderTools() {
  const grid = document.getElementById('tgrid');
  if (!grid) return;
  grid.innerHTML = '';

  TOOLS.forEach(tool => {
    const card = document.createElement('div');
    card.className = 'tc';
    card.innerHTML =
      '<div class="tc-h"><span class="tc-n">' + tool.n + '</span><span class="tc-c">' + tool.c + '</span></div>'
      + '<canvas class="tc-cv" id="tc-' + tool.id + '"></canvas>'
      + '<div class="tc-f"><div class="tc-d">' + tool.d + '</div><div class="tc-s">&#x25cf; Active</div></div>';
    grid.appendChild(card);

    setTimeout(() => {
      const cv = document.getElementById('tc-' + tool.id);
      if (!cv) return;
      let t = 0;
      function loop() {
        cv.width  = cv.offsetWidth || 276;
        cv.height = 140;
        t += 0.016;
        tool.draw(cv, t);
        requestAnimationFrame(loop);
      }
      loop();
    }, 80);
  });
}
