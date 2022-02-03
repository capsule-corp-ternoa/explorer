import Link from "next/link"
import style from './Testnet.module.scss';

const Testnet : React.FC = ({}) => {
    return(
        <Link href='https://ternoa.com/'>
            <a className={style.testnetWrapper} target="_blank" rel="noreferrer noopener" >
                <div/>Ternoa
            </a>
        </Link>
    )
}
export default Testnet