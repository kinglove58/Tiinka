function HeadTop({ headText, subText }) {
  return (
    <div className="bg-blue-900 text-white text-center py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{headText}</h2>
        <p className="text-lg md:text-xl">{subText}</p>
      </div>
    </div>
  );
}

export default HeadTop;
