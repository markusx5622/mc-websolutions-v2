"use client";

export default function SastreVlcDemo() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-black">
      <iframe 
        src="https://sastre-vlc.pages.dev/" 
        className="w-full h-full border-0"
        allowFullScreen
        title="Sastre VLC Demo"
      />
    </div>
  );
}
