import { CButton } from "@/components/custom";
import { LandingPageAircraft } from "@/components/svgs/LandingPageAircraft";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <div className="relative">
            <div className="max-w-2xl">
                <p className="font-anton text-6xl">AviSync</p>
                <p className="body-1 mt-8">
                    Welcome to the forefront of innovation in aircraft
                    management! Our cutting-edge platform, powered by blockchain
                    technology, is designed to redefine the way you oversee and
                    optimize your aircraft operations. With a commitment to
                    security, efficiency, and transparency, we bring you a
                    revolutionary solution that ensures your aircraft management
                    experience is seamless and secure. <br />
                    <br />
                    Embrace automation with smart contracts, reducing paperwork
                    and minimizing the risk of errors. Our platform seamlessly
                    executes contracts, streamlining transactions within the
                    aviation ecosystem.
                </p>
                <div className="mt-8 flex space-x-5">
                    <CButton asChild>
                        <Link href={"/internal/about"}>Learn More</Link>
                    </CButton>
                    <CButton cVariant="outlined" asChild>
                        <Link href={"/sign"}>Sign Up</Link>
                    </CButton>
                </div>
            </div>
            <div className="-z-10 fixed right-11 -bottom-10">
                <LandingPageAircraft />
            </div>
        </div>
    );
};

export default page;
