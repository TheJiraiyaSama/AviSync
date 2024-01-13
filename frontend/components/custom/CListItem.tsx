import React from "react";
import { EditIcon } from "../icons";
import { DeleteIcon } from "../icons/DeleteIcon";

type CListItemProps = {
    label: string;
    onlyEdit: boolean;
    onlyDelete: boolean;
};

const CListItem = ({ label, onlyEdit, onlyDelete }: CListItemProps) => {
    return (
        <div>
            <p>{label}</p>
            {!onlyEdit ? (
                <div>
                    <EditIcon />
                </div>
            ) : null}
            {!onlyDelete ? (
                <div>
                    <DeleteIcon />
                </div>
            ) : null}
        </div>
    );
};

export default CListItem;
