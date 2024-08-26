import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Image from "next/image";

const ProfilePage = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
                fill
                className="object-cover rounded-md"
              />
              <Image
                src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
                width={128}
                height={128}
                className="rounded-full object-cover w-32 h-32 absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white z-10"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">Thiago Pereira</h1>
            <div className="flex items-center gap-16 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-semibold text-md">142</span>
                <span className="text-xs">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-semibold text-md">1.2K</span>
                <span className="text-xs">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-semibold text-md">1.4K</span>
                <span className="text-xs">Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="teste" />
      </div>
    </div>
  );
};

export default ProfilePage;
