import React from "react";
import NewEntry from "../components/NewEntry";
import {postAd} from "../endpoints/postingEP";

export class DefaultProto {}

export class TrucksAndCars {
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

export class Motorcycles {
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

export class Boats {
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

export class Books {
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

export class Furniture {
  furnitureType?: string;
  material?: string;
  style?: string;
  condition?: string;
  price?: string;
  description?: string;
  location?: string;
  contact?: string;
}

export class Apartments {
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

export class RentalHouse {
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

export class PurchaseHouse {
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

export class RoommateAds {
  roommatesWanted?: number;
  rent?: string;
  utilitiesIncluded?: string;
  leaseDuration?: string;
  petPolicy?: string;
  description?: string;
  location?: string;
  contact?: string;
}

export class TownHouse {
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

export class Babysitting {
  ageRangeOfChildren?: string;
  experience?: string;
  availability?: string;
  rate?: string;
  location?: string;
  aboutMe?: string;
  cookingExperience?: string;
  contact?: string;
}

export class DogWalking {
  breedOfDog?: string;
  location?: string;
  experience?: string;
  age?: string;
  aboutMe?: string;
  availability?: string;
  rate?: string;
  contact?: string;
}

export class ArtCommissions {
  typeOfArt?: string;
  medium?: string;
  size?: string;
  priceRange?: string;
  description?: string;
  portfolio?: string;
  location?: string;
  contact?: string;
}

export class FreelanceDevelopment {
  type?: string;
  languages?: string;
  experience?: string;
  rate?: string;
  description?: string;
  portfolio?: string;
  location?: string;
  contact?: string;
}

export class Gardening {
  serviceType?: string;
  experience?: string;
  availability?: string;
  rate?: string;
  employees?: number;
  description?: string;
  location?: string;
  contact?: string;
}

export class ManualLabor {
  workType?: string;
  experience?: string;
  hours?: string;
  rate?: string;
  description?: string;
  location?: string;
  toolsRequired?: string;
  contact?: string;
}

export class Retail {
  jobTitle?: string;
  company?: string;
  retailType?: string;
  rate?: string;
  schedule?: string;
  description?: string;
  location?: string;
  contact?: string;
}

export class SoftwareDevelopment {
  type?: string;
  languages?: string;
  experience?: string;
  qualifications?: string;
  salaryRange?: string;
  description?: string;
  location?: string;
  contact?: string;
}

export class SoftwareDesign {
  designType?: string;
  toolsSoftware?: string;
  experience?: string;
  educationQualifications?: string;
  salaryRange?: string;
  description?: string;
  location?: string;
  contact?: string;
}

export class Security {
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

export class Athletics {
  sportType?: string;
  skillLevel?: string;
  meetingTime?: string;
  location?: string;
  description?: string;
  coachingStaff?: string;
  coachingExperienceRequired?: boolean;
  contact?: string;
}

export class Pet {
  petType?: string;
  breeds?: string;
  size?: string;
  communityLeaders?: string;
  pictureUrl?: string;
  description?: string;
  location?: string;
  contact?: string;
}

export class Academic {
  subjects?: string;
  gradeLevel?: string;
  educationRequirement?: string;
  otherQualifications?: string;
  communityLeaders?: string;
  description?: string;
  location?: string;
  contact?: string;
}

export class Developer {
  type?: string;
  languages?: string;
  experienceRequired?: string;
  meetingTime?: string;
  communityLeaders?: string;
  description?: string;
  location?: string;
  contact?: string;
}

export class Elderly {
  activities?: string;
  minimumAge?: number;
  communityLeaders?: string;
  handicapAccommodations?: boolean;
  meetingTime?: string;
  description?: string;
  location?: string;
  contact?: string;
}

