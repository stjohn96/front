import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon, Link } from '@pancakeswap-libs/uikit'

const StyledFarmStakingCard = styled(Card)`
  display: flex;
  flex: 1;
`
const CardMidContent = styled(Heading).attrs({ size: 'xl' })`
  color: ${({ theme }) => (theme.isDark ? 'white' : '#4bca4b')};
  line-height: 44px;
`

const LinkAudit = styled(Link)`
  font-size: 32px;
  font-weight: 600;
`

const AuditCard = () => {
  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading size="lg">Audited by</Heading>
        <CardMidContent>
          <LinkAudit href="https://koaladefi.finance/files/audit_certik.pdf" target="__blank" rel="noreferrer noopener">
            <img src="/images/koala/shield.svg" height="24px" width="24px" alt="Certik" /> Certik
          </LinkAudit>
          <LinkAudit
            href="https://koaladefi.finance/files/audit_techrate.pdf"
            target="__blank"
            rel="noreferrer noopener"
          >
            <img src="/images/koala/shield.svg" height="24px" width="24px" alt="Techrate" /> Techrate
          </LinkAudit>
        </CardMidContent>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default AuditCard
