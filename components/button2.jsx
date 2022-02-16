import React, { Component } from 'react';
import styles from './button2.module.css';  //styles 

class Button2 extends Component {
    render() {
        return (
            <div className={styles.button}>  //클래스 이름
                <span className={styles.text}>Button2</span>  //클래스 이름
            </div>
        );
    }
}

export default Button2;