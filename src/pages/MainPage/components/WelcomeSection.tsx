import { Link } from 'react-router-dom';

const WelcomeSection = () => {
  return (
    <section className=' '>
      <div className='relative flex items-center justify-center min-h-96 bg-amber-400 bg-auction-image bg-cover bg-center'>
      <div className='absolute inset-0 bg-black bg-opacity-70'></div>
        <h2 className='text-center text-white text-2xl z-10 px-2'>
          <Link to='/login' className='text-red-400 hover:underline active:text-red-500'>
            Auction off
          </Link>
          {' '}whatever you want or{' '}
          <Link to='/lots' className='text-red-400 hover:underline active:text-red-500'>
            pick
          </Link>
          {' '}what you need
        </h2>
      </div>
    </section>
  );
};

export default WelcomeSection;
