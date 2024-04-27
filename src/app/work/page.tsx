"use server";

import Image from "next/image";
import styles from "./page.module.css";
import prisma from "@/lib/prisma";

export default async function Contact() {
  // const projects = [
  //   {
  //     name: "Project 1",
  //     description: "Description bla bla bla this does thing Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, ullam eius! Praesentium eveniet fugiat doloribus, voluptate culpa minima corporis, architecto, rerum ipsa eaque odio iure rem dignissimos nemo? Temporibus, minima!",
  //     url: "#",
  //     image: "https://placehold.co/1920x1080",
  //   },
  //   {
  //     name: "Project 1",
  //     description: "Description bla bla bla this does thing Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, ullam eius! Praesentium eveniet fugiat doloribus, voluptate culpa minima corporis, architecto, rerum ipsa eaque odio iure rem dignissimos nemo? Temporibus, minima!",
  //     url: "#",
  //     image: "https://placehold.co/1920x1080",
  //   },
  //   {
  //     name: "Project 1",
  //     description: "Description bla bla bla this does thing Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, ullam eius! Praesentium eveniet fugiat doloribus, voluptate culpa minima corporis, architecto, rerum ipsa eaque odio iure rem dignissimos nemo? Temporibus, minima!",
  //     url: "#",
  //     image: "https://placehold.co/1920x1080",
  //   },
  //   {
  //     name: "Project 1",
  //     description: "Description bla bla bla this does thing Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, ullam eius! Praesentium eveniet fugiat doloribus, voluptate culpa minima corporis, architecto, rerum ipsa eaque odio iure rem dignissimos nemo? Temporibus, minima!",
  //     url: "#",
  //     image: "https://placehold.co/1920x1080",
  //   },
  //   {
  //     name: "Project 1",
  //     description: "Description bla bla bla this does thing Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, ullam eius! Praesentium eveniet fugiat doloribus, voluptate culpa minima corporis, architecto, rerum ipsa eaque odio iure rem dignissimos nemo? Temporibus, minima!",
  //     url: "#",
  //     image: "https://placehold.co/1920x1080",
  //   },
  //   {
  //     name: "Project 1",
  //     description: "Description bla bla bla this does thing Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, ullam eius! Praesentium eveniet fugiat doloribus, voluptate culpa minima corporis, architecto, rerum ipsa eaque odio iure rem dignissimos nemo? Temporibus, minima!",
  //     url: "#",
  //     image: "https://placehold.co/1920x1080",
  //   },
  //   {
  //     name: "Project 1",
  //     description: "Description bla bla bla this does thing Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, ullam eius! Praesentium eveniet fugiat doloribus, voluptate culpa minima corporis, architecto, rerum ipsa eaque odio iure rem dignissimos nemo? Temporibus, minima!",
  //     url: "#",
  //     image: "https://placehold.co/1920x1080",
  //   },
  //   {
  //     name: "Project 1",
  //     description: "Description bla bla bla this does thing Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, ullam eius! Praesentium eveniet fugiat doloribus, voluptate culpa minima corporis, architecto, rerum ipsa eaque odio iure rem dignissimos nemo? Temporibus, minima!",
  //     url: "#",
  //     image: "https://placehold.co/1920x1080",
  //   },
  //   {
  //     name: "Project 1",
  //     description: "Description bla bla bla this does thing Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, ullam eius! Praesentium eveniet fugiat doloribus, voluptate culpa minima corporis, architecto, rerum ipsa eaque odio iure rem dignissimos nemo? Temporibus, minima!",
  //     url: "#",
  //     image: "https://placehold.co/1920x1080",
  //   },
    
  // ]

  const projects = await prisma.project.findMany()

  return (
    <>
      <main className={styles.main}>
        <h1>My projects</h1>
        <div className={styles.workCardsContainer}>
          {projects.map((p, index) => (
            <div className={styles.workCard}>
              <img src={p.image} alt="" />
              <div className={styles.workInfos}>
                <h1>{p.name}</h1>
                <p>{p.description}</p>
                <a href={p.url}><p>Demo</p></a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
