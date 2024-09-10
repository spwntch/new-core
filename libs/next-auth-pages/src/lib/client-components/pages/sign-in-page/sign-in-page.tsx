'use client';

import { Button, Card, CardContent, CardHeader, Logo } from '@spwntch/react-ui';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const SignInPage = () => {
  const router = useRouter();
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Card className="w-full max-w-lg ">
        <CardHeader>
          <Logo className="mx-auto cursor-pointer" onClick={() => router.push('/')} />
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {/* <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
          />
        </div> */}
            {/* <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link
              href="#"
              className="ml-auto inline-block text-sm underline"
            >
              Forgot your password?
            </Link>
          </div>
          <Input id="password" type="password" required />
        </div> */}
            {/* <Button type="submit" className="w-full">
          Login
        </Button> */}
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
