const IMG={
 "basic": "images/basic.webp",
 "overload": "images/overload.webp",
 "chickpop": "images/chickpop.webp",
 "combo1": "images/combo1.webp",
 "combo2": "images/combo2.webp",
 "combo3": "images/combo3.webp",
 "combo4": "images/combo4.webp",
 "enoki": "images/enoki.webp",
 "roll": "images/roll.webp",
 "fries": "images/fries.webp",
 "twist": "images/twist.webp",
 "yak1": "images/yak1.webp",
 "yak2": "images/yak2.webp",
 "straw": "images/straw.webp",
 "vanilla": "images/vanilla.webp",
 "spanish": "images/spanish.webp",
 "dutch": "images/dutch.webp",
 "water": "images/water.webp",
 "coke": "images/coke.webp",
 "dew": "images/dew.webp",
 "sprite": "images/sprite.webp",
 "ad_egg": "images/ad_egg.webp",
 "ad_kimchi": "images/ad_kimchi.webp",
 "ad_spam": "images/ad_spam.webp",
 "ad_chick": "images/ad_chick.webp",
 "ad_nori": "images/ad_nori.webp",
 "ad_cheese": "images/ad_cheese.webp",
 "ad_dump": "images/ad_dump.webp",
 "ad_saus": "images/ad_saus.webp"
};
const FL=[['Original',0],['Cheese',0],['Creamy Carbonara',0]],CS=[['Spam',0],['Chick-Spam +10',10]],FRY=[[['Sour Cream',0],['Cheese',0],['BBQ',0]],[['Regular',0],['Oversize +30',30]]];
const TW=[[['Sour Cream',0],['Cheese',0],['BBQ',0]],[['Regular',0],['Oversize +20',20]]];
const FOODS=[
{k:'basic',n:'Basic Samyang',p:189,y:1,fl:'Original | Cheese | Creamy Carbonara',g:[FL],st:1},
{k:'overload',n:'Basic Overload',p:259,fl:'Original | Cheese | Creamy Carbonara',inc:'Samyang, Egg, Spam (Pork), Nori',nt:'Add 10 for Chick-Spam',g:[FL,CS],st:1},
{k:'chickpop',n:'Samyang Chick-Pop Fries',p:259,y:1,hot:1,fl:'Original | Cheese | Creamy Carbonara',inc:'Samyang, Fries, Chick-Pop',g:[FL],st:1},
{k:'combo1',n:'Combo 1',p:289,hot:1,fl:'Original | Cheese | Creamy Carbonara',inc:'Samyang, Egg, Spam, Nori, Chick-Pop',nt:'Add 10 for Chick-Spam',g:[FL,CS],st:1},
{k:'combo2',n:'Combo 2',p:319,y:1,fl:'Original | Cheese | Creamy Carbonara',inc:'Samyang, Egg, Spam, Nori, Chick-Pop, Kimchi',nt:'Add 10 for Chick-Spam',g:[FL,CS],st:1},
{k:'combo3',n:'Combo 3',p:389,hot:1,fl:'Original | Cheese | Creamy Carbonara',inc:'Samyang, Egg, Spam, Nori, Chick-Pop, Fried Dumplings',nt:'Add 10 for Chick-Spam',g:[FL,CS],st:1},
{k:'combo4',n:'Combo 4',p:399,y:1,hot:1,fl:'Original | Cheese | Creamy Carbonara',inc:'Samyang, Egg, Spam, Nori, Jumbo Sausage',nt:'Add 10 for Chick-Spam',g:[FL,CS],st:1},
{k:'enoki',n:'Pork Enoki Mushroom',p:189,hot:1,inc:'Pork, Enoki Mushroom, Egg, Melted Cheese',nt:'Add 80 for 9 pcs',g:[[['Regular',0],['9 pcs +80',80]]],st:1},
{k:'roll',n:'Chicken Seaweed Roll',p:149,y:1,hot:1,inc:'5 pcs seaweed chicken roll'},
{k:'fries',n:'French Fries',p:89,s:3,hot:1,nt:'Oversize add 30',g:FRY},
{k:'twist',n:'Twisted Fries',p:179,s:3,y:1,hot:1,inc:'Choose your flavor: Sour Cream, Cheese, BBQ',nt:'Oversize add 20',g:TW}];
const ADD=[['egg','Egg',19],['kimchi','Kimchi',89],['spam','Spam',49],['chick','Chick-Pop',89],['nori','Nori',49],['cheese','Melted Cheese',49],['dump','Fried Dumplings',189],['saus','Jumbo Sausage',129]];
const YK=[['No Yakult 79',-10],['Regular 89',0],['With Yakult +20',20]];
const DRINKS=[
{k:'yak1',n:'Lemonade Yakult Frizz',p:89,y:1,hot:1,s:6,inc:'No Yakult 79 only',g:[YK],d:1,dr:1},
{k:'yak2',n:'Lemonade Yakult Frizz',p:89,s:6,inc:'Blue lemonade. With Yakult add 20',g:[YK],d:1,dr:1},
{k:'straw',n:'Strawberry Latte',p:99,s:3,L:1,inc:'Creamy iced latte with sweet strawberry syrup swirls and rich coffee flavor in every sip.',dr:1},
{k:'vanilla',n:'French Vanilla Latte',p:119,y:1,hot:1,s:3,inc:'Creamy iced latte blended with smooth French vanilla flavor and rich espresso.',dr:1},
{k:'spanish',n:'Spanish Latte',p:109,y:1,hot:1,s:3,inc:'A creamy iced latte made with rich espresso and sweet milk. Smooth, bold and balanced.',dr:1},
{k:'dutch',n:'Lemonade Dutch',p:139,s:3,inc:'Lemonade with Dutch Mill strawberry.',dr:1}];
const SODA=[['water','Bottled Water',30],['coke','Coke',89],['dew','Mountain Dew',89],['sprite','Sprite',89]];
const MENU=[...FOODS,...DRINKS,...ADD.map(a=>({n:a[1],p:a[2]})),...SODA.map(a=>({n:a[1],p:a[2]}))];
const $=s=>document.querySelector(s),peso=n=>'₱'+n;
let cat='All',tray=[],addons=new Set();
/* title letters */
(()=>{const t=$('#title');const parts=t.innerHTML.split('<br>');t.innerHTML=parts.map(p=>[...p].map((ch,i)=>ch===' '?'<span class="sp2"></span>':`<span style="animation-delay:${Math.random()*.7}s">${ch}</span>`).join('')).join('<br>')})();
/* floating food */
function floaty(){const h=$('#hero'),f=document.createElement('div');f.className='fl';f.textContent=['🍜','🔥','🍟','🥤','🌶️','🍳','🧀'][Math.random()*7|0];
f.style.left=Math.random()*100+'%';f.style.fontSize=(1.4+Math.random()*2)+'rem';f.style.animationDuration=(7+Math.random()*7)+'s';h.appendChild(f);setTimeout(()=>f.remove(),15000)}
setInterval(floaty,900);for(let i=0;i<6;i++)setTimeout(floaty,i*200);
$('#hero').addEventListener('pointermove',e=>{const r=e.currentTarget.getBoundingClientRect();e.currentTarget.style.setProperty('--mx',(e.clientX-r.left)/r.width*100+'%');e.currentTarget.style.setProperty('--my',(e.clientY-r.top)/r.height*100+'%')});
/* marquee */
$('#mq').innerHTML=Array(8).fill('🔥 Anti-gutom 🍜 Samyang 🍟 Fries 🥤 Drinks 🌶️ Spicy ').join('');
/* open status 3PM-4AM */
function stat(){const d=new Date(),h=d.getHours()+d.getMinutes()/60,open=h>=15||h<4,s=$('#status');s.classList.toggle('open',open);
$('#stxt').textContent=open?'Open now · until 4 AM':'Closed now · opens at 3 PM'}
stat();setInterval(stat,60000);
/* menu boards */
function card(m,i,drink){const el=document.createElement('article');el.className='mc'+(m.y?' y':'')+(m.L?' L':'')+(drink?' dr':'')+((m.s||2)>=6?' w':'');
el.style.cssText=`--s:${m.s||2};--i:${i%6};--r:${(i%2?3:-3)}deg`;const sel=(m.g||[]).map(g=>m.d!=null?m.d:0);
const gp=(m.g||[]).map((g,gi)=>`<div class="gp">${g.map((c,ci)=>`<button class="c${ci===(m.d!=null?m.d:0)?' on':''}" data-g="${gi}" data-c="${ci}">${c[0]}</button>`).join('')}</div>`).join('');
el.innerHTML=`${m.hot?'<span class="th">👍</span>':''}<span class="mp">${m.p}</span>${m.st?'<i class="stm" style="left:34%;animation-delay:0s"></i><i class="stm" style="left:46%;animation-delay:1s"></i><i class="stm" style="left:58%;animation-delay:2s"></i>':''}<img class="ph" src="${IMG[m.k]}" alt="${m.n}"><div class="tx"><h3>${m.n}</h3>${m.fl?`<p>Flavor : ${m.fl}</p>`:''}${m.inc?`<p>${m.inc}</p>`:''}${m.nt?`<p class="nt">${m.nt}</p>`:''}</div><div class="act">${gp}<button class="btn">+ Add</button></div>`;
const pick=(m.g||[]).map(()=>m.d!=null?m.d:0);
el.querySelectorAll('.c').forEach(b=>b.onclick=()=>{const g=+b.dataset.g;pick[g]=+b.dataset.c;el.querySelectorAll(`.c[data-g="${g}"]`).forEach(x=>x.classList.toggle('on',x===b))});
const btn=el.querySelector('.btn');btn.onclick=e=>{ripple(e);let d=0,v=[];(m.g||[]).forEach((g,gi)=>{d+=g[pick[gi]][1];v.push(g[pick[gi]][0])});add({n:m.n,v:v.join(' · '),p:m.p+d},btn)};
return el}
function strip(title,items,cls){const s=document.createElement('div');s.className='strip '+(cls||'');s.innerHTML=`<b>${title}</b>`+items.map((a,i)=>`<button class="it${cls?' bt':''}" style="--i:${i}" aria-label="Add ${a[1]}"><img src="${IMG[(cls?'':'ad_')+a[0]]}" alt="${a[1]}"><span>${a[2]}</span></button>`).join('');
s.querySelectorAll('.it').forEach((b,i)=>b.onclick=()=>{b.classList.remove('ok');void b.offsetWidth;b.classList.add('ok');add({n:items[i][1],v:cls?'':'Add-on',p:items[i][2]},b)});return s}
FOODS.forEach((m,i)=>$('#fg').appendChild(card(m,i)));$('#fg').appendChild(strip('Add ons:',ADD));
DRINKS.forEach((m,i)=>$('#dg').appendChild(card(m,i,1)));$('#dg').appendChild(strip('Soda and other drinks:',SODA,'dr'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.mc,.strip').forEach(e=>io.observe(e));
/* tray */
function add(it,from){const f=tray.find(x=>x.n===it.n&&x.v===it.v);f?f.q++:tray.push({...it,q:1});fly(from);upd();toast(`${it.n} added`)}
function upd(){const c=tray.reduce((s,x)=>s+x.q,0),t=tray.reduce((s,x)=>s+x.q*x.p,0);$('#cnt').textContent=c;$('#tot').textContent=peso(t);
const b=$('#trayBtn');b.classList.remove('bump');void b.offsetWidth;b.classList.add('bump');
$('#list').innerHTML=tray.length?tray.map((x,i)=>`<div class="li"><div><b>${x.n}</b>${x.v&&x.v!=='Add-on'?`<small>${x.v}</small>`:''}<small>${peso(x.p)} each</small></div><div class="q" style="flex:none"><button data-i="${i}" data-d="-1" aria-label="Less">−</button><b>${x.q}</b><button data-i="${i}" data-d="1" aria-label="More">+</button></div></div>`).join(''):'<p class="empty">Your tray is empty. Add something spicy 🌶️</p>'}
$('#list').onclick=e=>{const b=e.target.closest('button');if(!b)return;const x=tray[+b.dataset.i];x.q+=+b.dataset.d;if(x.q<1)tray.splice(+b.dataset.i,1);upd()};
upd();
$('#trayBtn').onclick=()=>document.body.classList.add('open');
['#close','#veil'].forEach(s=>$(s).onclick=()=>document.body.classList.remove('open'));
addEventListener('keydown',e=>{if(e.key==='Escape')document.body.classList.remove('open')});
$('#order').onclick=e=>{if(!tray.length)return toast('Add something to your tray first');if(!user){openAuth('Log in to place your order',()=>$('#order').click());return}confetti(e.clientX,e.clientY);
const H=S.get(HK(),[]);H.unshift({t:Date.now(),items:tray.map(x=>({...x})),total:tray.reduce((s,x)=>s+x.q*x.p,0)});S.set(HK(),H.slice(0,40));
toast('Show this tray to the counter. Salamat! 🔥');setTimeout(()=>{tray=[];upd();document.body.classList.remove('open')},1200)};
/* fx */
function ripple(e){const b=e.currentTarget,r=b.getBoundingClientRect(),s=document.createElement('span');s.className='rip';const d=Math.max(r.width,r.height);
s.style.cssText=`width:${d}px;height:${d}px;left:${e.clientX-r.left-d/2}px;top:${e.clientY-r.top-d/2}px`;b.appendChild(s);setTimeout(()=>s.remove(),600)}
document.querySelectorAll('.btn').forEach(b=>b.addEventListener('click',ripple));
function fly(from){const a=from.getBoundingClientRect(),t=$('#trayBtn').getBoundingClientRect(),f=document.createElement('div');f.className='fly';f.textContent='🍜';
f.style.left=a.left+a.width/2+'px';f.style.top=a.top+'px';document.body.appendChild(f);
requestAnimationFrame(()=>{f.style.transform=`translate(${t.left+t.width/2-a.left-a.width/2}px,${t.top-a.top}px) scale(.4) rotate(540deg)`;f.style.opacity='.2'});setTimeout(()=>f.remove(),850)}
function confetti(x,y){for(let i=0;i<40;i++){const c=document.createElement('i');c.className='cf';c.style.left=x+'px';c.style.top=y+'px';
c.style.background=['#ffb81c','#ff5a1f','#fff6e6','#d7141a'][i%4];c.style.setProperty('--dx',(Math.random()-.5)*420+'px');c.style.setProperty('--dy',(Math.random()*-300-40)+'px');
document.body.appendChild(c);setTimeout(()=>c.remove(),1700)}}
let tt;function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('on'),1800)}
$('#surprise').onclick=e=>{const m=MENU[Math.random()*MENU.length|0];confetti(e.clientX,e.clientY);toast(`Try the ${m.n} (${peso(m.p)})`)};
/* nav hide on scroll down */
let ly=0;addEventListener('scroll',()=>{const y=scrollY;$('#nav').classList.toggle('hide',y>ly&&y>200);ly=y},{passive:true});

