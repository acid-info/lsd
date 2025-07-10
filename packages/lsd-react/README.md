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

## Theme Setup

LSD provides comprehensive theme support with options for both built-in and custom themes.

### Getting Started with Next.js

Add LSD theme support to your Next.js app by including `LsdThemeStyles` in your root layout:

```tsx
// app/layout.tsx
import { LsdThemeStyles } from '@acid-info/lsd-react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <LsdThemeStyles />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### Theme Switching

Switch between themes by modifying the `data-theme` attribute:

```html
<html data-theme="dark">
  <!-- Content will use dark theme -->
</html>
```

### Advanced Theme Configuration

Create and apply custom themes:

```tsx
import { prepareLsdTheme, createTheme } from '@acid-info/lsd-react'

const customTheme = createTheme({
  name: 'custom',
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
})

const { ThemeStyles } = prepareLsdTheme({
  customThemes: {
    custom: customTheme,
  },
  defaultTheme: 'custom', // Optional default theme
})
```

### Using LSD Components

Import LSD components individually from `@acid-info/lsd-react` and use them in your React app!

```tsx
import { Button } from '@acid-info/lsd-react/client/Button'
import { TextField } from '@acid-info/lsd-react/client/TextField'

function App() {
  return (
    <div>
      <Button>Click me</Button>
      <TextField placeholder="Enter text..." />
    </div>
  )
}
```

Each component must be imported individually for optimal tree-shaking and bundle size.

## Resources

- [Figma](https://www.figma.com/files/1209516814771276303/project/78782235)
- [Storybook](https://main--63e4f71c39dc65c5c703c1e8.chromatic.com/)
- [Chromatic](https://www.chromatic.com/builds?appId=63e4f71c39dc65c5c703c1e8)
