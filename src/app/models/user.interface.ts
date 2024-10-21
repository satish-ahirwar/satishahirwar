export interface User {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  phoneLabel: string;
  url: string;
  summart: string;
  location: {
    address: string;
    map: string;
  };
  profiles: Media[];
}

export interface Media {
  url: string;
  network: string;
  username: string;
}
