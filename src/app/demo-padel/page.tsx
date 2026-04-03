"use client";

export default function PadelProDemo() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-black">
      <iframe 
        src="https://padel-pro.pages.dev/" 
        className="w-full h-full border-0"
        allowFullScreen
        title="Padel Pro Demo"
      />
    </div>
  );
}
