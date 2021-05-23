import React, { Component } from 'react';
import styles from '../App.cs'

class Footer extends Component {
    render() {
        return (
            <footer className={styles.footer}>
                <p>
                    <h3>Contributors</h3>
                    <p>
                        Vladimir Andreev &emsp; &nbsp; &nbsp; <a href="https://github.com/VladimirAndreev09">https://github.com/VladimirAndreev09</a>
                    </p>
                    <br />
                    <p>
                        Troy Daniello &emsp; &emsp; &ensp; &ensp; <a href="https://github.com/TDLorenz">https://github.com/TDLorenz</a>
                    </p>
                    <br />
                    <p>
                        Sajarin Dider &emsp; &emsp; &ensp; &ensp; <a href="https://github.com/sajarindider">https://github.com/sajarindider</a>
                    </p>
                    <br />
                    <p>
                        Valentine Shidlovskiy &nbsp; <a href="https://github.com/Valentine-S">https://github.com/Valentine-S</a>
                    </p>
                </p>
            </footer>
        );
    }
}

export default NavBar;