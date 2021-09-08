import React from 'react';

import * as styles from './main.module.scss';

const Main = ({children}) => {
	return <main className={styles.main_content}>{children}</main>
}
export default Main;
