import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

export default function App() {
  return (
    <div className="w-full h-screen grid grid-rows-2 gap-4">
      <div className="grid grid-cols-2 gap-4 max-w-6xl mx-auto w-full">
        <Card
          name="Iliana"
          title="Software Engineer"
          image="https://images.pexels.com/photos/28828051/pexels-photo-28828051/free-photo-of-artistic-portrait-of-woman-in-motion-outdoors.jpeg"
        />
        <Card
          name="John"
          title="Product Manager"
          image="https://images.pexels.com/photos/29832283/pexels-photo-29832283/free-photo-of-portrait-of-man-holding-a-plant-in-artistic-light.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        />
        <Card
          name="Jane"
          title="Marketing Manager"
          image="https://images.pexels.com/photos/29687850/pexels-photo-29687850/free-photo-of-backlit-woman-in-urban-alley-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        />
        <Card
          name="Juan"
          title="Financial Analyst"
          image="https://images.pexels.com/photos/26732862/pexels-photo-26732862/free-photo-of-man-with-long-hair-standing-in-trench-coat.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        />
      </div>
    </div>
  );
}
