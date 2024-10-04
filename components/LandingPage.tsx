import Image from "next/image";
import { LayoutGridDemo } from "./LayoutGridDemo";
import Link from "next/link";
import Navbar from "./Navbar";
import CanvasCursor from "./CursorCanvas/canvas-cursor";
import SparklesText from "./magicui/sparkles-text";
import SparklesText1 from "./magicui/sparkles-text1";
import { ThemeProvider } from "./ThemeProvider/theme-provider";
import WordRotate from "./ui/word-rotate";
import { RainbowButton } from "./ui/rainbow-button";
import { RainbowButton1 } from "./ui/rainbow-button1";

export default function LandingPage() {
  return (
    <ThemeProvider>
      <div className="w-full h-full mb-48">
        <Navbar />
        <CanvasCursor />
        <div className="p-4 md:p-8 pt-20 md:pt-28 mt-10">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
            <div className="lg:w-1/3 lg:pr-8 mb-8 lg:mb-0 space-y-4">
              <WordRotate
                className="text-5xl bg-gradient-to-r from-[#cf61fb] via-[#1fc0f1] to-[#24f7f7] bg-clip-text px-1 py-2 font-bold leading-none tracking-tighter text-transparent dark:from-white dark:to-white/40"
                words={[
                  "WELCOME",
                  "BIENVENUE",
                  "ようこそ",
                  "歡迎",
                  "WILLKOMMEN",
                  "أهلًا وسهلًا",
                  "BENVENUTO",
                  "BIENVENIDO",
                ]}
              />
              <SparklesText text="To Minato.ai at Home and enjoy our technology." />
              <SparklesText1 text="“Thanks to Minato AI, optimize and promote your products and services while boosting your revenue effectively.”" />
              <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0 font-semibold"></p>
              <div className="space-x-4">
                <RainbowButton>Get start</RainbowButton>
                <RainbowButton1>Join now</RainbowButton1>
              </div>
            </div>

            <div className="lg:w-7/12 z-10">
              <LayoutGridDemo />
            </div>

            {/* Shadow effect */}
            <div className="shadow_1"></div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
