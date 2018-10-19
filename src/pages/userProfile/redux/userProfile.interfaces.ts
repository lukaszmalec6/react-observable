export interface IUserProfileData {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  phoneNumber: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  location: {
    conutry: string;
    city: string;
  };
}