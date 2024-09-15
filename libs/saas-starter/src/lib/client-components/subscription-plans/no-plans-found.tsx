'use client';
import { Card } from '@spwntch/react-ui';

export const NoPlansFound = () => {
  return (
    <Card>
      <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center"></div>
        <p className="text-xl font-bold sm:text-center sm:text-5xl">
          We couldn't find any subscription plans.
        </p>
        <p className="mt-8 text-lg font-bold sm:text-center sm:text-4xl">
          {' '}
          Create them in your{' '}
          <a
            className="text-primary underline"
            href="https://dashboard.stripe.com/products"
            rel="noopener noreferrer"
            target="_blank"
          >
            Stripe Dashboard
          </a>
        </p>
        .
      </div>
    </Card>
  );
};
