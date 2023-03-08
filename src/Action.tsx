import React from 'react';

type ActionProps = React.PropsWithChildren<{
  icon: React.ElementType<React.ComponentProps<'svg'>>;
}>;

export default function Action({ icon: Icon, children }: ActionProps) {
  return (
    <div className="flex flex-col gap-4 text-center leading-tight">
      <div className="p-4 bg-white rounded-full">
        <Icon className="text-lbi" />
      </div>
      {children}
    </div>
  );
}
