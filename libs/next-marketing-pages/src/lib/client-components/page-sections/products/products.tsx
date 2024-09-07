'use client';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  cn,
  ContentContainer,
  IBullet,
  IContent,
  MultiPanelLayout,
} from '@spwntch/react-ui';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

type ProductsProps = { content: IContent; className?: string };

export const Products = ({ content, className }: ProductsProps) => {
  const router = useRouter();
  const header: IContent = {
    heading: content.heading,
    subheading: content.subheading,
    body: content.body,
  };

  const products = content.bullets as IBullet[];

  return (
    <div className={cn('flex-col pt-12 pb-28 h-full', className)}>
      <div className="md:container px-3 h-full">
        <ContentContainer innerContent={header} className="mb-12" />
        <MultiPanelLayout
          mainPaneCoverage={69}
          containers={
            products.map((product, idx) => (
              <Card className="w-full m-3 relative overflow-hidden" key={idx}>
                {/* <div className="relative overflow-hidden w-56 h-56 bg-white border"> */}
                {!product.subheading && (
                  <div className="absolute right-0 top-0 h-16 w-16">
                    <div className="absolute transform rotate-45 bg-accent text-center text-white font-semibold py-1 right-[-35px] top-[32px] w-[170px]">
                      Coming Soon
                    </div>
                  </div>
                )}
                {/* </div> */}
                <img
                  src={product.image?.src || ''}
                  alt={product.heading}
                  className="rounded-t-lg"
                />
                <CardHeader>
                  <div className="flex">
                    <div className="flex-1">
                      <CardTitle>{product.heading}</CardTitle>
                      <CardDescription className="mt-3 text-4xl font-semibold">
                        {product.subheading}
                      </CardDescription>
                    </div>
                    { (
                      <Button
                        size="lg"
                        onClick={() => router.push(product.href || '')}
                      >
                        {product.subheading && 'SHOP NOW' || 'LEARN MORE'}
                      </Button>
                    )}
                  </div>
                </CardHeader>
                {idx === 0 && (
                  <CardContent className="flex flex-col gap-2 text-xs">
                    {product.body.map((para, idx) => (
                      <div className="" key={idx}>
                        {para}
                      </div>
                    ))}
                  </CardContent>
                )}
              </Card>
            )) as [ReactNode, ReactNode, ReactNode]
          }
        />
      </div>
    </div>
  );
};
