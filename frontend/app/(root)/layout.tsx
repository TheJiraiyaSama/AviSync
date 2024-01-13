import NavBar from '@/components/layout/navbar/NavBar';
import React, { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className=" relative">
      <NavBar />
      <div className="flex">
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
      </div>
      Toaster
    </main>
  );
};

export default layout;
