import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Back from 'components/assets/Back';
import Layout from 'components/base/Layout';
import ListView from 'components/base/ListView';
import DetailView from 'components/base/DetailView';
import Switch from 'components/base/Switch';
import { fields, render } from './table';
import { columns as extrinsicColumns, render as renderExtrinsic } from 'pages/extrinsic/table';
import { getAccount } from 'apis/account';
import { ellipsifyMiddle } from 'helpers/lib';
import { API_PAGE_SIZE } from 'helpers/constants';
import MaxCount from 'components/base/MaxCount';
import Pagination from 'components/base/Pagination';

export interface AccountDetailProps {}

enum DetailMode {
  ID,
  Extrinsic,
}

const AccountDetail: React.FC<AccountDetailProps> = () => {
  const router = useRouter();
  const [data, setData] = useState<any>({});
  const [detailMode, setDetailMode] = useState<DetailMode>(DetailMode.ID);
  const [page, setPage] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0)
  const [pageSize, setPageSize] = useState<number>(API_PAGE_SIZE)
  const id = router.query.id as string;
  const offset = page * pageSize

  const getAccountData = async (id : string, offset: number, pageSize : number) => {
    try{
      if (!id) throw new Error("Couldn't get data: Unknown id")
      const accountDatas =  await getAccount(id, offset, pageSize)
      setData(accountDatas), 
      setTotalCount(accountDatas.totalCount)
    }catch(err){
      console.log(err)
    }
  }
  const loadNextDatas = () =>{
    data && data.hasNextPage && setPage(page +1)
  }
  const loadPreviousDatas = () =>{
    data && data.hasPreviousPage && setPage(page -1)
  }
  const selectCount = (count: number) => {
    setPage(0)
    setPageSize(count);
  }
  
  useEffect(() => {
    id && getAccountData(id, offset, pageSize);
  },[id, page, pageSize]);
  
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
            options={[ellipsifyMiddle(id), 'Extrinsic']}
            selected={detailMode}
            onChange={setDetailMode}
          />
        </div>
        {detailMode === DetailMode.ID && (
          <DetailView fields={fields} data={data} renderCell={render} />
        )}
        {detailMode === DetailMode.Extrinsic &&
          data &&
          data.extrinsics && (
            <ListView
              columns={extrinsicColumns}
              data={data && data.extrinsics}
              renderCell={renderExtrinsic}
              footer={(
                <div className="d-flex justify-content-between align-items-center mt-sm-4">
                  <MaxCount count={pageSize} onSelectCount={selectCount}/>
                  {/* <Pagination page={page} data={data} setPage={setPage} totalPage={Math.ceil(totalCount / pageSize)} /> */}
                  <Pagination page={page} loadNextDatas={loadNextDatas} loadPreviousDatas={loadPreviousDatas} data={data} totalPage={Math.ceil(totalCount / pageSize)} />
                </div>
              )}
            />
          )}
      </div>
    </Layout>
  );
};

export default AccountDetail;
