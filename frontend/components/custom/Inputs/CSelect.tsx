import React, { ComponentProps } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectTriggerProps,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ISelectItem } from "@/types";

interface CSelectProps {
  inputLabel?: string;
  selectProps?: ComponentProps<typeof Select>;
  selectTriggerProps?: SelectTriggerProps;
  selectValueProps: ComponentProps<typeof SelectValue>;
  selectContentProps?: ComponentProps<typeof SelectContent>;
  commonSelectItemProps?: Omit<ComponentProps<typeof SelectItem>, "value">;
  selectItems: ISelectItem[];
}

const CSelect = ({ inputLabel, selectItems, ...props }: CSelectProps) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-4">
      {inputLabel && inputLabel.length > 1 ? (
        <Label htmlFor={props.selectTriggerProps?.id}>{inputLabel}</Label>
      ) : null}
      <Select {...props.selectProps}>
        <SelectTrigger {...props.selectTriggerProps}>
          <SelectValue {...props.selectValueProps} />
        </SelectTrigger>
        <SelectContent
          className={`bg-secondary ${props.selectContentProps?.className}`}
          {...props.selectContentProps}>
          {selectItems.map((item) => (
            <SelectItem
              className={`text-primary ${props.commonSelectItemProps?.className}`}
              key={item.value}
              value={item.value}
              {...props.commonSelectItemProps}>
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CSelect;
