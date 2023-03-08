import { ClockIcon } from '@heroicons/react/24/outline';

type EventProps = {
  dateStart: Date;
  dateEnd: Date;
  title: string;
  person: string;
};

const MONTHS = ['Jan', 'Fev', 'Mar'];

export default function Event({
  dateStart,
  dateEnd,
  title,
  person,
}: EventProps) {
  return (
    <div className="flex rounded-xl overflow-hidden shrink-0 shadow-md">
      <div className="bg-lbi text-white py-4 px-2 leading-none">
        <div className="text-2xl font-bold">0{dateStart.getDate()}</div>
        <div className="uppercase">{MONTHS[dateStart.getMonth()]}</div>
      </div>
      <div className="flex flex-col justify-center pl-6 pr-10 bg-white rounded-r-xl">
        <strong>{title}</strong>
        <span className="text-sm text-gray-500">avec {person}</span>
        <div className="flex gap-2 text-gray-400 text-xs">
          <ClockIcon className="w-4" />
          {dateStart.toLocaleTimeString().substring(0, 5)}&nbsp;-&nbsp;
          {dateEnd.toLocaleTimeString().substring(0, 5)}
        </div>
      </div>
    </div>
  );
}
