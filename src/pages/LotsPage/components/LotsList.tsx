import { useEffect } from 'react';
import LotCard from './LotCard';

const lots = [{
  id: 1,
  name: 'test lot 1 test lot 1 test lot 1 test lot 1 test lot 1 test lot 1 test lot 1',
  description: 'test lot description 1',
  src: 'https://images.unsplash.com/photo-1719230693490-786d994f72b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
}, {
  id: 2,
  name: 'test lot 2',
  description: 'test lot description 2',
  src: 'https://plus.unsplash.com/premium_photo-1670106460931-0fba28e95c93?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
}, {
  id: 3,
  name: 'test lot 3',
  description: 'test lot description 3',
  src: 'https://images.unsplash.com/photo-1719552435307-61870ae8741d?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
}, {
  id: 4,
  name: 'test lot 4',
  description: 'test lot description 4',
  src: 'https://images.unsplash.com/photo-1719384966331-ff2ae7d80e21?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
}, {
  id: 5,
  name: 'test lot 5',
  description: 'test lot description 5',
  src: 'https://images.unsplash.com/photo-1719567225847-ddd4fde6102a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
}, {
  id: 6,
  name: 'test lot 6',
  description: 'test lot description 6',
  src: 'https://images.unsplash.com/photo-1717620380245-8e476305eb97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
}, {
  id: 7,
  name: 'test lot 7',
  description: 'test lot description 7',
  src: 'https://images.unsplash.com/photo-1718785461588-4b0b4b4ef37e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D',
}, {
  id: 8,
  name: 'test lot 8',
  description: 'test lot description 8',
  src: 'https://images.unsplash.com/photo-1719437492375-1c20c8c17846?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D',
}, {
  id: 9,
  name: 'test lot 9',
  description: 'test lot description 9',
  src: 'https://images.unsplash.com/photo-1719327230710-53d5aa4045aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D',
}, {
  id: 10,
  name: 'test lot 10',
  description: 'test lot description 10',
  src: 'https://images.unsplash.com/photo-1719313843278-448ecd5e52a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D',
}];

const disributeImages = (images: any) => {
  const imgsLength = images.length;
  const columns: any = {};

  const viewportWidth = window.innerWidth;
  if (viewportWidth < 640) {
    columns.first = [...images];
  }

  if (viewportWidth >= 640 && viewportWidth < 768) {
    const middle = Math.floor(images.length / 2);
    columns.first = [...images.slice(0, middle)];
    columns.second = [...images.slice(middle)]; 
  }

  if (viewportWidth >= 768) {
    const thirdPart = Math.round(images.length / 3);
    columns.first = [...images.slice(0, thirdPart)];
    columns.second = [...images.slice(thirdPart, thirdPart*2)];
    columns.third = [...images.slice(thirdPart*2)]; 
  }

  return columns;
};

const LotsList = () => {
  const columns = disributeImages(lots);

  const renderColumns = (columns: any): any => {
    const columnTemplate = (column: any) => (
      <ul className='flex flex-col gap-3'>
        {column.map((col: any) => (
          <li key={col.id} className='items-start'>
            <LotCard lot={col} />
          </li>
        ))}
      </ul>
    );

    const firstColumn = columnTemplate(columns.first);
    const secondColumn = columns.second ? columnTemplate(columns.second) : null;
    const thirdColumn = columns.third ? columnTemplate(columns.third) : null;

    return (
      <>
        {firstColumn}
        {secondColumn}
        {thirdColumn}
      </>
    )
  };

  return (
    <section>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {renderColumns(columns)}
      </div>
    </section>
  );
};

export default LotsList;
