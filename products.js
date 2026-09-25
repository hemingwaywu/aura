// Product names and short category descriptions were checked against keenon.com/en in September 2026.
// Confirm current specifications, availability and reseller rights with KEENON before publishing sales claims.
window.PRODUCTS = [
  {id:'C55',category:'Cleaning',name:'KLEENBOT C55',summary:'Floor cleaning for medium and large spaces',source:'https://www.keenon.com/en/product/C55',featured:true},
  {id:'C40',category:'Cleaning',name:'KLEENBOT C40',summary:'Four-in-one professional floor cleaning',source:'https://www.keenon.com/en/product/C40',featured:true,features:['Sweeping, vacuuming, scrubbing and dust pushing','Dry and wet waste separation','Automatic water management with a compatible station'],specs:[['Cleaning width','400 mm, vacuuming and scrubbing'],['Cleaning efficiency','Up to 1,100 m²/h'],['Runtime','Up to 5 hours, floor scrubbing'],['Minimum passable width','650 mm']]},
  {id:'C55black',category:'Cleaning',name:'KLEENBOT C55 Black',summary:'C55 series in a black finish',source:'https://www.keenon.com/en'},
  {id:'C30',category:'Cleaning',name:'KLEENBOT C30',summary:'Three-in-one dry cleaning',source:'https://www.keenon.com/en/product/C30'},
  {id:'C20',category:'Cleaning',name:'KLEENBOT C20',summary:'Compact floor cleaner for smaller spaces',source:'https://www.keenon.com/en/product/C20'},
  {id:'T10',category:'Delivery',name:'DINERBOT T10',summary:'Food delivery and on-screen marketing',source:'https://www.keenon.com/en/product/T10',featured:true},
  {id:'T11',category:'Delivery',name:'DINERBOT T11',summary:'Marketing and delivery in narrow aisles',source:'https://www.keenon.com/en/product/T11'},
  {id:'T8',category:'Delivery',name:'DINERBOT T8',summary:'Compact delivery robot',source:'https://www.keenon.com/en/product/T8'},
  {id:'T9',category:'Delivery',name:'DINERBOT T9',summary:'High-capacity food delivery',source:'https://www.keenon.com/en/product/T9'},
  {id:'T3',category:'Delivery',name:'DINERBOT T3',summary:'Enclosed, hygienic delivery',source:'https://www.keenon.com/en/product/T3'},
  {id:'W3',category:'Delivery',name:'BUTLERBOT W3',summary:'Private multi-floor hotel delivery',source:'https://www.keenon.com/en/product/W3'},
  {id:'S300',category:'Heavy load',name:'S300',summary:'Intelligent heavy-load delivery',source:'https://www.keenon.com/en/product/S300'},
  {id:'S100',category:'Heavy load',name:'S100',summary:'Heavy-load courier robot',source:'https://www.keenon.com/en/product/S100'},
  {id:'XMAN-R1',category:'Humanoid',name:'XMAN-R1',summary:'Humanoid service robot',source:'https://www.keenon.com/en/product/XMAN-R1'},
  {id:'XMAN-F1',category:'Humanoid',name:'XMAN-F1',summary:'Humanoid robot',source:'https://www.keenon.com/en/product/XMAN-F1'},
  {id:'XMAN-L1',category:'Humanoid',name:'XMAN-L1',summary:'Humanoid robot',source:'https://www.keenon.com/en/product/XMAN-L1'},
  {id:'X101',category:'Healthcare',name:'X101',summary:'Healthcare service robot',source:'https://www.keenon.com/en/product/X101'},
  {id:'M102',category:'Healthcare',name:'M102',summary:'Healthcare service robot',source:'https://www.keenon.com/en/product/M102'},
  {id:'Keenmow K1',category:'Home',name:'Keenmow K1',summary:'Robotic lawn mower',source:'https://keenmow.com/'}
];
window.SOLUTIONS = [
  {id:'restaurants',name:'Restaurants',description:'Support food delivery, dish collection and front-of-house service.',models:'T10 · T11 · T8 · T9 · T3'},
  {id:'hotels',name:'Hotels',description:'Connect guest deliveries and floor care across hospitality spaces.',models:'W3 · C40 · C30'},
  {id:'retail',name:'Retail',description:'Bring cleaning, customer engagement and material movement into busy stores.',models:'C40 · T10 · S100'},
  {id:'healthcare',name:'Healthcare',description:'Explore service and delivery workflows for care environments.',models:'X101 · M102 · W3'},
  {id:'senior-living',name:'Senior living',description:'Assist staff with routine delivery and cleaning tasks.',models:'W3 · C20 · X101'},
  {id:'facilities',name:'Facilities',description:'Plan repeatable floor care across offices and shared buildings.',models:'C55 · C40 · C30'}
];

