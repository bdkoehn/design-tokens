import type { BlendType } from './valueTypes'

export type customTokenTypes = 'custom-spacing' |
'custom-radius' |
'custom-fontStyle' |
'custom-shadow' |
'custom-transition' |
'custom-stroke' |
'custom-grid' |
'custom-gradient' |
'custom-opacity'

export type StandardTokenTypes = 'string' |
'number' |
'object' |
'array' |
'boolean' |
'null' |
'color' |
'dimension' |
'font' |
customTokenTypes

export type StandardTokenValueType = string | number | Array<any> | Object | Boolean | null

export type StandardCompositeTokenValueType = {
  [key: string]: StandardTokenValueType,
}

export type StandardTokenGroup = {
  [name: string]: {
    description?: string
    reference?: string
    [name: string | number]: StandardTokenDataInterface | string
  }
}

export type pluginExtensionKey = 'org.csaa.figmaDesignTokens'

export type StandardTokenExtensionsInterface = {
  [key: string | pluginExtensionKey]: any | {
    styleId?: string,
    exportKey?: string,
    category?: string,
    group?: string,
    unit?: string,
  }
}

export type StandardTokenDataInterface = {
  description?: string,
  reference?: string,
  value: StandardTokenValueType | StandardCompositeTokenValueType,
  type: StandardTokenTypes,
  blendMode?: BlendType,
  extensions?: StandardTokenExtensionsInterface
}

export type StandardTokenInterface = {
  name: string
} & StandardTokenDataInterface
