import headerStyle from '../styles/Header.module.css'

const Header = () => {
	return (
		<div>
			<h1 className={headerStyle.title}>
				<span>WebDev</span> News
			</h1>
		</div>
	)
}

export default Header
