// --- flores esparcidas en el bosquecito de fondo ---
const meadowFlowers = document.getElementById('meadowFlowers');
const meadowPositions = [
  [40,205],[95,222],[150,200],[205,230],[260,208],[315,222],
  [380,198],[440,225],[500,205],[560,220],[615,200],[670,228],
  [730,206],[790,222],[845,200],[880,224],[20,235],[250,240],
  [470,238],[700,240]
];

function makeFlower(x, y, scale){
  const g = document.createElementNS('http://www.w3.org/2000/svg','g');
  g.setAttribute('transform', `translate(${x},${y}) scale(${scale})`);
  g.innerHTML = `
    <circle cx="0" cy="-5" r="3.4" fill="var(--flower-yellow)"/>
    <circle cx="4.6" cy="-2" r="3.4" fill="var(--flower-yellow)"/>
    <circle cx="2.8" cy="3.4" r="3.4" fill="var(--flower-yellow)"/>
    <circle cx="-2.8" cy="3.4" r="3.4" fill="var(--flower-yellow)"/>
    <circle cx="-4.6" cy="-2" r="3.4" fill="var(--flower-yellow)"/>
    <circle cx="0" cy="0" r="2.4" fill="var(--flower-center)"/>
  `;
  return g;
}

meadowPositions.forEach(([x,y])=>{
  const scale = 0.8 + Math.random()*0.6;
  meadowFlowers.appendChild(makeFlower(x, y, scale));
});

// --- petalos que caen al abrir el regalo ---
const petalsWrap = document.getElementById('petals');

function petalShape(){
  const useLeaf = Math.random() < 0.25;
  if(useLeaf){
    return `<svg viewBox="0 0 20 20" width="14" height="14"><ellipse cx="10" cy="10" rx="9" ry="5" fill="var(--leaf-green)" transform="rotate(${Math.floor(Math.random()*360)} 10 10)"/></svg>`;
  }
  return `<svg viewBox="0 0 20 20" width="14" height="14">
    <g transform="translate(10,10)">
      <circle cx="0" cy="-6" r="4.2" fill="var(--flower-yellow)"/>
      <circle cx="5.7" cy="-2.5" r="4.2" fill="var(--flower-yellow)"/>
      <circle cx="3.5" cy="4.5" r="4.2" fill="var(--flower-yellow)"/>
      <circle cx="-3.5" cy="4.5" r="4.2" fill="var(--flower-yellow)"/>
      <circle cx="-5.7" cy="-2.5" r="4.2" fill="var(--flower-yellow)"/>
      <circle cx="0" cy="0" r="3" fill="var(--flower-center)"/>
    </g>
  </svg>`;
}

function spawnPetals(){
  for(let i=0;i<22;i++){
    const p = document.createElement('div');
    p.className = 'petal';
    p.style.left = Math.random()*100 + '%';
    p.innerHTML = petalShape();
    const duration = 2.4 + Math.random()*1.6;
    const delay = Math.random()*0.6;
    p.style.animationDuration = duration + 's';
    p.style.animationDelay = delay + 's';
    petalsWrap.appendChild(p);
    setTimeout(()=>p.remove(), (duration+delay)*1000 + 200);
  }
}

// --- destellos alrededor de la caja al abrirse ---
const sparklesWrap = document.getElementById('sparkles');
const sparklePositions = [
  [50,120],[150,120],[100,95],[60,150],[140,150],[100,175],[40,180],[160,180]
];
sparklePositions.forEach(([x,y],i)=>{
  const c = document.createElementNS('http://www.w3.org/2000/svg','circle');
  c.setAttribute('cx', x);
  c.setAttribute('cy', y);
  c.setAttribute('r', 3.5);
  c.setAttribute('fill', 'var(--ribbon-gold)');
  c.style.animationDelay = (i*0.05) + 's';
  sparklesWrap.appendChild(c);
});

// --- logica de apertura del regalo ---
const giftWrap = document.getElementById('giftWrap');
const introText = document.getElementById('introText');
const instruction = document.getElementById('instruction');
const messageOverlay = document.getElementById('messageOverlay');
const closeBtn = document.getElementById('closeBtn');

let opened = false;

function openGift(){
  if(opened) return;
  opened = true;
  giftWrap.classList.add('opening');
  introText.classList.add('hidden');
  instruction.classList.add('hidden');
  spawnPetals();

  setTimeout(()=>{
    giftWrap.classList.add('opened');
    messageOverlay.classList.add('visible');
  }, 1100);
}

giftWrap.addEventListener('click', openGift);
giftWrap.addEventListener('keydown', (e)=>{
  if(e.key === 'Enter' || e.key === ' '){
    e.preventDefault();
    openGift();
  }
});

closeBtn.addEventListener('click', ()=>{
  messageOverlay.classList.remove('visible');
});
messageOverlay.addEventListener('click', (e)=>{
  if(e.target === messageOverlay){
    messageOverlay.classList.remove('visible');
  }
});
