export type Area = {
    Abbreviation: string;
    AreaID: number;
    Country: string;
    Description: string;
    Hostname: string;
    Latitude: number;
    Longitude: number;
    Region: string;
    ShortDescription: string;
    SubAreas?: Array<Subarea>;
    Timezone: string;
}

type Subarea = {
    Abbreviation: string;
    Description: string;
    ShortDescription: string;
    SubAreaID: number;
}