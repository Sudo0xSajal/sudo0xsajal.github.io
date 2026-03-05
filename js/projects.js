/* ═══════════════════════════════════════════════════
   projects.js — Project data, canvas drawers, modal
═══════════════════════════════════════════════════ */

// ── Canvas drawers per project ──
const PROJ_DRAWS = {

  'ART-001': (cv, t) => {
    const x=cv.getContext('2d'),w=cv.width,h=cv.height; x.clearRect(0,0,w,h);
    x.fillStyle='rgba(0,0,0,0.3)'; x.fillRect(0,0,w,h);
    for(let i=0;i<w;i+=30){x.strokeStyle='rgba(0,242,255,0.04)';x.lineWidth=.5;x.beginPath();x.moveTo(i,0);x.lineTo(i,h);x.stroke();}
    for(let i=0;i<h;i+=30){x.beginPath();x.moveTo(0,i);x.lineTo(w,i);x.stroke();}
    const ox=w*.35,oy=h*.5,maxR=Math.min(w,h)*.44;
    const angle=(t*.45)%(Math.PI*2);
    for(let i=0;i<20;i++){const a=angle-i*.04;x.beginPath();x.moveTo(ox,oy);x.lineTo(ox+Math.cos(a)*maxR,oy+Math.sin(a)*maxR);x.strokeStyle=`rgba(0,242,255,${(1-i/20)*.12})`;x.lineWidth=1;x.stroke();}
    x.beginPath();x.moveTo(ox,oy);x.lineTo(ox+Math.cos(angle)*maxR,oy+Math.sin(angle)*maxR);x.strokeStyle='rgba(0,242,255,0.85)';x.lineWidth=2;x.stroke();
    [.28,.38,.44].forEach(r=>{x.beginPath();x.arc(ox,oy,maxR*r,0,Math.PI*2);x.strokeStyle='rgba(0,242,255,0.07)';x.lineWidth=.8;x.stroke();});
    const hosts=[{px:.18,py:.28,ports:[22,80,443],name:'192.168.1.1'},{px:.55,py:.18,ports:[21,25,3306],name:'192.168.1.42'},{px:.72,py:.38,ports:[8080,8443],name:'192.168.1.55'},{px:.8,py:.62,ports:[22],name:'192.168.1.78'},{px:.55,py:.72,ports:[80,443,8080],name:'192.168.1.90'},{px:.28,py:.68,ports:[3389],name:'192.168.1.102'}];
    hosts.forEach((h2,i)=>{
      const hx=h2.px*w,hy=h2.py*h;
      const ang=Math.atan2(hy-oy,hx-ox);
      const diff=((ang-angle)%(Math.PI*2)+Math.PI*2)%(Math.PI*2);
      const glow=diff<.5?Math.max(0,1-diff/.5):0;
      if(i>0){const prev=hosts[(i-1+hosts.length)%hosts.length];x.beginPath();x.moveTo(hx,hy);x.lineTo(prev.px*w,prev.py*h);x.strokeStyle=`rgba(0,242,255,${.04+glow*.08})`;x.lineWidth=.6;x.stroke();}
      if(glow>.1){x.beginPath();x.arc(hx,hy,16+glow*10,0,Math.PI*2);x.fillStyle=`rgba(57,255,20,${glow*.06})`;x.fill();}
      x.beginPath();x.arc(hx,hy,3.5+glow*4,0,Math.PI*2);x.fillStyle=glow>.4?`rgba(57,255,20,${.7+glow*.3})`:`rgba(0,242,255,${.3+glow*.5})`;x.fill();
      if(glow>.25){h2.ports.forEach((p,j)=>{const a2=j*(Math.PI*2/h2.ports.length)+t;const pr=24+glow*8;const pxd=hx+Math.cos(a2)*pr,pyd=hy+Math.sin(a2)*pr;x.beginPath();x.moveTo(hx,hy);x.lineTo(pxd,pyd);x.strokeStyle=`rgba(255,204,51,${glow*.4})`;x.lineWidth=.8;x.stroke();x.beginPath();x.arc(pxd,pyd,2,0,Math.PI*2);x.fillStyle='rgba(255,204,51,0.8)';x.fill();x.fillStyle='rgba(255,204,51,0.7)';x.font='6.5px JetBrains Mono';x.fillText(p,pxd+3,pyd+3);});}
      if(glow>.3){x.fillStyle=`rgba(57,255,20,${glow*.8})`;x.font='7px JetBrains Mono';x.fillText(h2.name,hx+8,hy-6);}
    });
    x.beginPath();x.arc(ox,oy,5,0,Math.PI*2);x.fillStyle='rgba(255,204,51,1)';x.fill();
    x.fillStyle='rgba(0,0,0,0.5)';x.fillRect(w*.7,0,w*.3,h);
    x.strokeStyle='rgba(0,242,255,0.12)';x.lineWidth=.5;x.beginPath();x.moveTo(w*.7,0);x.lineTo(w*.7,h);x.stroke();
    x.fillStyle='rgba(255,204,51,0.6)';x.font='7px JetBrains Mono';x.fillText('SCAN RESULTS',w*.71,14);
    [`HOSTS: ${hosts.length}`,'PORTS: 47','OPEN:  23','FILT:  18','TCP:   38','UDP:   9'].forEach((s,i)=>{x.fillStyle='rgba(0,242,255,0.5)';x.font='7px JetBrains Mono';x.fillText(s,w*.71,30+i*14);});
    x.fillStyle='rgba(57,255,20,0.5)';x.font='7px JetBrains Mono';x.fillText(`SCAN: ${Math.round((angle/(Math.PI*2))*100)}%`,w*.71,h-5);
  },

  'ART-002': (cv, t) => {
    const x=cv.getContext('2d'),w=cv.width,h=cv.height; x.clearRect(0,0,w,h);
    x.fillStyle='rgba(0,0,0,0.4)'; x.fillRect(0,0,w,h);
    for(let i=0;i<h;i+=4){x.fillStyle='rgba(0,0,0,0.08)';x.fillRect(0,i,w,2);}
    x.fillStyle='rgba(255,51,85,0.12)';x.fillRect(0,0,w,20);
    x.fillStyle='rgba(255,51,85,0.7)';x.font='8px JetBrains Mono';x.fillText('PAYLOAD_GEN v1.0 // XSS · SQLi · Bypass',6,13);
    const payloads=[{label:'ORIGINAL',val:"<script>alert(1)</script>",col:'rgba(255,204,51,.85)'},{label:'URL_ENC',val:'%3Cscript%3Ealert%281%29%3C%2Fscript%3E',col:'rgba(0,242,255,.7)'},{label:'BASE64',val:'PHNjcmlwdD5hbGVydCgxKTwvc2NyaXB0Pg==',col:'rgba(192,132,252,.8)'},{label:'HEX_ENC',val:'\\x3Cscript\\x3Ealert(1)\\x3C/script\\x3E',col:'rgba(255,140,66,.75)'},{label:'SQLI_1',val:"' OR 1=1 -- -",col:'rgba(255,51,85,.85)'},{label:'SQLI_2',val:"' UNION SELECT null,@@version-- ",col:'rgba(255,51,85,.7)'}];
    const animRow=Math.floor(t*0.8)%payloads.length;
    payloads.forEach((p,i)=>{
      const y=28+i*17; const active=i===animRow;
      if(active){x.fillStyle='rgba(255,255,255,0.03)';x.fillRect(0,y-11,w,16);}
      x.fillStyle='rgba(0,242,255,0.35)';x.font='7px JetBrains Mono';x.fillText(p.label,4,y);
      x.fillStyle=active?p.col.replace('85','1').replace('.7','1').replace('.8','1').replace('.75','1'):p.col;
      x.font=`${active?8:7}px JetBrains Mono`;
      x.fillText(p.val.slice(0,active?Math.floor((t%2)*p.val.length+1):Math.floor((w-75)/6)),70,y);
    });
    const bypassAnim=(Math.sin(t*.8)+1)/2;
    x.fillStyle='rgba(0,0,0,0.4)';x.fillRect(3,h-18,w-6,14);
    x.fillStyle=`rgba(57,255,20,${.4+bypassAnim*.4})`;x.fillRect(3,h-18,(w-6)*bypassAnim,14);
    x.fillStyle='rgba(255,255,255,0.7)';x.font='7px JetBrains Mono';
    x.fillText(`WAF BYPASS: ${Math.round(bypassAnim*100)}%  |  GENERATED: ${3+animRow}  |  FILTERED: 0`,6,h-8);
  },

  'ART-003': (cv, t) => {
    const x=cv.getContext('2d'),w=cv.width,h=cv.height; x.clearRect(0,0,w,h);
    x.fillStyle='rgba(0,0,0,0.35)';x.fillRect(0,0,w,h);
    const lw=w*.52;
    x.fillStyle='rgba(0,0,0,0.4)';x.fillRect(0,0,lw,h);
    x.fillStyle='rgba(255,204,51,0.12)';x.fillRect(0,0,lw,16);
    x.fillStyle='rgba(255,204,51,0.65)';x.font='7.5px JetBrains Mono';x.fillText('PDF HEX STREAM',4,11);
    const bytes=['25','50','44','46','2D','31','2E','37','0A','25','E2','E3','CF','D3','0A','31','20','30','20','6F','62','6A','0A','3C','3C','0A','2F','54','79','70','65','20','2F','43','61','74','61','6C','6F','67'];
    let bRow=0,bCol=0;
    bytes.forEach((b,i)=>{
      const active=Math.floor(t*8)%bytes.length===i;
      x.fillStyle=active?'rgba(255,204,51,0.95)':'rgba(0,242,255,0.35)';x.font='7px JetBrains Mono';x.fillText(b,5+bCol*22,28+bRow*11);
      bCol++;if(bCol>6){bCol=0;bRow++;}
    });
    const rx=lw+6;
    x.strokeStyle='rgba(255,204,51,0.2)';x.lineWidth=.5;x.beginPath();x.moveTo(lw,0);x.lineTo(lw,h);x.stroke();
    x.fillStyle='rgba(255,204,51,0.12)';x.fillRect(lw,0,w-lw,16);
    x.fillStyle='rgba(255,204,51,0.65)';x.font='7.5px JetBrains Mono';x.fillText('EXTRACTED META',rx,11);
    const meta=[{k:'Author',v:'John A. Smith',c:'rgba(255,204,51,.85)',anim:1},{k:'Created',v:'2024-03-15',c:'rgba(0,242,255,.75)',anim:1.4},{k:'Software',v:'MS Word 365',c:'rgba(192,132,252,.8)',anim:1.8},{k:'Company',v:'ACME Corp Ltd',c:'rgba(255,140,66,.8)',anim:2.2},{k:'Path',v:'C:\\Users\\jsmith',c:'rgba(255,51,85,.8)',anim:2.6},{k:'OS',v:'Windows 11 Pro',c:'rgba(57,255,20,.75)',anim:3}];
    meta.forEach((m,i)=>{
      const revealed=t>m.anim;const y=28+i*17;
      x.fillStyle='rgba(0,242,255,0.3)';x.font='7px JetBrains Mono';x.fillText(m.k+':',rx,y);
      if(revealed){x.fillStyle=m.c;x.font='7.5px JetBrains Mono';x.fillText(m.v.slice(0,Math.min(m.v.length,Math.floor((t-m.anim)*12+1))),rx+52,y);}
    });
    if(t>meta[meta.length-1].anim+1){x.fillStyle='rgba(57,255,20,0.1)';x.fillRect(lw,h-20,w-lw,20);x.fillStyle='rgba(57,255,20,0.7)';x.font='7px JetBrains Mono';x.fillText('[✓] HIGH VALUE OSINT',rx,h-8);}
    x.fillStyle='rgba(255,204,51,0.4)';x.font='7px JetBrains Mono';x.fillText(`PARSED: ${Math.min(bytes.length,Math.floor(t*8))}/${bytes.length} bytes`,4,h-5);
  },

  'ART-004': (cv, t) => {
    const x=cv.getContext('2d'),w=cv.width,h=cv.height; x.clearRect(0,0,w,h);
    x.fillStyle='rgba(0,0,0,0.35)';x.fillRect(0,0,w,h);
    x.fillStyle='rgba(30,30,40,0.8)';x.fillRect(0,0,w,28);
    x.fillStyle='rgba(255,255,255,0.06)';x.fillRect(8,6,w-90,16);
    x.strokeStyle='rgba(0,242,255,0.1)';x.lineWidth=.5;x.strokeRect(8,6,w-90,16);
    x.fillStyle='rgba(0,242,255,0.4)';x.font='7px JetBrains Mono';x.fillText('https://target.com/search?q=',12,17);
    x.fillStyle='rgba(255,51,85,0.8)';x.font='7px JetBrains Mono';
    const typed='<script>alert(1)</script>';x.fillText(typed.slice(0,Math.floor((t*3)%typed.length+1)),172,17);
    x.fillStyle='rgba(57,255,20,0.2)';x.fillRect(w-48,6,38,16);
    x.fillStyle='rgba(57,255,20,0.7)';x.font='6.5px JetBrains Mono';x.fillText('XSS●ON',w-46,17);
    const domY=36;
    const nodes=[{label:'<html>',x:.5,y:domY,c:'rgba(0,242,255,.5)'},{label:'<head>',x:.22,y:domY+28,c:'rgba(0,242,255,.4)'},{label:'<body>',x:.72,y:domY+28,c:'rgba(0,242,255,.5)'},{label:'<form>',x:.55,y:domY+56,c:'rgba(255,204,51,.55)'},{label:'<input>',x:.38,y:domY+84,c:'rgba(255,51,85,.8)',inject:true},{label:'<div>',x:.72,y:domY+56,c:'rgba(0,242,255,.35)'},{label:'<script>',x:.88,y:domY+84,c:'rgba(255,51,85,.9)',inject:true}];
    [[0,1],[0,2],[2,3],[3,4],[2,5],[5,6]].forEach(([a,b])=>{const na=nodes[a],nb=nodes[b];x.beginPath();x.moveTo(na.x*w,na.y);x.lineTo(nb.x*w,nb.y);x.strokeStyle='rgba(0,242,255,0.12)';x.lineWidth=.8;x.stroke();});
    nodes.forEach((n,i)=>{
      const inj=n.inject&&Math.sin(t*3+i)>.3;
      if(inj){x.beginPath();x.arc(n.x*w,n.y,12,0,Math.PI*2);x.fillStyle='rgba(255,51,85,0.1)';x.fill();}
      x.fillStyle=inj?'rgba(255,51,85,0.9)':n.c;x.font=`${inj?8:7}px JetBrains Mono`;x.fillText(n.label,n.x*w-18,n.y+3);
    });
    const alertAnim=(Math.sin(t*.7)+1)/2;
    if(alertAnim>.5){
      const ax=w/2-45,ay=h-55;
      x.fillStyle='rgba(255,255,255,0.95)';x.fillRect(ax,ay,90,38);
      x.strokeStyle='rgba(0,0,0,0.3)';x.lineWidth=1;x.strokeRect(ax,ay,90,38);
      x.fillStyle='rgba(0,0,0,0.8)';x.font='7.5px JetBrains Mono';x.fillText('JavaScript Alert',ax+8,ay+13);
      x.fillStyle='rgba(0,0,0,0.6)';x.font='8px JetBrains Mono';x.fillText('XSS EXECUTED!',ax+8,ay+26);
      x.fillStyle='rgba(0,120,212,0.8)';x.fillRect(ax+60,ay+28,24,8);
      x.fillStyle='white';x.font='6px JetBrains Mono';x.fillText('OK',ax+68,ay+35);
    }
    x.fillStyle='rgba(255,51,85,0.5)';x.font='7px JetBrains Mono';x.fillText('[!] REFLECTED XSS — SEVERITY: HIGH',3,h-5);
  },
};

