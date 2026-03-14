import ProductCard from "@/components/ProductCard";

const shirtBlackHero = "/photos/tshirt.jpeg";
const shirtWhite = "/photos/w-tshirt.jpeg";
const shirtNavy = "/photos/black.jpeg";
const shirtCharcoal = "/photos/b-tshirt02.jpeg";
const shirtBurgundy = "/photos/model.jpeg";
const shirtOwner = "/photos/owner.jpeg";
const shirtCoowner = "/photos/coowner.jpeg";

const products = [
  { image: shirtBurgundy, name: "Noir Slim fit", price: "159.900", tag: "Insignia" },
  { image: shirtNavy, name: "Noble nocturn Slim fit", price: "159.900" },
  { image: shirtBlackHero, name: "Noir T-Shirt", price: "89.900" },
  { image: shirtWhite, name: "Blanc Pur T-Shirt", price: "89.900" },
  { image: shirtCharcoal, name: "Ébène Signature T-Shirt", price: "89.900" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <span className="font-display text-2xl tracking-[0.3em] text-foreground uppercase">
            Serna
          </span>
          <div className="hidden md:flex items-center gap-10">
            <a href="#coleccion" className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors">
              Colección
            </a>
            <a href="#filosofia" className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors">
              Filosofía
            </a>
            <a href="#contacto" className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors">
              Contacto
            </a>
          </div>
          <button className="md:hidden text-foreground">
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H20M0 7H20M0 13H20" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <div className="space-y-4">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary">
                Colección 2026
              </p>
              <h1 className="font-display text-5xl md:text-7xl leading-[0.95] text-foreground">
                La elegancia<br />
                <em className="text-primary">es silencio</em>
              </h1>
            </div>
            <p className="font-body text-base text-muted-foreground max-w-md leading-relaxed">
              Camisas diseñadas para el hombre que no necesita gritar.
              Corte slim fit, tejidos italianos, acabados impecables.
            </p>
            <a
              href="#coleccion"
              className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body text-xs tracking-[0.25em] uppercase hover:bg-primary/90 transition-colors"
            >
              Descubrir
            </a>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={shirtBlackHero}
                alt="Camisa básica negra SERNA - Corte clásico"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 md:-left-12 bg-secondary px-6 py-4">
              <p className="font-display text-lg text-foreground italic">Noir Essential</p>
              <p className="font-body text-xs text-muted-foreground tracking-[0.2em] uppercase mt-1">
                Básico refinado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="border-t border-border" />
      </div>

      {/* Collection */}
      <section id="coleccion" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
            <div className="space-y-3">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary">
                Colección
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground">
                Nuestras camisas
              </h2>
            </div>
            <p className="font-body text-sm text-muted-foreground max-w-sm leading-relaxed">
              Cada pieza cortada con precisión. Algodón 100% italiano,
              botones de nácar, costuras reforzadas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="border-t border-border" />
      </div>

      {/* Philosophy */}
      <section id="filosofia" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="space-y-8">
              <div className="space-y-3">
                <p className="font-body text-xs tracking-[0.3em] uppercase text-primary">
                  Filosofía
                </p>
                <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
                  Menos ruido,<br />más presencia
                </h2>
              </div>
              <div className="space-y-6">
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  En SERNA creemos que la verdadera elegancia no necesita adornos. 
                  Cada camisa es el resultado de meses de perfeccionamiento: desde 
                  la selección del tejido hasta el último ojal.
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Nuestro corte slim fit está diseñado para acompañar el cuerpo 
                  sin restringirlo. Un equilibrio entre forma y libertad.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={shirtOwner} alt="Owner - Camisa del equipo SERNA" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="aspect-[3/4] overflow-hidden mt-12">
                <img src={shirtCoowner} alt="Co-owner - Camisa del equipo SERNA" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="border-t border-border py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <span className="font-display text-2xl tracking-[0.3em] text-foreground uppercase">
                Serna
              </span>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Camisas para el hombre moderno.<br />
                Diseñadas con convicción, hechas con precisión.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-body text-xs tracking-[0.2em] uppercase text-foreground">
                Navegación
              </h4>
              <div className="flex flex-col gap-2">
                <a href="#coleccion" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">Colección</a>
                <a href="#filosofia" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">Filosofía</a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-body text-xs tracking-[0.2em] uppercase text-foreground">
                Contacto
              </h4>
              <div className="flex flex-col gap-2">
                <span className="font-body text-sm text-muted-foreground">sernacollection07@gmail.com</span>
                <span className="font-body text-sm text-muted-foreground">@sernacollection1</span>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-border">
            <p className="font-body text-xs text-muted-foreground tracking-[0.15em]">
              © 2026 SERNA. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
