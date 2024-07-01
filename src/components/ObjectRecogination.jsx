import React, { useState, useRef, useEffect } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";

const ObjectRecogination = () => {
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(false);
  const imageRef = useRef(null);
  function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setPredictions([]);
    }
  }
  useEffect(
    function () {
      console.log("running");
      if (file && imageRef.current) {
        console.log("uploaded");
        const imageElement = imageRef.current;
        imageElement.src = URL.createObjectURL(file);
        // Loading the modal
        const loadModelAndPredict = async () => {
          setLoading(true);
          const model = await cocoSsd.load();
          const predictions = await model.detect(imageElement);
          setPredictions(predictions);
          setLoading(false);
        };

        loadModelAndPredict();
      }
    },
    [file]
  );
  return (
    <>
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="mb-4 p-2 border rounded-md"
        />
        {file ? (
          <>
            <img
              ref={imageRef}
              alt="Selected"
              className="mt-4 max-w-32 rounded-md shadow-md"
            />
          </>
        ) : (
          <>{null}</>
        )}
        {loading && <p className="mt-4">Loading...</p>}
        {predictions.length > 0 && (
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Predictions:</h2>
            <ul className="list-disc pl-4">
              {predictions.map((prediction, index) => (
                <li key={index} className="mb-1">
                  {prediction.class} - Confidence:{" "}
                  {(prediction.score * 100).toFixed(2)}%
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default ObjectRecogination;
