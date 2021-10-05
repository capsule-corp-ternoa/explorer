import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import style from './Pagination.module.scss';
import LeftArrow from 'components/assets/LeftArrow';
import RightArrow from 'components/assets/RightArrow';

export interface PaginationProps {
    curPage :number,
    totalPage :number
}

const Pagination: React.FC<PaginationProps> = (props) => {

    const [curPage, setCurPage] = useState(props.curPage);
    const [totalPage, setTotalPage] = useState(props.totalPage);

    return (
        <div className="d-flex justify-content-center py-3">
            <div className={"cursor-point " + style.paginationButton} onClick={()=>{
                if(curPage > 1)
                    setCurPage(curPage - 1)
            }}>
                <LeftArrow opacity={curPage == 1?0.5:1} className="me-2 cursor-point"/>
            </div>
            <span className="text-large mx-2">Page</span>
            <span className="text-large me-1">{curPage}</span>
            <span className="text-large ms-1">of</span>
            <span className="text-large mx-2">{totalPage}</span>
            <div className={"cursor-point " + style.paginationButton} onClick={()=>{
                if(curPage < totalPage)
                    setCurPage(curPage + 1)
            }}>
                <RightArrow opacity={curPage == totalPage?0.5:1} className="ms-2 cursor-point"/>
            </div>
        </div>
    )
}

export default Pagination;
