// Sevens Super City, design 2: shared behaviour for all pages
const hd=document.getElementById('hd'),sc=()=>hd.classList.toggle('solid',scrollY>60);addEventListener('scroll',sc,{passive:true});sc();
const ov=document.getElementById('ov');
document.getElementById('mb').onclick=()=>ov.classList.add('on');
document.getElementById('mx').onclick=()=>ov.classList.remove('on');
ov.querySelectorAll('a').forEach(a=>a.onclick=()=>ov.classList.remove('on'));

// home: slider, tabs and business panel move together
const sl=[...document.querySelectorAll('.slide')];
if(sl.length){
  const tx=[...document.querySelectorAll('.cap .t')],tb=[...document.querySelectorAll('#tabs button')],se=[...document.querySelectorAll('.sector')];
  let i=0,t;
  const go=k=>{i=(k+sl.length)%sl.length;[sl,tx,se].forEach(g=>g.forEach((e,j)=>e.classList.toggle('on',j===i)));
    tb.forEach(b=>b.classList.remove('on'));void tb[i].offsetWidth;tb[i].classList.add('on');clearInterval(t);t=setInterval(()=>go(i+1),6500)};
  tb.forEach((b,k)=>b.onclick=()=>go(k));go(0);
}
// home: news arrows
const nr=document.getElementById('nrow');
if(nr){const step=()=>nr.querySelector('.ncard').offsetWidth+30;
  document.getElementById('nn').onclick=()=>nr.scrollBy({left:step(),behavior:'smooth'});
  document.getElementById('np').onclick=()=>nr.scrollBy({left:-step(),behavior:'smooth'});}
// news page filter
document.querySelectorAll('.chips button').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('.chips button').forEach(x=>x.classList.toggle('on',x===b));
  const c=b.dataset.c;document.querySelectorAll('.ngrid .ncard').forEach(p=>p.classList.toggle('hide',c!=='all'&&p.dataset.c!==c));});
// sample forms: nothing is sent
document.querySelectorAll('.form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();
  f.querySelector('.formnote').textContent='This is a design sample, so nothing was sent. On the real site this goes to the company inbox and WhatsApp.';}));
// fade sections in on scroll
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));

// small corner tag so nobody mistakes this preview for the live website
(()=>{const t=document.createElement('div');t.textContent='Design preview · ElephantLabs';t.style.cssText='position:fixed;left:10px;bottom:10px;z-index:99;background:#000c;color:#fff;font:600 11px/1 system-ui,sans-serif;letter-spacing:.04em;padding:7px 10px;border-radius:999px;pointer-events:none';document.body.appendChild(t)})();
