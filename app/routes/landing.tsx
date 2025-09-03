export function Landing() {
  return (
    <main className="flex flex-col font-clear">
      <div className="w-full h-[60px] bg-dark-overlay"></div>
      <div className="flex flex-col items-center grow w-ful
                      gap-[10vw] pt-[5vw] lg:gap-[60px] lg:pt-[50px]">
        <div className="w-[80%] lg:w-[800px] h-auto">
          <div className="relative w-full aspect-[20/8] overflow">
            <div className="flex h-[90%] gap-[3%] items-center">
              <img src="https://avatars.githubusercontent.com/u/40443620?v=4" 
                className="aspect-square rounded-full h-full" />
              <div>
                <h1 className="text-white text-[11vw]/[7vw] lg:text-[7rem]/[4rem]">Milo <br/> Akerman</h1>
                <h2 className="text-[4vw]/[3vw] lg:text-[2.5rem]/[1em] mt-[2%]">
                  <span className="text-eng-green">engineer</span>,
                  <span className="text-prog-blue"> programmer</span>, designer
                </h2>
              </div>
            </div>
            <div className="absolute flex w-full h-[20%] bottom-0 px-[15%] py-[1%] gap-[4%]">
                <div className="w-[30%] h-full bg-eng-green/50 backdrop-blur-[5px] rounded-[1vw] hover:scale-110 duration-100" />
                <div className="w-[30%] h-full bg-prog-blue/50 rounded-[1vw] hover:scale-110 duration-100" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[80%] lg:w-[1000px] h-[1000px] text-center">
          <h2 className="text-[6vw] lg:text-[3rem]">Highlights</h2>
          <div className="flex flex-col lg:grid grow grid-cols-5 grid-rows-7 gap-[40px] pt-[5vw] lg:pt-[30px]">
            <div className="aspect-[1] lg:aspect-auto col-span-2 row-span-4 bg-eng-green rounded-2xl"></div>
            <div className="aspect-[2] lg:aspect-auto col-start-3 col-span-3 row-span-2 bg-prog-blue rounded-2xl"></div>
            <div className="aspect-[2] lg:aspect-auto col-start-3 row-start-3 col-span-3 row-span-2 bg-des-white rounded-2xl"></div>
          </div>
        </div>
      </div>
    </main>
  );
}