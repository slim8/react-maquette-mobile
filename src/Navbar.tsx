import { UsersIcon } from '@heroicons/react/24/outline';
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon';
import BuildingOffice2Icon from '@heroicons/react/24/outline/BuildingOffice2Icon';
import CalendarDaysIcon from '@heroicons/react/24/outline/CalendarDaysIcon';
import HomeIcon from '@heroicons/react/24/outline/HomeIcon';

export default function Navbar() {
  return (
    <div className="fixed bottom-0 w-full p-4 bg-white flex gap-4 justify-between z-2">
      <NavbarButton icon={HomeIcon} text="Accueil" />
      <NavbarButton icon={BuildingOffice2Icon} text="Accueil" />
      <NavbarButton icon={UsersIcon} text="Accueil" />
      <NavbarButton icon={CalendarDaysIcon} text="Accueil" />
      <NavbarButton icon={Bars3Icon} text="Accueil" />
    </div>
  );
}

type NavbarButtonProps = {
  icon: React.ElementType<React.ComponentProps<'svg'>>;
  text: string;
};

function NavbarButton({ icon: Icon, text }: NavbarButtonProps) {
  return (
    <a href="#" className="flex flex-col items-center hover:text-lbi">
      <Icon className="w-8" />
      {text}
    </a>
  );
}
