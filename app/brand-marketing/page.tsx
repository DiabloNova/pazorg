import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Brand Marketing - Pazirik",
  description: "Comprehensive brand development and marketing services for Russian market entry",
}

export default function BrandMarketingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Brand Marketing</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Build a strong brand presence in Russia with our comprehensive brand development and marketing services
              tailored for the Russian market.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card p-6 rounded-lg border text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold mb-2">Brand Positioning</h3>
                <p className="text-sm text-muted-foreground">Strategic positioning for Russian market preferences</p>
              </div>
              <div className="bg-card p-6 rounded-lg border text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-lg font-semibold mb-2">Visual Identity</h3>
                <p className="text-sm text-muted-foreground">Culturally adapted design and visual communications</p>
              </div>
              <div className="bg-card p-6 rounded-lg border text-center">
                <div className="text-4xl mb-4">📢</div>
                <h3 className="text-lg font-semibold mb-2">Brand Awareness</h3>
                <p className="text-sm text-muted-foreground">Multi-channel campaigns to build brand recognition</p>
              </div>
            </div>

            <div className="bg-secondary/10 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold mb-6">Brand Development Process</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">Brand Strategy</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Market positioning analysis</li>
                    <li>• Competitive differentiation</li>
                    <li>• Value proposition development</li>
                    <li>• Brand messaging framework</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Brand Execution</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Visual identity design</li>
                    <li>• Marketing collateral creation</li>
                    <li>• Digital presence development</li>
                    <li>• Brand guideline documentation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg border">
              <h3 className="text-2xl font-semibold mb-4">Why Choose Our Brand Marketing Services?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-secondary">Local Market Expertise</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Deep understanding of Russian consumer psychology and cultural nuances.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-secondary">Proven Track Record</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Successfully launched 100+ international brands in the Russian market.
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
