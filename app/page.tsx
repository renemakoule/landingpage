import LandingPage from "@/components/LandingPage";
import { ThemeProvider } from "@/components/ThemeProvider/theme-provider";

export default function Home() {
  return (
    <ThemeProvider>
    <div>
      <LandingPage />
    </div>
    </ThemeProvider>
  );
}
