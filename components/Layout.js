import Meta from './Meta.js'
import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Header from './Header'


const Layout = ({children}) => {
	return (
		<>
		<Meta />
		<Nav />
		<div className={styles.container}>
			<main className={styles.main}>
				<Header />
				{children}
			</main>
		</div>
		</>
	)
}

export default Layout


