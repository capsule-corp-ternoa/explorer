import Link from "next/link"
import style from './Network.module.scss';

const Network : React.FC = ({}) => {
    const toUpperCase = (word:any) => {return word.charAt(0).toUpperCase() + word.slice(1);}
    const network = process.env.NEXT_PUBLIC_ENV ? toUpperCase(process.env.NEXT_PUBLIC_ENV) : "Mainnet"
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