import React from "react";
import Slider from "react-infinite-logo-slider";
import clientLogos from "../../content/Home/ClientsLogoData"; 
import content from "../../content/Home/OurClients.json"; 

function OurClients({lang}) {
  const Content = content[lang]; 

  return (
    <>
      <div className="flex justify-center mb-[2vw]">
        <div className="w-[80%]">
          <h1 className="text-[3vw] text-left font-bold max-[450px]:text-[7vw]">
            {Content.clients}
          </h1>
        </div>
      </div>
      <Slider
        width="250px"
        duration={40}
        pauseOnHover={true}
        blurBorders={false}
        blurBoderColor={"#fff"}
      >
        {clientLogos.map((logo, index) => (
          <Slider.Slide key={index}>
            <img src={logo.src} alt={logo.alt} className="w-36" />
          </Slider.Slide>
        ))}
      </Slider>
    </>
  );
}

export default OurClients;
