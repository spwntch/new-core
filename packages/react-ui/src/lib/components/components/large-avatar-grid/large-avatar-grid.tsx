import { BulletsWithClassName, IBullet } from '../../../types';
import { getBulletsContentAndClassName } from '../../../utils';
import { Avatar, AvatarImage } from '../../shadcn-ui';

interface ICardGridProps {
  avatars?: IBullet[] | BulletsWithClassName;
}

export const LargeAvatarGrid = ({ avatars }: ICardGridProps) => {
  if (!avatars) return null;
  const { bulletsContent } = getBulletsContentAndClassName(avatars);
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
      {bulletsContent.map((avatar, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-background rounded-xl p-2 w-60 mx-auto"
        >
          <Avatar className='w-48 h-48'>
            {' '}
            <AvatarImage  src={avatar.image?.src || ''} />
          </Avatar>
          <div className='mt-2 text-xl'>{avatar.heading}</div>
          <div className='mt-1 text-sm'>{avatar.subheading}</div>
        </div>
      ))}
    </ul>
  );
};

export default LargeAvatarGrid;
