const fs = require('fs');
const path = require('path');

const files = [
  path.join(__dirname, 'src', 'App.css'),
  path.join(__dirname, 'src', 'App.jsx'),
  path.join(__dirname, 'src', 'index.css')
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Cyan -> Electric Orange
    content = content.replace(/#00e5ff/g, '#ff6200');
    content = content.replace(/rgba\(0,229,255/g, 'rgba(255,98,0');
    
    // Blue -> Cyber Yellow
    content = content.replace(/#4f8ef7/g, '#fbbf24');
    content = content.replace(/rgba\(79,142,247/g, 'rgba(251,191,36');
    
    // Purple -> Red
    content = content.replace(/#a855f7/g, '#ef4444');
    content = content.replace(/rgba\(168,85,247/g, 'rgba(239,68,68');
    content = content.replace(/#9d00ff/g, '#ef4444'); // in case previous sed partially applied
    content = content.replace(/rgba\(157,0,255/g, 'rgba(239,68,68');
    
    // Mint -> Amber
    content = content.replace(/#22d3a6/g, '#eab308');
    content = content.replace(/rgba\(34,211,166/g, 'rgba(234,179,8');
    
    // Pink -> Dark Orange
    content = content.replace(/#ec4899/g, '#ea580c');
    content = content.replace(/rgba\(236,72,153/g, 'rgba(234,88,12');

    // Background
    content = content.replace(/rgba\(3,5,7/g, 'rgba(5,5,5');
    content = content.replace(/#030507/g, '#050505');
    
    // Fix broken partial replacements if the sed command was interrupted
    content = content.replace(/#ff007f/g, '#ff6200');
    content = content.replace(/rgba\(255,0,127/g, 'rgba(255,98,0');
    content = content.replace(/#ff7a00/g, '#fbbf24');
    content = content.replace(/rgba\(255,122,0/g, 'rgba(251,191,36');
    content = content.replace(/#00ffcc/g, '#eab308');
    content = content.replace(/rgba\(0,255,204/g, 'rgba(234,179,8');
    
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
