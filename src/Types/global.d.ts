export {};

declare global {
  interface Users {
    id: number | string;
    name: string;
    surname: string;
    email: string;
    phone: string;
    age: string;
  }
}
