type AdCardProps = {
  image: string;
  title: string;
  price: number;
  address: string;
};

export default function AdCard({ title, image, price, address }: AdCardProps) {
  return (
    <div
      className="relative flex flex-col justify-end w-64 aspect-video bg-red-500 rounded-xl shadow-md bg-cover bg-center before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/70 before:z-0 overflow-hidden shrink-0"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="relative flex flex-col px-2 py-3">
        <strong className="font-medium text-white text-sm">{title}</strong>
        <div className="flex gap-4 items-center">
          <strong className="text-lbi text-xs">{price}€</strong>
          <span className="text-white text-xs">{address}</span>
        </div>
      </div>
    </div>
  );
}
