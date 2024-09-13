'use client';
import { Button, cn } from '@spwntch/react-ui';
import { Price, Product, Subscription } from '@spwntch/saas-starter';

export interface ProductWithPrices extends Product {
  prices: Price[];
}

export interface PriceWithProduct extends Price {
  products: Product | null;
}

export interface SubscriptionWithProduct extends Subscription {
  prices: PriceWithProduct | null;
}

type PlansProps = {
  products: ProductWithPrices[];
  billingInterval: 'lifetime' | 'year' | 'month';
  subscription: SubscriptionWithProduct | null;
  priceIdLoading: string | undefined;
  onClickPlan: (price: Price) => void;
};
export const Plans = ({
  products,
  billingInterval,
  subscription,
  priceIdLoading,
  onClickPlan,
}: PlansProps) => {
  return (
    <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 flex flex-wrap justify-center gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
      {products.map((product) => {
        const price = product?.prices?.find(
          (price) => price.interval === billingInterval
        );
        if (!price) return null;
        const priceString = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: price.currency || 'usd',
          minimumFractionDigits: 0,
        }).format((price?.unit_amount || 0) / 100);
        return (
          <div
            key={product.id}
            className={cn(
              'flex flex-col rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900',
              {
                'border border-pink-500': subscription
                  ? product.name === subscription?.prices?.products?.name
                  : product.name === 'Freelancer',
              },
              'flex-1', // This makes the flex item grow to fill the space
              'basis-1/3', // Assuming you want each card to take up roughly a third of the container's width
              'max-w-xs' // Sets a maximum width to the cards to prevent them from getting too large
            )}
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold leading-6 text-white">
                {product.name}
              </h2>
              <p className="mt-4 text-zinc-300">{product.description}</p>
              <p className="mt-8">
                <span className="text-5xl font-extrabold white">
                  {priceString}
                </span>
                <span className="text-base font-medium text-zinc-100">
                  /{billingInterval}
                </span>
              </p>
              <Button
                variant="outline"
                type="button"
                loading={priceIdLoading === price.id}
                onClick={() => onClickPlan(price)}
                className="block w-full py-2 mt-8 text-sm font-semibold text-center text-white rounded-md hover:bg-zinc-900"
              >
                {subscription ? 'Manage' : 'Subscribe'}
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