/* pages */
const S={get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const CONTACT={phone:'',messenger:'',facebook:'',instagram:'',email:''}; /* fill these in */
const VIEWS=['home','dashboard','about','contact'];let cur='',sig='';
$('#pk').innerHTML=[...FOODS,...DRINKS].filter(m=>m.hot).map((m,i)=>`<div class="pc" style="--i:${i}"><img src="${IMG[m.k]}" alt="${m.n}"><b>${m.n}</b>${peso(m.p)}<br><button class="btn" data-i="${i}">+ Add</button></div>`).join('');
const TOP=[...FOODS,...DRINKS].filter(m=>m.hot);
$('#pk').onclick=e=>{const b=e.target.closest('.btn');if(!b)return;ripple({currentTarget:b,clientX:e.clientX,clientY:e.clientY});const m=TOP[+b.dataset.i];let d=0,v=[];(m.g||[]).forEach(g=>{const c=g[m.d!=null?m.d:0];d+=c[1];v.push(c[0])});add({n:m.n,v:v.join(' · '),p:m.p+d},b)};
$('#nav').querySelector('img').onclick=()=>location.hash='home';
function countUp(el,to,fmt){const t0=performance.now();(function f(t){const k=Math.min(1,(t-t0)/900),e=1-Math.pow(1-k,3);el.textContent=fmt(Math.round(to*e));if(k<1)requestAnimationFrame(f)})(t0)}
function dash(force){const H=S.get(HK(),[]),s=JSON.stringify([tray,H]);if(!force&&s===sig)return;sig=s;
const cnt=tray.reduce((a,x)=>a+x.q,0),tot=tray.reduce((a,x)=>a+x.q*x.p,0),sp=H.reduce((a,o)=>a+o.total,0);
if(force){countUp($('#d-cnt'),cnt,n=>n);countUp($('#d-tot'),tot,peso);countUp($('#d-ord'),H.length,n=>n);countUp($('#d-sp'),sp,peso)}else{$('#d-cnt').textContent=cnt;$('#d-tot').textContent=peso(tot);$('#d-ord').textContent=H.length;$('#d-sp').textContent=peso(sp)}
$('#d-tray').innerHTML=tray.length?tray.map(x=>`<div class="rw"><span>${x.q}× ${x.n}${x.v&&x.v!=='Add-on'?`<small>${x.v}</small>`:''}</span><b>${peso(x.q*x.p)}</b></div>`).join(''):'<p class="empty">Tray is empty. Go grab something spicy 🌶️</p>';
const st=H.length%10;$('#stamps').innerHTML=Array.from({length:10},(_,i)=>`<i class="${i<st?'f':''}" style="--i:${i}">${i<st?'🔥':(i===9?'🎁':'')}</i>`).join('');
$('#stp').innerHTML=`<b>${st}/10</b> stamps. ${10-st} more order${10-st>1?'s':''} to your next reward. <small>(A fun tracker for now. Ask JJ’s about real rewards.)</small>`;
const cn={};H.forEach(o=>o.items.forEach(x=>cn[x.n]=(cn[x.n]||0)+x.q));const top=Object.entries(cn).sort((a,b)=>b[1]-a[1]).slice(0,4);
$('#d-top').innerHTML=top.length?top.map(([n,q],i)=>`<div class="rw" style="animation-delay:${i*80}ms"><span>${['🥇','🥈','🥉','⭐'][i]} ${n}</span><b>${q}×</b></div>`).join(''):'<p class="empty">Place an order to see your favorites.</p>';
const last=H.slice(0,7).reverse(),mx=Math.max(1,...last.map(o=>o.total));
$('#bars').innerHTML=last.length?last.map((o,i)=>`<div style="height:${o.total/mx*100}%;animation-delay:${i*90}ms"><span>${o.total}</span></div>`).join(''):'<p class="empty" style="align-self:center">No orders yet.</p>';
$('#hist').innerHTML=H.length?H.slice(0,8).map((o,i)=>`<div class="rw"><span>${new Date(o.t).toLocaleString([],{month:'short',day:'numeric',hour:'numeric',minute:'2-digit'})}<small>${o.items.map(x=>x.q+'× '+x.n).join(', ')}</small></span><span><b>${peso(o.total)}</b> <button class="btn" data-r="${i}" style="padding:6px 12px;margin:0 0 0 8px;font-size:.78rem">Reorder</button></span></div>`).join(''):'<p class="empty">No orders yet. Your history will show up here.</p>'}
$('#hist').onclick=e=>{const b=e.target.closest('[data-r]');if(!b)return;S.get(HK(),[])[+b.dataset.r].items.forEach(x=>{const f=tray.find(y=>y.n===x.n&&y.v===x.v);f?f.q+=x.q:tray.push({...x})});upd();document.body.classList.add('open');toast('Order added to your tray')};
$('#clr').onclick=()=>{S.set(HK(),[]);dash(true);toast('History cleared')};
$('#d-open').onclick=()=>document.body.classList.add('open');
$('#nm').value=S.get('jj_name','');$('#nm').oninput=e=>S.set('jj_name',e.target.value);
setInterval(()=>{if(cur==='dashboard')dash()},500);
/* contact */
$('#chrs').innerHTML='Open daily <b>3 PM – 4 AM</b> · <span id="cst"></span>';
function cst(){const d=new Date(),h=d.getHours(),o=h>=15||h<4;$('#cst').textContent=o?'Open now 🟢':'Closed now, opens 3 PM'}cst();
const CL=[['phone','📞','Call',v=>'tel:'+v],['messenger','💬','Messenger',v=>v],['facebook','📘','Facebook',v=>v],['instagram','📷','Instagram',v=>v],['email','✉️','Email',v=>'mailto:'+v]];
$('#chn').innerHTML=CL.map(([k,i,l,f])=>CONTACT[k]?`<a class="cl" href="${f(CONTACT[k])}" target="_blank" rel="noopener">${i} ${l}: ${CONTACT[k]}</a>`:`<div class="cl" style="opacity:.55">${i} ${l}: coming soon</div>`).join('');
$('#cs').onclick=e=>{const n=$('#cn').value.trim(),m=$('#cm').value.trim();if(!n||!m){$('#cok').style.color='#c3101a';$('#cok').textContent='Please add your name and a message.';return}
const txt=`Hi JJ’s! I’m ${n}. I want to: ${$('#ck').value}. ${m}`;
if(CONTACT.email)location.href=`mailto:${CONTACT.email}?subject=${encodeURIComponent('Message from '+n)}&body=${encodeURIComponent(txt)}`;
else try{navigator.clipboard.writeText(txt)}catch(x){}
const L=S.get('jj_msgs',[]);L.unshift({t:Date.now(),txt});S.set('jj_msgs',L.slice(0,10));
confetti(e.clientX,e.clientY);$('#cok').style.color='#0a7a2f';$('#cok').textContent=CONTACT.email?'Opening your email app…':'Message ready and copied. Paste it to us on Messenger. Salamat!';$('#cm').value=''};
/* auth (demo: accounts live in this browser only) */
let user=null,mode='login',after=null;
{const e=S.get('jj_session',null),U=S.get('jj_users',{});if(e&&U[e])user={email:e,name:U[e].name}}
const HK=()=>'jj_hist_'+(user?user.email:'guest');
async function hp(pw,salt){try{const k=await crypto.subtle.importKey('raw',new TextEncoder().encode(pw),'PBKDF2',false,['deriveBits']),b=await crypto.subtle.deriveBits({name:'PBKDF2',salt:new TextEncoder().encode(salt),iterations:100000,hash:'SHA-256'},k,256);return[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}catch(e){let x=0;for(const c of salt+pw)x=(x*31+c.charCodeAt(0))|0;return'f'+x}}
function authUI(){const b=$('#authBtn');b.classList.toggle('in',!!user);b.innerHTML=user?`👤 <span class="al">${user.name.replace(/[<>&]/g,'')}</span>`:'👤 <span class="al">Log in</span>';$('#um').classList.remove('on');
$('#nm').value=user?user.name:S.get('jj_name','');sig='';if(cur==='dashboard')dash(true)}
function setMode(m){mode=m;$('.at').classList.toggle('s',m==='signup');document.querySelectorAll('.at button').forEach(b=>b.classList.toggle('on',b.dataset.m===m));$('#af').classList.toggle('su',m==='signup');$('#asub').textContent=m==='signup'?'Create my account':'Log in';$('#ap').autocomplete=m==='signup'?'new-password':'current-password';$('#aerr').textContent=''}
function openAuth(msg,cb){after=cb||null;$('#amsg').textContent=msg||'Welcome to JJ’s. Log in or sign up to continue.';setMode('login');$('#auth').classList.add('on');$('#auth').setAttribute('aria-hidden','false');setTimeout(()=>$('#ae').focus(),300)}
function closeAuth(){$('#auth').classList.remove('on');$('#auth').setAttribute('aria-hidden','true');$('#um').classList.remove('on')}
function aerr(m){$('#aerr').textContent=m;const a=$('.ap');a.classList.remove('shake');void a.offsetWidth;a.classList.add('shake')}
$('#authBtn').onclick=()=>user?$('#um').classList.toggle('on'):openAuth();
$('#um').onclick=e=>{const b=e.target.closest('button');if(!b)return;$('#um').classList.remove('on');if(b.dataset.a==='dash')location.hash='dashboard';else{user=null;S.set('jj_session',null);authUI();tray=[];upd();if(cur==='dashboard')location.hash='home';toast('Logged out. See you soon!')}};
$('#ax').onclick=closeAuth;$('#auth').onclick=e=>{if(e.target.id==='auth')closeAuth()};
addEventListener('keydown',e=>{if(e.key==='Escape')closeAuth()});
document.querySelectorAll('.at button').forEach(b=>b.onclick=()=>setMode(b.dataset.m));
$('#ay').onclick=()=>{const i=$('#ap');i.type=i.type==='password'?'text':'password'};
$('#af').onsubmit=async e=>{e.preventDefault();const n=$('#an').value.trim(),em=$('#ae').value.trim().toLowerCase(),pw=$('#ap').value,U=S.get('jj_users',{});
if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em))return aerr('Please enter a valid email.');
if(mode==='signup'){if(!n)return aerr('Please enter your name.');if(pw.length<6)return aerr('Password needs at least 6 characters.');if(U[em]){setMode('login');return aerr('That email already has an account. Log in instead.')}
const salt=Math.random().toString(36).slice(2);U[em]={name:n,salt,hash:await hp(pw,salt)};S.set('jj_users',U)}
else{const u=U[em];if(!u||u.hash!==await hp(pw,u.salt))return aerr('Wrong email or password.')}
user={email:em,name:U[em].name};S.set('jj_session',em);S.set('jj_name',user.name);$('#af').reset();closeAuth();authUI();confetti(innerWidth/2,innerHeight/2);toast(`Welcome, ${user.name}! 🔥`);const f=after;after=null;if(f)setTimeout(f,400)};
authUI();
/* router */
function route(){const h=location.hash.slice(1)||'home',v=VIEWS.includes(h)?h:'home';
if(v==='dashboard'&&!user){location.hash=cur||'home';openAuth('Log in to open your dashboard',()=>{location.hash='dashboard'});return}
if(v!==cur){document.querySelectorAll('.view').forEach(x=>x.classList.toggle('on',x.id==='v-'+v));document.querySelectorAll('.links a').forEach(a=>a.classList.toggle('act',a.dataset.v===v));cur=v;scrollTo({top:0});
if(v==='dashboard')dash(true);if(v==='about')document.querySelectorAll('[data-n]').forEach(el=>countUp(el,+el.dataset.n,n=>n));if(v==='contact')cst()}
if(!VIEWS.includes(h)){const t=document.getElementById(h);if(t)setTimeout(()=>t.scrollIntoView({behavior:'smooth'}),60)}}
addEventListener('hashchange',route);route();
