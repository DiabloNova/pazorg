import type { Metadata } from "next"
import ImportFromRussiaClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Import from Russia - Pazirik",
  description: "Streamlined import services for Russian products and commodities",
}

export default function ImportFromRussiaPage() {
  return <ImportFromRussiaClientPage />
}
