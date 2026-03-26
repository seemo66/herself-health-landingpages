import { build } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { cpSync, mkdirSync, existsSync } from 'fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const pages = [
  { name: 'care',       entry: 'care/index.html',       outDir: resolve(root, 'dist/care') },
  { name: 'tv',         entry: 'tv/index.html',         outDir: resolve(root, 'dist/tv') },
  { name: 'directmail', entry: 'directmail/index.html', outDir: resolve(root, 'dist/directmail') },
  { name: 'email',      entry: 'email/index.html',      outDir: resolve(root, 'dist/email') },
  { name: 'guide',      entry: 'guide/index.html',      outDir: resolve(root, 'dist/guide') },
  { name: 'newpatients', entry: 'newpatients/index.html', outDir: resolve(root, 'dist/newpatients') },
  { name: 'medicare',   entry: 'medicare/index.html',   outDir: resolve(root, 'dist/medicare') },
  { name: 'member',     entry: 'member/index.html',     outDir: resolve(root, 'dist/member') },
  { name: 'membership', entry: 'membership/index.html', outDir: resolve(root, 'dist/membership') },
  { name: 'midi',       entry: 'midi/index.html',       outDir: resolve(root, 'dist/midi') },
]

for (const { name, entry, outDir } of pages) {
  console.log(`\nBuilding: ${name}`)
  await build({
    plugins: [react(), tailwindcss()],
    root,
    build: {
      outDir,
      emptyOutDir: true,
      rollupOptions: {
        input: resolve(root, entry),
        output: {
          entryFileNames: `${name}-compiled.js`,
          chunkFileNames: `${name}-compiled-chunk-[hash].js`,
          assetFileNames: (info) =>
            info.names?.[0]?.endsWith('.css') ? `${name}-compiled.css` : `[name][extname]`,
        },
      },
    },
  })
}

// Copy all compiled JS and CSS files into a single dist/compiled folder
const compiledDir = resolve(root, 'dist/compiled')
mkdirSync(compiledDir, { recursive: true })

for (const { name, outDir } of pages) {
  for (const ext of ['js', 'css']) {
    const src = resolve(outDir, `${name}-compiled.${ext}`)
    if (existsSync(src)) {
      cpSync(src, resolve(compiledDir, `${name}-compiled.${ext}`))
    }
  }
}

console.log('\nAll compiled files copied to dist/compiled/')
