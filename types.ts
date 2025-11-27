import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  icon: LucideIcon;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProductParam {
  id: string;
  title: string;
  image: string;
  colSpan?: string;
}