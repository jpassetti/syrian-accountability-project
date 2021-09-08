import React from 'react';
import * as styles from './buttongroup.module.scss'

const ButtonGroup = ({children}) => {
	return <div className={styles.btn_group}>
		{children}
	</div>
}
export default ButtonGroup;
