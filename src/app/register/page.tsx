"use client";
import { useState } from "react";
import AuthForm from "../../components/AuthForm/authForm";
import styles from "./page.module.css";
import { useAuthStore } from "@/store/useAuthStore";
import { setCookie } from "cookies-next";

export default function Contact() {
  const [status, setStatus] = useState<{ message: string | null, type: string | null }>({ message: null, type: null })
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  return (
    <>
      <main className={styles.main}>
        <div className={styles.form}>
          {!status.message && (
            <AuthForm
              title="Create an Account"
              submitButtonName="Register"
              fields={[
                {
                  type: "text",
                  label: "Username",
                  name: "username"
                },
                {
                  type: "email",
                  label: "Email",
                  name: "email"
                },
                {
                  type: "password",
                  label: "Password",
                  name: "password"
                }
              ]}

              action="/api/auth/register"

              handleSuccess={(data) => {
                console.log(data)
                if (data.token) {
                  // localStorage.setItem('token', data.token)
                  // window.location.href = "/profile"
                  setStatus({ message: "User created", type: "success" })
                  const setAuthentication = useAuthStore((state) => state.setAuthentication)
                  const setToken = useAuthStore((state) => state.setToken)
                  setAuthentication(true)
                  setCookie('token', data.token)
                  setToken(data.token)
                  window.location.href = "/profile"
                }
              }}

              errorMessage={errorMessage}

              handleError={(error) => {
                console.error(error)
                setErrorMessage("User already exists")
              }}
            />
          )}

          {status.message && (
            <div className={styles.success}>
              <p>{status.message}</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
