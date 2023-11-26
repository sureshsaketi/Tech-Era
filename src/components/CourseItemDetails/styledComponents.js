import styled from 'styled-components'

export const CourseDetailsContainer = styled.div`
  height: 85vh;
  padding: 40px;
`

export const LanguageCard = styled.div`
  display: flex;
  min-height: 300px;
  box-shadow: 1px 1px #bfbfbf;
  border-radius: 5px;
  height: 300px;
  border: none;
`
export const LangImage = styled.img`
  height: 100%;
`

export const DetailsContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`
export const LangHeading = styled.h1`
  color: #1e293b;
  font-family: 'roboto';
  font-size: 24px;
  margin: 0;
`
export const Description = styled.p`
  line-height: 1.5;
  color: #475569;
  font-family: 'roboto';
  font-weight: 400;
  margin: 0;
  overflow: auto;
`
export const LoaderContainer = styled.div`
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`
