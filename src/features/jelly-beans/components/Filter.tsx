'use client';

type FilterProps = {
  selectedGroup: string;
  onGroupChange: (group: string) => void;
  isLoading: boolean;
}

export default function Filter({ selectedGroup, onGroupChange, isLoading }: FilterProps) {

  const groups = [
    'Jelly Belly Official Flavors',
    'Soda Pop Shoppe® Flavors',
    'Superfruit Flavors',
    'Cold Stone® Flavors',
    'Kids Mix Flavors',
    'Tropical Mix Flavors',
    'Krispy Kreme® Doughnuts Flavors',
    'Snapple® Mix Flavors',
    'Cocktail Classics® Flavors',
  ];

  const optionClasses = 'bg-white text-gray-900';

  return (
    <div className='mb-6'>
      <select
        id='group-filter'
        value={selectedGroup}
        onChange={(e) => onGroupChange(e.target.value)}
        className={'px-3 py-2 w-full sm:w-auto border-1 disabled:opacity-50 disabled:cursor-not-allowed'}
        disabled={isLoading}
      >
        <option className={optionClasses} value=''>All Flavours</option>
        {groups.map((group) => (
          <option className={optionClasses} key={group} value={group}>
            {group}
          </option>
        ))}
      </select>
    </div>
  );
} 