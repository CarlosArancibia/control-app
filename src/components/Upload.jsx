import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export const Upload = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="col-span-3 text-white">
      <div
        {...getRootProps()}
        className={`border border-dashed rounded-lg h-3/4 flex items-center justify-center text-pretty text-center text-xl ${
          isDragActive ? 'bg-[#1E242C]' : ''
        }`}
      >
        <input {...getInputProps()} />

        {isDragActive ? <p>¡Suelta!</p> : <p>Arrastra y suelta aquí tu carpeta</p>}
      </div>
    </div>
  );
};
