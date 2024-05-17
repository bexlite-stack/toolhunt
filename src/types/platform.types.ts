export interface ITool {
  id: string;
  name: string;
  description: string;
  url: string;
  image: string;
  category: "free" | "freemium" | "premium" | "open-source";
  visit: number;
  verified: number;
  public: number;
}
