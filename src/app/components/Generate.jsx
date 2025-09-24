
import React from "react";
import {
  FaChalkboardTeacher,
  FaEdit,
  FaImage,
  FaMagic,
  FaMicrophone,
  FaPersonBooth,
  FaVideo,
} from "react-icons/fa";

// Reusable FeatureTile component
const FeatureTile = ({ icon, title, description, gradient }) => (
  <div className="flex items-center justify-between w-full sm:w-[300px]">
    <div className="icons flex items-center gap-3 w-fit">
      <div
        className="w-[42px] h-[42px] min-w-[42px] min-h-[42px] max-w-[42px] max-h-[42px] rounded-[10px] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200"
        style={{ background: gradient }}
      >
        {icon}
      </div>
      <div>
        <h6 className="dark:text-white text-sm">{title}</h6>
        <p className="text-gray-800 dark:text-gray-300 text-xs">{description}</p>
      </div>
    </div>
    <button className="open-btn bg-gray-200 text-xs px-4 py-2 rounded-2xl cursor-pointer hover:bg-gray-300 transition-all">
      Open
    </button>
  </div>
);


const features = [
  {
    icon: <FaImage className="text-white text-2xl" />, title: "Image",
    description: "Generate images with custom styles in Flux and Ideogram.",
    gradient: "linear-gradient(to bottom, #374151 0%, #ffffff 100%)"
  },
  {
    icon: <FaVideo className="text-white text-2xl" />, title: "Video",
    description: "Generate videos with Haifua, Pica, Runway, Luma, and more.",
    gradient: "linear-gradient(to bottom, #faaa00 0%, #faaa00 100%)"
  },
  {
    icon: <FaEdit className="text-white text-2xl" />, title: "Realtime",
    description: "Realtime AI rendering on a canvass. Instant feedback loops.",
    gradient: "linear-gradient(to bottom, #00d2ff 0%, #ffffff 100%)"
  },
  {
    icon: <FaMagic className="text-white text-2xl" />, title: "Enhancer",
    description: "Upscale and enhance images and videos up to 22k.",
    gradient: "linear-gradient(to bottom, #000000 0%, #888888 100%)"
  },
  {
    icon: <FaEdit className="text-white text-2xl" />, title: "Edit",
    description: "Add objects, charge style, or expand photos and generations.",
    gradient: "linear-gradient(to top, #AE91CA 0%, #592A85 60%, #180728 100%)"
  },
  {
    icon: <FaMicrophone className="text-white text-2xl" />, title: "Video Lipsync",
    description: "Lip sync any video to any audio.",
    gradient: "linear-gradient(to top, #BBCA91 0%, #3C878F 60%, #07280F 100%)"
  },
  {
    icon: <FaPersonBooth className="text-white text-2xl" />, title: "Motion Transfer",
    description: "Transfer motion to images and animate characters.",
    gradient: "linear-gradient(to top, #0a0a0a 0%, #0a0a0a 60%, #0a0a0a 100%)"
  },
  {
    icon: <FaChalkboardTeacher className="text-white text-2xl" />, title: "Train",
    description: "Teach Krea to replicate your style, products, or charcacters.",
    gradient: "linear-gradient(to top, #0a0a0a 0%, #0a0a0a 60%, #0a0a0a 100%)"
  },
];

const Generate = () => {
  return (
    <div className="w-full py-4 px-4 sm:px-6 md:px-8">
      <div className="flex items-center justify-between w-full">
        <h5 className="font-bold dark:text-white">Generate</h5>
        <p className="text-blue-600 text-sm">Show all</p>
      </div>
      <div className="mt-4 flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-y-4 gap-x-1 w-full">
        {features.map((feature) => (
          <FeatureTile
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            gradient={feature.gradient}
          />
        ))}
      </div>
    </div>
  );
};

export default Generate;
