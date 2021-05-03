import Faq from 'react-faq-component'
import { ThemeContext as StyledThemeContext } from 'styled-components'
import { ThemeContext } from 'contexts/ThemeContext'
import React, { useContext } from 'react'

// TODO: Farms and Bushes should share a single component

const data = {
    title: 'FAQ',
    rows: [
      {
        title: `What is APE LP ?`,
        content: `These farms use liquidities from the ApeSwap DEX (Decentralized Exchange). <br><br>
        In Order to provide liquidity to these farms, you need to use the ApeSwap DEX interface which can be found <a href="https://swape.koaladefi.finance/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0xba26397cdff25f0d26e815d218ef3c77609ae7f1" target="_blank" style="color: orange;font-weight: bold">here</a>. 
        <br><br>
        Read more about the Koala DeFi & ApeSwap partnership in this <a href="https://koaladefi.medium.com/partnership-with-apeswap-finance-c1dd2dd44eee" target="_blank" style="color: orange;font-weight: bold">blog post</a>.`,
      },
      {
        title: 'What is PCS LP ?',
        content: `These farms use liquidities from the <strong>P</strong>an<strong>C</strong>ake<strong>S</strong>wap DEX. <br><br>
        Koala DeFi keeps these farms available so that user who have already providied liquidity are able to access their funds. <br><br>
        To provide LP to these farms, you need to use PanCakeSwap DEX interface which can be found <a href="https://swap.koaladefi.finance/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0xba26397cdff25f0d26e815d218ef3c77609ae7f1" target="_blank" style="color: orange;font-weight: bold">here</a>. 
        <br><br>
        All futures farms will use APE LP. Read more about the Koala DeFi & ApeSwap partnership in this <a href="https://koaladefi.medium.com/partnership-with-apeswap-finance-c1dd2dd44eee" target="_blank" style="color: orange;font-weight: bold">blog post</a>.`,
      },
      {
        title: 'What happends to my liquitity in the OLD farms ?',
        content: `Your liquidities will always remain available for withdrawal. Your funds are SAFU.<br><br>
        The Pancakeswap farms have been deactivated ($LYPTUS rewards will not longer be distributed), these farms have been moved to the inactive tab.<br><br>
        You will always be able to find these farms in the inactive tab and withdraw your funds.
        <br><br>
        Read more about the Koala DeFi & ApeSwap partnership in this <a href="https://koaladefi.medium.com/partnership-with-apeswap-finance-c1dd2dd44eee" target="_blank" style="color: orange;font-weight: bold">blog post</a>.`,
      },
      {
        title: 'What are the risks of using ApeSawp LP vs PanCakeSwap LP ?',
        content: `<strong>Contract risks</strong><br> Apeswap uses a fork of the PanCakeSwap contracts. These forks have been audited. Audit reports can we found 
        <a href="https://github.com/ApeSwapFinance/apeswap-banana-farm/blob/master/audits/ApeSwap_GEMZ_Audit_Report_21.03.05.pdf" target="_blank" style="color: orange;font-weight: bold">here</a>.
        <br><br>
        <strong>Liquidities risks</strong><br>Koala DeFi is a young project and our liquidities are still low and volatility is still high. <br>
        Having these liquidities in Apeswap Rather than Pancakeswap doesn't change this “risk”.`,
      },
    ],
}

const FarmFaq = function(){
    const { isDark } = useContext(ThemeContext)
    const styles = {
        bgColor: isDark ? 'linear-gradient(139.73deg,#313D5C 0%,#3D2A54 100%)' : '#FFFFFF',
        titleTextColor: isDark ? '#A28BD4' : '#62815c',
        rowTitleColor: isDark ? '#A28BD4' : '#62815c',
        rowContentColor: isDark ? '#A28BD4' : '#62815c',
        arrowColor: isDark ? '#A28BD4' : '#62815c'
    }
    return (
        <Faq data={data} styles={styles} />
    )
}

export default FarmFaq