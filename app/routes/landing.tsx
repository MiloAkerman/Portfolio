import { useEffect, useState, type ReactNode } from "react";
import { Highlight, CardType } from "~/modules/highlight"
import { Horizontal, Vertical } from "~/modules/imagedisplays";
import { Project } from "~/modules/project";

const NUM_FISH = 15;
const FISH_URL = "app/resources/Trout.png"
type FishObject = {
  id: number,
  height: number,
  left: boolean,
  hue: number
}

let nextFishID = NUM_FISH + 1;

export function Landing() {
  const [fishToggle, setFishToggle] = useState(false);
  const [fish, setFish] = useState<Array<FishObject>>([]);
  const redirectGithub = () => {
    window.open('https://github.com/MiloAkerman', '_blank', 'noopener,noreferrer');
  }
  const redirectLinkedin = () => {
    window.open('https://www.linkedin.com/in/milo-akerman/', '_blank', 'noopener,noreferrer');
  }
  const toggleFish = () => {
    if (!fishToggle) {
      setFish([]);
      nextFishID = NUM_FISH + 1;
      fillFish(NUM_FISH, 0);
    }
    setFishToggle(!fishToggle);
  }
  const fillFish = (n: number, timeout: number) => {
    if (n > 0) {
      setTimeout(() => {
        const height = (Math.random() * (window.innerHeight - 200)) ;
        const left = Math.random() > 0.5;
        const hue = (Math.random() * 360) + 1
        setFish(prevFish => ([...prevFish, {id: NUM_FISH - n, height: height, left: left, hue: hue}]));
        fillFish(n - 1, (Math.random() * 800) + 200);
      }, (timeout))
    }
  }
  const newFish = (id: number) => {
    let filteredFish = fish.filter((fish) => fish.id != id);

    const height = (Math.random() * (window.innerHeight - 200));
    const left = Math.random() > 0.5;
    const hue = (Math.random() * 360) + 1
    setFish([...filteredFish, {id: nextFishID++, height: height, left: left, hue: hue}]);
  }

  return (
    <main className="flex flex-col font-clear">
      <div className="fixed w-[100vw] h-[100vh] z-20 pointer-events-none" style={{
        display: fishToggle ? "block" : "none"
      }}>
        {fish.map((fishObj) => {
          return <img key={fishObj.id} src={FISH_URL} className="absolute w-[400px]" style={{
            top: fishObj.height,
            animation: fishObj.left ? `leftwardFishAnim ${window.innerWidth / 800}s linear forwards` 
                                    : `rightwardFishAnim ${window.innerWidth / 800}s linear forwards`,
            transform: fishObj.left ? "" : "scaleX(-1)",
            filter: `hue-rotate(${fishObj.hue}deg) saturate(4)`
          }} onAnimationEnd={() => {newFish(fishObj.id)}}></img>
        })}
      </div>
      {/* <div className="w-full h-[60px] bg-dark-overlay"></div> */}
      <div className="flex flex-col items-center grow w-ful
                      gap-[10vw] pt-[8vw] lg:gap-[60px] lg:pt-[80px]">
        <div className="w-[80%] lg:w-[800px] h-auto">
          <div className="relative w-full aspect-[20/8] overflow">
            <div className="flex h-[90%] gap-[3%] items-center">
              <img src="https://avatars.githubusercontent.com/u/40443620?v=4" 
                className="aspect-square rounded-full h-full select-none" />
              <div>
                <h1 className="text-white text-[11vw]/[7vw] lg:text-[7rem]/[4rem]">Milo <br/> Akerman</h1>
                <h2 className="text-[4vw]/[3vw] lg:text-[2.5rem]/[1em] mt-[2%]">
                  <span className="text-eng-green">engineer</span>,
                  <span className="text-prog-blue"> programmer</span>, designer
                </h2>
              </div>
            </div>
            <div className="absolute flex w-full h-[20%] bottom-0 px-[15%] py-[1%] gap-[4%] select-none">
                <div className="w-[30%] h-full bg-eng-green/50 backdrop-blur-[5px] rounded-[1vw] 
                                hover:scale-110 duration-100 px-[5%] flex items-center justify-center"
                                onClick={redirectGithub}>
                  <span className="text-[1rem] sm:text-[2rem]">GitHub</span>
                  <img src="app/resources/github-mark-white.svg" className="h-[60%] ml-[5%]" />
                </div>
                <div className="w-[30%] h-full bg-prog-blue/50 backdrop-blur-[5px] rounded-[1vw] 
                                hover:scale-110 duration-100 px-[5%] flex items-center justify-center"
                                onClick={redirectLinkedin}>
                  <span className="text-[1rem] sm:text-[2rem]">LinkedIn</span>
                  <img src="app/resources/InBug-White.png" className="h-[60%] ml-[5%]" />
                </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[80%] lg:w-[1000px] text-center">
          <h2 className="text-[6vw] lg:text-[3rem]">Highlights</h2>
          <div className="flex flex-col lg:grid grow grid-cols-5 grid-rows-[300px_300px_300px] gap-[40px] pt-[5vw] lg:pt-[30px]">
            <Highlight  title="STM Audio Inference" 
                        subtitle="Low-power inference on an STM32 for bear vocalization classification @ UC San Diego"
                        content={
                          <Vertical images={[
                            "app/resources/lora_cropped.png",
                            "app/resources/spectrogram_piha.png",
                            "app/resources/FullSystemDiagram.png"
                          ]} />
                        } colStart={1} rowStart={1} w={2} h={2} 
                        bg={CardType.ENG} 
                        href="#stme4e" />
            <Highlight  title="BrushUp" 
                        subtitle="Art fighting game in React"
                        content={
                          <Horizontal images={[
                            "app/resources/Match.gif",
                            "app/resources/MatchStats.png"
                          ]} />
                        } colStart={3} rowStart={1} w={3} h={1} 
                        bg={CardType.PROG}
                        href="#brushup" />
            <Highlight  title="Portfolio" 
                        subtitle="This website! Made in React / Tailwind"
                        content={
                          <div className="w-full lg:h-[150px] flex flex-col justify-center items-center">
                            <div className="bg-highlight aspect-[20/3] w-[80%] rounded-full text-center
                                              cursor-pointer shadow-[inset_0_15px_10px_rgba(255,255,255,0.3)]"
                                  onClick={toggleFish}>
                              <span className="text-[1.2rem] lg:text-[2.2rem] font-sans select-none">Activate Fish</span>
                            </div>
                          </div>
                        } colStart={3} rowStart={2} w={3} h={1} bg={CardType.DES} />
            <Highlight  title="Dotdotdash" 
                        subtitle="A series of horror games built on Three.js"
                        content={<Horizontal images={[
                            "app/resources/ouroboros1.png",
                            "app/resources/notforyou.png",
                            "app/resources/ouroboros2.png"
                          ]} />} colStart={1} rowStart={3} w={3} h={1} 
                          bg={CardType.PROG}
                          href="#dotdotdash" />
            <Highlight  title="WolHub" 
                        subtitle="A reactive browser companion"
                        content={<Horizontal images={[
                            "app/resources/wolhub1.png",
                            "app/resources/wolhub2.png"
                          ]} />} colStart={4} rowStart={3} w={2} h={1} 
                          bg={CardType.DES}
                          href="#wolhub" />
          </div>
        </div>
        
        <div className="w-[80%] lg:w-[1000px]">
          <h2 className="text-[3em] lg:text-[4em]">Projects</h2>
          <div className="h-[2px] w-full bg-white opacity-35" />
          <div className="w-full h-auto mb-[100px] flex flex-col">

            <Project  id="rosenstein"
                      name="IMU Development" 
                      duration="(Mar '25 - Ongoing)" 
                      links={[]} 
                      description="Developing an SoM IMU for biomechanics research at Brown University, with the aim of measuring collisions using two ADXL accelerometers in a schematic and PCB designed and routed by myself." 
                      type={CardType.ENG} 
                      image="app/resources/schematic.png" />

            <Project  id="stme4e"
                      name="ULP STM Audio Interface" 
                      duration="(Jun - Aug '25)" 
                      links={[{
                        url: "https://e4e.ucsd.edu/news-and-updates/acoustic-collar-reu-2025",
                        text: "Blog post"
                      }, {
                        url: "https://github.com/UCSD-E4E/STM32-PowerStudies",
                        text: "GitHub Repo"
                      }]} 
                      description="Developed and optimized low-power TinyML firmware at UC San Diego for bioacoustic collars designed to record, filter, and export vocalization data for pandas, polar bears, and burrowing owls." 
                      type={CardType.ENG} 
                      image="app/resources/spectrogram_piha.png" />

            <Project  id="brushup"
                      name="BrushUp" 
                      duration="(Jun '25 - Ongoing)" 
                      links={[]} 
                      description={`WEBSITE LAUNCH IN PROGRESS!\nArt fighting game built in React with PostgreSQL backend. Intended to use as (slightly more competitive!) sketching practice, first launching at RISD!`}
                      type={CardType.PROG}
                      image="app/resources/Match.gif" />

            <Project  id="dotdotdash"
                      name="Dotdotdash" 
                      duration="(Feb - May '22)" 
                      links={[{
                        url: "https://bitselk.github.io/dotdotdash/notforyou/",
                        text: "notforyou"
                      }, {
                        url: "https://bitselk.github.io/dotdotdash/tildeathdouspart/",
                        text: "tildeath"
                      }, {
                        url: "https://bitselk.github.io/dotdotdash/ouroboros/",
                        text: "ouroboros"
                      }]} 
                      description={`A series of short, focused horror games built fully online in Three.js, with no game engine.`}
                      type={CardType.PROG}
                      image="app/resources/notforyou.png" />

            <Project  id="wolhub"
                      name="Wolhub" 
                      duration="(Mar - Jun '22)" 
                      links={[{
                        url: "https://chromewebstore.google.com/detail/wolhub/obekkhkjfjaifjfagmiipodghgddojna?hl=en-US",
                        text: "Chrome Web Store"
                      }]} 
                      description="A lightweight, reactive browser companion, customizable and reactive to the current page. Built for a friend! Models made by hand in Blender."
                      type={CardType.DES}
                      image="app/resources/wolhub2.png" />
          </div>
        </div>
      </div>
    </main>
  );
}