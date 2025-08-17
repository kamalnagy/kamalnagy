import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { removeBackground, loadImage } from '@/lib/backgroundRemoval';
import { toast } from 'sonner';

const IconProcessor = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedIcons, setProcessedIcons] = useState<{
    gmail?: string;
    whatsapp?: string;
  }>({});
  
  const processIcon = async (iconPath: string, iconName: 'gmail' | 'whatsapp') => {
    try {
      setIsProcessing(true);
      toast.info(`Processing ${iconName} icon...`);
      
      // Fetch the image
      const response = await fetch(iconPath);
      const blob = await response.blob();
      
      // Load image
      const imageElement = await loadImage(blob);
      
      // Remove background
      const processedBlob = await removeBackground(imageElement);
      
      // Create object URL for the processed image
      const processedUrl = URL.createObjectURL(processedBlob);
      
      setProcessedIcons(prev => ({
        ...prev,
        [iconName]: processedUrl
      }));
      
      toast.success(`${iconName} icon processed successfully!`);
    } catch (error) {
      console.error(`Error processing ${iconName} icon:`, error);
      toast.error(`Failed to process ${iconName} icon`);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed top-4 left-4 z-50 bg-background p-4 rounded-lg border shadow-lg">
      <h3 className="text-sm font-semibold mb-2">Icon Processor</h3>
      <div className="space-y-2">
        <Button
          size="sm"
          onClick={() => processIcon('/src/assets/gmail-icon.png', 'gmail')}
          disabled={isProcessing}
        >
          Process Gmail Icon
        </Button>
        <Button
          size="sm"
          onClick={() => processIcon('/src/assets/whatsapp-icon.png', 'whatsapp')}
          disabled={isProcessing}
        >
          Process WhatsApp Icon
        </Button>
      </div>
      
      {processedIcons.gmail && (
        <div className="mt-4">
          <p className="text-xs mb-1">Gmail (no background):</p>
          <img src={processedIcons.gmail} alt="Gmail processed" className="w-8 h-8" />
        </div>
      )}
      
      {processedIcons.whatsapp && (
        <div className="mt-2">
          <p className="text-xs mb-1">WhatsApp (no background):</p>
          <img src={processedIcons.whatsapp} alt="WhatsApp processed" className="w-8 h-8" />
        </div>
      )}
    </div>
  );
};

export default IconProcessor;