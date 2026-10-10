import React from 'react';
import { siteConfig } from '../config/site';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="w-full bg-olive text-ivory text-xs py-2 px-4 text-center font-sans tracking-wide border-b border-olive-dark flex items-center justify-center gap-2">
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-sage-light animate-pulse" />
      <span className="font-medium">{siteConfig.announcement}</span>
    </div>
  );
};
