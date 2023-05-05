export interface TrucksAndCars {
  year?: string;
  make?: string;
  model?: string;
  mileage?: string;
  color?: string;
  condition?: string;
  price?: string;
  description?: string;
  location?: string;
  contact?: string;
  // Add the rest of the fields as needed
}

export interface Motorcycles {
  year?: string;
  make?: string;
  model?: string;
  mileage?: string;
  color?: string;
  condition?: string;
  price?: string;
  description?: string;
  location?: string;
  contact?: string;
}

export interface Boats {
  year?: string;
  make?: string;
  model?: string;
  color?: string;
  type?: string;
  condition?: string;
  price?: string;
  description?: string;
  location?: string;
  contact?: string;
}

export interface Books {
  title?: string;
  author?: string;
  genre?: string;
  condition?: string;
  isbnAsin?: string;
  price?: string;
  description?: string;
  location?: string;
  contact?: string;
}

export interface Furniture {
  furnitureType?: string;
  material?: string;
  style?: string;
  condition?: string;
  price?: string;
  description?: string;
  location?: string;
  contact?: string;
}

export interface Apartments {
  bedrooms?: number;
  bathrooms?: number;
  squareFootage?: string;
  rent?: string;
  leaseDuration?: string;
  petPolicy?: string;
  amenities?: string;
  description?: string;
  location?: string;
  contact?: string;
}

export interface RentalHouse {
  bedrooms?: number;
  bathrooms?: number;
  squareFootage?: string;
  rent?: string;
  leaseDuration?: string;
  petPolicy?: string;
  amenities?: string;
  description?: string;
  location?: string;
  contact?: string;
}

export interface PurchaseHouse {
  bedrooms?: number;
  bathrooms?: number;
  squareFootage?: string;
  askingPrice?: string;
  propertyType?: string;
  lotSize?: string;
  amenities?: string;
  description?: string;
  location?: string;
  contact?: string;
}

export interface RoommateAds {
  roommatesWanted?: number;
  rent?: string;
  utilitiesIncluded?: string;
  leaseDuration?: string;
  petPolicy?: string;
  description?: string;
  location?: string;
  contact?: string;
}

export interface TownHouse {
  bedrooms?: number;
  bathrooms?: number;
  squareFootage?: string;
  askingPrice?: string;
  propertyType?: string;
  lotSize?: string;
  amenities?: string;
  description?: string;
  location?: string;
  contact?: string;
}

export interface Babysitting {
  ageRangeOfChildren?: string;
  experience?: string;
  availability?: string;
  rate?: string;
  location?: string;
  aboutMe?: string;
  cookingExperience?: string;
  contact?: string;
}

export interface DogWalking {
  breedOfDog?: string;
  location?: string;
  experience?: string;
  age?: string;
  aboutMe?: string;
  availability?: string;
  rate?: string;
  contact?: string;
}

export interface ArtCommissions {
  typeOfArt?: string;
  medium?: string;
  size?: string;
  priceRange?: string;
  description?: string;
  portfolio?: string;
  location?: string;
  contact?: string;
}

export interface FreelanceDevelopment {
  type?: string;
  languages?: string;
  experience?: string;
  rate?: string;
  description?: string;
  portfolio?: string;
  location?: string;
  contact?: string;
}

export interface Gardening {
  serviceType?: string;
  experience?: string;
  availability?: string;
  rate?: string;
  employees?: number;
  description?: string;
  location?: string;
  contact?: string;
}

export interface ManualLabor {
  workType?: string;
  experience?: string;
  hours?: string;
  rate?: string;
  description?: string;
  location?: string;
  toolsRequired?: string;
  contact?: string;
}

export interface Retail {
  jobTitle?: string;
  company?: string;
  retailType?: string;
  rate?: string;
  schedule?: string;
  description?: string;
  location?: string;
  contact?: string;
}

export interface SoftwareDevelopment {
  type?: string;
  languages?: string;
  experience?: string;
  qualifications?: string;
  salaryRange?: string;
  description?: string;
  location?: string;
  contact?: string;
}

export interface SoftwareDesign {
  designType?: string;
  toolsSoftware?: string;
  experience?: string;
  educationQualifications?: string;
  salaryRange?: string;
  description?: string;
  location?: string;
  contact?: string;
}

export interface Security {
  jobTitle?: string;
  company?: string;
  securityType?: string;
  experience?: string;
  qualifications?: string;
  salaryRange?: string;
  description?: string;
  location?: string;
  contact?: string;
}

export interface Athletics {
  sportType?: string;
  skillLevel?: string;
  meetingTime?: string;
  location?: string;
  description?: string;
  coachingStaff?: string;
  coachingExperienceRequired?: boolean;
  contact?: string;
}

export interface Pet {
  petType?: string;
  breeds?: string;
  size?: string;
  communityLeaders?: string;
  pictureUrl?: string;
  description?: string;
  location?: string;
  contact?: string;
}

export interface Academic {
  subjects?: string;
  gradeLevel?: string;
  educationRequirement?: string;
  otherQualifications?: string;
  communityLeaders?: string;
  description?: string;
  location?: string;
  contact?: string;
}

export interface Developer {
  type?: string;
  languages?: string;
  experienceRequired?: string;
  meetingTime?: string;
  communityLeaders?: string;
  description?: string;
  location?: string;
  contact?: string;
}

export interface Elderly {
  activities?: string;
  minimumAge?: number;
  communityLeaders?: string;
  handicapAccommodations?: boolean;
  meetingTime?: string;
  description?: string;
  location?: string;
  contact?: string;
}

