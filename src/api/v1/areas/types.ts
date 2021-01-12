export type AreaDatum = {
    Abbreviation: string;
    AreaID: number;
    Country: string;
    Description: string;
    Hostname: string;
    Latitude: number;
    Longitude: number;
    Region: string;
    ShortDescription: string;
    SubAreas?: Array<SubAreaDatum>;
    Timezone: string;
}

export type Area = {
    abbreviation: string;
    areaID: number;
    country: string;
    description: string;
    hostname: string;
    latitude: number;
    longitude: number;
    region: string;
    shortDescription: string;
    subAreas?: Array<SubArea>;
    timezone: string;
}

export type SubAreaDatum = {
    Abbreviation: string;
    Description: string;
    ShortDescription: string;
    SubAreaID: number;
}

export type SubArea = {
    abbreviation: string;
    description: string;
    shortDescription: string;
    subAreaID: number;
}