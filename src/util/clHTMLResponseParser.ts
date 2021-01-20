import { Response } from 'express';
import cheerio from 'cheerio';

import { CL_IMAGE_BASE } from '../config/constants';

function timestampFactory(dateString: string): Date {
    return new Date(dateString);
}

function neighborhoodFactory(neighborhoodString: string): string {
    return neighborhoodString
        .replace(' (', '')
        .replace(')', '');
}

function imagesFactory(dataIds: Array<string>): Array<string> {
    return dataIds
        .map((dataId) => {
            const fileName = dataId.replace('3:', '');
            const suffix = '_300x300.jpg';

            return `${CL_IMAGE_BASE}/${fileName}${suffix}`;
        });
}

function dataIdsFactory(dataIdsString: string): Array<string> {
    return dataIdsString
        ? dataIdsString.split(',')
        : [];
}

export function clHTMLResponseParser(res: Response, clHTMLResponse: any): void {
    const $ = cheerio.load(clHTMLResponse);

    const resultRows = $('[data-pid]');

    const resultsData = resultRows.map((i, resultRow) => {
        const resultHeading = $(resultRow).find('.result-info h3 a').first();
        const resultPrice = $(resultRow).find('.result-price').first();
        const resultHood = $(resultRow).find('.result-hood').first();
        const resultHref = $(resultRow).children('a[href]')[0];
        const resultDate = $(resultRow).find('.result-info time[datetime]')[0];
        const resultDataIds = dataIdsFactory(resultHref.attribs['data-ids']);

        return {
            title: resultHeading.text(),
            price: resultPrice.text(),
            neighborhood: neighborhoodFactory(resultHood.text()),
            timestamp:  timestampFactory(resultDate.attribs['datetime']),
            postId: resultRow.attribs['data-pid'],
            repostId: resultRow.attribs['data-repost-of'],
            href: resultHref.attribs['href'],
            dataIds: resultDataIds,
            images: imagesFactory(resultDataIds),
        };
    }).get();

    res.status(200)
        .json(resultsData);
}