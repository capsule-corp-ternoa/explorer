import Link from "next/link"
import style from './Network.module.scss';

const Network : React.FC = ({}) => {
    const network =
    process.env.NEXT_PUBLIC_INDEXER_BASE_URL &&
    process.env.NEXT_PUBLIC_INDEXER_BASE_URL.includes('alphanet')
      ? 'Alphanet'
      : 'Mainnet';
    return(
        <Link href='https://ternoa.com/'>
            <a className={style.wrapper} target="_blank" rel="noreferrer noopener" >
                <div className={style.connectIndicator}>
                    <div className={`${style.outterIndicator} ${network}`} />
                    <div className={`${style.innerIndicator} ${network}`} />
                </div>
                <div className={style.title}>{network}</div>
            </a>
        </Link>
    )
}
export default Network