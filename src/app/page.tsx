import { FlipWords } from "@/components/ui/flip-words";

export default function Home() {
  const words: string[] = ["be cool?", "be a YP?", "disappoint your loved ones?"];
  return(
    <div>
      {/* <div className="flex flex-col justify-center h-screen">
        <p className="font-bold text-5xl text-center animate-bounce"> Don't do Drugs </p>
        <p className="text-sm text-center"> Drugs are bad </p>
      </div>  */}

      <div className="">
        {/* <div className="flex flex-col h-[calc(100vh-60px)] items-center justify-center"> */}
        <div className="flex flex-col justify-center h-dvh">  
          <p className="font-bold text-5xl text-center">
            Are you trying to  
            <FlipWords words={words}/>
          </p> <br/>
          <p className="text-sm text-center animate-bounce"> Then don't do drugs. </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center h-screen bg-purple-100 bg-cover bg-center" style={{ backgroundImage: "url('https://media.licdn.com/dms/image/v2/C4E12AQHyoC2afGaEuw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520130454351?e=1733961600&v=beta&t=1ePaqLtG_3O9nmm8sf-QI5ZQKdONNx9stLZ-gpclEBA')" }}>
      <p className="font-bold text-left text-3xl mb-4"> Commonly Abused Drugs in Singapore </p>
      <table className="border border-gray-300 bg-gray-200 w-full max-w-4xl mt-4">
            <tbody>
              <tr>
                <td className="font-bold py-2 px-4 border-b text-black">Cannabis</td>
                <td className="py-2 px-4 border-b text-black">
                  <span className="font-bold text-black">
                    Marijuana, Pot, Grass, Joints, Ganja, Hashish, Weed
                  </span>
                  <br />
                  It contains THC (tetrahydrocannabinol) which affect one’s mood – causing euphoria, and also anxiety, disorientation or paranoia.
                  Cannabis can affect concentration and memory which weakens the abuser’s ability to learn.
                </td>
              </tr>
              <tr>
                <td className="font-bold py-2 px-4 border-b text-black">Heroin</td>
                <td className="py-2 px-4 border-b text-black">
                  <span className="font-bold text-black">
                    White, Smack, Junk, Powder, Putih, Medicine, Ubat
                  </span>
                  <br />
                  Heroin abusers feel dull and tired very easily. They cannot work properly as they are not able to concentrate.
                </td>
              </tr>
              <tr>
                <td className="font-bold py-2 px-4 border-b text-black">Methamphetamine</td>
                <td className="py-2 px-4 border-b text-black">
                  <span className="font-bold text-black">
                  'Ice', Glass, Crystal, Speed, 'Quartz', 'Ice Cream', 'Hirropon', 'Ya ba', Shabu or Syabu.
                  </span>
                  <br />
                  Methamphetamine is highly addictive and is a strong stimulant. It has a very strong effect on the central nervous system.
                </td>
              </tr>
              <tr>
                <td className="font-bold py-2 px-4 border-b text-black">NPS</td>
                <td className="spy-2 px-4 border-b text-black">
                  <span className="font-bold text-black">
                  Spice, K2, Bath Salts, Kronic, Bromo-Dragonfly, Mushroom, Synthetic Weed
                  </span>
                  <br />
                  NPS abuse can lead to severe intoxications, severe toxic reaction leading to death, hallucinations, paranoia, seizures
                </td>
              </tr>
            </tbody>
          </table>
      </div>
  
      <div className="flex flex-col justify-center items-center h-screen bg-blue-100">
        <p className="font-bold text-3xl text-center text-blue-800 mb-4">Get Help</p>
        <p className="text-md text-center text-gray-800 max-w-md">
        <strong>Singapore Anti-Narcotics Association (SANA)</strong><br />
        Tel: 6732 1122 (Sengkang branch) OR 9847 5102 (Lakeside branch)<br /><br />

        <strong>Samaritans of Singapore (SOS)</strong><br />
        Tel: 1800 221 4444* (24 hours daily)<br /><br />

        <strong>Teen Challenge (Singapore)</strong><br />
        Tel: 6793 7933 (Monday–Friday, 9am–6pm)<br /><br />

        <strong>National Addictions Management Services (NAMS)</strong><br />
        Tel: 6732 6837 (Mon-Sun inclusive of PHs, 8am – 11pm)<br /><br />

        <em>If you wish to report any information, please call the Central Narcotics Bureau (CNB) hotline at 1800 325 6666*.</em>
        </p>
      </div>
      
  </div>
  );
}
