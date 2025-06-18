import ImageCard from "@/components/common/ImageCard";
import { ImageProps } from "next/image";
import { useState } from "react";

const Home: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [generatedImages, setGeneratedImages] = useState<ImageProps[]>([]);

  const handleGenerateImage = async () => {
    console.log("Generating Images");
  };

  return (
    <div className="flex flex-col items-center min-h-full bg-gray-100 shadow-2xl p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl  font-bold mb-2">Image Generation App</h1>
        <p className="text-lg text-gray-700 mb-4">
          Generate stunning images based on your prompts!
        </p>

        <div className="w-full max-w-md">
          <input
            type="text"
            name="prompt"
            placeholder="Enter your prompt here..."
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            value={prompt}
          />
          <button
            onClick={handleGenerateImage}
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          >
            {loading ? "Generating ..." : "Generate Image"}
          </button>
        </div>
      </div>
      {imageUrl && (
        <ImageCard
          imageUrl={imageUrl}
          prompt={prompt}
          width="20px"
          height="20px"
          action={() => setImageUrl(imageUrl)}
        />
      )}
    </div>
  );
};

export default Home;
