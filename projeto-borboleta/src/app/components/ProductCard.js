import Image from 'next/image';

export default function ProductCard({ name, price, image, alt, showAlert }) { 
  
  const handleCompra = () => {
    showAlert(`"${name}" (${price}) foi adicionado ao carrinho!`);
  };

  return (
    <article className="item">
      <figure className="product">
        <Image 
          src={image} 
          alt={alt} 
          width={300} 
          height={300} 
          priority={true}
          style={{ width: '100%', height: 'auto', marginTop: '10px', borderRadius: '10px' }}
        />
      </figure>
      <h3>{name}</h3>
      <p>
        <span>{price}</span>
      </p>
      <button className="botao-compra" onClick={handleCompra}> 
        Comprar
      </button>
    </article>
  );
}