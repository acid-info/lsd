# Logos Design System (LSD)

LSD is an open-source design system challenging conventional norms in the world of digital products and experiences. Rooted in a philosophy that values content over excess, we're here to decentralize design and empower the message. Our minimalist approach is a rebellion against the cluttered design landscape. Join us in our mission to simplify and refocus design for all, with working code, tools, resources, and a community of like-minded individuals.

## Getting Started

### Installation

Install the latest version of LSD React into your project using Yarn or NPM.

```bash
yarn add @acid-info/lsd-react

# or

npm i -S @acid-info/lsd-react
```

### Setup Theme

LSD provides theme support through the `prepareLsdTheme()` function which:

- Generates a `<style>` element containing all theme CSS variables
- Supports both built-in (light/dark) and custom themes
- Uses the `data-theme` attribute for theme switching
- Returns the computed styles and available theme names

Basic usage with default themes:

```tsx
import React from 'react'
import ReactDOM from 'react-dom'
import { prepareLsdTheme } from '@acid-info/lsd-react'

import App from './App'

const { ThemeStyles } = prepareLsdTheme()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {ThemeStyles}
    <App />
  </React.StrictMode>,
)
```

Using a custom theme:

```tsx
import { prepareLsdTheme, createTheme } from '@acid-info/lsd-react'

const customTheme = createTheme({
  // Custom theme configuration
})

const { ThemeStyles } = prepareLsdTheme({
  customThemes: {
    custom: customTheme,
  },
})
```

Theme switching is done via the `data-theme` attribute:

```html
<html data-theme="dark">
  <!-- ... -->
</html>
```

### Using LSD Components

Import LSD components from `@acid-info/lsd-react` and use them in your React app!

```tsx
import { Button } from '@acid-info/lsd-react'

function App() {
  return (
    <div>
      <Button>Button</Button>
    </div>
  )
}
```

## Resources

- [Figma](https://www.figma.com/files/1209516814771276303/project/78782235)
- [Storybook](https://main--63e4f71c39dc65c5c703c1e8.chromatic.com/)
- [Chromatic](https://www.chromatic.com/builds?appId=63e4f71c39dc65c5c703c1e8)
