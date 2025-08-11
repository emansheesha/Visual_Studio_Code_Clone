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
                        },
                        {
                            name: "react1.ts",
                            isFolder: false
                        }
                    ]
                },
                {
                    name: "react",
                    isFolder: false
                }
            ]
        },
        {
            name: "index.html",
            isFolder: false,
        },
        {
            name: "src",
            isFolder: true,
        }
    ]
}