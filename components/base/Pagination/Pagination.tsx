import React from 'react';
import Link from 'next/link'
import clsx from 'clsx'
import LeftArrow from 'components/assets/LeftArrow';
import RightArrow from 'components/assets/RightArrow';
import style from './Pagination.module.scss';
import { useRouter } from 'next/router';

export interface PaginationProps {
  page: number
  totalPage: number
}

const getPaginatedUrl = (url: string, page: number) => `${url}?page=${page}`

const Pagination: React.FC<PaginationProps> = ({ page, totalPage }) => {
  const router = useRouter()

  if (totalPage < 2) {
    return null
  }

  return (
    <div className={clsx(style.Pagination, "d-flex justify-content-center")}>
      <div className={clsx(style.Pagination__desktop, "justify-content-center py-1")}>
        {page > 0 ? (
          <Link href={getPaginatedUrl(router.route, page)}>
            <a>
              <div className={clsx("cursor-point", style.paginationButton)}>
                <LeftArrow opacity={1} className="me-2 cursor-point"/>
              </div>
            </a>
          </Link>
        ) : (
          <div>
            <LeftArrow opacity={0.5} className="me-2 cursor-point"/>
          </div>
        )}
        <div className="only-desktop mt-1">
          <span className="text-large mx-2 mt-1">Page</span>
          <span className="text-large me-1 mt-1">{page + 1}</span>
          <span className="text-large ms-1 mt-1">of</span>
          <span className="text-large mx-2 mt-1">{totalPage}</span>
        </div>
        <div className="only-mobile mt-1">
          <span className="text-large mt-1">{page + 1}</span>
          <span className="text-large mx-1 mt-1">/</span>
          <span className="text-large mt-1">{totalPage}</span>
        </div>

        {page < totalPage - 1 ? (
          <Link href={getPaginatedUrl(router.route, page + 2)}>
            <a>
              <div className={clsx("cursor-point", style.paginationButton)}>
                <RightArrow opacity={1} className="ms-2 mb-1 cursor-point"/>
              </div>
            </a>
          </Link>
        ) : (
          <div>
            <RightArrow opacity={0.5} className="ms-2 cursor-point"/>
          </div>
        )}
      </div>
    </div>
  )
}

export default Pagination;
