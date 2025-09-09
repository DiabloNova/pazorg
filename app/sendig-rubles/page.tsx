import type { Metadata } from "next"
import SendingRublesClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Sending Rubles to Russia - Pazirik",
  description: "Secure and efficient ruble transfer services to Russia",
}

export default function SendingRublesPage() {
  return <SendingRublesClientPage />
}
