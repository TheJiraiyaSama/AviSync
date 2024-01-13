import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import React, { ComponentProps } from 'react';

interface CCheckBoxProps extends ComponentProps<typeof Checkbox> {
  inputLabel?: string;
}

const CCheckBox = ({ inputLabel, ...props }: CCheckBoxProps) => {
  return (
    <div className="flex-center grid w-full max-w-sm gap-2">
      <Checkbox
        className='border-secondary data-[state="checked"]:bg-secondary data-[state="checked"]:text-primary h-[24px] w-[24px] rounded-none border-2 data-[state="checked"]:font-bold'
        {...props}
      />
      {inputLabel && inputLabel.length > 1 ? (
        <Label htmlFor={props.id}>{inputLabel}</Label>
      ) : null}
    </div>
  );
};

export default CCheckBox;
