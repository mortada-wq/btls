import { Card } from './ui/card';

export function FeatureCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Tall Card */}
      <Card className="bg-white/30 backdrop-blur-sm border-white/60 rounded-3xl p-8 min-h-[300px] flex items-center justify-center hover:bg-white/40 transition-colors">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-3xl">🎯</span>
          </div>
          <h3 className="text-slate-900 text-lg mb-2">Direct Communication</h3>
          <p className="text-slate-600 text-sm">
            Your products speak directly to your customers
          </p>
        </div>
      </Card>

      {/* Two Stacked Cards */}
      <div className="space-y-6">
        <Card className="bg-white/30 backdrop-blur-sm border-white/60 rounded-3xl p-6 hover:bg-white/40 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">✨</span>
            </div>
            <div>
              <h3 className="text-slate-900">Authentic Voice</h3>
              <p className="text-slate-600 text-sm">No intermediaries needed</p>
            </div>
          </div>
        </Card>
        <Card className="bg-white/30 backdrop-blur-sm border-white/60 rounded-3xl p-6 hover:bg-white/40 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
            <div>
              <h3 className="text-slate-900">Easy Setup</h3>
              <p className="text-slate-600 text-sm">Get started in minutes</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Tall Card */}
      <Card className="bg-white/30 backdrop-blur-sm border-white/60 rounded-3xl p-8 min-h-[300px] flex items-center justify-center hover:bg-white/40 transition-colors">
        <div className="text-center">
          <div className="w-16 h-16 bg-orange-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-3xl">💬</span>
          </div>
          <h3 className="text-slate-900 text-lg mb-2">Clear Messaging</h3>
          <p className="text-slate-600 text-sm">
            Say exactly what your products are, no confusion
          </p>
        </div>
      </Card>
    </section>
  );
}
