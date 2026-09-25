const config = window.SITE_CONFIG;
const products = window.PRODUCTS;
const solutions = window.SOLUTIONS;
const main = document.querySelector('#main');
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const productHref = p => `#/products/${encodeURIComponent(p.id)}`;
const button = (label, href, secondary=false) => `<a class="button ${secondary?'button-secondary':''}" href="${href}">${label}<span aria-hidden="true">↗</span></a>`;
const card = p => `<a class="product-card" href="${productHref(p)}"><span class="product-card-top"><span>${esc(p.category)}</span><span aria-hidden="true">↗</span></span>${p.image?`<span class="product-card-image"><img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy" decoding="async"></span>`:`<span class="product-model">${esc(p.id)}</span>`}<strong>${esc(p.name)}</strong><span class="product-summary">${esc(p.summary)}</span><span class="card-more">Explore model <span aria-hidden="true">→</span></span></a>`;
function layout(){
  document.querySelector('#brand').innerHTML = config.logo ? `<img src="${esc(config.logo)}" alt="${esc(config.brand)}">` : `<span class="brand-mark" aria-hidden="true">A</span><strong>${esc(config.brand)}</strong>`;
  document.querySelector('#footer-brand').textContent = config.brand;
  document.title = `${config.brand} | Service Robots`;
}
function home(){return `<section class="hero"><div class="hero-content"><div class="eyebrow">COMMERCIAL SERVICE ROBOTICS <span> / </span> ${esc(config.region)}</div><h1>Robots that make everyday operations move.</h1><p>Explore KEENON cleaning, delivery and service robots with a local partner to help select the right model for your site.</p><div class="hero-actions">${button('Explore robots','#/products')}${button('Discuss your space','#/contact',true)}</div><div class="hero-index"><span>01 / 03</span><span>CLEANING · DELIVERY · SERVICE</span></div></div><div class="hero-art" aria-hidden="true"><div class="hero-grid"></div><div class="hero-word">MOVE<br>BETTER<span>.</span></div><div class="hero-orbit"></div></div></section>
  <section class="section" aria-labelledby="featured"><div class="section-heading"><div><span class="eyebrow">SELECTED MODELS</span><h2 id="featured">Meet the lineup</h2></div><a class="text-link" href="#/products">View all robots ↗</a></div><div class="cards">${products.filter(p=>p.featured).map(card).join('')}</div></section>
  <section class="section dark-band"><span class="eyebrow">BY ENVIRONMENT</span><h2>Designed around the work you do.</h2><div class="solution-list">${solutions.slice(0,4).map((s,i)=>`<a href="#/solutions/${s.id}"><span>0${i+1}</span><strong>${esc(s.name)}</strong><span aria-hidden="true">↗</span></a>`).join('')}</div></section>
  <section class="section closing"><div><span class="eyebrow">START A CONVERSATION</span><h2>Find the right robot for your operation.</h2></div>${button('Contact us','#/contact')}</section>`}
function catalog(){let categories=['All',...new Set(products.map(p=>p.category))];return `<section class="page-intro"><span class="eyebrow">PRODUCT CATALOG</span><h1>Explore the robots.</h1><p>Browse the manufacturer's current categories. Ask us about local availability, demonstrations and deployment.</p></section><section class="section catalog"><div class="filters" role="group" aria-label="Filter by category">${categories.map(c=>`<button type="button" data-category="${esc(c)}" aria-pressed="${c==='All'}">${esc(c)}</button>`).join('')}</div><p class="count" aria-live="polite">${products.length} models</p><div class="cards" id="product-grid">${products.map(card).join('')}</div></section>`}

