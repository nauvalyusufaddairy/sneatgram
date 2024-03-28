"use client";
import { useState } from "react";
import Cropper, { Area } from "react-easy-crop";
import getCroppedImg from "@/lib/image-handling";
import { Button } from "./ui/button";
export const ImageCropper = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [croppedImage, setCroppedImage] = useState<String | null>(null);
  const dogImg =
    "https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000";
  const onCropComplete = (croppedAreaPixels: Area) => {
    console.log("croppedAreaPixels", croppedAreaPixels);
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const showCroppedImage = async () => {
    try {
      const croppedImage = await getCroppedImg(
        dogImg,
        croppedAreaPixels as Area,
        rotation
      );

      setCroppedImage(croppedImage);
      console.log("donee", { croppedImage });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="w-screen h-screen relative">
      <Cropper
        image={dogImg}
        crop={crop}
        rotation={rotation}
        zoom={zoom}
        aspect={4 / 3}
        onCropChange={setCrop}
        onRotationChange={setRotation}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />
      <Button className="absolute " onClick={() => showCroppedImage()}>
        showwww
      </Button>
    </div>
  );
};
