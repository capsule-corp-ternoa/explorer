import Link from "next/link"
import style from './Network.module.scss';

const Network : React.FC = ({}) => {
    return(
        <Link href='https://ternoa.com/'>
            <a className={style.wrapper} target="_blank" rel="noreferrer noopener" >
                <span className={style.title}>Mainnet</span>
                <div className={style.connectIndicator}>
                    <div className={style.outterIndicator} />
                    <div className={style.innerIndicator} />
                </div>
            </a>
        </Link>
    )
}
export default Network