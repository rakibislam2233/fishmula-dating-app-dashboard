import { useCallback, useRef, useState } from "react";
import { Upload, X } from "lucide-react";

const OnboardingImage = () => {
  const [onboardingImages, setOnboardingImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  // Handle file validation
  const validateFiles = useCallback((files) => {
    const validFileExtensions = ["image/jpeg", "image/png"];
    const maxSize = 10 * 1024 * 1024; // 10MB

    return Array.from(files).filter((file) => {
      if (!validFileExtensions.includes(file.type)) {
        alert(`${file.name} is not a valid image (JPG/PNG only)`);
        return false;
      }
      if (file.size > maxSize) {
        alert(`${file.name} exceeds 10MB size limit`);
        return false;
      }
      return true;
    });
  }, []);

  // Process valid files
  const processFiles = useCallback(
    async (files) => {
      const validFiles = validateFiles(files);
      if (validFiles.length === 0) return;

      setIsUploading(true);

      // Simulate upload process
      for (const file of validFiles) {
        try {
          // Create preview URL
          const imageUrl = URL.createObjectURL(file);
          const newImage = {
            id: Date.now() + Math.random(),
            imageUrl: imageUrl,
          };

          setOnboardingImages((prev) => [...prev, newImage]);

          // Simulate API call delay
          await new Promise((resolve) => setTimeout(resolve, 1000));
        } catch (error) {
          console.error("Upload failed:", error);
        }
      }

      setIsUploading(false);
    },
    [validateFiles]
  );

  // Handle file input change
  const handleImageUpload = (e) => {
    processFiles(e.target.files);
    e.target.value = "";
  };

  // Handle drag events
  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    processFiles(e.dataTransfer.files);
  };

  // Remove Image
  const handleRemoveImage = (id) => {
    setOnboardingImages((prev) => prev.filter((img) => img.id !== id));
  };

  // Trigger file input
  const handleClickUpload = () => {
    fileInputRef.current?.click();
  };

  const handleCancel = () => {
    console.log("Cancel clicked");
  };

  const handleSaveChanges = () => {
    console.log("Save Changes clicked");
  };

  return (
    <div className="w-full flex items-center justify-center p-4">
      {/* Modal Container */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-6">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-800 mb-2">
            Onboarding Editor
          </h2>
        </div>

        {/* Upload Restriction Text */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">You can upload only 1 media.</p>
        </div>

        {/* Upload Area */}
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-200 mb-6 ${
            isDragging
              ? "border-blue-400 bg-blue-50"
              : "border-gray-300 hover:border-gray-400"
          }`}
          onClick={handleClickUpload}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center mb-4">
              <Upload className="w-5 h-5 text-gray-400" />
            </div>

            <p className="text-gray-600 mb-2">
              Choose a file or drag & drop it here
            </p>
            <p className="text-xs text-gray-500 mb-4">
              jpg, jpeg, png, mp4 formats, up to 50MB
            </p>

            <button
              className="px-4 py-2 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50 transition-colors"
              disabled={isUploading}
            >
              Browse File
            </button>
          </div>

          <input
            type="file"
            accept="image/jpeg,image/png,image/jpg,video/mp4"
            onChange={handleImageUpload}
            className="hidden"
            ref={fileInputRef}
            disabled={isUploading}
          />
        </div>

        {/* Image Preview */}
        {onboardingImages.length > 0 && (
          <>
            {" "}
            <div className="mb-6">
              <div className="relative inline-block">
                <img
                  src={onboardingImages[0].imageUrl}
                  alt="Onboarding preview"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <button
                  onClick={() => handleRemoveImage(onboardingImages[0].id)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={handleCancel}
                className="flex-1 px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveChanges}
                className="flex-1 px-4 py-2 bg-yellow-400 text-gray-800 rounded hover:bg-yellow-500 transition-colors font-medium"
              >
                Save Changes
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OnboardingImage;
