import { useCallback } from 'react'
import { useRouter } from "next/router";

const pagination = () => {
  const router = useRouter()

  const page = router.query.page ?? 1

  const gotoPage = useCallback(
    () => router.push(`${router.route}?page=${page}`),
    [router, page]
  )

  return {
    gotoPage,
    page: Number(page) - 1
  }
}

export default pagination;