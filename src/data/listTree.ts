import type { IFile } from "../interfaces";

export const fileTree: IFile = {
  name: "VS Code Clone",
  isFolder: true,
  children: [
    {
      name: "node_modules",
      isFolder: true,
      children: [
        {
          name: "vite",
          isFolder: true,

          children: [
            {
              name: "vite1.tsx",
              isFolder: false,
              content: `export const OpenedFileBar = () => {
                            console.log("state", clickedFileState, state);
                return (
                <div>
                  {state.map((file) => (
                    <div key={file.name}
                onClick={()=>handleClickedFile(file)}>
                      <RenderFileIcon
                        filename={file.name}
                          isOpen={true}
                          isFolder={file.isFolder}
                          />
                        <div>{file.name}</div>

                    
                        </div>
                      ))}
                    </div>
                  );
};`,
            },
            {
              name: "react1.ts",
              isFolder: false,
            },
            {
              name: "react1.txt",
              isFolder: false,
            },
          ],
        },
        {
          name: "react",
          isFolder: false,
          content: "react component file",
        },
      ],
    },
    {
      name: "index.html",
      isFolder: false,
    },
    {
      name: "src",
      isFolder: true,
    },
  ],
};
