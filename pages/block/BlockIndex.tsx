import { useState, useEffect } from 'react';
import Pagination from 'components/base/Pagination';
import MaxCount from 'components/base/MaxCount';
import ListView from 'components/base/ListView';
import Layout from 'components/base/Layout';
import { getBlockList } from 'apis/block'
import { API_PAGE_SIZE } from 'helpers/constants';
import { columns, render } from './table';

export interface BlockIndexProps { }

const BlockIndex: React.FC<BlockIndexProps> = () => {
  const [totalCount, setTotalCount] = useState(0)
  const [data, setData] = useState<any>({})
  const [pageSize, setPageSize] = useState<number>(API_PAGE_SIZE)
  const [page, setPage] = useState<number>(0);
  const offset = page * pageSize

  const getBlocksList = async ( offset: number, pageSize : number) => {
    try{
      const blocksList =  await getBlockList(offset, pageSize)
      setData(blocksList), 
      setTotalCount(blocksList.totalCount)
    }catch(err){
      console.log(err)
    }
  }
  
  const selectCount = (count: number) => {
    setPage(0)
    setPageSize(count);
  }

  useEffect(() => {
    getBlocksList(offset, pageSize)
  }, [page, pageSize])

  return (
    <Layout>
      <div className="ellipse2"></div>
      <div className="custom_table">
        <h1 className="title mb-4 ps-lg-4">Blocks</h1>
        <ListView
          data={data && data.data}
          columns={columns}
          renderCell={render}
          footer={(
            <div className="d-flex justify-content-between align-items-center mt-sm-4">
              <MaxCount count={pageSize} onSelectCount={selectCount}/>
              <Pagination page={page} data={data} setPage={setPage} totalPage={Math.ceil(totalCount / pageSize)} />
            </div>
          )}
        />
      </div>
    </Layout>
  )
}

export default BlockIndex;
