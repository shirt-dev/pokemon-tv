const videoPathReq = 'https://production-ps.lvp.llnw.net/r/PlaylistService/media';
const corsProxy = 'https://cors2.nyaku.xyz/?';

const corsHeadUS = {
    'x-cors-headers': JSON.stringify({
        'X-Forwarded-For': '192.232.168.23',
        'Origin': 'https://watch.pokemon.com',
    }),
};
const corsHeadUK = {
    'x-cors-headers': JSON.stringify({
        'X-Forwarded-For': '86.5.53.25',
        'Origin': 'https://watch.pokemon.com',
    }),
};

const tvRegions = {
    'us': 'United States',
    'uk': 'UK',
    'fr': 'France',
    'it': 'Italia',
    'de': 'Deutschland',
    'es': 'España',
    'el': 'América Latina',
    'br': 'Brasil',
    'ru': 'Россия',
    'dk': 'Danmark',
    'nl': 'Nederland',
    'fi': 'Suomi',
    'no': 'Norge',
    'se': 'Sverige',
};

const imgBase64 = {
    poster: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAf4AAAKoCAQAAAA8WVXZAAAFxElEQVR42u3TQQ0AAAjEME4T/rXBFw+0EpYs0wU8FPOD+QHzA+YHzA+YHzA/YH7A/ID5AfMD5gfMD5gfMD9gfsD8gPkB8wPmB8wPmB8wP2B+MD9gfsD8gPkB8wPmB8wPmB8wP2B+wPyA+QHzA+YHzA+YHzA/YH7A/ID5AfMD5gfMD+Y3P5gfMD9gfsD8gPkB8wPmB8wPmB8wP2B+wPyA+QHzA+YHzA+YHzA/YH7A/ID5AfMD5gfzA+YHzA+YHzA/YH7A/ID5AfMD5gfMD5gfMD9gfsD8gPkB8wPmB8wPmB8wP2B+wPxgfhHA/ID5AfMD5gfMD5gfMD9gfsD8gPkB8wPmB8wPmB8wP2B+wPyA+QHzA+YHzA+YHzA/mB8wP2B+wPyA+QHzA+YHzA+YHzA/YH7A/ID5AfMD5gfMD5gfMD9gfsD8gPkB8wPmB/MD5gfMD5gfMD9gfsD8gPkB8wPmB8wPmB8wP2B+wPyA+QHzA+YHzA+YHzA/YH7A/ID5wfyA+QHzA+YHzA+YHzA/YH7A/ID5AfMD5gfMD5gfMD9gfsD8gPkB8wPmB8wPmB8wP5gfMD9gfsD8gPkB8wPmB8wPmB8wP2B+wPyA+QHzA+YHzA+YHzA/YH7A/ID5AfMD5gfMD+YHzA+YHzA/YH7A/ID5AfMD5gfMD5gfMD9gfsD8gPkB8wPmB8wPmB8wP2B+wPyA+cH8gPkB8wPmB8wPmB8wP2B+wPyA+QHzA+YHzA+YHzA/YH7A/ID5AfMD5gfMD5gfMD+Y3/xgfsD8gPkB8wPmB8wPmB8wP2B+wPyA+QHzA+YHzA+YHzA/YH7A/ID5AfMD5gfMD5gfzA+YHzA/YH7A/ID5AfMD5gfMD5gfMD9gfsD8gPkB8wPmB8wPmB8wP2B+wPyA+QHzg/nND+YHzA+YHzA/YH7A/ID5AfMD5gfMD5gfMD9gfsD8gPkB8wPmB8wPmB8wP2B+wPyA+cH8gPkB8wPmB8wPmB8wP2B+wPyA+QHzA+YHzA+YHzA/YH7A/ID5AfMD5gfMD5gfMD+YXwQwP2B+wPyA+QHzA+YHzA+YHzA/YH7A/ID5AfMD5gfMD5gfMD9gfsD8gPkB8wPmB8wP5gfMD5gfMD9gfsD8gPkB8wPmB8wPmB8wP2B+wPyA+QHzA+YHzA+YHzA/YH7A/ID5wfyA+QHzA+YHzA+YHzA/YH7A/ID5AfMD5gfMD5gfMD9gfsD8gPkB8wPmB8wPmB8wP2B+MD9gfsD8gPkB8wPmB8wPmB8wP2B+wPyA+QHzA+YHzA+YHzA/YH7A/ID5AfMD5gfMD+YHzA+YHzA/YH7A/ID5AfMD5gfMD5gfMD9gfsD8gPkB8wPmB8wPmB8wP2B+wPyA+QHzg/kB8wPmB8wPmB8wP2B+wPyA+QHzA+YHzA+YHzA/YH7A/ID5AfMD5gfMD5gfMD9gfjA/YH7A/ID5AfMD5gfMD5gfMD9gfsD8gPkB8wPmB8wPmB8wP2B+wPyA+QHzA+YHzA/mNz+YHzA/YH7A/ID5AfMD5gfMD5gfMD9gfsD8gPkB8wPmB8wPmB8wP2B+wPyA+QHzA+YH8wPmB8wPmB8wP2B+wPyA+QHzA+YHzA+YHzA/YH7A/ID5AfMD5gfMD5gfMD9gfsD8YH7zg/kB8wPmB8wPmB8wP2B+wPyA+QHzA+YHzA+YHzA/YH7A/ID5AfMD5gfMD5gfMD9gfjA/YH7A/ID5AfMD5gfMD5gfMD9gfsD8gPkB8wPmB8wPmB8wP2B+wPyA+QHzA+YHzA/mFwHMD5gfMD9gfsD8gPkB8wPmB8wPmB8wP2B+wPyA+QHzA+YHzA+YHzA/YH7A/ID5AfOD+QHzA+YHzA+YHzA/YH7A/ID5AfMD5gfMD5gfMD9gfsD8gPkB8wPmB8wPmB8wP2B+MD9gfsD8gPkB8wPmB8wPmB8wP2B+wPyA+QHzA+YHzA+YHzA/YH7A/ID5AfMD5geuBfEyL6ZN6SINAAAAAElFTkSuQmCC',
    channel: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAAxCAQAAAAFbP2gAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflBwgQJRltdw85AAAARElEQVRo3u3OQQ0AIAwEMMDS/GtjPyzcSFoF3bfWR046oDuHrq6urq6urq5umq6urq6urq6ubpqurq6urq6urm6aru7TlekBlGVikYAAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDctMDhUMTY6Mzc6MjUrMDA6MDB0UH0/AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA3LTA4VDE2OjM3OjI1KzAwOjAwBQ3FgwAAAABJRU5ErkJggg==',
    episode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK8AAABjCAQAAABHsZgxAAAAlUlEQVR42u3QMQEAAAgDIJfJ/tk0xT6IQG6HmujVqxe9evWiV69e9OrVi1696NWrF7169aJXr1706kWvXr3o1asXvXr1olevXvTqRa9evejVqxe9evWiVy969epFr1696NWrF7169aJXL3r16kWvXr3o1asXvXrRq1cvevXqRa9evejVq1evXr3o1asXvXr1olevXgoe2UB2usWr9LoAAAAASUVORK5CYII=',
};