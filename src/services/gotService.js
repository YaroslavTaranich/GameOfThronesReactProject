export default class GotService {

    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api/';
    }

    getResourse = async (url) => {
        const res = await fetch (`${this._apiBase}${url}`);
        if(!res.ok) {
            throw new Error(`Not fetching url: ${url}; status: ${res.status}`)
        }    
        return await res.json();    
    };
    getAllCharacters = async () => {
        const res = await this.getResourse('characters?page=5&pageSize=10');
        return res.map(this._transformCaracter)
    }
    getCharater = async (id) => {
        const char = await this.getResourse(`characters/${id}`);
        return this._transformCaracter(char);
    }
    getAllHouses = async () => {
        const houses = await this.getResourse('houses/')
        return houses.map(this._transformHouses);
    }
    getHouse = async (id) => {
        const house = await this.getResourse(`houses/${id}`);
        return this._transformHouses(house);
    }
    getAllBooks = async () => {
        const books = await this.getResourse('books/')
        return books.map(this._transformBook);
    }
    getBook = async (id) => {
        const book = await this.getResourse(`books/${id}`);
        return this._transformBook(book);
    }

    _transformCaracter(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }

    _transformHouses(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released
        }
    }
}