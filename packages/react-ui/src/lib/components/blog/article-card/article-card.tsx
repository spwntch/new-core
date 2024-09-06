import { IMdxDocMeta } from '../../../types';
import { cn } from '../../../utils';
import { Tags } from '../../components';
import {
  Avatar,
  AvatarImage,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../shadcn-ui';

interface IPostCardProps extends IMdxDocMeta {
  onClick: (slug: string) => void;
  className?: string; // Add className prop
}

export const ArticleCard = ({
  slug,
  coverImage,
  authorName,
  authorAvatar,
  date,
  title,
  subtitle,
  tags,
  onClick,
  className, // Destructure className prop
}: IPostCardProps) => {
  return (
    <Card
      className={cn('max-w-2xl mx-auto cursor-pointer rounded-lg', className)} // Use className prop
      onClick={() => onClick(slug)}
    >
      <CardContent className={cn('m-0 p-0')}>
        <img
          className={cn(
            'object-cover object-center rounded-t w-full max-h-80 rounded-lg brightness-75'
          )}
          alt="article coverimage"
          src={coverImage}
        />
      </CardContent>
      <CardHeader>
        {tags?.length && (
          <Tags tags={tags} className="hidden md:flex gap-3 mb-3 " />
        )}
        <CardTitle className='leading-8'>{title}</CardTitle>
        <div className="flex gap-3 pt-1">
          {authorAvatar && (
            <div>
              <Avatar>
                <AvatarImage src={authorAvatar}></AvatarImage>
              </Avatar>
            </div>
          )}
          <p className="mt-2 text-sm">
            {authorName} | {date}
          </p>
          <div></div>
        </div>
        <CardDescription className={cn('!mt-3')}>{subtitle}</CardDescription>
      </CardHeader>
    </Card>
  );
};
