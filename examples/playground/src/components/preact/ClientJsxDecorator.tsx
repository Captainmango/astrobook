/** @jsxImportSource preact */

import type { ComponentChildren } from 'preact'

export interface PreactDecoratorProps {
  children?: ComponentChildren
}

export default function BlueBorderDecorator({ children }: PreactDecoratorProps) {
  return (
    <>
      <div style="border: solid 2px blue;" data-decorator-type="jsx">
        {children}
      </div>
    </>
  )
}
