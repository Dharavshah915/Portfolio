import SocialButtons from "@/components/Layout/Sider/SocialButtons.js";
import RouteButtons from "@/components/Layout/Sider/RouteButtons.js";
import AvatarBox from "@/components/Layout/Sider/AvatarBox.js";

const Sider = () => {

  return (
    <div
      className="fixed left-0 w-[275px] h-screen bg-slate p-4 py-10 overflow-y-auto
      text-gray-500 shrink-0 font-light"
    >
      <AvatarBox />

      <RouteButtons />

      <SocialButtons />
    </div>
  )
};

export default Sider;
