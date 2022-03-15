function App() {
  return (
    <>
      <header className="header flex items-center justify-center gap-x-5 text-white mb-10">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[400px] page-container">
        <div className="w-full h-full rounded-lg relative">
          <img
            src="http://genk.mediacdn.vn/2019/8/20/1-15662898065871774855253.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </section>
    </>
  );
}

export default App;
