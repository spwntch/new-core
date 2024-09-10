import { PropsWithChildren } from 'react';

export const ApplicationShell = ({ children }: PropsWithChildren) => {
  return (
    <main>
      {children}
    </main>
  );
};

export default ApplicationShell;
