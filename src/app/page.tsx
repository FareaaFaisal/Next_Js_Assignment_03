import Header from "@/app/components/header"          
import {Footer} from "@/app/components/footer"

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header/>
      {/* from Assignment 2 */}
      <div className="flex flex-col justify-center items-center min-h-screen bg-emerald-900">
    <div className="w-[900px] h-[600px] bg-white p-8 rounded-lg shadow-lg flex justify-between items-center">
      <div className="text-[40px] font-black">
        Hey,<br />
        My name is <span className="text-sky-700">Fareaa Faisal</span><br />
        & I am currently pursuing<br/> <span className="text-sky-700"> BSCS</span> at <span className="text-sky-700">SMIU</span><br />
      </div>
  
      <div className="mt-8">
        <Image src="/pfp.jpeg" alt="Profile Picture" width={300} height={500} />
      </div>
    </div>
    <br/><br/><br/><br/><br/>
  </div>

      <Footer/>
    </div>
  );
}