// ── Project Data ──
const PROJS = [
  {
    id: 'ART-001', type: 'NETWORK_TOOL', name: 'ETH0SCANNER',
    desc: 'A Python-based network reconnaissance tool that identifies live hosts, open ports, and running services using Nmap and Scapy. Features ARP sweep for Layer 2 host discovery, OS fingerprinting, and service version detection across entire subnets.',
    tags: ['Python','Nmap','Scapy','Networking','Recon'],
    github: 'github.com/Sudo0xSajal/eth0Scanner',
    raw: `<span class="cmt"># eth0Scanner — Network Recon Tool</span>
<span class="kw">import</span> nmap, scapy.all <span class="kw">as</span> scapy

<span class="kw">def</span> <span class="fn">scan_network</span>(subnet: <span class="kw2">str</span>) -> <span class="kw2">list</span>:
    nm = nmap.<span class="fn">PortScanner</span>()
    nm.<span class="fn">scan</span>(hosts=subnet, arguments=<span class="str">'-sV -O --open -T4'</span>)
    results = []
    <span class="kw">for</span> host <span class="kw">in</span> nm.<span class="fn">all_hosts</span>():
        info = {
          <span class="str">'host'</span>: host,
          <span class="str">'ports'</span>: <span class="fn">list</span>(nm[host][<span class="str">'tcp'</span>].keys()),
          <span class="str">'os'</span>: nm[host].<span class="fn">get</span>(<span class="str">'osmatch'</span>,[]),
        }
        results.<span class="fn">append</span>(info)
    <span class="kw">return</span> results

<span class="kw">def</span> <span class="fn">arp_sweep</span>(ip_range: <span class="kw2">str</span>):
    pkt = scapy.<span class="fn">Ether</span>(dst=<span class="str">"ff:ff:ff:ff:ff:ff"</span>)
    pkt /= scapy.<span class="fn">ARP</span>(pdst=ip_range)
    ans, _ = scapy.<span class="fn">srp</span>(pkt,timeout=<span class="num">2</span>,verbose=<span class="num">False</span>)
    <span class="kw">return</span> [r.<span class="fn">psrc</span> <span class="kw">for</span> _, r <span class="kw">in</span> ans]`,
    visual: `<div style="font-size:12px;line-height:1.9;"><div style="color:rgba(0,242,255,0.4);margin-bottom:8px;">$ python eth0scanner.py --subnet 192.168.1.0/24</div><div style="color:var(--green)">● HOST: 192.168.1.1 &nbsp;&nbsp;[LIVE]</div><div style="padding-left:20px;color:rgba(0,242,255,0.5)">  PORTS: [22/SSH, 80/HTTP, 443/HTTPS]</div><div style="color:var(--green)">● HOST: 192.168.1.42 [LIVE]</div><div style="padding-left:20px;color:rgba(0,242,255,0.5)">  PORTS: [21/FTP, 25/SMTP, 3306/MySQL]</div><div style="color:var(--gold);margin-top:10px">◈ COMPLETE: 12 HOSTS · 47 PORTS · 23 OPEN</div></div>`
  },
  {
    id: 'ART-002', type: 'EXPLOIT_TOOL', name: 'PAYLOAD GENERATOR CLI',
    desc: 'A CLI utility that generates encoded payloads for XSS and SQL Injection testing, designed to bypass basic WAF security filters. Supports Base64, URL, HTML, and hexadecimal encoding schemes with automated filter evasion logic.',
    tags: ['Python','XSS','SQLi','WAF Bypass','CLI'],
    github: 'Comming Soon',
    raw: `<span class="cmt"># Payload Generator — WAF Bypass CLI</span>
<span class="kw">import</span> base64, urllib.parse, html, click

PAYLOADS = {
  <span class="str">'xss'</span>: [<span class="str">'&lt;script&gt;alert(document.domain)&lt;/script&gt;'</span>],
  <span class="str">'sqli'</span>: [<span class="str">"' OR 1=1 -- -"</span>],
}
ENCODERS = {
  <span class="str">'b64'</span>: <span class="kw">lambda</span> p: base64.<span class="fn">b64encode</span>(p.<span class="fn">encode</span>()).<span class="fn">decode</span>(),
  <span class="str">'url'</span>: urllib.parse.quote,
}
@click.<span class="fn">command</span>()
@click.<span class="fn">option</span>(<span class="str">'--type'</span>, type=click.<span class="fn">Choice</span>([<span class="str">'xss'</span>,<span class="str">'sqli'</span>]))
@click.<span class="fn">option</span>(<span class="str">'--encode'</span>, type=click.<span class="fn">Choice</span>([<span class="str">'b64'</span>,<span class="str">'url'</span>]))
<span class="kw">def</span> <span class="fn">generate</span>(type, encode):
    <span class="kw">for</span> p <span class="kw">in</span> PAYLOADS[type]:
        <span class="fn">print</span>(ENCODERS[encode](p))`,
    visual: `<div style="font-size:11.5px;line-height:1.85;"><div style="color:rgba(0,242,255,0.4)">$ python payloadgen.py --type xss --encode b64</div><div style="color:var(--gold)">[+] PHNjcmlwdD5hbGVydCgxKTwvc2NyaXB0Pg==</div><div style="color:var(--green);margin-top:8px">[✓] 3 PAYLOADS ENCODED // WAF BYPASS: HIGH</div></div>`
  },
  {
    id: 'ART-003', type: 'OSINT_TOOL', name: 'PDF METADATA EXTRACTOR',
    desc: 'Downloads PDF documents and extracts hidden metadata including author identity, creation timestamps, software versions, and file paths for OSINT and digital forensics operations. Built with Golang for the core parser and Python for automation.',
    tags: ['Golang','Python','OSINT','Forensics','Metadata'],
    github: 'github.com/Sudo0xSajal/PDFMetadataExtractor',
    raw: `<span class="cmt">// PDFMetadataExtractor — Golang core</span>
<span class="kw">package</span> main

<span class="kw">import</span> (
    <span class="str">"github.com/unidoc/unipdf/v3/model"</span>
    <span class="str">"fmt"</span>; <span class="str">"os"</span>
)

<span class="kw">type</span> <span class="fn">PDFMeta</span> <span class="kw">struct</span> {
    Author, Creator, Path <span class="kw2">string</span>
}

<span class="kw">func</span> <span class="fn">Extract</span>(path <span class="kw2">string</span>) (*<span class="fn">PDFMeta</span>, <span class="kw2">error</span>) {
    f, _ := os.<span class="fn">Open</span>(path); defer f.<span class="fn">Close</span>()
    r, _ := model.<span class="fn">NewPdfReader</span>(f)
    info, _ := r.<span class="fn">GetPdfInfo</span>()
    <span class="kw">return</span> &<span class="fn">PDFMeta</span>{
        Author: fmt.<span class="fn">Sprintf</span>(<span class="str">"%v"</span>, info.Author),
    }, <span class="kw">nil</span>
}`,
    visual: `<div style="font-size:11.5px;line-height:1.85;"><div style="color:rgba(0,242,255,0.4)">[OSINT] Analyzing: target_report.pdf</div><div style="color:rgba(0,242,255,0.6)">Author:  <span style="color:var(--gold)">John A. Smith</span></div><div style="color:rgba(0,242,255,0.6)">Path:    <span style="color:var(--red)">C:\\Users\\jsmith\\Documents</span></div><div style="color:var(--green);margin-top:8px">[✓] HIGH VALUE INTELLIGENCE EXTRACTED</div></div>`
  },
  {
    id: 'ART-004', type: 'BROWSER_EXTENSION', name: 'XSS PAYLOAD EXTENSION',
    desc: 'A browser extension that injects XSS test payloads directly into web application input fields from the browser toolbar. Enables rapid cross-site scripting vulnerability testing with real-time DOM injection, payload cycling, and severity reporting.',
    tags: ['JavaScript','XSS','Chrome Extension','DOM','Web Security'],
    github: 'Comming soon',
    raw: `<span class="cmt">// XSS Tester Extension — content.js</span>
<span class="kw">const</span> PAYLOADS = [
  <span class="str">'&lt;script&gt;alert(document.domain)&lt;/script&gt;'</span>,
  <span class="str">'&lt;img src=x onerror="alert(document.cookie)"&gt;'</span>,
  <span class="str">'&lt;svg onload=confirm(document.origin)&gt;'</span>,
];

<span class="kw">const</span> <span class="fn">findTargets</span> = () =>
  [...document.<span class="fn">querySelectorAll</span>(
    <span class="str">'input:not([type=hidden]),textarea'</span>
  )];

chrome.runtime.<span class="fn">onMessage</span>.<span class="fn">addListener</span>((msg, _, send) => {
  <span class="kw">if</span> (msg.action === <span class="str">'inject'</span>) {
    <span class="kw">const</span> fields = <span class="fn">findTargets</span>();
    fields.<span class="fn">forEach</span>((el, i) => {
      el.value = PAYLOADS[i % PAYLOADS.length];
    });
    send({ injected: fields.length });
  }
});`,
    visual: `<div style="font-size:11.5px;line-height:1.85;"><div style="color:rgba(255,204,51,0.7)">[EXT] XSS Tester v1.2 — Active</div><div style="color:var(--red);font-weight:bold">[!] XSS REFLECTED — VULNERABLE!</div><div style="color:var(--green);margin-top:8px">[✓] SEVERITY: HIGH | CVSS: 7.4</div></div>`
  },
];

