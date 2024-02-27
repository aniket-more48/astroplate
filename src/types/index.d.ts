export type Feature = {
  button: button;
  image: string;
  bulletpoints: string[];
  content: string;
  title: string;
};

export type Button = {
  enable: boolean;
  label: string;
  link: string;
};

export type accordion = {
  enable: boolean;
  label: string;
  link: string;
};

export type Service = {
  button: button;
  image: string;
  bulletpoints: string[];
  content: string;
  title: string;
  accordion: accordion;
};
