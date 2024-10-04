import Image from 'next/image';

export default function Component() {
  return (
    <div className="group grid grid-cols-3 gap-1 max-w-3xl mx-auto">
      {/* Image ajustée à environ 250px */}
      <div className="col-span-1 row-span-2 w-[200px] h-auto">
        <img
          src="/poket.jpg"
          alt="Femme en robe blanche"
          className="w-full object-cover rounded-lg"
        />
      </div>

      {/* Image avec dimensions ajustées à 100px */}
      <div className="col-span-1 row-span-1 w-[100px] h-auto">
        <img
          src="/poket.jpg"
          alt="Femme avec un manteau et un bonnet"
          className="w-full object-cover rounded-lg"
        />
      </div>

      {/* Deuxième image ajustée à environ 100px pour être cohérente */}
      <div className="col-span-1 row-span-1 w-[200px] h-auto mr-96">
        <img
          src="/poket.jpg"
          alt="Femme en manteau rose"
          className="w-full object-cover rounded-lg"
        />
      </div>

      {/* Div vide avec dimensions 100px */}
      <div className="col-span-1 row-span-1 bg-sky-100 rounded-lg w-[100px] h-[100px]"></div>
    </div>
  );
}
