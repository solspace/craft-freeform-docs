const Photo = ({ src, alt }) => {
  return <img alt={alt} src={src} />;
};

const BrowserMockupWithPhoto = ({ src, alt }) => {
  return (
    <div className="mx-auto mt-6">
      <div className="w-full h-11 rounded-t-lg bg-gray-200 dark:bg-gray-700 flex justify-start items-center space-x-1.5 px-3">
        <span className="w-3 h-3 rounded-full bg-red-400"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span className="w-3 h-3 rounded-full bg-green-400"></span>
      </div>
      <div className="w-full m-0">
        <img className="rounded-b-lg" alt={alt} src={src} />
      </div>
    </div>
  );
};

export { Photo, BrowserMockupWithPhoto };
