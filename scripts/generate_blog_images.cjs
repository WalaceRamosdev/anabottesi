const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '../public/images/blog');

const svgs = {
    'ansiedade-no-trabalho': `
<svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#F5F0EB"/>
  <circle cx="400" cy="300" r="150" stroke="#C4A484" stroke-width="2"/>
  <circle cx="400" cy="300" r="100" stroke="#C4A484" stroke-width="2" stroke-dasharray="10 10"/>
  <circle cx="400" cy="300" r="50" stroke="#C4A484" stroke-width="2"/>
  <circle cx="500" cy="200" r="20" fill="#D4A373" fill-opacity="0.6"/>
  <circle cx="300" cy="400" r="30" fill="#A3B18A" fill-opacity="0.6"/>
  <circle cx="400" cy="300" r="10" fill="#8C7355"/>
</svg>`,
    'sindrome-da-impostora': `
<svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#F5F0EB"/>
  <rect x="300" y="200" width="200" height="200" stroke="#C4A484" stroke-width="2" fill="none"/>
  <circle cx="400" cy="300" r="80" fill="#A3B18A" fill-opacity="0.6"/>
  <path d="M400 200 L400 400" stroke="#C4A484" stroke-width="2" stroke-dasharray="10 10"/>
  <path d="M300 300 L500 300" stroke="#C4A484" stroke-width="2" stroke-dasharray="10 10"/>
  <circle cx="280" cy="200" r="15" fill="#D4A373" fill-opacity="0.6"/>
  <circle cx="520" cy="400" r="15" fill="#8C7355"/>
</svg>`,
    'relacionamentos-toxicos': `
<svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#F5F0EB"/>
  <circle cx="450" cy="300" r="100" stroke="#C4A484" stroke-width="2" stroke-dasharray="10 10"/>
  <circle cx="350" cy="300" r="80" stroke="#8C7355" stroke-width="2"/>
  <circle cx="350" cy="300" r="40" fill="#D4A373" fill-opacity="0.6"/>
  <circle cx="480" cy="300" r="20" fill="#8C7355"/>
  <path d="M350 300 L480 300" stroke="#C4A484" stroke-width="2"/>
</svg>`,
    'maternidade-desromantizada': `
<svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#F5F0EB"/>
  <circle cx="400" cy="350" r="120" stroke="#C4A484" stroke-width="2" stroke-dasharray="10 10"/>
  <circle cx="400" cy="250" r="60" fill="#A3B18A" fill-opacity="0.6"/>
  <circle cx="400" cy="380" r="20" fill="#D4A373" fill-opacity="0.6"/>
  <path d="M400 150 L400 470" stroke="#C4A484" stroke-width="2"/>
  <circle cx="400" cy="470" r="8" fill="#8C7355"/>
</svg>`,
    'perfeccionismo-saude-mental': `
<svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#F5F0EB"/>
  <circle cx="400" cy="300" r="140" stroke="#C4A484" stroke-width="2"/>
  <path d="M260 300 L540 300" stroke="#C4A484" stroke-width="2"/>
  <path d="M400 160 L400 440" stroke="#C4A484" stroke-width="2"/>
  <polygon points="400,240 460,300 400,360 340,300" fill="#D4A373" fill-opacity="0.6"/>
  <circle cx="480" cy="220" r="12" fill="#8C7355"/>
</svg>`,
    'repeticao-padroes': `
<svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#F5F0EB"/>
  <path d="M200 300 Q300 150 400 300 T600 300" stroke="#C4A484" stroke-width="2" stroke-dasharray="10 10" fill="none"/>
  <circle cx="250" cy="260" r="30" fill="#A3B18A" fill-opacity="0.6"/>
  <circle cx="400" cy="300" r="30" fill="#A3B18A" fill-opacity="0.6"/>
  <circle cx="550" cy="340" r="30" fill="#A3B18A" fill-opacity="0.6"/>
  <circle cx="400" cy="300" r="10" fill="#8C7355"/>
</svg>`,
    'burnout-feminino': `
<svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#F5F0EB"/>
  <path d="M200 400 L600 200" stroke="#C4A484" stroke-width="2"/>
  <circle cx="600" cy="200" r="60" fill="#D4A373" fill-opacity="0.6"/>
  <path d="M400 300 L400 500" stroke="#C4A484" stroke-width="2" stroke-dasharray="10 10"/>
  <circle cx="400" cy="450" r="40" fill="#8C7355"/>
</svg>`,
    'silencio-como-agressao': `
<svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#F5F0EB"/>
  <rect x="250" y="250" width="100" height="100" rx="10" stroke="#C4A484" stroke-width="2" fill="none"/>
  <circle cx="300" cy="300" r="30" fill="#A3B18A" fill-opacity="0.6"/>
  <circle cx="550" cy="300" r="30" fill="#8C7355" fill-opacity="0.6"/>
  <path d="M380 300 L490 300" stroke="#C4A484" stroke-width="2" stroke-dasharray="10 10"/>
  <circle cx="435" cy="300" r="5" fill="#8C7355"/>
</svg>`,
    'medo-de-envelhecer': `
<svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#F5F0EB"/>
  <circle cx="400" cy="300" r="120" stroke="#C4A484" stroke-width="2"/>
  <circle cx="400" cy="300" r="90" stroke="#8C7355" stroke-width="1"/>
  <circle cx="400" cy="300" r="60" stroke="#C4A484" stroke-width="2" stroke-dasharray="5 5"/>
  <circle cx="400" cy="300" r="30" fill="#D4A373" fill-opacity="0.6"/>
  <path d="M400 150 L400 450" stroke="#C4A484" stroke-width="2"/>
</svg>`,
    'luto-e-despedidas': `
<svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#F5F0EB"/>
  <path d="M250 350 L550 350" stroke="#C4A484" stroke-width="2"/>
  <circle cx="350" cy="270" r="60" fill="#A3B18A" fill-opacity="0.6"/>
  <circle cx="480" cy="350" r="20" fill="#8C7355"/>
  <circle cx="500" cy="270" r="40" stroke="#C4A484" stroke-width="2" stroke-dasharray="5 5" fill="none"/>
</svg>`,
    'o-poder-da-fala': `
<svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#F5F0EB"/>
  <circle cx="300" cy="300" r="50" fill="#D4A373" fill-opacity="0.6"/>
  <path d="M380 220 Q460 300 380 380" stroke="#C4A484" stroke-width="2" fill="none"/>
  <path d="M420 180 Q540 300 420 420" stroke="#C4A484" stroke-width="2" stroke-dasharray="10 10" fill="none"/>
  <path d="M460 140 Q620 300 460 460" stroke="#8C7355" stroke-width="2" fill="none"/>
</svg>`,
    'importancia-solitude': `
<svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#F5F0EB"/>
  <circle cx="400" cy="300" r="160" stroke="#C4A484" stroke-width="2" stroke-dasharray="10 10"/>
  <circle cx="400" cy="300" r="60" fill="#A3B18A" fill-opacity="0.6"/>
  <circle cx="400" cy="300" r="100" stroke="#C4A484" stroke-width="1"/>
  <circle cx="400" cy="300" r="15" fill="#8C7355"/>
</svg>`
};

const postsDir = path.join(__dirname, '../src/content/posts');

for (const [slug, svgContent] of Object.entries(svgs)) {
    fs.writeFileSync(path.join(outDir, `${slug}.svg`), svgContent);
    const mdPath = path.join(postsDir, `${slug}.md`);
    if (fs.existsSync(mdPath)) {
        let md = fs.readFileSync(mdPath, 'utf8');
        md = md.replace('image: "/images/blog/dependencia.svg"', `image: "/images/blog/${slug}.svg"`);
        fs.writeFileSync(mdPath, md);
    }
}
console.log('Successfully created 12 abstract SVGs and updated markdown files.');
