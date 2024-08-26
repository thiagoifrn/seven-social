import Link from "next/link";
import Image from "next/image";

const UserInformationCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4">
      <div className="flex items-center justify-between font-medium">
        <span>User Information</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <div className=" flex flex-col gap-4 text-gray-500">
        <div className=" flex items-center gap-2">
          <span className=" text-xl text-black ">Thiago Pereira</span>
          <span className=" text-sm">@thiagopds</span>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, ipsam
          aspernatur incidunt officiis odio vero qui molestiae id veritatis
          nobis. 😉
        </p>
        <div className=" flex items-center gap-2">
          <Image src="/map.png" height={16} width={16} alt="" />
          <span>
            Livin in <b>Natal</b>
          </span>
        </div>
        <div className=" flex items-center gap-2">
          <Image src="/school.png" height={16} width={16} alt="" />
          <span>
            Went to in <b>IFRN</b>
          </span>
        </div>
        <div className=" flex items-center gap-2">
          <Image src="/work.png" height={16} width={16} alt="" />
          <span>
            Works in <b>Zup It Innovation LTDA</b>
          </span>
        </div>
        <div className=" flex items-center gap-2 justify-between ">
          <div className="flex items-center justify-center gap-2">
            <Image src="/link.png" height={16} width={16} alt="" />
            <Link
              href="https://www.instagram.com/thiagopds_dev/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue-500 font-medium"
            >
              thiagopds
            </Link>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Image src="/date.png" height={16} width={16} alt="" />
            <span>Joined August 2024</span>
          </div>
        </div>
        <button className="w-full py-2 bg-blue-500 rounded-md text-white text-xs">
          Follow
        </button>
        <Link href="/" className="text-red-400 self-end text-xs cursor-pointer">
          Block User
        </Link>
      </div>
    </div>
  );
};

export default UserInformationCard;
