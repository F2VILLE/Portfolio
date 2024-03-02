"use client";
import { useState } from 'react';
import styles from './contactForm.module.css'


export default function ContactForm() {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState(false);
    function sendFunction(email: string, subject: string, message: string) {
        return new Promise<string>(async (resolve, reject) => {
            await fetch("/api/sendEmail", {
                method: "POST",
                body: JSON.stringify({ email, subject, message }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then((res) => {
                    if (res.status === 200) {
                        setSuccess(true)
                        res.json().then(r => {
                            console.log(r)
                            resolve(r.message)
                        }).catch(() => {
                            resolve("")
                        })
                    } else {
                        reject(res)
                    }
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
    return (
        <div className={styles.form}>
            {!success ? (
                <>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" onChange={(e) => setSubject(e.target.value)} />
                    <label htmlFor="message" >Message</label>
                    <textarea id="message" name="message" onChange={(e) => setMessage(e.target.value)} />
                    {errorMessage && <p className={styles.error}>{errorMessage}</p>}
                    <button type="submit" onClick={() => {
                        if (email.trim() === "" || subject.trim() === "" || message.trim() === "") {
                            setErrorMessage("Please fill all the fields.")
                            return
                        }
                        sendFunction(email, subject, message).then((msg) => {
                            setErrorMessage(msg)
                        })
                            .catch((e) => {
                                console.error(e)
                                if (e.status && e.status === 429) {
                                    setErrorMessage("You are sending too many messages !")
                                }
                                else {
                                    setErrorMessage("An error occured, please try again later.")
                                }
                            })
                    }}>Send</button>
                    <div className={styles.bottomNotice}>
                        <p className={styles.bottomText}>Or send me an email at : <a href="mailto:contact@f2ville.dev">contact@f2ville.dev</a></p>
                    </div>
                </>
            ) : (
                <>
                    <h1>Message sent !</h1>
                    <p>Thank you for reaching out :)</p>
                    <img src="https://static.vecteezy.com/system/resources/previews/018/888/334/original/check-mark-icon-png.png" width={50} alt="" />
                </>
            )}
        </div>
    )
}