"use client";
import { useState } from "react";
import OpenAI from "openai";

export default function Home() {
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(
    null
  );
  const [loading, setLoading] = useState(false);

  const handleGenerateResponse = async (file: File) => {
    const openai = new OpenAI({
      apiKey: process.env.OPEN_AI_API_KEY,
      dangerouslyAllowBrowser: true,
    });

    setLoading(true);
    try {
      const pngFile = await convertToPng(file);

      // Get image size
      const img = new Image();
      const imageLoadPromise = new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = (err) => reject(err);
      });
      img.src = URL.createObjectURL(pngFile);
      await imageLoadPromise;


      const response = await openai.images.edit({
        model: "gpt-image-1",
        prompt:
          "Transform this image to look like an Italian mob from the 90s, with a vintage aesthetic. The image should have a gritty, urban feel, reminiscent of classic gangster movies from that era. People on image should have slicked back hair cuban cigar and gold chain",
        image: pngFile,
        n: 1,
        quality: "low",
        size: "1024x1024",
      });

      console.log(response);

      // Decode Base64 image and set it as the source for the <img> tag
      const base64Image = response.data?.[0]?.b64_json;
      if (base64Image) {
        setGeneratedImageUrl(`data:image/png;base64,${base64Image}`);
      } else {
        throw new Error("No image data received");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to generate the image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const convertToPng = (file: File): Promise<File> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext("2d");
          if (!ctx) {
            return reject(new Error("Failed to get canvas context"));
          }
          ctx.drawImage(img, 0, 0);
          canvas.toBlob(
            (blob) => {
              if (!blob) {
                return reject(new Error("Failed to convert image to PNG"));
              }
              const pngFile = new File([blob], "converted-image.png", {
                type: "image/png",
              });
              resolve(pngFile);
            },
            "image/png",
            1.0
          );
        };
        img.onerror = (err) => reject(err);
        img.src = event.target?.result as string;
      };
      reader.onerror = (err) => reject(err);
      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleGenerateResponse(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] w-[100vw]">
      <input
        type="file"
        onChange={handleFileChange}
        className="bg-neutral-500 rounded-2xl h-[30px] cursor-pointer mb-4"
      />
      <p className="text-gray-700 mb-4">
        Upload an image to modify it with OpenAI.
      </p>
      {loading && <p className="text-gray-700">Generating image...</p>}
      {generatedImageUrl && (
        <div className="mt-4">
          <p className="text-gray-700 mb-2">Generated Image:</p>
          <img
            src={generatedImageUrl}
            alt="Generated Italian 90s Mob"
            className="rounded-lg shadow-lg w-[300px] h-[300px]"
          />
        </div>
      )}
    </div>
  );
}