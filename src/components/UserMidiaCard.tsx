import Link from "next/link";
import Image from "next/image";
const UserMidiaCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4">
      <div className="flex items-center justify-between font-medium">
        <span>User Midia</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <div className=" flex gap-4 justify-between flex-wrap">
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/26691734/pexels-photo-26691734/free-photo-of-hipnotizantes-aguas-vivas-dancam-em-aguas-profundas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/26690031/pexels-photo-26690031/free-photo-of-natureza-passaro-ave-passarinho.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/26691734/pexels-photo-26691734/free-photo-of-hipnotizantes-aguas-vivas-dancam-em-aguas-profundas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/26690031/pexels-photo-26690031/free-photo-of-natureza-passaro-ave-passarinho.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/26691734/pexels-photo-26691734/free-photo-of-hipnotizantes-aguas-vivas-dancam-em-aguas-profundas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/26690031/pexels-photo-26690031/free-photo-of-natureza-passaro-ave-passarinho.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/26691734/pexels-photo-26691734/free-photo-of-hipnotizantes-aguas-vivas-dancam-em-aguas-profundas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/26690031/pexels-photo-26690031/free-photo-of-natureza-passaro-ave-passarinho.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default UserMidiaCard;
