export interface createLiFormat {
  createLi(e: string): HTMLLIElement;
  render(e: HTMLLIElement, p: HTMLUListElement): void;
}