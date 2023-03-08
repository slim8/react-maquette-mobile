import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function SearchInput() {
  return (
    <div className="relative grow">
      <input
        type="text"
        placeholder="Rechercher"
        className="w-full p-2 rounded-md shadow-sm pr-12 outline-green-500"
      />

      <MagnifyingGlassIcon className="absolute w-6 h-6 right-2 top-1/2 -translate-y-1/2 text-gray-400" />
    </div>
  );
}
