import React from 'react';
import { Button } from '../../../shadcn-ui';

const AccountPicker = () => {
  return  <div className="flex h-14 items-center border-b border-b-muted px-4 lg:h-[60px] lg:px-6 gap-6">
  {/* <Link href="/" className="flex items-center gap-2 font-semibold"> */}
  {/* <Package2 className="h-6 w-6" /> */}
  <div className="text-2xl">FREE PLAN</div>
  <Button size="sm">UPGRADE</Button>
  {/* </Link> */}
  {/* <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
  <Bell className="h-4 w-4" />
  <span className="sr-only">Toggle notifications</span>
</Button> */}
</div>
};

export default AccountPicker;
