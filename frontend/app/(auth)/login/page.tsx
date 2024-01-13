import { CButton } from "@/components/custom";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <div className="flex h-screen">
            <div className="basis-3/5 self-center">
                <Image
                    src={"/assets/logos/logo_with_text.svg"}
                    alt="logo"
                    width={150}
                    height={150}
                    className="absolute top-0 left-0"
                />
                <div className="flex flex-col items-center">
                    <p className="heading-1 mb-20">Login to your Account</p>
                    <CButton asChild>
                        <Link href="">Login with Metamask</Link>
                    </CButton>
                </div>
            </div>
            <div className="bg-secondary basis-2/5">
                <div className="h-screen flex flex-col items-center justify-center">
                    <p className="heading-1 text-primary">New Here?</p>
                    <p className="body-1 text-primary mt-8 mb-20">
                        Sign up to discover what we can do
                    </p>
                    <CButton asChild cVariant="accent">
                        <Link href="/signup">Sign Up</Link>
                    </CButton>
                </div>
            </div>
        </div>
    );
};

export default page;
