import { Pressable, PressableProps } from 'react-native';

import { useAppTheme } from '@hooks';
import { ThemeColors } from '@theme';

import { AlertIcon } from '../../assets/icons/AlertIcon';
import { ArrowCircleDownIcon } from '../../assets/icons/ArrowCircleDownIcon';
import { ArrowCircleUpIcon } from '../../assets/icons/ArrowCircleUpIcon';
import { ArrowLeftIcon } from '../../assets/icons/ArrowLeftIcon';
import { ArrowRightIcon } from '../../assets/icons/ArrowRightIcon';
import { CalendarBlankIcon } from '../../assets/icons/CalendarBlankIcon';
import { CaretLeftIcon } from '../../assets/icons/CaretLeftIcon';
import { CaretRightIcon } from '../../assets/icons/CaretRightIcon';
import { CurrencyDollarIcon } from '../../assets/icons/CurrencyDollarIcon';
import { EditIcon } from '../../assets/icons/EditIcon';
import { EmailIcon } from '../../assets/icons/EmailIcon';
import { EyeIcon } from '../../assets/icons/EyeIcon';
import { FilterIcon } from '../../assets/icons/FilterIcon';
import { LockIcon } from '../../assets/icons/LockIcon';
import { LogoutIcon } from '../../assets/icons/LogoutIcon';
import { MagnifyingGlassIcon } from '../../assets/icons/MagnifyingGlassIcon';
import { PasswordIcon } from '../../assets/icons/PasswordIcon';
import { SearchIcon } from '../../assets/icons/SearchIcon';
import { TagIcon } from '../../assets/icons/TagIcon';
import { TrashIcon } from '../../assets/icons/TrashIcon';
import { UserIcon } from '../../assets/icons/UserIcon';
import { XIcon } from '../../assets/icons/XIcon';

export type IconBase = {
  size?: number;
  color?: string;
};

export interface IconProps {
  size?: number;
  name: IconName;
  color?: ThemeColors;
  onPress?: PressableProps['onPress'];
}

export function Icon({
  size = 32,
  name,
  color = 'primaryContrast',
  onPress,
}: IconProps) {
  const { colors } = useAppTheme();
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable onPress={onPress} hitSlop={10}>
        <SVGIcon size={size} color={colors[color]} />
      </Pressable>
    );
  }

  return <SVGIcon size={size} color={colors[color]} />;
}

const iconRegistry = {
  alert: AlertIcon,
  arrowCircleDown: ArrowCircleDownIcon,
  arrowCircleUp: ArrowCircleUpIcon,
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  calendarBlank: CalendarBlankIcon,
  caretLeft: CaretLeftIcon,
  caretRight: CaretRightIcon,
  currencyDollar: CurrencyDollarIcon,
  edit: EditIcon,
  email: EmailIcon,
  eye: EyeIcon,
  filter: FilterIcon,
  lock: LockIcon,
  logout: LogoutIcon,
  magnifyingGlass: MagnifyingGlassIcon,
  password: PasswordIcon,
  search: SearchIcon,
  tag: TagIcon,
  trash: TrashIcon,
  user: UserIcon,
  x: XIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
