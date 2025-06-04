import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="mx-auto flex h-full max-w-3xl items-center justify-center p-6 sm:p-9 md:px-16 md:py-10">
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Container;
