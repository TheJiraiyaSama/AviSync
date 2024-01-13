import { Input, InputProps } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';

interface CInputProps extends InputProps {
  inputLabel?: string;
}

const CInput = ({ id, className, inputLabel, ...props }: CInputProps) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-4">
      {inputLabel && inputLabel.length > 1 ? (
        <Label htmlFor={id}>{inputLabel}</Label>
      ) : null}
      <Input id={id} {...props} />
    </div>
  );
};

export default CInput;
