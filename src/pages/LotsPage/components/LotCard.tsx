import { Link } from 'react-router-dom';

type Lot = {
  id: number,
  name: string,
  description: string,
  src: string,
}

interface LotCardProps {
  lot: Lot,
}

const LotCard: React.FC<LotCardProps> = ({ lot }) => {
  const getFigcaption = (caption: string): string => {
    if(caption.length > 30) {
      return `${caption.slice(0, 30)}...`;
    }
    return caption;
  };

  return (
    <figure className='relative block overflow-hidden'>
      <Link to={`/lot/${lot.id}`}>
        <img
          src={lot.src}
          alt={lot.description}
          className='w-full h-auto object-cover transform transition-transform hover:scale-105'
        />
      </Link>
      <figcaption className='absolute w-full text-center bottom-0 text-xl text-white bg-black bg-opacity-70 p-2'>{getFigcaption(lot.name)}</figcaption>
    </figure>
  );
};

export default LotCard;
