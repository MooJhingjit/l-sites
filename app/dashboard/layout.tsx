// import { Layout } from "@dashboard_components/Layout";
import "../globals.css";
import { type Metadata } from "next";
import { Providers } from "@dashboard_components/Providers";
import { ModalProvider } from "./components/providers/modal-provider";

export const metadata: Metadata = {
  title: {
    template: "%s - Dashboard",
    default: "",

  },
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="flex min-h-full bg-white antialiased dark:bg-zinc-900">
        <Providers>
          <div className="w-full">
            {/* <Layout>{children}</Layout> */}
            {children}
          </div>
          <ModalProvider />
        </Providers>
      </body>
    </html>
  );
}
