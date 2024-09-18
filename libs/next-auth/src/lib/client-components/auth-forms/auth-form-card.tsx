import { Card, CardContent, CardHeader, Logo } from '@spwntch/react-ui';
import { useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';

export const AuthFormCard = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  return (
    <Card className="w-full max-w-xl ">
      <CardHeader>
        <Logo
          height={72}
          className="mx-auto cursor-pointer"
          onClick={() => router.push('/')}
        />
      </CardHeader>
      <CardContent>
        <div className="">
          <div className="grid gap-4">{children}</div>
        </div>
      </CardContent>
    </Card>
  );
};
