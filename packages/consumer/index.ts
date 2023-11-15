import { createRequire } from 'node:module'
import { hello } from 'shared-module'
// this will error with "moduleResolution": "node16" or "nodenext"
// import * as relative from './relative-file'

const require = createRequire(import.meta.url)

// this will error with "moduleResolution": "node16" or "nodenext"
console.log(require.resolve('shared-package'))

// this is fine regardless of moduleResolution setting
console.log(hello('world'))
