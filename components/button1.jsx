import React, { Component } from 'react';
import styles from './button1.module.css';  //styles 

class Button1 extends Component {
    render() {
        return (
            <div className={styles.button}>  //클래스 이름
                <span className={styles.text}>Button1</span>  //클래스 이름
            </div>
        );
    }
}

export default Button1;