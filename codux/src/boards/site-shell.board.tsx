import {
  DesktopTopNavbar,
  RegularFooter,
  ShellProvider,
} from '@spwntch/shadcn-ui';
import { createBoard } from '@wixc3/react-board';
import { brand, primaryNav } from '../config';

export default createBoard({
  name: 'Site Shell',
  Board: () => {
    const handleLinkTo = (url: string) => {
      console.log({ url });
    };
    return (
      <ShellProvider brand={brand} navItems={primaryNav}>
        <div className="h-screen flex flex-col">
          <DesktopTopNavbar
            logoHeight={50}
            navAlignment="center"
            githubUrl="https://github.com/spwntch/nx-codux"
            className="bg-background"
            onLinkTo={handleLinkTo}
          />
          <main className="flex-1">Hello World</main>
          <RegularFooter />
        </div>
      </ShellProvider>
    );
  },
  isSnippet: true,
  environmentProps: {
    windowWidth: 1145,
  },
});