// ── Render Project Cards ──
const projAnims = {};

function renderProjects() {
  const g = document.getElementById('pgrid'); g.innerHTML = '';
  PROJS.forEach((p, idx) => {
    const card = document.createElement('div'); card.className = 'proj';
    card.innerHTML = `
      <div class="proj-inner">
        <div class="proj-info">
          <div>
            <div class="proj-meta"><span class="proj-id">${p.id}</span><span class="proj-type">${p.type}</span></div>
            <div class="proj-name translatable">${p.name}</div>
            <div class="proj-desc translatable">${p.desc}</div>
            <div class="proj-gh"><a href="https://${p.github}" target="_blank" rel="noopener" style="color:rgba(0,242,255,0.38);text-decoration:none;">&#9672; ${p.github} &#8599;</a></div>
            <div class="proj-tags">${p.tags.map(t => `<span class="chip">${t}</span>`).join('')}</div>
          </div>
          <div class="proj-btns">
            <button class="pbtn"   onclick="openM(${idx},'raw')">RAW DATA</button>
            <button class="pbtn p" onclick="openM(${idx},'visual')">VISUAL RECON</button>
          </div>
        </div>
        <div class="proj-vis">
          <canvas id="pvc-${p.id}"></canvas>
          <div class="proj-vis-overlay"><span>${p.id} // ${p.type}</span><span>◈ LIVE SIMULATION</span></div>
          <div class="proj-vis-badge">● RENDERING</div>
        </div>
      </div>`;
    g.appendChild(card);
    setTimeout(() => {
      const cv   = document.getElementById('pvc-' + p.id); if (!cv) return;
      const draw = PROJ_DRAWS[p.id]; if (!draw) return;
      let t = 0;
      function loop() {
        cv.width  = cv.offsetWidth  || 400;
        cv.height = cv.offsetHeight || 280;
        if (cv.height < 10) cv.height = 280;
        t += .016; draw(cv, t);
        projAnims[p.id] = requestAnimationFrame(loop);
      }
      loop();
    }, 200 + idx * 80);
  });
}

