import styled from 'styled-components'

export const FailurePage = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const FailureImage = styled.img`
  width: 250px;
`
export const FailureHeading = styled.h1`
  color: #475569;
  font-family: 'roboto';
  margin: 20px 0px;
  text-align: center;
  text-transform: capitalize;
`

export const Text = styled.p`
  color: #475569;
  font-family: 'roboto';
  text-align: center;
  font-size: 14px;
  font-weight: 500;
`
export const RetryButton = styled.button`
  height: 36px;
  color: #ffffff;
  background-color: #4656a1;
  border: none;
  outline: none;
  border-radius: 4px;
  width: 80px;
  padding: 10px;
  font-weight: 500;
  cursor: pointer;
`
