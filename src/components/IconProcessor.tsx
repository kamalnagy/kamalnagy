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
  return;
};
export default IconProcessor;