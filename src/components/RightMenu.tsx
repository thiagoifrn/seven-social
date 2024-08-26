import Ad from "./Ad";
import Birthdays from "./Birthdays";
import FriendRequest from "./FriendRequest";
import UserInformationCard from "./UserInformationCard";
import UserMidiaCard from "./UserMidiaCard";

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6 ">
      {userId ? (
        <>
          <UserInformationCard userId={userId} />
          <UserMidiaCard userId={userId} />
        </>
      ) : null}
      <FriendRequest />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
