import { CardsLayout } from './components/CardsLayout';
import { Header } from './components/Header';
import { Upload } from './components/Upload';

export const ControlApp = () => {
  return (
    <div className="w-full text-white">
      <Header />
      <main className=" w-full py-32 px-5">
        <div className="grid grid-cols-12 h-screen gap-12">
          <Upload />
          <CardsLayout />
        </div>
      </main>
    </div>
  );
};
