import Image from "next/image";
import Link from "next/link";

const Birthdays = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4">
      <div className="flex items-center justify-between font-medium">
        <span>Birthdays</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-4">
          <Image
            width={40}
            height={40}
            src={"/noAvatar.png"}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">Juliana Barbosa</span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <button className="bg-blue-500 rounded-md px-2 py-1 text-white text-xs">
            Celebrate
          </button>
        </div>
      </div>
      <div className="p-4 bg-slate-100 rounded-lg flex gap-4 justify-center items-center">
        <Image
          width={24}
          height={24}
          src={"/gift.png"}
          alt=""
          className="w-10 h-10 rounded-full object-cover"
        />
        <Link href="/" className="flex flex-col gap-1 text-xs">
          <span className="font-semibold text-gray-700">
            Upcoming Birthdays
          </span>
          <span className=" text-xxs text-gray-500">
            See other 16 have upcoming bithdays
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Birthdays;
