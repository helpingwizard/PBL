import Image from "next/image";
import AppBar from "@/components/appbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar />
      
      <div style={{ flex: 1 }}>
        <div className="w-full">
          
          <img
            src="https://www.netsuite.com/portal/assets/img/business-articles/inventory-management/social-essential-guide-to-inventory-planning.jpg"
            alt="Inventory Planning"
            width={2000}
            height={500}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
