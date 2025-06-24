import React, { useState } from "react"
import { Navbar } from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import { Programs } from "./Components/Programs/Programs"
import { Title } from "./Components/Title/Title"
import { About } from "./Components/About/About"
import { Campus } from "./Components/Campus/Campus"
import { Carousel }  from "./Components/Carousel/Carousel"
import { Contacts } from "./Components/Contacs/Contacts"
import { Footer } from "./Components/footer/Footer"
import { VideoPlayer } from "./Components/VideoPlayer/VideoPlayer"

function App() {

    const[playState, setPlayState] = useState(false);

    return (
        <>
            <Navbar />
            <Hero />
            <Title subtitle={'OUR PROGRAM'} title={'What We Offer'}/>
            <Programs />
            <About setPlayState={setPlayState}/>
            <Title subtitle={'Gallery'} title={'Campus Photos'}/>
            <Campus />
            <Title subtitle={'Testimonials'} title={'What Student Says'} />
            <Carousel />
            <Title subtitle={'CONTACT US'} title={'Get in Touch'} />
            <Contacts />
            <Footer />
            <VideoPlayer playState={playState} setPlayState={setPlayState}/>


        </>
    )
}

export default App
