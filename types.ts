import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface IndustryItem {
  icon: React.ReactNode;
  title: string;
}