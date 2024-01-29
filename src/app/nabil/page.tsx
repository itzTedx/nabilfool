import { YouTubeEmbed } from "@next/third-parties/google";

function NabilPage() {
  return (
    <main>
      <YouTubeEmbed videoid="LR-HtczMM8M" params="controls=0&autoplay=1" />
      <div className="w-screen text-green-500 font-bold text-6xl text-center mt-6 leading-normal">
        Happy Birthday Nabil Khan
      </div>
    </main>
  );
}

export default NabilPage;
