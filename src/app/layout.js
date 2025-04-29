import { Geist, Geist_Mono } from "next/font/google";
import "../../styles/globals.css"
import Sidebar from "../../components/Sidebar";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <container className="page_container">
          <header>
            <Sidebar />
          </header>
          <div style={{ padding: "10px" }}>
            {children}
          </div>
        </container>
      </body>
    </html>
  );
}
