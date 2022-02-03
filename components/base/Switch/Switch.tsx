import style from './style.module.scss'
import DownMobile from 'components/assets/DownMobile';
import UpMobile from 'components/assets/UpMobile';
interface SwitchProps {
  className?: string
  options: string[]
  selected: number
  onChange: (selected: number) => void
}

const Switch: React.FC<SwitchProps> = ({
  className,
  options,
  selected,
  onChange
}) => (
  <div>
    <div className={`${style.switchContainer} ${className}`}>
      <div className='p-absolute'>
        <label>
          <input type='checkbox' />
          <div className={style.switch}>
            {options.map((option, key) => (
              <div key={key}
                className={`${style.switch__btn} ${selected === key ? style.switch__primary : style.switch__secondary}`}
                onClick={() => onChange(key)}
              >
                {option}
                <UpMobile className={`${style['option-up']} ms-2 `}/>
                <DownMobile className={`${style['option-down']} ms-2 `}/>
              </div>
            ))}
          </div>
        </label>
      </div>
    </div>
  </div>
)

export default Switch
