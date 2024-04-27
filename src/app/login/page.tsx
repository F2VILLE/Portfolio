"use client";

import AuthForm from "../../components/AuthForm/authForm";
import styles from "./page.module.css";
import { useAuthStore } from "@/store/useAuthStore";
import { setCookie } from "cookies-next";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<{ message: string | null, type: string | null }>({ message: null, type: null })
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const setAuthentication = useAuthStore((state) => state.setAuthentication)
  const setUser = useAuthStore((state) => state.setUser)

  return (
    <>
      <main className={styles.main}>
        <div className={styles.form}>
          {!status.message && (

            <AuthForm
              title="Log to your Account"
              submitButtonName="Login"
              fields={[
                {
                  type: "text",
                  label: "Username",
                  name: "username"
                },
                {
                  type: "password",
                  label: "Password",
                  name: "password"
                }
              ]}

              action="/api/auth/login"
              handleSuccess={(data) => {
                console.log(data)
                if (data.token) {
                  // localStorage.setItem('token', data.token)
                  // window.location.href = "/profile"
                  setStatus({ message: "Logged in", type: "success" })
                  setAuthentication(true)
                  setCookie('token', data.token)
                  setUser(data.user)
                  console.log("SetAuthentication to True and user to ", data.user)
                  // window.location.href = "/profile"
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
