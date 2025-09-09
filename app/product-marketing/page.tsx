import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Product Marketing in Russia - Pazirik",
  description: "Strategic product marketing services for the Russian market",
}

export default function ProductMarketingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Product Marketing in Russia</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Launch and promote your products successfully in the Russian market with our targeted marketing strategies
              and local expertise.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Market Research</h3>
                <p className="text-muted-foreground mb-4">
                  Deep insights into Russian consumer behavior and market dynamics.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Consumer preference analysis</li>
                  <li>• Competitive landscape mapping</li>
                  <li>• Price sensitivity studies</li>
                  <li>• Cultural adaptation requirements</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Marketing Strategy</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive marketing plans tailored for Russian audiences.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Multi-channel campaign development</li>
                  <li>• Digital marketing optimization</li>
                  <li>• Traditional media planning</li>
                  <li>• Influencer partnership strategies</li>
                </ul>
              </div>
            </div>

            <div className="bg-secondary/10 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold mb-6">Marketing Channels</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Digital Marketing</h4>
                    <p className="text-muted-foreground">
                      Yandex advertising, VKontakte campaigns, and Russian social media platforms.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Content Localization</h4>
                    <p className="text-muted-foreground">
                      Professional translation and cultural adaptation of marketing materials.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Performance Analytics</h4>
                    <p className="text-muted-foreground">
                      Real-time campaign monitoring and optimization for maximum ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
