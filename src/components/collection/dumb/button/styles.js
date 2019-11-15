import styled, { css } from 'styled-components'

const buttonInverted = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  width: auto;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`

const buttonInvertedItem = css`
  display: none;
  position: absolute;
  background-color: white;
  color: black;
  border: 1px solid black;
  top: 200px;
  width: 80%;
  opacity: 0.7;

  &:hover {
    background-color: black;
    color: white;
    border: none;
    display: flex;
    opacity: 0.8;
  }
`

const buttonStyles = css`
  color: white;
  background-color: black;
  border: none;
  width: auto;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`
const getButtonStyles = ({ inverted, itemButton }) => {
  if (inverted) {
    return buttonInverted
  } else if (inverted && itemButton) {
    return buttonInvertedItem
  } else {
    return buttonStyles
  }
}

export const CustomButton = styled.button`
  min-width: 1em;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 1em;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;

  ${getButtonStyles}
`
