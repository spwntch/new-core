import { Pricing, SubscriptionPlans } from '@/next-saas';
import { createSupabaseServerClient } from '@/next-saas/server';
import { SUBSCRIPTION_PLANS } from '../../../config/website/pricing/subscription-plans';

const PricingPage = async () => {
  const supabase = createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: subscription, error } = await supabase
    .from('subscriptions')
    .select('*, prices(*, products(*))')
    .in('status', ['trialing', 'active'])
    .maybeSingle();

  if (error) {
    console.log(error);
  }

  const { data: products } = await supabase
    .from('products')
    .select('*, prices(*)')
    .eq('active', true)
    .eq('prices.active', true)
    .order('metadata->index')
    .order('unit_amount', { referencedTable: 'prices' });

  return (
    <SubscriptionPlans id="subscription-plans" header={SUBSCRIPTION_PLANS}>
      <Pricing
        user={user}
        products={products ?? []}
        subscription={subscription}
      />
    </SubscriptionPlans>
  );
};

export default PricingPage;
