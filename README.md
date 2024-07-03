# Object Recognition using COCO-SSD and TensorFlow.js

This project demonstrates the use of the COCO-SSD pre-trained model for object recognition in images. It is built using React and TensorFlow.js.

## Overview

The application allows users to upload an image, and it uses the COCO-SSD model to detect and classify objects within the image. The predictions are displayed along with their confidence scores.

<img src="https://github.com/Akshat2Jain/Object_Detection_CocoSsd_TensorflowJs/assets/101265586/ee55ad78-7fc0-4e86-9012-3075dbbff8a6" alt="Example Image" width="500" height="800" />

## What is COCO-SSD?

COCO-SSD stands for Common Objects in Context - Single Shot MultiBox Detector. It is a pre-trained deep learning model designed for object detection. The model has been trained on the COCO dataset, which contains a wide variety of common objects in everyday scenes.

### Key Features of COCO-SSD:
- **Object Detection**: Identifies the presence and location of objects within an image.
- **Pre-trained**: The model has been trained on a large dataset, enabling it to recognize a wide range of objects with high accuracy.
- **Real-time Performance**: Designed to be efficient, allowing for real-time object detection.

## What is TensorFlow.js?

TensorFlow.js is an open-source library that allows you to define, train, and run machine learning models entirely in the browser using JavaScript. It provides a flexible and powerful platform for building and deploying machine learning models on the web.

### Key Features of TensorFlow.js:
- **Browser-based**: Run machine learning models directly in the browser.
- **Hardware Acceleration**: Utilizes WebGL for GPU-accelerated computations.
- **Flexibility**: Compatible with existing TensorFlow models and can be used to create new models from scratch.

## Project Structure

- **`ObjectRecognition.js`**: Main component that handles image upload, model loading, and displaying predictions.
- **Dependencies**: Includes `@tensorflow/tfjs` and `@tensorflow-models/coco-ssd`.

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone 
   npm i
   npm run dev

## RUN using Docker
```bash
   docker build -t object_detection .
   docker run -d -p 5173:5173 object_detection

## PULL from DockerHub

```bash
   docker pull akshat2jain/object_detection
