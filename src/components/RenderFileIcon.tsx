interface IFileIcon {
    filename: string;
}
export const RenderFileIcon = ({filename} : IFileIcon) => {
   const extensionName = filename.includes(".") ? filename.split('.').pop(): null ;
  return (
    <div>{extensionName}</div>
  )
}
