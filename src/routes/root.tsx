import { FC, Suspense } from "react";
import { Form, Outlet } from "react-router-dom";

import styles from './Root.module.css';
import Header from "../components/Layouts/Header";
import Loading from "../components/UI/Loading";
import Footer from "../components/Layouts/Footer";

export default function Root() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<Suspense fallback={<Loading />}>
					<Outlet />
				</Suspense>
			</main>
			<Footer />
		</>
	)
}