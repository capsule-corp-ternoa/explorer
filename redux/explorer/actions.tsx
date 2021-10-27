import { UserWallet } from 'interfaces'

export const actions = {
    setBlockData: (blockData:any) => ({
        type: 'EXP_BLOCKS',
        value: blockData,
    }),
    setNftData: (nftData:any) => ({
        type: 'EXP_NFTS',
        value: nftData,
    }),
    setTransData: (trnasData:any) => ({
        type: 'EXP_TRANSACTIONS',
        value: trnasData,
    }),
    setValiData: (valiData:any) => ({
        type: 'EXP_VALIDATORS',
        value: valiData,
    })
}