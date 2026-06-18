const fs = require('fs');
const path = require('path');

const srcDir = '/Users/petarpopovic013/Desktop/WEB/DDM/Morbidelli/morbidelliapp/app';
const destDir = '/Users/petarpopovic013/Desktop/WEB/DDM/Keeway/keewayapp/app';

// Ensure directories exist
fs.mkdirSync(path.join(destDir, 'actions'), { recursive: true });
fs.mkdirSync(path.join(destDir, 'motocikli', '[slug]'), { recursive: true });

function processFile(srcPath, destPath) {
  let content = fs.readFileSync(srcPath, 'utf-8');
  
  // Replacements
  content = content.replace(/morbidelli_motorcycles/g, 'keeway_motorcycles');
  content = content.replace(/Morbidelli Srbija/g, 'Keeway Srbija');
  content = content.replace(/Morbidelli /g, 'Keeway ');
  content = content.replace(/MBP /g, '');
  content = content.replace(/font-replica-light/g, 'font-saira');
  content = content.replace(/font-replica/g, 'font-zuume');
  content = content.replace(/#42D2F2/g, '#F54308'); // Cyan to Orange
  
  fs.writeFileSync(destPath, content);
}

// 1. Actions
processFile(
  path.join(srcDir, 'actions', 'motorcycles.ts'),
  path.join(destDir, 'actions', 'motorcycles.ts')
);

// 2. Slug components
const slugFiles = ['page.tsx', 'TechSpecsAccordion.tsx', 'GallerySlideshow.tsx', 'ExpandableDescription.tsx'];
for (const file of slugFiles) {
  processFile(
    path.join(srcDir, 'motocikli', '[slug]', file),
    path.join(destDir, 'motocikli', '[slug]', file)
  );
}

console.log('Files copied and adapted successfully!');