// Manufacturer-hosted media. Replace these URLs with locally licensed files when available.
const productMedia = {
  "C55": {image: 'https://storage.keenon.cn/uploads/20260417/254ccf913f84d4657140cb2dc54bc8c8.png', video: 'https://storage.keenon.cn/uploads/20260722/f4d51e18c414ac75e1a683aa4a5b1215.mp4'},
  "C40": {image: 'https://storage.keenon.cn/uploads/20260916/3d3ca07f713a941858fa98d4be4dc3b5.jpg', video: 'https://storage.keenon.cn/uploads/20260723/e1e461181425c94f46d7fb4e224271e6.mp4'},
  "C30": {image: 'https://storage.keenon.cn/uploads/20260417/e7c28545293764a307591eb865449083.png', video: 'https://storage.keenon.cn/uploads/20260724/ac329104040ca0786bbb80a9778b58b5.mp4'},
  "C20": {image: 'https://storage.keenon.cn/uploads/20260416/03412bfe39ccca3e66692130a3e21943.png'},
  "T10": {image: 'https://storage.keenon.cn/uploads/20260416/d32a1a3245a76a70d2e972443742c6c9.webp', video: 'https://storage.keenon.cn/uploads/20260723/91f1d2ebaca464c244718628ef95f384.mp4'},
  "T11": {image: 'https://storage.keenon.cn/uploads/20260416/2c9d2fbba747e0b304f3214a46fa2615.png'},
  "T8": {image: 'https://storage.keenon.cn/uploads/20260416/65498a39f57bb67ad72cc24f501581f8.webp'},
  "T9": {image: 'https://storage.keenon.cn/uploads/20260416/05cb7bf106407b7eec89b3deeca1d20c.webp'},
  "T3": {image: 'https://storage.keenon.cn/uploads/20260416/befc0a839239dc5be50b57d9a8d4d71c.webp'},
  "W3": {image: 'https://storage.keenon.cn/uploads/20260416/ac63fc9a084bb61bc8577b02e9d9cf66.webp'},
  "S300": {image: 'https://storage.keenon.cn/uploads/20260417/314843f14fd6ce444371fbb9bdb8d50f.png'},
  "S100": {image: 'https://storage.keenon.cn/uploads/20260417/2cdda471acd3062d1a3c18d1da95042c.webp'},
  "XMAN-R1": {image: 'https://storage.keenon.cn/uploads/20260916/28ef21f008c5ef192a81802265895f6f.jpg'},
  "XMAN-F1": {image: 'https://storage.keenon.cn/uploads/20260916/dc4ddb1f6f438f33df6e2f2cc8a7b32b.jpg'},
  "XMAN-L1": {image: 'https://storage.keenon.cn/uploads/20260916/1c5bfc52d68ac06b70d83de03096055a.jpg'},
  "X101": {image: 'https://storage.keenon.cn/uploads/20260916/f05a4815467a0af2bd571defffb64afe.jpg'},
  "M102": {image: 'https://storage.keenon.cn/uploads/20260916/587a3061c184994c3e4c44bb75341ca7.jpg'},
  "Keenmow K1": {image: 'https://storage.keenon.cn/uploads/20260417/76a67b9a41c02e3340f633066fb28da9.png'}
};
window.PRODUCTS.forEach(product => Object.assign(product, productMedia[product.id] || {}));
