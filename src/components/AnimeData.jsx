const AnimeData = ({ data, title }) => {
  return (
    <>
      {data && (
        <p class="text-gray-800">
          <span class="font-semibold">{title}</span> {data}
        </p>
      )}
    </>
  );
};

export default AnimeData;
