import classNames from 'classnames';

type FullWidthContainerProps = {
  className?: string,
  children: React.ReactNode,
}

const FullWidthContainer: React.FC<FullWidthContainerProps> = ({
  className,
  children,
}) => {
  const mediaWidths: string = 'sm:w-[95%] md:w-[90%] lg:w-[80%] 2xl:w-[70%]';
  const defaultClass: string = 'bg-gray-300 min-h-screen mx-auto';

  return (
    <main>
      <div className={classNames(defaultClass, mediaWidths, className)}>
        {children}
      </div>
    </main>
  );
};

export default FullWidthContainer;
