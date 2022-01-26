// import { Dispatch} from 'react';
import LeftArrow from 'components/assets/LeftArrow';
import RightArrow from 'components/assets/RightArrow';
import style from './Pagination.module.scss';

export interface PaginationProps {
  page: number
  data: any
  loadNextDatas: ()=>void
  loadPreviousDatas: ()=>void
  // setPage: Dispatch<React.SetStateAction<number>>
  totalPage: number
}

// const loadNextExtrinsics = (data : any, page: number, setPage:any ) =>{
//   data && data.hasNextPage && setPage(page +1)
// }

// const loadPreviousExtrinsics = (data : any, page: number, setPage:any) =>{
//   data && data.hasPreviousPage && setPage(page -1)
// }

const Pagination: React.FC<PaginationProps> = ({ data, page, totalPage, loadNextDatas, loadPreviousDatas }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      {data && data.hasPreviousPage ? (
        <div onClick={loadPreviousDatas} className={style.button}>
          <LeftArrow opacity={1}/>
        </div>
      ) : (
        <div>
          <LeftArrow opacity={0.2}/>
        </div>
      )}
      <div className="d-flex mx-2">
        <span className="d-none d-xl-block me-1">Page</span>
        <span>{page + 1}</span>
        <span className="d-xl-none mx-1">/</span>
        <span className="d-none d-xl-block mx-1">of</span>
        <span>{totalPage}</span>
      </div>
      {data && data.hasNextPage ? (
        <div onClick={()=>loadNextDatas()} className={style.button}>
          <RightArrow opacity={1}/>
        </div>
      ) : (
        <div>
          <RightArrow opacity={0.2}/>
        </div>
      )}
    </div>
  )
}

export default Pagination;