function c40Details(){
  const m='https://storage.keenon.cn/uploads/';
  const media=(path,alt)=>`<img src="${m+path}" alt="${esc(alt)}" loading="lazy" decoding="async">`;
  const specs=[
    ['Dimensions without squeegee','578 × 500 × 690 mm','22.76 × 19.69 × 27.17 in'],
    ['Dimensions with squeegee','616 × 550 × 690 mm','24.25 × 21.65 × 27.17 in'],
    ['Sweeping width','560 mm with dual side brushes','22.05 in'],
    ['Vacuuming and scrubbing width','400 mm','15.75 in'],
    ['Clean / waste water tanks','16 L / 11 L','4.23 / 2.91 US gal'],
    ['Maximum runtime','Up to 5 h scrubbing; up to 12 h sweeping',''],
    ['Battery','DC 25.6 V, 50 Ah',''],
    ['Weight with battery','70 kg','154.3 lb'],
    ['Minimum passage width','650 mm','25.59 in'],
    ['Charging time','2 h; quick battery replacement supported',''],
    ['Cleaning efficiency','Up to 1,100 m²/h','Up to 11,840 ft²/h'],
    ['Dust bag','8 L','Manufacturer estimates 4–8 days of dust']
  ];
  const accessories=['Sweeping brush','Scrubbing brush','Squeegee blade','Side brush','HEPA filter','Sweeping fiber brush','Dust mopping brush','Dust bag'];
  return `<section class="section c40-intro"><span class="eyebrow">KLEENBOT C40 / PRODUCT OVERVIEW</span><h2>Four cleaning modes. One compact robot.</h2><p>The C40 sweeps, vacuums, scrubs and dust pushes. Its triple-brush arrangement separates dry debris from wet cleaning, supporting routine care across mixed floor surfaces.</p><div class="c40-highlights"><div><strong>4 in 1</strong><span>Cleaning functions</span></div><div><strong>400 mm</strong><span>Vacuum and scrub width</span></div><div><strong>1,100 m²/h</strong><span>Maximum rated cleaning efficiency</span></div><div><strong>650 mm</strong><span>Minimum passage width</span></div></div></section>
  <section class="section c40-split"><div>${media('20260723/374f60b7fb3b90e5bd457c575b836cc6.jpg','KLEENBOT C40 product showcase')}</div><div><span class="eyebrow">CLEANING SYSTEM</span><h2>Built for dry and wet messes.</h2><p>Two front rollers collect dry debris before the rear roller scrubs the floor. The separation helps keep the dust compartment dry while the suction system recovers wastewater.</p><ul><li>Handles hair, paper scraps and dust as well as everyday liquid spills.</li><li>Manufacturer states floors can dry in around 30 seconds after scrubbing under suitable conditions.</li><li>Designed for short-pile carpet and common hard floors including tile, vinyl, wood, marble, epoxy, granite and artificial stone. Match the mode to the surface.</li></ul></div></section>
  <section class="section c40-section"><span class="eyebrow">OPERATION AND CONTROL</span><h2>Manage cleaning around your schedule.</h2><div class="c40-feature-grid"><article><h3>Digital management</h3><p>Use the manufacturer’s app or web tools for tasks, status, remote dispatch and cleaning reports.</p></article><article><h3>Navigation and detection</h3><p>VSLAM route planning works with LiDAR, stereo vision, line lasers and ultrasonic sensors to detect obstacles.</p></article><article><h3>Mixed floor workflows</h3><p>Automatic carpet and hard-floor recognition, pause-and-resume scanning and multi-robot scheduling support varied sites.</p></article><article><h3>Building integration</h3><p>The official product page lists IoT-enabled elevator and door passage. Confirm compatibility and installation needs for each building.</p></article></div></section>
  <section class="section c40-split c40-split-reverse"><div>${media('20260924/acbfbdb5def648e39eecbcf3eed27520.jpg','C40 cleaning feature illustration')}</div><div><span class="eyebrow">MAINTENANCE</span><h2>Designed for quick daily care.</h2><p>Modular components, a removable washable dirty-water tank and a replaceable battery simplify routine upkeep. KEENON states a five-second battery swap and about 35 seconds for daily care.</p><p>With compatible equipment, the robot can return to charge and automate fresh-water filling, wastewater drainage and detergent dosing. Ask us which station and site connections are required.</p></div></section>
  <section class="section c40-gallery"><div class="section-heading"><div><span class="eyebrow">PRODUCT IMAGES</span><h2>See the C40 in detail.</h2></div></div><div class="c40-gallery-grid">${media('20260924/fbd22c652d794a2d8de4cf3069d2cb8e.jpg','C40 feature view')}${media('20260804/572f8ab6f027921676f84d06c9e10e3b.png','C40 cleaning system illustration')}${media('20260723/c0e708a8f1f458a625affaca55682fa9.jpg','C40 in an application setting')}</div></section>
  <section class="section c40-specs"><span class="eyebrow">TECHNICAL DATA</span><h2>Product specifications.</h2><div class="c40-spec-list">${specs.map(([name,metric,imperial])=>`<div><dt>${esc(name)}</dt><dd>${esc(metric)}${imperial?`<small>${esc(imperial)}</small>`:''}</dd></div>`).join('')}</div><p class="c40-note">Figures are manufacturer-published ratings. Actual results depend on conditions, configuration and usage.</p></section>
  <section class="section c40-accessories"><span class="eyebrow">CONSUMABLES AND PARTS</span><h2>Available accessories.</h2><ul>${accessories.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><p>Confirm accessory availability and compatibility before ordering.</p></section>
  <section class="section c40-cta"><div><span class="eyebrow">PLAN YOUR DEPLOYMENT</span><h2>Is C40 a fit for your space?</h2><p>Tell us about your floors, square footage, cleaning schedule and water access. We can discuss the robot and any required station or building integration.</p></div>${button('Ask about C40','#/contact?model=C40')}</section>
  <div class="c40-source">Images and product information: <a href="https://www.keenon.com/en/product/C40" target="_blank" rel="noopener">KEENON Robotics C40 official product page ↗</a></div>`;
}

