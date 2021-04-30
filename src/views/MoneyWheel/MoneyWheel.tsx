import React from 'react'
import MoneyWheelBsc from 'moneywheel-bsc'
import useTokenBalance from 'hooks/useTokenBalance'
import { useMoneyWheel, useERC20 } from 'hooks/useContract'
import { getFullDisplayBalance } from 'utils/formatBalance'

const MoneyWheel: React.FC = () => {
  // Use temporary demo token for now
  // Remove this and use useCake instead
  const tokenContractAddress = "0xfC0349599B3E246DDC91dd7b51055e51C65bC796"

  const tokenBalance = useTokenBalance(tokenContractAddress)

return (
    <div style={{padding:"20px"}}>
        <MoneyWheelBsc
            contract={useMoneyWheel()}
            token={useERC20(tokenContractAddress)}
            tokenBalance={getFullDisplayBalance(tokenBalance)}
            tokenName="WHEEL"
            tokenImageUrl="https://koaladefi.finance/images/farms/lyptus.png"
            soundUrl="https://demo.defifusion.io/wheel.mp3"
            colors={{
                primaryColor: "#62815c",
                primaryContrastTextColor: "#fff",
                secondaryColor: "#41aa29",
                secondaryContrastTextColor: "#fff",
                jackpotColor: "#f4ad2b"
              }} />
    </div>
)
}

export default MoneyWheel