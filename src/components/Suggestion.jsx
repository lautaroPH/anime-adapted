const Suggestion = ({ title, media_type, year }) => {
  return (
    <div class="h-10 flex flex-col justify-center w-5/6">
      <p class="leading-4 overflow-hidden text-ellipsis whitespace-nowrap text-sm">
        {title}
      </p>
      <p class="text-xs text-gray-600 font-light">
        ({media_type}
        {year && ', ' + year})
      </p>
    </div>
  );
};

export default Suggestion;
