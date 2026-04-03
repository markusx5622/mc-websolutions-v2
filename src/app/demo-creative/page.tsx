"use client";

export default function NanoBananaIframeDemo() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-black">
      {/* Main Iframe */}
      <iframe 
        src="https://nano-banana-tennis.pages.dev/" 
        className="w-full h-full border-0"
        allowFullScreen
        title="Nano Banana Demo"
      />
    </div>
  );
}
