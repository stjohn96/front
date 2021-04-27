import { useEffect, useState } from 'react'
import apeABI from 'config/abi/ape.json'
import { getWeb3NoAccount } from 'utils/web3'
import { AbiItem } from 'web3-utils'
import BigNumber from 'bignumber.js'
import { usePriceBnbBusd } from '../state/hooks'

const useCakePrice = async () => {
  const [price, setCakePrice] = useState([])
  const bnbPriceUSD = usePriceBnbBusd()
  const web3 = getWeb3NoAccount()
  const bnToDec = (bn, decimals = 18) => {
    return bn.dividedBy(new BigNumber(10).pow(decimals)).toNumber()
  }

  const callMethod = async (method, args = []) => {
    const result = await method(...args).call()
    return result
  }

  useEffect(() => {
    async function getPrice() {
      const cakeBNBPairContractAddress = '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6'
      const IcakeBNBPairContract = new web3.eth.Contract((apeABI as unknown) as AbiItem, cakeBNBPairContractAddress)
      const cakeBNBPairContract = {
        address: cakeBNBPairContractAddress,
        abi: (apeABI as unknown) as AbiItem,
        contract: IcakeBNBPairContract,
        decimals: 18,
      }
      const result = await callMethod(cakeBNBPairContract.contract.methods.getReserves, [])

      setCakePrice(result)
    }

    getPrice()
  }, [price, web3])

  return bnToDec(new BigNumber(price[1])) / bnToDec(new BigNumber(price[0]))
}

export default useCakePrice
