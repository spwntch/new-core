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
          mainPaneCoverage={70}
          containers={
            products.map((product, idx) => (
              <Card className="w-full m-3" key={idx}>
                {/* <CardContent> */}
                <img
                  src={product.image?.src || ''}
                  alt={product.heading}
                  className="rounded-t-lg"
                />
                {/* </CardContent> */}
                <CardHeader>
                  <div className="flex">
                    <div className="flex-1">
                      <CardTitle>{product.heading}</CardTitle>
                      <CardDescription className='mt-3 '>{product.subheading}</CardDescription>
                    </div>
                    {idx === 0 && (
                      <Button
                        size="lg"
                        onClick={() => router.push(product.href || '')}
                      >
                        SHOP NOW
                      </Button>
                    )}
                  </div>
                </CardHeader>
                {idx === 0 && (
                  <CardContent className="flex flex-col gap-2 text-xs">
                    {product.body.map((para) => (
                      <div className="">{para}</div>
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
