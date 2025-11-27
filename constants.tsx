import { 
  Factory, 
  Settings, 
  Star, 
  FlaskConical, 
  ClipboardList, 
  Anvil, 
  Rocket, 
  Cpu, 
  Microscope 
} from "lucide-react";
import { FeatureItem, IndustryItem, NavItem, ProductParam } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "КАТАЛОГ", href: "#catalog" },
  { label: "РЕШЕНИЯ", href: "#solutions" },
  { label: "СЕРВИС", href: "#service" },
  { label: "О НАС", href: "#about" },
  { label: "КОНТАКТЫ", href: "#contact" },
];

export const FEATURES: FeatureItem[] = [
  {
    id: "production",
    title: "СОБСТВЕННОЕ ПРОИЗВОДСТВО",
    description: "Полный цикл от проектирования до пуско-наладки. Контроль качества на каждом этапе.",
    icon: Factory
  },
  {
    id: "solutions",
    title: "ИНДИВИДУАЛЬНЫЕ РЕШЕНИЯ",
    description: "Адаптация под ваши техпроцессы. Спецпроекты любой сложности.",
    icon: Settings
  },
  {
    id: "expertise",
    title: "ЭКСПЕРТНОСТЬ",
    description: "Работаем с ведущими предприятиями отрасли. Более 300 успешных проектов.",
    icon: Star
  }
];

export const INDUSTRIES: IndustryItem[] = [
  { id: "ceramics", title: "Керамическая промышленность", icon: FlaskConical },
  { id: "chemical", title: "Химическая промышленность", icon: ClipboardList },
  { id: "metal", title: "Металлургия", icon: Anvil },
  { id: "aerospace", title: "Авиакосмическая отрасль", icon: Rocket },
  { id: "electro", title: "Электротехника", icon: Cpu },
  { id: "lab", title: "Лаборатории и НИИ", icon: Microscope },
];

export const PRODUCTS: ProductParam[] = [
  { 
    id: "lab-furnace", 
    title: "ЛАБОРАТОРНЫЕ ПЕЧИ", 
    image: "https://picsum.photos/seed/furnace1/800/600",
    colSpan: "md:col-span-1"
  },
  { 
    id: "service", 
    title: "СЕРВИСНОЕ ОБСЛУЖИВАНИЕ", 
    image: "https://picsum.photos/seed/tech/800/600",
    colSpan: "md:col-span-1"
  },
  { 
    id: "industrial", 
    title: "ПРОМЫШЛЕННЫЕ ПЕЧИ", 
    image: "https://picsum.photos/seed/factory/800/600",
    colSpan: "md:col-span-1"
  },
  { 
    id: "tunnel", 
    title: "ТУННЕЛЬНЫЕ ПЕЧИ", 
    image: "https://picsum.photos/seed/tunnel/800/600",
    colSpan: "md:col-span-1"
  },
  { 
    id: "hightemp", 
    title: "ВЫСОКОТЕМПЕРАТУРНЫЕ ПЕЧИ", 
    image: "https://picsum.photos/seed/heat/800/600",
    colSpan: "md:col-span-1"
  }
];