import React from 'react'

declare module "*.png" {
  const value: string
  export default value
}

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  export default content
}