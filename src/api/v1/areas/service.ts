import fetch from 'node-fetch';

import { AreaDatum, Area, SubAreaDatum, SubArea } from './types';
import { CL_REF_API_BASE } from '../../../config/constants';

function subAreasFactory(subAreasData: Array<SubAreaDatum> = []): Array<SubArea> {
    return subAreasData.map(subAreaDatum => ({
        abbreviation: subAreaDatum.Abbreviation,
        description: subAreaDatum.Description,
        shortDescription: subAreaDatum.ShortDescription,
        subAreaID: subAreaDatum.SubAreaID,
    }));
}

function areaFactory(areaDatum: AreaDatum): Area {
    return ({
        abbreviation: areaDatum.Abbreviation,
        areaID: areaDatum.AreaID,
        country: areaDatum.Country,
        description: areaDatum.Description,
        hostname: areaDatum.Hostname,
        latitude: areaDatum.Latitude,
        longitude: areaDatum.Longitude,
        region: areaDatum.Region,
        shortDescription: areaDatum.ShortDescription,
        subAreas: subAreasFactory(areaDatum.SubAreas),
        timezone: areaDatum.Timezone,
    });
}

export const areasService = {
    getAreas: async function (): Promise<Array<Area>> {
        return fetch(`${CL_REF_API_BASE}/Areas`)
            .then(res => res.json())
            .then(json => json
                .map((areaDatum: AreaDatum) => areaFactory(areaDatum)));
    },
};