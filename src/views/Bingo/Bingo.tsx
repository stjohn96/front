import React from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { Heading, HelpIcon, Link, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from '../../components/layout/Page'

const Bingo: React.FC = () => {
  const TranslateString = useI18n()


  const PageContainer = styled.div`
    background-color: #3bc6bf;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    padding: 40px 0;
    background-image: url('/components/bingo/assets/bingo-bg.png');
    background-size: cover;
  `

  const BingoContainer = styled.div`
    background: ${(props) => props.theme.card.background};
    box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);
    position: relative;
  `

  return (
    <>
      <PageContainer>
        <div>
          <img src="/components/bingo/assets/bingo.png" alt="Bingo" style={{ maxWidth: '450px'}} />
        </div>
        <BingoContainer>
          <iframe src="/components/bingo/index.html" title="Bingo" style={{ minHeight: '580px', minWidth: '520px' }} frameBorder="none"/>
        </BingoContainer>
        <hr/>
        <div>
          <Heading as="h3" size="xl" color="white" mb="24px">
            {TranslateString(999, 'Tutorial')}
          </Heading>
          <Text fontSize="24px" bold>How to play the #koalabingo</Text>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/6IdhKigJuUE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
        </div>
      </PageContainer>
    </>
  )
}

export default Bingo
