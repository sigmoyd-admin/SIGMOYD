import Section from "./Section";
import Heading from "./Heading";
import { check, service1, service2, service3 } from "../assets";
import { brainmasterServicesIcons, brainmastertServices } from "../constants";
import Generating from "./Generating";
import { ScrollParallax } from "react-just-parallax";
import {
  Gradient,
  PhotoChatMessage,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Powering Automation & Innovation"
          text="Make streamlines processes and drives innovation with automation."
        />

        <div className="relative">
          {/* Service 1 */}
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                src={service1}
                alt="Smartest AI"
                width={800}
                height={730}
              />
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h3 className="h4 mb-4">Operations</h3>
              <p className="body-2 mb-[3rem] text-n-3">
              Connect teams and tools to streamline operations across siloed systems.
              </p>
              <ul className="body-2">
                {brainmastertServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} alt="check" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <ScrollParallax isAbsolutelyPositioned>
              <Generating className="absolute left-4 right-4 bottom-6 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-24 lg:-translate-x-1/2" />
            </ScrollParallax>
          </div>

          {/* Service 2 */}
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  alt="robot image"
                  width={630}
                  height={750}
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h3 className="h4 mb-4">Security and Governance</h3>
                <p className="body-2 mb-[3rem] text-n-3">
                Make secures your data with GDPR, SOC2 Type 1 compliance, encryption, and SSO.
                </p>
              </div>
              <PhotoChatMessage />
            </div>
            {/* Service 3 */}
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h3 className="h4 mb-4">Enterprise-Grade Automation</h3>
                <p className="body-2 mb-[2rem] text-n-3">
                Our Enterprise plan offers low-code automation, enhanced security, and 24/7 support.
                </p>
                <ul className="flex items-center justify-between">
                  {brainmasterServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center hover:bg-n-5 ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  alt="Scary robot like Cyrax"
                  width={520}
                  height={400}
                  className="w-full h-full object-cover"
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
