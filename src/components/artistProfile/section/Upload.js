import React from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import * as FaIcons from "react-icons/fa";

export default function Upload() {
  const AudioUploader = () => {
    const toast = (innerHTML) => {
        const el = document.getElementById('toast')
        el.innerHTML = innerHTML
        el.className = 'show'
        setTimeout(() => { el.className = el.className.replace('show', '') }, 3000)
      }
    
      const getUploadParams = ({meta}) => {
        const url = 'https://httpbin.org/post'
    return { url, meta: { fileUrl: `${url}/${encodeURIComponent(meta.name)}` } }
      }
      const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
      }
      const handleChangeStatus = ({ meta, remove }, status) => {
        if (status === 'headers_received') {
          toast(`${meta.name} successfully!`)
          remove()
        } else if (status === 'aborted') {
          toast(`${meta.name}, upload failed...`)
        }
      }
    
      return (
        <React.Fragment>
          <Dropzone
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            maxFiles={1}
            multiple={false}
            accept="audio/*"
            canCancel={false}
            inputContent={(files, extra) => (extra.reject ? 'Audio files only' : 'Drag/Drop Files here')}
            styles={{
              dropzoneActive: { borderColor: 'green' },
            }}
          />

<div id="toast" className="invisible">Upload</div>
        </React.Fragment>
      )
  };

  return (
    <div className="upload flex w-8/12 h-64 flex-col">
      <AudioUploader />
    </div>
  );
}
