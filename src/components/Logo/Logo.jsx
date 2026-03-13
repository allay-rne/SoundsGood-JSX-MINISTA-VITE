import './Logo.scss'
import classNames from 'classnames'

const Logo = (props) => {
  const {
    className,
    loading = 'lazy',
  } = props
  const title = 'Home'

  return (
    <a
      className="Logo"
      href="/"
      title={title}
      aria-label={title}
    >
      <img
        className={classNames(className, 'logo')}
        src="/LogoSG.svg"
        alt=""
        width={199}
        height={60}
        loading={loading}
      />

    </a>
  )
}
export default Logo