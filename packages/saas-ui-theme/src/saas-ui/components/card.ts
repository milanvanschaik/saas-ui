import { anatomy, mode, PartsStyleFunction } from '@chakra-ui/theme-tools'

const parts = anatomy('card').parts(
  'container',
  'header',
  'title',
  'body',
  'footer'
)

const baseStyle: PartsStyleFunction<typeof parts> = (props) => {
  return {
    container: {
      rounded: 'lg',
      bg: mode('white', 'whiteAlpha.100')(props),
      boxShadow: 'sm',
      borderWidth: '1px',
      borderColor: mode('blackAlpha.200', 'whiteAlpha.50')(props),
    },
    header: {
      p: 4,
    },
    title: {
      fontSize: 'lg',
      fontWeight: 'semibold',
    },
    subtitle: {
      color: mode('gray.400', 'gray.300')(props),
      fontSize: 'md',
    },
    body: {
      p: 4,
    },
    footer: {
      p: 4,
    },
  }
}

const variantSolid: PartsStyleFunction<typeof parts> = (props) => {
  const { colorScheme: c } = props

  const bg = c
    ? mode(`${c}.500`, `${c}.500`)(props)
    : mode('blackAlpha.100', 'whiteAlpha.100')(props)

  const color = c ? 'white' : 'inherit'

  return {
    container: {
      border: 'none',
      boxShadow: 'none',
      bg,
      color,
    },
  }
}

const variantOutline: PartsStyleFunction<typeof parts> = (props) => {
  const { colorScheme: c } = props

  const borderColor = c
    ? mode(`${c}.500`, `${c}.500`)(props)
    : mode('blackAlpha.200', 'whiteAlpha.300')(props)

  return {
    container: {
      bg: 'transparent',
      boxShadow: 'none',
      borderWidth: '1px',
      borderColor: borderColor,
    },
  }
}

export default {
  parts: parts.keys,
  defaultProps: {
    size: 'md',
  },
  baseStyle,
  variants: {
    outline: variantOutline,
    solid: variantSolid,
  },
}
