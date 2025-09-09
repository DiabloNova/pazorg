import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Russian Exhibitions - Pazirik",
  description: "Professional exhibition participation services in Russia",
}

export default function RussianExhibitionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Participate in Russian Exhibitions</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Showcase your products and services at premier Russian trade shows and exhibitions with our comprehensive
              participation support.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Exhibition Selection</h3>
                <p className="text-muted-foreground mb-4">
                  Find the right exhibitions that match your industry and target audience.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Industry-specific trade shows</li>
                  <li>• B2B networking events</li>
                  <li>• Government-sponsored exhibitions</li>
                  <li>• Regional and national shows</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Full-Service Support</h3>
                <p className="text-muted-foreground mb-4">Complete exhibition management from planning to execution.</p>
                <ul className="space-y-2 text-sm">
                  <li>• Booth design and setup</li>
                  <li>• Marketing material translation</li>
                  <li>• Staff training and support</li>
                  <li>• Lead generation strategies</li>
                </ul>
              </div>
            </div>

            <div className="bg-secondary/10 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold mb-6">Exhibition Services</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🏢</div>
                  <h4 className="font-semibold mb-2">Booth Management</h4>
                  <p className="text-sm text-muted-foreground">
                    Professional booth design, setup, and management services.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🤝</div>
                  <h4 className="font-semibold mb-2">Business Matching</h4>
                  <p className="text-sm text-muted-foreground">
                    Connect with potential partners, distributors, and customers.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <h4 className="font-semibold mb-2">ROI Analysis</h4>
                  <p className="text-sm text-muted-foreground">
                    Detailed post-exhibition analysis and follow-up strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
