import React, { useState, useEffect } from 'react';
import clsx from 'clsx'
import UpDown from 'components/assets/UpDown';
import style from './MaxCount.module.scss';

export interface MaxCountProps {
  count: number,
  onSelectCount: any
}

const MaxCount: React.FC<MaxCountProps> = ({ count, onSelectCount }) => {
  const [count1, setCount1] = useState(10);
  const [count2, setCount2] = useState(20);
  const [count3, setCount3] = useState(50);
  const [isSelectable, setIsSelectable] = useState(false);

  useEffect(() => {
    selectCount(count);
  }, [])

  const onClick1 = (cnt: number) => {
    selectCount(cnt);
    setIsSelectable(false);
    if(isSelectable) onSelectCount(cnt);
  }

  const onClick2 = (cnt: number) => {
    selectCount(cnt);
    setIsSelectable(false);
    onSelectCount(cnt);
    if(isSelectable) onSelectCount(cnt);
  }

  const onClick3 = (cnt: number) => {
    selectCount(cnt);
    setIsSelectable(false);
    onSelectCount(cnt);
    if(isSelectable) onSelectCount(cnt);
  }

  const selectCount = (cnt: number) => {
    if (cnt == 10) {
      setCount1(10);
      setCount2(20);
      setCount3(50);
    } else if (cnt == 20) {
      setCount1(20);
      setCount2(10);
      setCount3(50);
    } else if (cnt == 50) {
      setCount1(50);
      setCount2(10);
      setCount3(20);
    }
  }

  const onClickList = () => {
    if(!isSelectable) setIsSelectable(true);
  }

  return (
    <div className={clsx(style.MaxCount, "d-flex justify-content-center align-items-center pt-4")}>
      <span>Show</span>
      <div className={clsx(style.countBtn, "d-flex flex-column btn btn-info rounded-pill py-1 mx-2")} onClick={() => onClickList()}>
        <div onClick={() => onClick1(count1)}>
          <span className={clsx(style.count, "me-2")}>{count1}</span>
          <UpDown />
        </div>
        {
          isSelectable &&
          <div>
            <div onClick={() => onClick2(count2)}>
              <span className={clsx(style.count, "me-3")}>{count2}</span>
            </div>
            <div onClick={() => onClick3(count3)}>
              <span className={clsx(style.count, "me-3")}>{count3}</span>
            </div>
          </div>
        }
      </div>
      <span>Records</span>
    </div>
  )
}

export default MaxCount;
