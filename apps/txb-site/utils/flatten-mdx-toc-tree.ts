/* eslint-disable @typescript-eslint/no-explicit-any */
import { HtmlElementNode } from 'rehype-toc';

import { ITocItem } from '@spwntch/react-ui';

export const flattenMdxTocTree = (
  tocTree: HtmlElementNode,
  level = 0
): ITocItem[] => {
  const toc: ITocItem[] = [];

  tocTree.children?.forEach((child: any) => {
    // const child = node as any;
    if (child.tagName === 'ol') {
      toc.push(...flattenMdxTocTree(child, level + 1));
    } else if (child.tagName === 'li') {
      const link = child.children?.find(
        (c: any) => (c as any).tagName === 'a'
      ) as any;
      if (link) {
        toc.push({
          label: link.properties.title || link.children?.[0]?.value,
          href: link.properties.href as string,
          children: flattenMdxTocTree(child, level + 1),
        });
      }
    }
  });

  return toc;
};
