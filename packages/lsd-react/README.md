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
import { LsdThemeStyles } from '@acid-info/lsd-react/theme'
import { PortalProvider } from '@acid-info/lsd-react/client/PortalProvider'

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
      <body>
        <PortalProvider>{children}</PortalProvider>
      </body>
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
import { LsdThemeStyles, createTheme, defaultThemes } from '@acid-info/lsd-react/theme'

const customTheme = createTheme({
  breakpoints: {
    sm: { width: 768 },
    md: { width: 1024 },
    lg: { width: 1280 },
    xl: { width: 1440 },
  },
  palette: {
    primary: '20, 0, 255',    // RGB values as strings
    secondary: '255, 255, 255',
  },
  spacing: [],
  typography: {},
  typographyGlobal: {
    genericFontFamily: 'sans-serif',
  },
}, defaultThemes.light) // extend the default light theme

// Use in your app
function App() {
  return (
    <>
      <LsdThemeStyles
        customThemes={{
          light: customTheme,
          dark: createTheme(/* dark theme options */, defaultThemes.dark)
        }}
        initialTheme="light"
      />
      {/* rest of your app */}
    </>
  )
}
```

### Using LSD Components

#### Recommended Usage (Individual Imports)

Import LSD components individually for optimal tree-shaking and bundle size:

```tsx
import { Button } from '@acid-info/lsd-react/client/Button'
import { TextField } from '@acid-info/lsd-react/client/TextField'

// CSS must be imported manually
import '@acid-info/lsd-react/css'

function App() {
  return (
    <div>
      <Button>Click me</Button>
      <TextField placeholder="Enter text..." />
    </div>
  )
}
```

#### Legacy/Bulk Import Support

For compatibility with older projects, LSD also supports bulk imports:

```tsx
// Import all components at once (larger bundle size)
import { Button, TextField } from '@acid-info/lsd-react'

// Manual CSS import (required)
import '@acid-info/lsd-react/css'

function App() {
  return (
    <div>
      <Button>Click me</Button>
      <TextField placeholder="Enter text..." />
    </div>
  )
}
```

**Note**: CSS must be manually imported regardless of which import pattern you use.

## Portal System

Some LSD components (like `Autocomplete`, `Dropdown`, `DatePicker`, etc.) render overlays that need to be positioned outside the normal component tree. These components require the `PortalProvider` to be rendered somewhere up the component tree.

### Components Requiring PortalProvider

These components won't work properly without `PortalProvider`:

- `Autocomplete` - dropdown positioning
- `Breadcrumb` - overflow menu
- `DatePicker` - calendar overlay
- `DateRangePicker` - calendar overlay
- `Dropdown` - menu positioning
- `ToastProvider` - toast notifications

## Resources

- [Figma](https://www.figma.com/files/1209516814771276303/project/78782235)
- [Storybook](https://main--63e4f71c39dc65c5c703c1e8.chromatic.com/)
- [Chromatic](https://www.chromatic.com/builds?appId=63e4f71c39dc65c5c703c1e8)
