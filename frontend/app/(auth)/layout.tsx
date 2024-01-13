import NavBar from "@/components/layout/navbar/NavBar";
import Image from "next/image";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <main className=" relative">
            <div className="flex">
                <section className="flex min-h-screen flex-1 flex-col max-md:pb-14">
                    <div className="mx-0 w-full max-h-min:">{children}</div>
                </section>
            </div>
        </main>
    );
};

export default layout;
