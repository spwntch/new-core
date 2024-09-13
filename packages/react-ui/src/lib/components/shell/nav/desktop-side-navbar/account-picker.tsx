import React from 'react';
import { Button } from '../../../shadcn-ui';
import { Logo } from '../../../shell/brand/logo/logo';

const AccountPicker = () => {
  return (
    <div className="flex justify-between h-14 items-center border-b border-b-muted px-4 lg:h-[60px] lg:px-6 ">
      <Logo variant="mark"  />
      <Button size="sm">UPGRADE TO PRO</Button>
    </div>
  );
};

export default AccountPicker;
