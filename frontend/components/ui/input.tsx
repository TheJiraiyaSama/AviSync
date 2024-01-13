import * as React from 'react';

import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const inputVariants = cva(
  'border-input ring-offset-background focus-visible:ring-ring body-3 focus-visible:ring-secondary placeholder:body-3 flex h-[50px] w-full max-w-[650px] rounded border pl-6 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:capitalize focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-secondary text-primary placeholder:text-[#ECECEC]',
        invert:
          'bg-primary text-secondary border-none placeholder:text-[#002c5970]',
      },
      fieldSize: {
        default: 'w-[650px]',
        half: 'w-[320px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      fieldSize: 'default',
    },
  },
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, fieldSize, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ className, variant, fieldSize }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
