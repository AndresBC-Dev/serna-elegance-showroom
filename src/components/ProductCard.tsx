import { useState } from "react";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  tag?: string;
}

const ProductCard = ({ image, name, price, tag }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-secondary aspect-[3/4]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {tag && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-body tracking-[0.2em] uppercase">
            {tag}
          </span>
        )}
        <div
          className={`absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background/90 to-transparent transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button className="w-full py-3 border border-primary text-primary text-xs font-body tracking-[0.25em] uppercase hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
            Ver Detalles
          </button>
        </div>
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="font-body text-sm tracking-[0.15em] uppercase text-foreground">
          {name}
        </h3>
        <p className="font-body text-sm text-muted-foreground">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
