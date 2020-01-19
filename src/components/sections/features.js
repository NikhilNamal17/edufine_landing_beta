import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="features">
    <StyledContainer>
      <Subtitle>Features</Subtitle>
      <SectionTitle>Smart semester management</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Quality content</FeatureTitle>
          <FeatureText>
            We only deliver the best content that is easy to understand and recommended by Mumbai University.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Completely customisable</FeatureTitle>
          <FeatureText>
            An assortment of premium themes and completely customisable interface.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>A tenth of the price</FeatureTitle>
          <FeatureText>
            An average student spends over Rs. 5000 per year on resources alone.
           Our Diamond membership is a fraction of that price.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Read anytime, anywhere.</FeatureTitle>
          <FeatureText>
            Cross browser compatibility with support for mobile as well.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Bookmarks</FeatureTitle>
          <FeatureText>
            You can save important parts to refer back to later.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Fast updates</FeatureTitle>
          <FeatureText>
            Our content is regularly updated with the current Mumbai University syllabus. This includes repeated questions from the past years as well.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
      <Subtitle> Note: This app currently has courses for Semster 8 Electronics and Telecommunications and Computer Science students only. </Subtitle>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 40px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  
`