// ── Modal ──
let curP = null, curTab = 'raw';

function openM(idx, tab) {
  playClk(); curP = PROJS[idx]; curTab = tab;
  document.getElementById('mtit').textContent = curP.id + ' // ' + curP.name;
  swTab(tab);
  document.getElementById('mover').classList.add('on');
}

function swTab(tab) {
  playClk(); curTab = tab;
  document.querySelectorAll('.mtab').forEach(t => t.classList.remove('on'));
  document.querySelectorAll('.mtab').forEach(t => {
    if ((tab === 'raw'    && t.textContent === 'RAW DATA')    ||
        (tab === 'visual' && t.textContent === 'VISUAL RECON')) t.classList.add('on');
  });
  const mc = document.getElementById('mc');
  if (tab === 'raw') {
    mc.innerHTML = `<div style="margin-bottom:10px;font-size:8px;letter-spacing:2px;color:rgba(0,242,255,0.28);">TYPE: ${curP.type} // ${curP.github}</div><pre class="cb">${curP.raw}</pre><div style="margin-top:12px;font-size:10px;color:rgba(0,242,255,0.45);line-height:1.8;">${curP.desc}</div><div class="chips" style="margin-top:9px;">${curP.tags.map(t => `<span class="chip">${t}</span>`).join('')}</div>`;
  } else {
    mc.innerHTML = `<div style="margin-bottom:10px;font-size:8px;letter-spacing:2px;color:rgba(0,242,255,0.28);">VISUAL RECONSTRUCTION // ${curP.id}</div><div style="background:rgba(0,0,0,0.55);border:1px solid rgba(0,242,255,0.07);padding:22px;margin-bottom:10px;">${curP.visual}</div><div style="font-size:8.5px;color:rgba(255,204,51,0.38);letter-spacing:1px;">◈ END-USER VIEW // ${curP.name}</div>`;
  }
}

function mClose()          { playClk(); document.getElementById('mover').classList.remove('on'); }
function mOutClose(e)      { if (e.target === document.getElementById('mover')) mClose(); }
