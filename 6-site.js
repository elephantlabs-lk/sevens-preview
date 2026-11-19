// Sevens Super City company-site sample: shared behaviour for all pages
const hd=document.getElementById('hd');
const onScroll=()=>hd.classList.toggle('solid',scrollY>60);
addEventListener('scroll',onScroll,{passive:true});onScroll();

// full-screen menu
const ov=document.getElementById('ov');
document.getElementById('mb').onclick=()=>ov.classList.add('on');
document.getElementById('mx').onclick=()=>ov.classList.remove('on');
ov.querySelectorAll('a').forEach(a=>a.onclick=()=>ov.classList.remove('on'));

// home page photo slider
const sl=[...document.querySelectorAll('.slide')];
if(sl.length){
  const cp=[...document.querySelectorAll('.cap>div')],dots=document.getElementById('dots');
  let i=0,t;
  const go=k=>{i=(k+sl.length)%sl.length;
    sl.forEach((s,j)=>s.classList.toggle('on',j===i));cp.forEach((s,j)=>s.classList.toggle('on',j===i));
    [...dots.children].forEach((d,j)=>d.classList.toggle('on',j===i));
    clearInterval(t);t=setInterval(()=>go(i+1),6500)};
  sl.forEach((_,k)=>{const b=document.createElement('button');b.setAttribute('aria-label','Slide '+(k+1));b.onclick=()=>go(k);dots.appendChild(b)});
  document.getElementById('nx').onclick=()=>go(i+1);document.getElementById('pv').onclick=()=>go(i-1);go(0);
}

// home page review band
const qs=[...document.querySelectorAll('.band .q')];
if(qs.length){
  const quotes=[['"Best Super Market in Horana Area."','Source: customer review on Google Maps'],['"A very good range of every item. The prices are also reasonable."','Source: customer review on Google Maps']];
  let q=0;setInterval(()=>{q=(q+1)%quotes.length;qs.forEach((e,j)=>e.classList.toggle('on',j===q%qs.length));
    document.getElementById('qh').textContent=quotes[q][0];document.getElementById('qp').textContent=quotes[q][1]},7000);
}

// newsroom filter
document.querySelectorAll('.chips button').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('.chips button').forEach(x=>x.classList.toggle('on',x===b));
  const c=b.dataset.c;document.querySelectorAll('.post').forEach(p=>p.classList.toggle('hide',c!=='all'&&p.dataset.c!==c));
});

// sample forms: nothing is sent
document.querySelectorAll('.form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();
  f.querySelector('.formnote').textContent='This is a design sample, so nothing was sent. On the real site this goes to the company inbox and WhatsApp.';}));

// fade sections in as they scroll into view
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));

// small corner tag so nobody mistakes this preview for the live website
(()=>{const t=document.createElement('div');t.textContent='Design preview · ElephantLabs';t.style.cssText='position:fixed;left:10px;bottom:10px;z-index:99;background:#000c;color:#fff;font:600 11px/1 system-ui,sans-serif;letter-spacing:.04em;padding:7px 10px;border-radius:999px;pointer-events:none';document.body.appendChild(t)})();
