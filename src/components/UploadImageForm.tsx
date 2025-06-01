
// src/components/UploadImageForm.tsx
import { useState } from 'react';
import { uploadImage } from '../storageService';

const UploadImageForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewUrl(reader.result as string);
      reader.readAsDataURL(selectedFile);
    } else {
      setPreviewUrl(null);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    setError(null);
    try {
      const path = \`images/\${file.name}\`;
      const url = await uploadImage(file, path);
      setDownloadUrl(url);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Subir imagen</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {previewUrl && (
        <div className="my-4">
          <img src={previewUrl} alt="Vista previa" className="w-full max-h-64 object-contain rounded" />
        </div>
      )}
      <button
        onClick={handleUpload}
        disabled={!file || uploading}
        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        {uploading ? 'Subiendo...' : 'Subir imagen'}
      </button>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      {downloadUrl && (
        <p className="text-green-600 mt-4">
          Imagen subida: <a href={downloadUrl} target="_blank" rel="noopener noreferrer" className="underline">ver</a>
        </p>
      )}
    </div>
  );
};

export default UploadImageForm;
