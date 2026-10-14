export const site = {
  name: "Panajoth Dávid",
  wordmark: "Panajoth",
  email: "david.panajoth@gmail.com",
  location: "China",
  title: "Panajoth Dávid — Model & Production",
  description:
    "Panajoth Dávid is a model and producer based in China. Campaigns, commercial film, and marketing for global brands — with a crew on set.",
};

export type Frame = {
  src: string;
  alt: string;
  title: string;
  meta: string;
  width: number;
  height: number;
  focus: string;
};

export const frames: Frame[] = [
  {
    src: "/photos/1.jpg",
    alt: "Panajoth Dávid standing in smoke inside an industrial set",
    title: "Smoke",
    meta: "Editorial",
    width: 1366,
    height: 2048,
    focus: "object-[center_28%]",
  },
  {
    src: "/photos/2.jpg",
    alt: "Black and white portrait of Panajoth Dávid seated indoors",
    title: "Interior",
    meta: "Portrait",
    width: 1638,
    height: 2048,
    focus: "object-[center_18%]",
  },
  {
    src: "/photos/4.jpg",
    alt: "Panajoth Dávid in a motion study with one knee raised",
    title: "Motion",
    meta: "Study",
    width: 1362,
    height: 2048,
    focus: "object-center",
  },
  {
    src: "/photos/5.jpg",
    alt: "Panajoth Dávid, front studio portrait",
    title: "Front",
    meta: "Portrait",
    width: 1600,
    height: 2000,
    focus: "object-[center_12%]",
  },
  {
    src: "/photos/3.jpg",
    alt: "Panajoth Dávid, full-length studio frame",
    title: "Studio",
    meta: "Form",
    width: 1366,
    height: 2048,
    focus: "object-top",
  },
];

export const nav = [
  { href: "/#frames", label: "Frames" },
  { href: "/#practice", label: "Practice" },
  { href: "/#book", label: "Book" },
];

export const ticker = [
  "Talent",
  "Commercial film",
  "Brand campaigns",
  "China",
  "Crew",
  "Stills",
  "Marketing",
];

export const facts = [
  { label: "Base", value: "China" },
  { label: "On set", value: "A working crew" },
  { label: "For", value: "Global brands" },
];

export const services = [
  {
    index: "01",
    title: "Talent",
    text: "On camera for fashion, fitness, and lifestyle. Stills, and the person in the film.",
    frame: 3,
  },
  {
    index: "02",
    title: "Commercial",
    text: "Brand films shot with a crew. The set, the take, and a cut that can run.",
    frame: 0,
  },
  {
    index: "03",
    title: "Marketing",
    text: "Campaigns for global brands in the Chinese market — the picture, the film, and the plan around them.",
    frame: 2,
  },
];
