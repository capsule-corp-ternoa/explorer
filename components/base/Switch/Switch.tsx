import clsx from 'clsx'
import style from './style.module.scss'

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
    <div className={clsx(style.switchContainer, className)}>
      <div className='p-absolute'>
        <label>
          <input type='checkbox' />
          <div className={style.switch}>
            {options.map((option, key) => (
              <div
                className={clsx(style.switch__btn, selected === key ? style.switch__primary : style.switch__secondary)}
                onClick={() => onChange(key)}
              >
                {option}
              </div>
            ))}
          </div>
        </label>
      </div>
    </div>
  </div>
)

export default Switch
