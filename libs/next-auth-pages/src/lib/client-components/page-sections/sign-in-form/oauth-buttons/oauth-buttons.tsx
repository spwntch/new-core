import { Button } from '@spwntch/react-ui';

export const OauthButtons = () => {
  return (
    <div className="w-full flex justify-around">
      <Button variant="outline">Google</Button>
      <Button variant="outline">Microsoft 365</Button>
      <Button variant="outline">Github</Button>
    </div>
  );
};
