const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace font-montserrat with font-nunito everywhere
  content = content.replace(/font-montserrat/g, 'font-nunito');

  // Protect heading classes by replacing their attribute name
  // This matches <h1 ... className="... ">
  content = content.replace(/<(h[1-6])([^>]*)className=([\"'{])/g, '<$1$2CLASS_NAME_HEADING=$3');

  // Strip uppercase completely from everywhere since user said "còn lại để chữ thường hết".
  // Let's strip uppercase from EVERYWHERE including headings just in case. 
  // User: "chỉ bôi đậm các ô tiêu đề, còn lại để chữ thường hết" (Only bold the titles, the rest regular casing).
  content = content.replace(/className=[\"']([^\"']*)[\"']/g, (match, classes) => {
    let newClasses = classes
      .replace(/\b(font-black|font-bold|font-semibold|font-medium|font-extrabold|uppercase)\b/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    return `className="${newClasses}"`;
  });

  // Restore heading classes, ensuring they have font-bold and not uppercase.
  content = content.replace(/CLASS_NAME_HEADING=([\"'])([^\"']*)([\"'])/g, (match, q1, classes, q2) => {
    let newClasses = classes
      .replace(/\buppercase\b/g, '') // strip uppercase
      .replace(/\s+/g, ' ')
      .trim();
    
    // Ensure headings are bold
    if (!newClasses.includes('font-bold') && !newClasses.includes('font-black') && !newClasses.includes('font-extrabold')) {
      newClasses += ' font-bold';
    }
    
    return `className=${q1}${newClasses}${q2}`;
  });

  fs.writeFileSync(filePath, content, 'utf8');
}

function traverseDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      processFile(fullPath);
    }
  }
}

traverseDir(path.join(process.cwd(), 'src'));
console.log('Class cleanup completed.');
