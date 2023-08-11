import "./css/globals.css";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <head>
        <title>Florian Pichon: FullStack Developper</title>
        <link rel="icon" href="favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
