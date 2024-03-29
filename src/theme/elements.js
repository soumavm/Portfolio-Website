import styled from "styled-components"
import { spacing } from "./index"

export const PageBody = styled.div`
  display: flex;
  flex-direction: column;
`

export const Row = styled.div`
  margin: auto;
  max-width: 60rem;
  width: 100%;
  display: flex;
  flex-direction: row;
`

export const Column = styled.div`
  ${(props) => `width: ${100/props.count}%;`}
  padding: 0;
  display: flex;
  flex-direction: column;
`