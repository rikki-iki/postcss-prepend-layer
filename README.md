# postcss-prepend-layer

A PostCSS plugin that prepends `@layer` declarations to your CSS files.

## Installation

```bash
npm install postcss-prepend-layer --save-dev
```

## Usage

```javascript
// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-prepend-layer')({
      layers: [
        'design-system.base',
        'design-system.layout',
        'design-system.components',
        'design-system.utilities',
        'design-system.theme'
      ]
    })
  ]
}
```

### TypeScript

```typescript
import postcss from 'postcss';
import prependLayer from 'postcss-prepend-layer';

postcss([
  prependLayer({
    layers: ['base', 'components', 'utilities']
  })
])
```

## Options

### `layers` (required)

Type: `string[]`

An array of layer names to prepend to your CSS file.

## Output

Given this configuration:

```javascript
prependLayer({
  layers: ['base', 'components', 'utilities']
})
```

The plugin will prepend this to your CSS:

```css
@layer base, components, utilities;
```

## License

MIT