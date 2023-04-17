import React from "react";
// import Header from "@/Components/Header";
// import Footer from "@/Components/Footer";
// import { useSession } from "next-auth/react";
import Link from "next/link";
export default function About() {
//   const { data: session, status } = useSession();
  return (
    <>
      {/* <Header /> */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="text-center pb-12 md:pb-16">
              <h1
                className="break-words text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out"
              >
                About{" "}Me
              </h1>

              <div className="max-w-3xl mx-auto flex flex-row space-x-8">
                <p
                  className="text-xl text-gray-600 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                 Madison about me insert here. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore repellendus ipsa, hic laudantium minus doloribus odit sit, nobis facere maiores facilis in earum. Magnam animi dolor fugit minima. Suscipit, nisi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur libero, eum non explicabo fuga illum, accusantium iure enim quibusdam ratione porro hic. Facilis ut neque id. Dignissimos iusto a ex!

                </p>
                <p
                  className="text-xl text-gray-600 mb-8 "
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                 Madison about ART insert here. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore repellendus ipsa, hic laudantium minus doloribus odit sit, nobis facere maiores facilis in earum. Magnam animi dolor fugit minima. Suscipit, nisi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur libero, eum non explicabo fuga illum, accusantium iure enim quibusdam ratione porro hic. Facilis ut neque id. Dignissimos iusto a ex!

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}