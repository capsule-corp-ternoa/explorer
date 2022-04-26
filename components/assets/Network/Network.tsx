import Link from "next/link"
import style from './Network.module.scss';

const Network : React.FC = ({}) => {
    const toUpperCase = (word:any) => {return word.charAt(0).toUpperCase() + word.slice(1);}
    const network = process.env.NEXT_PUBLIC_ENV && toUpperCase(process.env.NEXT_PUBLIC_ENV)
    return(
        <Link href='https://ternoa.com/'>
            <a className={style.wrapper} target="_blank" rel="noreferrer noopener" >
                <span className={style.title}>{network ? network : "Mainnet"}</span>
                <div className={style.connectIndicator}>
                    <div className={style.outterIndicator} />
                    <div className={style.innerIndicator} />
                </div>
            </a>
        </Link>
    )
}
export default Network