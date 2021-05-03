import Faq from 'react-faq-component'
import { ThemeContext as StyledThemeContext } from 'styled-components'
import { ThemeContext } from 'contexts/ThemeContext'
import React, { useContext } from 'react'

// TODO: Farms and Bushes should share a single component

const data = {
  title: 'FAQ',
  rows: [
    {
      title: `What are the deposit fees used for?`,
      content: `<br>
      All deposit fees collected are used to buy $LYPTUS, and then fed to the Koala's (Burnt).
      <br><br>
      The LYPTUS-BUSD LP deposit fee will be decomposed, the BUSD portion will be used to market buy the $LYPTUS. The $LYPTUS will then been eaten (burnt).`,
    },
    {
      title: `Audits`,
      content: `<br>The Bush v1 contracts have been fully audited by Techrate, <a href="https://koaladefi.finance/files/audit_techrate.pdf" target="_blank" style="color: orange;font-weight: bold">Techrate audit</a>.`,
    },
    {
      title: `v1 vs v0 Bushes ?`,
      content: `<br>v0: A proof of concept, ended up a huge success!<br><br>
                v1: We took everything we learnt from the v0 bushes and improved upon it.
                <br><br>
                Learn more about the Bush evolution on our <a href="https://koaladefi.medium.com/the-bush-next-evolution-d9e316be71f1" target="_blank" style="color: orange;font-weight: bold">blog</a>.`,
    },
  ],
}

const FarmFaq = function () {
  const { isDark } = useContext(ThemeContext)
  const styles = {
    bgColor: isDark ? 'linear-gradient(139.73deg,#313D5C 0%,#3D2A54 100%)' : '#FFFFFF',
    titleTextColor: isDark ? '#A28BD4' : '#62815c',
    rowTitleColor: isDark ? '#A28BD4' : '#62815c',
    rowContentColor: isDark ? '#A28BD4' : '#62815c',
    arrowColor: isDark ? '#A28BD4' : '#62815c',
  }
  return <Faq data={data} styles={styles} />
}

export default FarmFaq
