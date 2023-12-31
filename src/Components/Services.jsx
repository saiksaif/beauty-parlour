import serviceIcon1 from "../Assets/service-icon-1.svg";
import serviceIcon2 from "../Assets/service-icon-2.svg";
import serviceIcon3 from "../Assets/service-icon-3.svg";
import serviceIcon4 from "../Assets/service-icon-4.svg";
import serviceBg from "../Assets/service-bg.svg";
import serviceImg1 from "../Assets/service-img-1.png";
import serviceImg2 from "../Assets/service-img-2.png";
import serviceImg3 from "../Assets/service-img-3.png";
import serviceImg4 from "../Assets/service-img-4.png";
import serviceImg6 from "../Assets/service-img-6.png";

function Services() {
  const serviceIcon = [
    { name: "Face Treatments", img: serviceIcon1 },
    { name: "Detox Massage", img: serviceIcon2 },
    { name: "Foot Massage", img: serviceIcon3 },
    { name: "Candle Relaxing", img: serviceIcon4 },
  ];

  const serviceList1 = [
    {
      img: serviceImg1,
      heading: "Salt Massage",
      description:
        "Salt massage, also known as salt therapy or halotherapy, is a wellness practice that involves the use of salt, typically.....",
      green: false,
    },
    {
      img: serviceImg2,
      heading: "Body Care",
      description:
        "Body care refers to a comprehensive approach to maintaining the health and well-being of the skin and body. It involves .... ",
      green: true,
    },
    {
      img: serviceImg3,
      heading: "Face Treatment",
      description:
        "Face treatment encompasses a variety of skincare practices and products specifically designed to address and improve .....",
      green: false,
    },
  ];
  const serviceList2 = [
    {
      img: serviceImg4,
      heading: "BlissfulBody Therapies",
      description:
        "Indulge in the blissful experience of BlissfulBody Therapies. Our expert practitioners tailor each massage to your needs,...",
      green: false,
    },
    {
      img: serviceImg1,
      heading: "RejuvaRelax Wellness",
      description:
        "Discover the epitome of relaxation at RejuvaRelax Wellness. Our wellness experts are dedicated to rejuvenating your body and mind .....",
      green: false,
    },
    {
      img: serviceImg6,
      heading: "SootheSphere Massage",
      description:
        "At SootheSphere, our skilled therapists are dedicated to creating a personalized experience tailored to your unique needs....",
      green: false,
    },
  ];

  return (
    <>
      <div id="servicesSection" className="flex flex-col bg-white z-[1]">
        <img
          className="hidden md:block absolute mt-[377px]"
          src={serviceBg}
          alt="_bg"
        />
        <div className="bg-[#785445] flex flex-col md:flex-row gap-16 lg:gap-[200px] justify-center px-4 sm:px-6 md:px-24 py-24">
          {serviceIcon.map((item, index) => (
            <div key={index} className="flex flex-col gap-5 justify-center items-center">
              <img src={item.img} alt="_service" />
              <p className="max-w-[150px] text-center text-white leading-normal fontMont text-[20px]">
                {item.name}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-white pt-40 px-4 sm:px-6 md:px-8 lg:px-24 flex flex-col gap-16 justify-center items-center">
          <div className="flex flex-col gap-8 justify-center items-center z-[1]">
            <div className="flex flex-col gap-5 justify-center items-center">
              <p className="text-[#232323] fontQuicksand text-2xl font-medium leading-normal">
                Services
              </p>
              <p className="text-[#2E4630] text-2xl leading-normal max-w-[679px] fontAbril text-center">
                Take A Deep Breath And Just Enjoy Life
              </p>
            </div>
            <p className="text-[#666] text-lg leading-normal max-w-[743px] fontQuicksand text-center">
              Without making it feel so…. clinical. We believe in having your
              cake and eating it too, with clinically proven treatments,
              licensed and insured aestheticians, ambient lighting, heated beds,
            </p>
          </div>
          <div className="flex flex-col gap-16 justify-center itesm-center">
            <div className="flex flex-col xl:flex-row gap-10 md:gap-5">
              {serviceList1.map((item, index) => (
                <div key={index} className="md:w-[407px] flex flex-col justify-center items-center">
                  <img
                    className="w-[300px] h-[200px] md:w-[407px] md:h-[396px] rounded-md"
                    src={item.img}
                    alt="_service"
                  />
                  <div className="flex flex-col justify-center items-center w-[260px] md:w-[335px] h-[224px] mt-[-60px] md:mt-[-130px]">
                    <div
                      className={`flex flex-col gap-3 justify-center items-center ${
                        item.green ? "bg-[#2E4630]" : "bg-white"
                      } rounded-md px-5 py-6 pb-12`}
                    >
                      <p
                        className={`${
                          item.green ? "text-white" : "text-[#2E4630]"
                        }  fontQuicksand text-[20px] leading-normal`}
                      >
                        {item.heading}
                      </p>
                      <p
                        className={`${
                          item.green ? "text-white" : "text-[#666]"
                        } fontQuicksand text-base leading-normal text-center`}
                      >
                        {item.description}
                      </p>
                    </div>
                    <button
                      onClick={() => console.log("Read Now Clicked!")}
                      className={`w-fit flex ${
                        item.green ? "text-[#2E4630]" : "text-white"
                      } text-lg font-quicksand leading-normal ${
                        item.green ? "bg-white" : "bg-[#2E4630]"
                      } rounded-tl-[30px] rounded-br-[30px] py-4 px-6 mt-[-34px] hover:shadow-lg hover:font-bold`}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col xl:flex-row gap-10 md:gap-5">
              {serviceList2.map((item, index) => (
                <div key={index} className="md:w-[407px] flex flex-col justify-center items-center">
                  <img
                    className="w-[300px] h-[200px] md:w-[407px] md:h-[396px] rounded-md"
                    src={item.img}
                    alt="_service"
                  />
                  <div className="flex flex-col justify-center items-center w-[260px] md:w-[335px] h-[224px] mt-[-60px] md:mt-[-130px]">
                    <div className="flex flex-col gap-3 justify-center items-center bg-white rounded-md px-5 py-6 pb-12">
                      <p className="text-[#2E4630] fontQuicksand text-[20px] leading-normal">
                        {item.heading}
                      </p>
                      <p className="text-[#666] fontQuicksand text-base leading-normal text-center">
                        {item.description}
                      </p>
                    </div>
                    <button onClick={() => console.log("Read Now Clicked!")} className="hover:shadow-lg hover:font-bold w-fit flex text-white text-lg font-quicksand leading-normal bg-[#2E4630] rounded-tl-[30px] rounded-br-[30px] py-4 px-6 mt-[-34px]">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
