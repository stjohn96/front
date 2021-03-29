// https://swape.koaladefi.finance/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0xba26397cdff25f0d26e815d218ef3c77609ae7f1
const getSwapUrlPathParts = ({ tokenAddresses }) => {
  const chainId = process.env.REACT_APP_CHAIN_ID
  return `#/swap?outputCurrency=${tokenAddresses[chainId]}`
}

export default getSwapUrlPathParts
