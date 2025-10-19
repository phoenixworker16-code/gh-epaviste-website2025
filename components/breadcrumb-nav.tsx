// components/breadcrumb-nav.tsx

import React from 'react';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbNavProps {
  items: { label: string; href?: string }[];
}

export const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="p-4 bg-gray-50 rounded-lg shadow-sm">
      <ol className="flex items-center space-x-2 text-sm text-gray-500">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
            )}
            {item.href ? (
              <a href={item.href} className="hover:text-gray-700 transition-colors">
                {item.label}
              </a>
            ) : (
              <span className="font-medium text-gray-700">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};