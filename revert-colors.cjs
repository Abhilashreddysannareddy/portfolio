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
    
    // Orange -> Cyan
    content = content.replace(/#ff6200/g, '#00e5ff');
    content = content.replace(/rgba\(255,98,0/g, 'rgba(0,229,255');
    
    // Yellow -> Blue
    content = content.replace(/#fbbf24/g, '#4f8ef7');
    content = content.replace(/rgba\(251,191,36/g, 'rgba(79,142,247');
    
    // Red -> Purple
    content = content.replace(/#ef4444/g, '#a855f7');
    content = content.replace(/rgba\(239,68,68/g, 'rgba(168,85,247');
    
    // Amber -> Mint
    content = content.replace(/#eab308/g, '#22d3a6');
    content = content.replace(/rgba\(234,179,8/g, 'rgba(34,211,166');
    
    // Dark Orange -> Pink
    content = content.replace(/#ea580c/g, '#ec4899');
    content = content.replace(/rgba\(234,88,12/g, 'rgba(236,72,153');

    // Background
    content = content.replace(/rgba\(5,5,5/g, 'rgba(3,5,7');
    content = content.replace(/#050505/g, '#030507');
    
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Reverted ${file}`);
  }
});
