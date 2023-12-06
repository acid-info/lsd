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

To use LSD theme and design tokens in your React app, wrap your app with the `ThemeProvider` component. This component:

- Creates a CSS baseline for the LSD components using CSS-in-JS and inserts it into the DOM.
- Injects the LSD CSS variables into the DOM for the theme prop.

The `ThemeProvider` component should be at the root of your app, as shown below:

```tsx
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, defaultThemes } from '@acid-info/lsd-react'

import App from './App'

ReactDOM.render(
  <ThemeProvider theme={defaultThemes.dark}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
)
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
