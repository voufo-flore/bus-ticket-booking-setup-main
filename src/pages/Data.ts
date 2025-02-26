export interface Bus {
    id: number;
    name: string;
    image: string;
    departure: string;
    arrival: string;
    route: string;
    price: number;
    rating: number;
    busType: string;
    seatsAvailable: number;
  }
  
  export const dummyBuses: Bus[] = [
    // Paste all your dummy bus data here
  ];