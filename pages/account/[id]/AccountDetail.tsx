import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { useMediaQuery } from 'react-responsive';
import Check from 'components/assets/Check';
import dummyData from 'components/data/accounts.json'
import Layout from 'components/base/Layout';
import DetailView from 'components/base/DetailView';
import { fields, render } from './table'

export interface AccountDetailProps {}

const AccountDetail: React.FC<AccountDetailProps> = () => {
    const [isLaptop, setIsLaptop] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if(mediaQuery !== isLaptop){
          setIsLaptop(mediaQuery);
        }
    }, [mediaQuery])

    useEffect(()=>{
        if(!router.isReady) return;
    
        var address = router.query.id as string
        var data = dummyData.filter(function(item) {
            return item.address == address;
        })
        if (data.length != 0) {
            setAccountData(data[0]);
        } else {
            setAccountData(dummyData[0]);
        }
    }, [router.isReady]);

    return (
      <Layout back='/account' title={'sdfsdf'}>
        <DetailView fields={fields} data={dummyData[1]} renderCell={render}/>
      </Layout>
    )
}

export default AccountDetail;