function expandedProductDetails(id){
  const base='https://storage.keenon.cn/uploads/';
  const img=(path,alt)=>`<img src="${base+path}" alt="${esc(alt)}" loading="lazy" decoding="async">`;
  const data={
    C30:{
      name:'KLEENBOT C30',category:'DRY FLOOR CARE',headline:'Three dry-cleaning tasks in one robot.',
      lead:'C30 sweeps, vacuums and dust mops commercial floors. An extendable handle supports manual mapping before scheduled autonomous cleaning.',
      stats:[['3 in 1','Sweeping, vacuuming, dust mopping'],['610 mm','Maximum cleaning width'],['2,500 m²','Claimed coverage per full charge'],['19,000 Pa','Maximum suction']],
      hero:'20260724/26549e9a7428e3333370d565e2f0733b.jpg',
      gallery:['20260924/b8ff4172ff0f4dc3afd5be09f9983975.jpg','20260924/55d9c1cad82c4b78907469d1fffa2289.jpg','20260723/6d532097b8fe334ea2eae34a9a7f5173.jpg'],
      features:[
        ['Sweeping, vacuuming and dust mopping','Dry floor care across a 610 mm maximum working width. C30 is a dry-cleaning model; it does not perform wet scrubbing.'],
        ['Extended cleaning sessions','KEENON states that a full charge can cover up to 2,500 m², depending on floor and operating conditions.'],
        ['Two operating modes','Use the extendable handle for manual map building, then assign autonomous cleaning tasks.'],
        ['Remote task management','Assign and follow cleaning work and review robot information through the KEENON app.']
      ],
      specs:[
        ['Dimensions without dust mop','49.0 × 52.0 × 75.0 cm','19.29 × 20.47 × 29.53 in'],
        ['Weight with battery','35 kg','77 lb'],
        ['Maximum moving speed','0.8 m/s','2.63 ft/s'],
        ['Battery life','Up to 6 h sweeping and vacuuming; up to 10 h dust mopping',''],
        ['Charging time','5–6 h',''],
        ['Cleaning efficiency','600 m²/h','6,458 ft²/h'],
        ['Maximum cleaning width','61 cm','24.02 in'],
        ['Maximum suction','19,000 Pa','']
      ],
      accessories:['Side brush','Brush','Squeegee blade','Dust bag','Mop pad','HEPA filter'],
      note:'Coverage and battery figures are manufacturer estimates; performance varies with the site and operating mode.'
    },
    T10:{
      name:'DINERBOT T10',category:'DELIVERY AND ENGAGEMENT',headline:'Delivery that also engages guests.',
      lead:'T10 combines food delivery with a large display and interactive features. Open trays, pickup prompts and remote task tools support front-of-house workflows.',
      stats:[['23.8 in','Display'],['40 kg','Total load capacity'],['59 cm','Minimum passage width'],['9–12.5 h','Manufacturer battery-life range']],
      hero:'20260721/c15251a0a5248ed64269b4af9afa3c98.jpg',
      gallery:['20260924/0a03c767b5cb42618dcd46ad088dca2a.jpg','20260924/fbf418739bfd4ca1b783bb7f1d4bac27.jpg','20260723/c05671659e27d63ed43114a4421c5049.jpg'],
      features:[
        ['Interactive guest experience','A movable head responds to movement, touch and delivery events. The 23.8-inch display can show visual content.'],
        ['Guided pickup','Open-access trays work with touch controls, AI tray detection, lights, on-screen directions and voice prompts.'],
        ['Perception and navigation','Four stereo-vision sensors, VSLAM and one RGB camera support 360-degree environmental awareness.'],
        ['Fleet coordination','Manufacturer software supports route planning and dispatch across multiple robots, including mixed-model operations.'],
        ['Brand customization','Available options include head accessories, expressions, voices and exterior skins. Confirm choices before ordering.'],
        ['Remote operations','The official page lists remote calling and app-based task monitoring.']
      ],
      specs:[
        ['Dimensions (W × D × H)','48.6 × 55.5 × 139.9 cm','19.13 × 21.85 × 54.69 in'],
        ['Weight','58 kg','128 lb'],
        ['Maximum moving speed','1 m/s','3.28 ft/s'],
        ['Battery life','9–12.5 h',''],
        ['Charging time','5.5 h from 15% to 100% under stated conditions',''],
        ['Maximum slope','5°',''],
        ['Total load capacity','40 kg','88 lb'],
        ['Minimum passage width','59 cm','23.23 in'],
        ['Display','23.8 in','']
      ],
      accessories:[],
      note:'Battery life varies with settings, load and use. Confirm display content, fleet features and building compatibility for your installation.'
    }
  }[id];
  if(!data)return '';
  const source='https://www.keenon.com/en/product/'+id;
  return `<section class="section c40-intro"><span class="eyebrow">${esc(data.name)} / ${esc(data.category)}</span><h2>${esc(data.headline)}</h2><p>${esc(data.lead)}</p><div class="c40-highlights">${data.stats.map(([value,label])=>`<div><strong>${esc(value)}</strong><span>${esc(label)}</span></div>`).join('')}</div></section>
  <section class="section c40-split"><div>${img(data.hero,data.name+' product showcase')}</div><div><span class="eyebrow">PRODUCT CAPABILITIES</span><h2>Made for everyday operations.</h2><p>${esc(data.lead)}</p><p>Discuss your site layout, workflow and operating hours with AURA Robotics to assess the configuration that fits.</p></div></section>
  <section class="section c40-section"><span class="eyebrow">FEATURES</span><h2>What ${esc(id)} can do.</h2><div class="c40-feature-grid">${data.features.map(([title,description])=>`<article><h3>${esc(title)}</h3><p>${esc(description)}</p></article>`).join('')}</div></section>
  <section class="section c40-gallery"><span class="eyebrow">MANUFACTURER IMAGES</span><h2>See ${esc(data.name)} in detail.</h2><div class="c40-gallery-grid">${data.gallery.map((path,i)=>img(path,data.name+' product image '+(i+1))).join('')}</div></section>
  <section class="section c40-specs"><span class="eyebrow">TECHNICAL DATA</span><h2>Product specifications.</h2><div class="c40-spec-list">${data.specs.map(([name,metric,imperial])=>`<div><dt>${esc(name)}</dt><dd>${esc(metric)}${imperial?`<small>${esc(imperial)}</small>`:''}</dd></div>`).join('')}</div><p class="c40-note">${esc(data.note)}</p></section>
  ${data.accessories.length?`<section class="section c40-accessories"><span class="eyebrow">PARTS AND CONSUMABLES</span><h2>Listed accessories.</h2><ul>${data.accessories.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><p>Confirm current availability and exact compatibility before ordering.</p></section>`:''}
  <section class="section c40-cta"><div><span class="eyebrow">DISCUSS A DEPLOYMENT</span><h2>Explore ${esc(id)} for your site.</h2><p>Tell us about your space, workflow and timeline so we can discuss a demonstration and configuration.</p></div>${button('Ask about '+id,'#/contact?model='+id)}</section>
  <div class="c40-source">Images and product information: <a href="${source}" target="_blank" rel="noopener">KEENON Robotics ${esc(id)} official product page ↗</a></div>`;
}
function detail(p){return `<div class="breadcrumbs"><a href="#/products">Robots</a><span>/</span><span>${esc(p.category)}</span><span>/</span><span>${esc(p.id)}</span></div><section class="detail-hero"><div><span class="eyebrow">${esc(p.category)} / ${esc(config.manufacturer)}</span><h1>${esc(p.name)}</h1><p>${esc(p.summary)}</p><div class="hero-actions">${button('Ask about this model',`#/contact?model=${encodeURIComponent(p.id)}`)}${button('Manufacturer details',esc(p.source),true)}</div></div><div class="detail-graphic">${p.image?`<img src="${esc(p.image)}" alt="${esc(p.name)}" decoding="async">`:`<span>${esc(p.id)}</span>`}<small>KEENON MODEL</small></div></section>${p.video?`<section class="section product-video-section" aria-label="${esc(p.name)} video"><div class="section-heading"><div><span class="eyebrow">IN ACTION</span><h2>See ${esc(p.name)} at work.</h2></div><a class="text-link" href="${esc(p.source)}" target="_blank" rel="noopener">Video by KEENON ↗</a></div><video controls playsinline preload="none" poster="${esc(p.image||"")}" aria-label="${esc(p.name)} product video"><source src="${esc(p.video)}" type="video/mp4">Your browser does not support video playback.</video></section>`:""}${p.id==="C40"?c40Details():["C30","T10"].includes(p.id)?expandedProductDetails(p.id):`<section class="section detail-bottom"><div><span class="eyebrow">OVERVIEW</span><h2>Plan a deployment that fits.</h2><p>We can discuss operating hours, floor layout, integration needs, local service and availability for ${esc(p.name)}. Product specifications are subject to manufacturer confirmation.</p></div>${p.features?`<div class="details-panel"><h3>Highlights</h3><ul>${p.features.map(f=>`<li>${esc(f)}</li>`).join('')}</ul>${p.specs?`<h3>Selected manufacturer specifications</h3><dl>${p.specs.map(([k,v])=>`<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>`:''}</div>`:`<div class="details-panel"><h3>Manufacturer resources</h3><p>Detailed features and technical specifications are available on KEENON's product page.</p><a class="text-link" href="${esc(p.source)}" target="_blank" rel="noopener">View official product page ↗</a></div>`}</section>`}<section class="section"><div class="section-heading"><h2>Other models</h2><a class="text-link" href="#/products">Full catalog ↗</a></div><div class="cards">${products.filter(x=>x.category===p.category&&x.id!==p.id).slice(0,3).map(card).join('')}</div></section>`}
function solutionIndex(){return `<section class="page-intro"><span class="eyebrow">SOLUTIONS</span><h1>Built for your environment.</h1><p>Start with the workflows that matter in your space, then select the robot and service plan to match.</p></section><section class="section solution-cards">${solutions.map((s,i)=>`<a href="#/solutions/${s.id}" class="solution-card"><span>0${i+1} / ${esc(s.name.toUpperCase())}</span><h2>${esc(s.name)}</h2><p>${esc(s.description)}</p><small>Explore use case ↗</small></a>`).join('')}</section>`}
function solutionDetail(s){return `<div class="breadcrumbs"><a href="#/solutions">Solutions</a><span>/</span><span>${esc(s.name)}</span></div><section class="page-intro"><span class="eyebrow">INDUSTRY SOLUTION</span><h1>${esc(s.name)}</h1><p>${esc(s.description)}</p><div class="hero-actions">${button('Talk through your needs','#/contact')}${button('Browse robots','#/products',true)}</div></section><section class="section"><span class="eyebrow">POSSIBLE MODELS</span><h2>Explore a starting point.</h2><p>Common models to discuss: ${esc(s.models)}. Final selection depends on your environment and requirements.</p><div class="cards">${products.filter(p=>s.models.split(' · ').includes(p.id)).map(card).join('')}</div></section>`}
function contact(){let model=new URLSearchParams((location.hash.split('?')[1]||'')).get('model');let email=config.email.trim(),phone=config.phone.trim();return `<section class="page-intro"><span class="eyebrow">LET'S TALK</span><h1>Tell us what you need.</h1><p>Share your space, workflow and preferred timeline. We can help compare models and plan a demonstration.</p></section><section class="section contact-grid"><div><h2>Sales inquiries</h2><p>${model?`Interested in <strong>${esc(model)}</strong>? `:''}Connect with ${esc(config.brand)} about your project.</p><dl class="contact-data">${email?`<div><dt>Email</dt><dd><a href="mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent((model||'Robot')+' inquiry')}">${esc(email)}</a></dd></div>`:''}${phone?`<div><dt>Phone</dt><dd><a href="tel:${esc(phone.replace(/[^+\d]/g,''))}">${esc(phone)}</a></dd></div>`:''}${config.address?`<div><dt>Address</dt><dd>${esc(config.address)}</dd></div>`:''}<div><dt>Region</dt><dd>${esc(config.region)}</dd></div></dl>${!email&&!phone?'<p class="setup-note">Contact details are being added. Please check back soon.</p>':''}</div><div class="contact-panel"><span class="eyebrow">FOR A USEFUL FIRST CALL</span><h3>What to prepare</h3><ul><li>Your building or floor area</li><li>Cleaning or delivery workflow</li><li>Working hours and access needs</li><li>Site location and ideal start date</li></ul></div></section>`}
function route(){const raw=decodeURIComponent(location.hash.slice(2).split('?')[0]||'');const parts=raw.split('/').filter(Boolean);let html;if(parts[0]==='products'&&parts[1]){const p=products.find(x=>x.id.toLowerCase()===parts[1].toLowerCase());html=p?detail(p):notFound()}else if(parts[0]==='products')html=catalog();else if(parts[0]==='solutions'&&parts[1]){const s=solutions.find(x=>x.id===parts[1]);html=s?solutionDetail(s):notFound()}else if(parts[0]==='solutions')html=solutionIndex();else if(parts[0]==='contact')html=contact();else if(!parts.length)html=home();else html=notFound();main.innerHTML=html;document.title=`${parts.length?parts[0][0].toUpperCase()+parts[0].slice(1)+' | ':''}${config.brand}`;document.querySelectorAll('.filters button').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filters button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));let selected=b.dataset.category;let visible=products.filter(p=>selected==='All'||p.category===selected);document.querySelector('#product-grid').innerHTML=visible.map(card).join('');document.querySelector('.count').textContent=`${visible.length} models`}));window.scrollTo({top:0,behavior:'instant'})}
function notFound(){return `<section class="page-intro"><h1>Page not found.</h1>${button('Return home','#/')}</section>`}
layout();addEventListener('hashchange',route);route();
