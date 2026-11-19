// Sevens Super City, design 3: shared behaviour
const hd=document.getElementById('hd'),sc=()=>hd.classList.toggle('solid',scrollY>60);addEventListener('scroll',sc,{passive:true});sc();
const ov=document.getElementById('ov');
document.getElementById('mb').onclick=()=>ov.classList.add('on');
document.getElementById('mx').onclick=()=>ov.classList.remove('on');
ov.querySelectorAll('a').forEach(a=>a.onclick=()=>ov.classList.remove('on'));
// banner video: pause and play
const v=document.getElementById('bv'),vc=document.getElementById('vc');
if(v&&vc){vc.onclick=()=>{if(v.paused){v.play();vc.textContent='❚❚ Pause video'}else{v.pause();vc.textContent='▶ Play video'}};
  v.addEventListener('error',()=>{vc.style.display='none'},true);}
// loop the banner video before its closing logo screen
if(v&&v.dataset.end){v.addEventListener('timeupdate',()=>{if(v.currentTime>+v.dataset.end)v.currentTime=0})}
// news filter
document.querySelectorAll('.chips button').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('.chips button').forEach(x=>x.classList.toggle('on',x===b));
  const c=b.dataset.c;document.querySelectorAll('.news.grid .nc').forEach(p=>p.classList.toggle('hide',c!=='all'&&p.dataset.c!==c));});
// sample forms: nothing is sent
document.querySelectorAll('.form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();
  f.querySelector('.formnote').textContent='This is a design sample, so nothing was sent. On the real site this goes to the company inbox and WhatsApp.';}));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));

// small corner tag so nobody mistakes this preview for the live website
(()=>{const t=document.createElement('div');t.textContent='Design preview · ElephantLabs';t.style.cssText='position:fixed;left:10px;bottom:10px;z-index:99;background:#000c;color:#fff;font:600 11px/1 system-ui,sans-serif;letter-spacing:.04em;padding:7px 10px;border-radius:999px;pointer-events:none';document.body.appendChild(t)})();
