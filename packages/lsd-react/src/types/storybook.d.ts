import * as React from 'react'

declare module 'react' {
  interface FunctionComponent<P = {}> {
    __docgenInfo?: any
  }

  interface ForwardRefExoticComponent<P = {}> {
    __docgenInfo?: any
  }

  interface ComponentClass<P = {}, S = {}> {
    __docgenInfo?: any
  }

  interface FC<P = {}> {
    __docgenInfo?: any
  }
}

// Also extend StoryAnnotations type for stories
declare module '@storybook/react' {
  interface StoryAnnotations<TRenderer, TArgs, TArgTypes> {
    __docgenInfo?: any
  }
}
