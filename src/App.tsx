// Documentation Tailwind : https://tailwindcss.com/

import Header from './Header';
import ProfilePicture from './ProfilePicture';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import SearchInput from './SearchInput';
import Action from './Action';
import BuildingOffice2Icon from '@heroicons/react/24/outline/BuildingOffice2Icon';
import UsersIcon from '@heroicons/react/24/outline/UsersIcon';
import CalendarDaysIcon from '@heroicons/react/24/outline/CalendarDaysIcon';
import Event from './Event';
import AdCard from './AdCard';
import Navbar from './Navbar';

const actions = [
  {
    icon: BuildingOffice2Icon,
    text: (
      <span>
        Créer <strong className="block">un bien</strong>
      </span>
    ),
  },
  {
    icon: UsersIcon,
    text: (
      <span>
        Nouveau <strong className="block">contact</strong>
      </span>
    ),
  },
  {
    icon: CalendarDaysIcon,
    text: (
      <span>
        Planifier <strong className="block">un rdv</strong>
      </span>
    ),
  },
];

// Documentation Heroicons : https://github.com/tailwindlabs/heroicons#react
export default function App() {
  return (
    <main>
      <Navbar />
      <div className="bg-white py-12">
        <Header />
      </div>
      <div className="flex flex-col gap-8 border-t border-gray-200 p-4">
        <section className="flex gap-4 items-center">
          <ProfilePicture />
          <SearchInput />
          <Cog6ToothIcon className="w-8 h-8 text-gray-700" />
        </section>
        <section className="grid grid-cols-3 gap-28">
          {actions.map(({ icon, text }, i) => (
            <Action key={i} icon={icon}>
              {text}
            </Action>
          ))}
        </section>
        <section className="flex flex-col gap-2">
          <h2 className="font-bold">Les événements à venir</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            <Event
              dateStart={new Date()}
              dateEnd={new Date()}
              title="Signature compromis"
              person="LBI TUNISIE"
            />
            <Event
              dateStart={new Date()}
              dateEnd={new Date()}
              title="Signature compromis"
              person="LBI TUNISIE"
            />
            <Event
              dateStart={new Date()}
              dateEnd={new Date()}
              title="Signature compromis"
              person="LBI TUNISIE"
            />
          </div>
        </section>
        <section className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h2 className="font-bold">Derniers bien rentrés</h2>
            <a href="#" className="text-sm text-gray-500">
              Voir tout
            </a>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2">
            <AdCard
              image="https://picsum.photos/200"
              title="Superbe propriété"
              price={100000}
              address="Tunisie"
            />
            <AdCard
              image="https://picsum.photos/200"
              title="Superbe propriété"
              price={100000}
              address="Tunisie"
            />
            <AdCard
              image="https://picsum.photos/200"
              title="Superbe propriété"
              price={100000}
              address="Tunisie"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
