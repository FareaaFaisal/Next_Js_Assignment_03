import Header from "@/app/components/header"
import {Footer} from "@/app/components/footer"

import Link from "next/link"

export default function Contact(){
    return(
     <div style={{ backgroundColor:"rgb(6 78 59)", minHeight: "100vh" }}>
       <Header/>
       <h1 className="text-white text-4xl">This is Contact us section</h1>
       <Footer/>
     </div>
    )
}