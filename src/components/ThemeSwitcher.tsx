import { VFC } from 'react'
import { useTheme } from 'next-themes'

interface Props {}

const TehemSwitcher: VFC<Props> = () => {
  const { theme, setTheme } = useTheme()
  const nextTheme = theme === 'light' ? 'dark' : 'light'
  return (
    <div className="c-theme-switcher">
      <input id="theme-checkbox" type="checkbox" className="js-theme-checkbox u-sr-only" />
      <div className="c-theme-switcher_inner">
        <label
          className="c-theme-switcher_button"
          role="button"
          htmlFor="theme-checkbox"
          onClick={() => setTheme(nextTheme)}
        >
          {nextTheme}
        </label>
      </div>
    </div>
  )
}

export default TehemSwitcher
