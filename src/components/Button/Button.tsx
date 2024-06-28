import { ReactComponent as PlusIcon } from '../../assets/plus-icon.svg';
import { ReactComponent as TrashIcon } from '../../assets/trash-icon.svg';

type IconType = 'plus' | 'trash';
type ButtonType = 'button'| 'submit' | 'reset';

type ButtonProps = {
  text: string,
  onClick?: () => void,
  type?: ButtonType,
  className?: string,
  icon?: IconType,
};

const iconComponents: Record<IconType, React.FC<React.SVGProps<SVGSVGElement>>> = {
  plus: PlusIcon,
  trash: TrashIcon,
};

const Button: React.FC<ButtonProps> = ({
  text,
  type = 'button',
  onClick,
  className,
  icon,
}) => {
  const IconComponent = icon ? iconComponents[icon] : null;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-[100%] text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 px-7 py-3 rounded-md text-lg ${className}`}
    >
      <span className="flex items-center justify-center mx-auto">
        {text}
        {IconComponent && (
          <IconComponent className="ml-3" />
        )}
      </span>
    </button>
  )
};

export default Button;