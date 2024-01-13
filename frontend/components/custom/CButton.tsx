import React, { ReactNode } from 'react';
import { Button, ButtonProps } from '../ui/button';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { FilterListIcon } from '../icons';

interface CButtonProps extends ButtonProps {
  cVariant?: 'default' | 'outlined' | 'accent';
  icon?: ReactNode; // Pass icon path or icon as react node
  halfWidth?: boolean;
}

const CButton = ({
  className,
  cVariant = 'default',
  halfWidth = false,
  children,
  icon,
  ...props
}: CButtonProps) => {
  let classNames = '';
  switch (cVariant) {
    case 'default':
      classNames =
        'inline-flex bg-secondary flex  items-center justify-center gap-2 rounded-sm py-[15px] text-primary fill-primary body-2_semibold';
      break;
    case 'outlined':
      classNames =
        'border-secondary text-secondary inline-flex  items-center justify-center gap-2 rounded-sm py-[15px] text-secondary fill-secondary';
      break;
    case 'accent':
      classNames =
        'border border-tertiary bg-accent text-tertiary text-tertiary inline-flex  items-center justify-center gap-2 rounded-sm py-[15px] fill-tertiary';
      break;
  }
  if (halfWidth) classNames += ' min-w-[150px] max-w-[150px]';
  else classNames += ' min-w-[250px] max-w-[250px]';
  if (icon) classNames += ' gap-[10px] ';
  return (
    <Button
      className={classNames}
      variant={cVariant === 'outlined' ? 'outline' : null}
      {...props}>
      {icon}
      {children}
    </Button>
  );
};

export default CButton;
