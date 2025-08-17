import IconComponent from "./IconComponent";

interface IFileIcon {
  filename: string;
  isOpen?: boolean;
  isFolder?: boolean;
}
export const RenderFileIcon = ({ filename, isOpen, isFolder }: IFileIcon) => {
  const extensionName = filename.split(".").pop();
  const img = "/assets/icons/";
  // filename.includes(".")
  //   ? filename.split(".").pop()
  //   : null;
  
  const extensionPaths: Record<string, string> = {
    html: "html",
    css: "css",
    js: "javascript-map",
    ts: "typescript",
    jsx: "react",
    tsx: "react_ts",
    node_modules: "folder-node",
    defaultFile: "vscode",
    defaultFolder: "folder-default",
  };
  const getIcon = () => {
    if (
      extensionName &&
      Object.prototype.hasOwnProperty.call(extensionPaths, extensionName)
    ) {
      return isFolder
        ? isOpen
          ? `${img}${extensionPaths[extensionName]}-open.svg`
          : `${img}${extensionPaths[extensionName]}.svg`
        : `${img}${extensionPaths[extensionName]}.svg`;
    }
    return isFolder
      ? isOpen
        ? `${img}${extensionPaths["defaultFolder"]}-open.svg`
        : `${img}${extensionPaths["defaultFolder"]}.svg`
      : `${img}${extensionPaths["defaultFile"]}.svg`;
  };

  return <IconComponent icon={getIcon()} />;
};
