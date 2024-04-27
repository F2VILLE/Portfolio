"use client";

import { useState } from 'react'
import styles from './authForm.module.css'

export default function AuthForm(props: { errorMessage: string | null, handleSuccess: ((data: any) => void), handleError: ((error: any) => void), title: string, action: string, submitButtonName: string, fields: Array<{ type: string, label: string, name: string }> }) {
    const [formdata, setFormdata] = useState<any>({})
    const sendForm = (e: any) => {
        e.preventDefault()
        console.log(formdata)
        fetch(props.action, {
            method: "POST",
            body: JSON.stringify(formdata),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                res.json().then(r => {
                    if (res.ok) {
                        props.handleSuccess(r)
                    } else {
                        props.handleError(r)
                    }
                })
            })
            .catch(e => {
                console.error(e)
                props.handleError(e)
            })
    }

    return (
        <div className={styles.authForm}>
            <h1>{props.title}</h1>
            <form>
                {props.fields.map(field => (
                    <div className={styles.formField} key={field.name}>
                        <label htmlFor={field.name}>{field.label}</label>
                        <input type={field.type} name={field.name} id={field.name} onChange={(e) => {
                            const obj = formdata
                            obj[field.name] = e.target.value
                            setFormdata(obj)

                        }} />
                    </div>
                ))}
                {props.errorMessage && <p className={styles.errorMessage}>{props.errorMessage}</p>}
                <button type="submit" onClick={sendForm}>{props.submitButtonName}</button>
            </form>
        </div>
    )
}