import React from 'react';
import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';
import styled from "styled-components"
import { Section, Container } from "../global"
import "../../styles/pricingButton.css"


class Pricing extends React.Component {
    handleSubmit = event => {
        event.preventDefault()
        window.location.href = "#top"
    }


    render() {
        return (
            <Section id="pricing">
                <StyledContainer>
                    <Subtitle>Pricing</Subtitle>
                    <SectionTitle>Find a plan that's right for you.</SectionTitle>
                    <FeatureText>Every  Plan Includes 15-Day Free Trial.</FeatureText>
                    <PricingTable highlightColor='#098c8c'>
                        <PricingSlot buttonClass="pricingButton" id="pricing" onClick={this.handleSubmit} buttonText="SIGN UP" title='FREE' priceText='&#8377; 0'>
                            <PricingDetail> <b>1 Screen</b></PricingDetail>
                            <PricingDetail> <b>Video/Display Ads</b> </PricingDetail>
                            <PricingDetail> <b>Limited Subjects</b> </PricingDetail>
                            <PricingDetail strikethrough> <b>Dark Mode</b></PricingDetail>
                        </PricingSlot>
                        <PricingSlot buttonClass="pricingButton" id="pricing" highlighted onClick={this.handleSubmit} buttonText='SIGN UP' title='GOLD' priceText='&#8377; 400/semester'>
                            <PricingDetail> <b>2 Screen</b></PricingDetail>
                            <PricingDetail> <b>All Subjects</b> </PricingDetail>
                            <PricingDetail> <b>Dark Mode</b></PricingDetail>
                            <PricingDetail strikethrough> <b>Video/Display Ads</b> </PricingDetail>
                        </PricingSlot>
                        <PricingSlot buttonClass="pricingButton" id="pricing" onClick={this.handleSubmit} buttonText='SIGN UP' title='DIAMOND' priceText='&#8377; 700/year'>
                            <PricingDetail> <b>2 Screen</b></PricingDetail>
                            <PricingDetail> <b>All Subjects</b> </PricingDetail>
                            <PricingDetail> <b>Dark Mode</b></PricingDetail>
                            <PricingDetail strikethrough> <b>Video/Display Ads</b> </PricingDetail>
                        </PricingSlot>
                    </PricingTable>
                </StyledContainer>

            </Section>

        )
    }
}


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
const FeatureText = styled.p`
  text-align: center;
`

export default Pricing;