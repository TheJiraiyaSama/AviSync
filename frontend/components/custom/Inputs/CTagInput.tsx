'use client';
import React, { ComponentProps, useState } from 'react';
import CSelect from './CSelect';
import { Label } from '@/components/ui/label';
import { ISelectItem } from '@/types';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { CloseIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';

interface CTagInputProps extends ComponentProps<typeof CSelect> {
  fieldLabel?: string;
}

const CTagInput = ({ fieldLabel, ...props }: CTagInputProps) => {
  const [tagList, setTagList] = useState<ISelectItem[]>([]);
  const onValueChange = (value: string) => {
    setTagList((prev) => {
      return Array.from(
        new Set([
          ...prev,
          ...props.selectItems.filter((item) => item.value === value),
        ]),
      );
    });
  };

  const onDeleteTag = (item: ISelectItem): void => {
    setTagList((prev) => {
      return Array.from(
        new Set([...prev.filter((i) => i.value !== item.value)]),
      );
    });
  };
  return (
    <div className="grid w-full max-w-sm items-center gap-4">
      {fieldLabel && fieldLabel.length > 1 ? (
        <Label htmlFor={props.selectTriggerProps?.id}>{fieldLabel}</Label>
      ) : null}
      {/* Chip display */}
      <ScrollArea className="bg-secondary rounded ">
        <div className="flex-center h-[60px] w-max space-x-4 px-6 py-2">
          {tagList.map((item) => (
            <Badge key={item.value} className="flex-between max-h-[35px] gap-2">
              {item.name}{' '}
              <Button
                className="m-0 h-fit p-0"
                onClick={() => onDeleteTag(item)}>
                <CloseIcon className="fill-secondary" />
              </Button>
            </Badge>
          ))}
        </div>
      </ScrollArea>
      <CSelect
        selectProps={{
          onValueChange(value) {
            console.log(value);
            onValueChange(value);
            props.selectProps?.onValueChange != null &&
              props.selectProps.onValueChange(value);
          },
        }}
        {...props}
      />
    </div>
  );
};

export default CTagInput;
