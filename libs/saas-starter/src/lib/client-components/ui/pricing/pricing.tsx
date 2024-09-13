'use client';

// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  BillingInterval,
  BillingIntervals,
  NoPlansFound,
  Plans,
  ProductWithPrices,
  SubscriptionWithProduct,
} from '@/next-saas-pages';
import { User } from '@supabase/supabase-js';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import type { Price } from '../../../types';
import { getErrorRedirect } from '../../../utils/helpers';
import { getStripe } from '../../../utils/stripe/client';
import { checkoutWithStripe } from '../../../utils/stripe/server';


export interface PricingProps {
  user: User | null | undefined;
  products: ProductWithPrices[];
  subscription: SubscriptionWithProduct | null;
}

export default function Pricing({
  user,
  products,
  subscription,
}: PricingProps) {
  const intervals = Array.from(
    new Set(
      products.flatMap((product) =>
        product?.prices?.map((price) => price?.interval)
      )
    )
  );
  const router = useRouter();
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>('month');
  const [priceIdLoading, setPriceIdLoading] = useState<string>();
  const currentPath = usePathname();

  const handleStripeCheckout = async (price: Price) => {
    setPriceIdLoading(price.id);

    if (!user) {
      setPriceIdLoading(undefined);
      return router.push('auth/signup');
    }

    const { errorRedirect, sessionId } = await checkoutWithStripe(
      price,
      currentPath
    );

    if (errorRedirect) {
      setPriceIdLoading(undefined);
      return router.push(errorRedirect);
    }

    if (!sessionId) {
      setPriceIdLoading(undefined);
      return router.push(
        getErrorRedirect(
          currentPath,
          'An unknown error occurred.',
          'Please try again later or contact a system administrator.'
        )
      );
    }

    const stripe = await getStripe();
    stripe?.redirectToCheckout({ sessionId });

    setPriceIdLoading(undefined);
  };

  if (!products.length) {
    return <NoPlansFound />;
  } else {
    return (
      <section>
        <div className="max-w-6xl px-4  mx-auto  sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            <BillingIntervals
              intervals={intervals}
              billingInterval={billingInterval}
              setBillingInterval={(interval) => setBillingInterval(interval)}
            />
          </div>
          <Plans
            products={products}
            billingInterval={billingInterval}
            subscription={subscription}
            priceIdLoading={priceIdLoading}
            onClickPlan={handleStripeCheckout}
          />
        </div>
      </section>
    );
  }
}
