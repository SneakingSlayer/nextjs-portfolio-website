export interface Work {
  company: string;
  title: string;
  img: string | null;
  duration: {
    start: number;
    end: number;
  };
  stack: Array<string>;
  responsiblities: Array<string>;
}
