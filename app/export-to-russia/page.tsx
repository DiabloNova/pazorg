import type { Metadata } from "next"
import ExportToRussiaClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Export to Russia - Pazirik",
  description: "Professional export services and trade facilitation to Russian markets",
}

export default function ExportToRussiaPage() {
  return <ExportToRussiaClientPage />
}
