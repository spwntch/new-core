import {
  Avatar,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../shadcn-ui';

export interface SessionMenuProps {
  avatarSrc: string;
}

export const SessionMenu = ({ avatarSrc }: SessionMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <Avatar>
            <AvatarImage src={avatarSrc} />
          </Avatar>
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator /> */}
        <DropdownMenuItem>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
