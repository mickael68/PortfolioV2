const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  let files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    }
    else {
      if (file.endsWith('.tsx') || file.endsWith('.css')) {
        filelist.push(path.join(dir, file));
      }
    }
  });
  return filelist;
};

const targetDir = '/home/mmarco/Projets personnels/Portfolio/portfolio/app';
const files = walkSync(targetDir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;
  
  if (file.endsWith('globals.css')) {
    newContent = newContent.replace('--portal-green: #059669;', '--portal-green: #047857;'); 
    newContent = newContent.replace('--portal-glow: #10b981;', '--portal-glow: #059669;'); 
    newContent = newContent.replace('--rick-green: #65a30d;', '--rick-green: #4d7c0f;'); 
    
    newContent = newContent.replace('--portal-green: #22c55e;', '--portal-green: #34d399;'); 
    newContent = newContent.replace('--portal-glow: #4ade80;', '--portal-glow: #6ee7b7;'); 
    newContent = newContent.replace('--rick-green: #a3e635;', '--rick-green: #a3e635;'); 
  }
  
  // Replace neon greens
  newContent = newContent.replace(/rgba\(\s*0\s*,\s*255\s*,\s*26\s*,/g, 'rgba(52, 211, 153,');
  newContent = newContent.replace(/rgba\(\s*151\s*,\s*206\s*,\s*76\s*,/g, 'rgba(163, 230, 53,');

  // Reduce opacity of rgba shadows in all files
  newContent = newContent.replace(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*0\.(\d+)\)/g, (match, r, g, b, a) => {
    let newA = (parseFloat('0.' + a) * 0.4).toFixed(3);
    // clean up trailing zeros
    newA = parseFloat(newA).toString();
    return `rgba(${r}, ${g}, ${b}, ${newA})`;
  });

  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Updated ' + file);
  }
});
