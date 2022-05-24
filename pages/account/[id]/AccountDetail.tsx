import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Back from 'components/assets/Back';
import Layout from 'components/base/Layout';
import ListView from 'components/base/ListView';
import DetailView from 'components/base/DetailView';
import Switch from 'components/base/Switch';
import { fields, render, eventsListColumns, eventsListRender } from './table';
import { columns as extrinsicColumns, render as renderExtrinsic } from 'pages/extrinsic/table';
import { getAccount } from 'apis/account';
import { getEventsListByAccount } from 'apis/event';
import { ellipsifyMiddle } from 'helpers/lib';
import { API_PAGE_SIZE } from 'helpers/constants';
import MaxCount from 'components/base/MaxCount';
import Pagination from 'components/base/Pagination';

export interface AccountDetailProps {}

enum DetailMode {
  ID,
  Extrinsic,
  Events,
}

const AccountDetail: React.FC<AccountDetailProps> = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const [detailMode, setDetailMode] = useState<DetailMode>(DetailMode.ID);
  
  const [txData, setTxData] = useState<any>({});
  const [txPage, setTxPage] = useState<number>(0);
  const [totalTxCount, setTotalTxCount] = useState<number>(0)
  const [pageSize, setPageSize] = useState<number>(API_PAGE_SIZE)
  const txOffset = txPage * pageSize
  
  const [eventsListData, setEventsListData] = useState<any>()
  const [eventsPage, setEventsPage] = useState<number>(0);
  const [totalCountEvents, setTotalCountEvents] = useState<number>(0)
  const [isLoadingEventList, setIsLoadingEventList] = useState<boolean>(false)
  const [eventsPageSize, setEventsPageSize] = useState<number>(API_PAGE_SIZE)
  const eventsOffset = eventsPage * eventsPageSize

  const getAccountData = async (id : string, offset: number, pageSize : number) => {
    try{
      if (!id) throw new Error("Couldn't get data: Unknown id")
      const accountDatas =  await getAccount(id, offset, pageSize)
      setTxData(accountDatas), 
      setTotalTxCount(accountDatas.totalCount)
    }catch(err){
      console.log(err)
    }
  }

  const getEventsDatasByAccount = async (id : string, offset: number, pageSize : number) =>{
    setIsLoadingEventList(true)
    try{
      if (!id) throw new Error("Couldn't get data: Unknown id")
      const eventsDatas = await getEventsListByAccount(id, offset, pageSize)
      setEventsListData(eventsDatas),
      setTotalCountEvents(eventsDatas.totalCount)
    }catch(err){
      console.log(err)
    }finally{
      setIsLoadingEventList(false)
    }
  }

  const selectCount = (count: number) => {
    setTxPage(0) 
    setPageSize(count);
  }

  const selectEventsCount = (count: number) => {
    setEventsPage(0) 
    setEventsPageSize(count);
  }
  
  useEffect(()=>{
    setDetailMode(DetailMode.ID)
  }, [id])

  useEffect(() => {
    selectCount(API_PAGE_SIZE)
    selectEventsCount(API_PAGE_SIZE)
    id && getAccountData(id, txOffset, pageSize)
    id && getEventsDatasByAccount(id, eventsOffset, eventsPageSize)
  }, [detailMode]);

  useEffect(() => {
    id && getAccountData(id, txOffset, pageSize)
    id && getEventsDatasByAccount(id, eventsOffset, eventsPageSize)
  }, [id, txPage, pageSize, eventsPage, eventsPageSize]);
  
  if (!id) {
    return null;
  }
  
  return (
    <Layout back="/account">
      <div className="ellipse3"></div>
      <div className="custom_table">
        <div className="sub_header">
          <div className="cursor-point w-fit-content me-4 only-desktop">
            <Link href={'/account'}>
              <a>
                <Back className="back" />
              </a>
            </Link>
          </div>
          <Switch
            options={[ellipsifyMiddle(id), 'Extrinsic', 'Events']}
            selected={detailMode}
            onChange={setDetailMode}
          />
        </div>

        {detailMode === DetailMode.ID &&
          <DetailView fields={fields} data={txData} renderCell={render} />
        }

        {detailMode === DetailMode.Extrinsic &&
          txData &&
          txData.extrinsics &&
          <ListView
            columns={extrinsicColumns}
            data={txData && txData.extrinsics}
            renderCell={renderExtrinsic}
            footer={
              <div className="d-flex justify-content-between align-items-center mt-sm-4">
                <MaxCount count={pageSize} onSelectCount={selectCount}/>
                <Pagination page={txPage} data={txData} setPage={setTxPage} totalPage={Math.ceil(totalTxCount / pageSize)} />
              </div>
            }
          />
        }

        {detailMode === DetailMode.Events &&
          eventsListData &&
          eventsListData.data &&
          <ListView
            columns={eventsListColumns}
            data={ eventsListData && eventsListData.data}
            renderCell={eventsListRender}
            footer={
              <div className="d-flex justify-content-between align-items-center mt-sm-4"> 
                <MaxCount count={eventsPageSize} onSelectCount={selectEventsCount}/>
                <Pagination page={eventsPage} data={eventsListData} setPage={setEventsPage} totalPage={Math.ceil(totalCountEvents / eventsPageSize)} isLoading={isLoadingEventList}/>
              </div>
            }
          />
        } 
      </div>
    </Layout>
  );
};

export default AccountDetail;
