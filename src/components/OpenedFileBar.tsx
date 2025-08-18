import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'
import { RenderFileIcon } from './RenderFileIcon'

export const OpenedFileBar = () => {
    const state = useSelector((state: RootState) => state.fileTree.openedFiles)
  return (
    <div className='flex gap-4 h-4 my-2'>{state.map((file) => 
    <div key={file.name} className='flex gap-0.5 items-center h-full p-2'>
         <RenderFileIcon filename={file.name} isOpen={true} isFolder={file.isFolder} />
        <div>{file.name}</div>
        </div>
    ) }</div>
  )
}
