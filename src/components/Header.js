import classes from "./Header.module.css"
import { useSelector, useDispatch } from "react-redux"
import { authActions } from "../store"

const Header = () => {
	const isLogged = useSelector((state) => state.authenticator.isAuthenticated)
	const dispatch = useDispatch()

	const logoutHandler = (e) => {
		e.preventDefault()
		dispatch(authActions.logout())
	}

	return (
		<header className={classes.header}>
			<h1>Redux Auth</h1>
			{isLogged && (
				<nav>
					<ul>
						<li>
							<a href='/'>My Products</a>
						</li>
						<li>
							<a href='/'>My Sales</a>
						</li>
						<li>
							<button onClick={logoutHandler}>Logout</button>
						</li>
					</ul>
				</nav>
			)}
		</header>
	)
}

export default Header
