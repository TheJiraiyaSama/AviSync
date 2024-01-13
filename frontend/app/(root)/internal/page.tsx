import CCheckBox from '@/components/custom/Inputs/CCheckBox';
import CInput from '@/components/custom/Inputs/CInput';
import CSelect from '@/components/custom/Inputs/CSelect';
import CTagInput from '@/components/custom/Inputs/CTagInput';
import { Checkbox } from '@/components/ui/checkbox';
import { ISelectItem } from '@/types';
import React from 'react';

const selectIs: ISelectItem[] = [
  { value: 'apple', name: 'Apple' },
  { value: 'apple2', name: 'APPLE 2' },
];

const page = () => {
  return (
    <div>
      <p className="heading-1">PAPS</p>
      <CInput
        inputLabel="test"
        placeholder="Enter somethign"
        fieldSize={'half'}
      />
    </div>
  );
};

export default page;
