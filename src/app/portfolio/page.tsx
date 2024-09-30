import Header from "@/app/components/header"
import {Footer} from "@/app/components/footer"

import Link from "next/link"

export default function Portfolio(){
    return(
     <div style={{ backgroundColor:"rgb(6 78 59)", minHeight: "100vh" }}>
       <Header/>
       <h1 className="text-white text-4xl">This is the Portfolio section</h1>
       <Footer/>
     </div>
    )
}