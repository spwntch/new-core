import { PropsWithChildren } from 'react';

export const ApplicationShell = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <p>here we go</p>
      {children}
    </main>
  );
};

export default ApplicationShell;
