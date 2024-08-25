import Image from "next/image";
import Link from "next/link";

const FriendRequest = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4">
      <div className="flex items-center justify-between font-medium">
        <span>Friend Request</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
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
          <span className="font-semibold">Weverton Costa</span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Image
            width={20}
            height={20}
            src={"/accept.png"}
            alt="Aceitar"
            className="cursor-pointer"
          />
          <Image
            width={20}
            height={20}
            src={"/reject.png"}
            alt="Rejeitar"
            className="cursor-pointer"
          />
        </div>
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
          <span className="font-semibold">Daniel Lima</span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Image
            width={20}
            height={20}
            src={"/accept.png"}
            alt="Aceitar"
            className="cursor-pointer"
          />
          <Image
            width={20}
            height={20}
            src={"/reject.png"}
            alt="Rejeitar"
            className="cursor-pointer"
          />
        </div>
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
          <span className="font-semibold">Rodrigo Saymon</span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Image
            width={20}
            height={20}
            src={"/accept.png"}
            alt="Aceitar"
            className="cursor-pointer"
          />
          <Image
            width={20}
            height={20}
            src={"/reject.png"}
            alt="Rejeitar"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default FriendRequest;
