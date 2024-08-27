import { readFile, writeFile } from 'fs/promises';
import { Injectable } from '@nestjs/common';

@Injectable()
export class QuotesRepository {
  async getAllQuotes() {
    const json = await readFile('./quotes.json', 'utf8');
    const list = JSON.parse(json);
    return list.quotes;
  }

  async getQuoteById(id: number) {
    const json = await readFile('./quotes.json', 'utf8');
    const list = JSON.parse(json);

    return list.quotes.find((quote: any) => quote.id === id);
  }

  async getRandomQuote() {
    const json = await readFile('./quotes.json', 'utf8');
    const list = JSON.parse(json);
    const length = list.quotes.length;

    const randomIndex = Math.floor(Math.random() * length);
    return list.quotes[randomIndex];
  }

  async generateIds() {
    const json = await readFile('./quotes.json', 'utf8');
    const list = JSON.parse(json);

    list.quotes.forEach((quote: any, index: number) => {
      quote.id = index + 1;
    });

    await writeFile('./quotes.json', JSON.stringify(list, null, 2));
    return 'Ids generated';
  }
}
