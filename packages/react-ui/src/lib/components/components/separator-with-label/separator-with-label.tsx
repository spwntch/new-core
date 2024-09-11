import React from 'react';

type Props = {
  label?: string;
};

export const SeparatorWithLabel = ({label}: Props) => {
  return (
    <div className="relative my-8">
      <div className="absolute inset-0 flex items-center">
        <span className="w-60 mx-auto border-t"></span>
      </div>
      <div className="relative flex justify-center text-sm uppercase">
        <span className="bg-background px-2 text-muted-foreground">{label}</span>
      </div>
    </div>
  );
};

export default SeparatorWithLabel;
