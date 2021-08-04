import DiscoveryIcon from "./DiscoveryIcon";
import EditSquareIcon from "./EditSquareIcon";
import VideoIcon from "./VideoIcon";

export interface StandardIconProps {
  name: string;
  bold: Boolean;
}

const Icon = ({ name, bold }: StandardIconProps) => {
  switch (name) {
    case "discovery":
      return <DiscoveryIcon bold={bold} />;
    case "edit":
      return <EditSquareIcon bold={bold} />;
    case "video":
      return <VideoIcon bold={bold} />;
    default:
      return null;
  }
};

export default Icon;
