import React from 'react';

import headerLogo from '../../assets/images/logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={headerLogo} alt="MyBurger" />
    </div>
);

export default logo;