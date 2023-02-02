import styles, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'tomato',
  success: 'green',
  danger: 'red',
}

export const ButtonContainer = styles.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 8px;

  margin: 1rem;
  color: white;
  border: 1px solid #fff;

  ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }}
`
