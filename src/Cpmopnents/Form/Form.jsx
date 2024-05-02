import React, { useState } from "react";
import styles from "./Form.module.css";
import { FaStar } from "react-icons/fa";
import axios from "axios";

const Form = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [comments, setComments] = useState('');

    const sendForm = () => {
        axios.post('https://northwind.vercel.app/api/categories',{
            name: name,
            surname: surname,
            email: email,
            comments: comments
        })
        .then(res => {
            console.log(res.data);
            setName('');
            setSurname('');
            setEmail('');
            setComments('');
        })
        .catch(error => {
            console.error('Error sending form:', error);
        });
    };

    return (
        <div className={styles.box}>
            <div className={styles.container}>
                <h1>Contact Us</h1>
                <div className={styles.formBox}>
                    <div className={styles.nametagg}>
                        <div className={styles.tag}>
                            <h3>Full name </h3>
                            <p>
                                <FaStar />
                            </p>
                        </div>
                        <div className={styles.nameBox}>
                            <div className={styles.nameTag}>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                                <p>First</p>
                            </div>
                            <div className={styles.nameTag}>
                                <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)}/>
                                <p>Last</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.mail}>
                        <div className={styles.mailTag}>
                            <h3>Email</h3>
                            <p>
                                <FaStar />
                            </p>
                        </div>
                        <div className={styles.mailBox}>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className={styles.comment}>
                        <div className={styles.commentTag}>
                            <h4>Leave us a few words</h4>
                            <p>
                                <FaStar />
                            </p>
                        </div>
                        <div className={styles.commentBox}>
                            <textarea name="" id="" cols="30" rows="10" value={comments} onChange={(e) => setComments(e.target.value)}></textarea>
                        </div>
                    </div>
                    <button onClick={sendForm}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Form;
