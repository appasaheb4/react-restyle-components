import {fileURLToPath} from 'url';
import {dirname, resolve} from 'path';
import fs from 'fs';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';

// Generated CSS indent spaces count
const indentSpaces = 2;
// Generated CSS output file
const outputCSS = './lib/src/tc.module.css';

// Load tailwind.config.js
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const configPath = resolve(__dirname, './tailwind.config.js');

// Convert Tailwind CSS to native CSS
postcss([tailwindcss(configPath)])
  .process('@tailwind utilities; @tailwind components;', {from: undefined})
  .then((result) => {
    // Format and write the CSS output
    const formattedCSS = result.css
      .replaceAll(' '.repeat(4), ' '.repeat(indentSpaces)) // Handle indentation
      .replace(/([^{;\s]+:[^;}]+)(\s*?)\n(\s*})/g, '$1;\n$3'); // Insert semicolon before newline and closing brace, preserving indentation

    fs.writeFileSync(outputCSS, formattedCSS, 'utf8');
    console.log(`Native CSS generated: ${outputCSS}`);
  })
  .catch((err) => console.error('An error occurred:', err));
