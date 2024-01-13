import { CButton } from "@/components/custom";
import CInput from "@/components/custom/Inputs/CInput";
import { FormField } from "@/components/ui/form";
import React from "react";

export const page = () => {
    return (
        <div className="justify-between">
            <p className={"heading-1"}>Edit Profile</p>
            <div>
                <div className="flex-col pt-10">
                    <div className="pb-6 ps-20">
                        <CInput
                            placeholder="Placeholder"
                            inputLabel="Name"
                        ></CInput>
                    </div>
                    <div className="ps-20">
                        <CInput
                            placeholder="Placeholder"
                            inputLabel="Email"
                        ></CInput>
                    </div>
                </div>
            </div>
            <div className="pb-60"></div>
            <div>
                <div className="flex justify-end space-x-10 ">
                    <CButton cVariant="default" className="flex items-end">
                        Connect New Wallet
                    </CButton>
                    <CButton cVariant="accent">Save</CButton>
                </div>
            </div>
        </div>
    );
};

export default page;
