import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { Layout } from "@/components/index";
import { ThemeProvider } from "next-themes";
import { Cairo } from "next/font/google";
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["200", "300", "500", "800", "900"],
});

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <NextNProgress
        color="#b673f8"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      <main className={cairo.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </ThemeProvider>
  );
}
