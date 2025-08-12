import IconComponent from "./IconComponent";

interface IFileIcon {
  filename: string;
}
export const RenderFileIcon = ({ filename }: IFileIcon) => {
  const extensionName = filename.includes(".")
    ? filename.split(".").pop()
    : null;
  const getIcon = () => {
    switch (extensionName) {
      case "tsx":
        return "/assets/imgs/icons8-visual-studio-code-2019-16.svg";
      case "html":
        return "/vite.svg";
      default:
        return "";
    }
  };
  return <IconComponent icon={getIcon()} />;
};
