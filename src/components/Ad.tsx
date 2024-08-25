import Image from "next/image";
import Link from "next/link";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-medium">Sponsored Ads</span>
        </div>
        <Image src={"/more.png"} width={16} height={16} alt="" />
      </div>
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src={"/noAvatar.png"}
            fill
            alt=""
            className=" rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col items-start gap-4">
        <div className="flex items-center gap-4 ">
          <Image
            src={"/noAvatar.png"}
            width={24}
            height={24}
            alt=""
            className=" rounded-full w-6 h-6 object-cover"
          />
          <span className="font-medium text-blue-500">BigChef Lounge</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            : size === "lg"
            ? "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima\
            fugiat repudiandae saepe quaerat accusamus cupiditate explicabo sit\
            nostrum doloremque!"
            : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima\
            fugiat repudiandae saepe quaerat accusamus cupiditate explicabo sit\
            nostrum doloremque! Accusamus quod quos eius deleniti non magnam\
            distinctio sequi! A, natus!"}
        </p>
        <button className="w-full py-2 bg-gray-200 rounded-md text-gray-500 text-xs">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Ad;
