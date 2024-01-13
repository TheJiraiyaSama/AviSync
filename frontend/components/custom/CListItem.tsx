import React from "react";
import { EditIcon } from "../icons";
import { DeleteIcon } from "../icons/DeleteIcon";

type CListItemProps = {
    label: string;
    onlyEdit?: boolean;
    onlyDelete?: boolean;
};

const CListItem = ({ label, onlyEdit, onlyDelete }: CListItemProps) => {
    return (
        <div className="flex w-400 justify-between p-4 bg-secondary m-2 rounded-sm text-primary">
            <p className="body1 ml-4">{label}</p>
            <div className="flex flex-center gap-8 fill-primary mr-4">
                {!onlyDelete ? (
                    <div>
                        <DeleteIcon />
                    </div>
                ) : null}
                {!onlyEdit ? (
                    <div>
                        <EditIcon />
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default CListItem;
