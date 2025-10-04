import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, MousePointer, Eye, BarChart3, Target } from 'lucide-react';

export const SEOResults = () => {
  const metrics = [
    {
      label: 'Total Clicks',
      value: '25.9K',
      icon: MousePointer,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20'
    },
    {
      label: 'Total Impressions',
      value: '1.43M',
      icon: Eye,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20'
    },
    {
      label: 'Average CTR',
      value: '1.8%',
      icon: BarChart3,
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-950/20'
    },
    {
      label: 'Average Position',
      value: '8.8',
      icon: Target,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-950/20'
    }
  ];

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="text-center px-4">
        <h3 className="text-xl md:text-3xl font-bold text-foreground mb-2 md:mb-4">
          SEO Results
        </h3>
        <p className="text-muted-foreground text-sm md:text-lg">
          Masrschools website performance achieved within 3 months of publishing
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        {metrics.map((metric, index) => (
          <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border/50">
            <CardContent className="p-4 md:p-6 text-center">
              <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full ${metric.bgColor} flex items-center justify-center mx-auto mb-3 md:mb-4`}>
                <metric.icon className={`w-6 h-6 md:w-8 md:h-8 ${metric.color}`} />
              </div>
              <div className={`text-2xl md:text-3xl font-bold ${metric.color} mb-1 md:mb-2`}>
                {metric.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground font-medium">
                {metric.label}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="relative">
        <Card className="overflow-hidden border-border/50">
          <CardContent className="p-0">
            <div className="relative">
              <img 
                src="/lovable-uploads/masrschools-dashboard-latest.png"
                alt="Masrschools Google Search Console Performance Dashboard showing 3-month growth"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-4 md:mt-6 text-center">
          <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400 mb-2">
            <TrendingUp className="w-5 h-5" />
            <span className="font-semibold text-sm md:text-base">Significant Growth Achieved</span>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground max-w-2xl mx-auto">
            Comprehensive SEO optimization resulted in substantial organic traffic growth, 
            improved search rankings, and enhanced online visibility for Masrschools platform
          </p>
        </div>
      </div>
    </div>
  );
};