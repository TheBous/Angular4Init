export class Artist {


  constructor(name?:string, mbid?: string, match?: string, url?: string, image?: Object, streamable?: string) {
    this.name = name;
    this.mbid = mbid;
    this.match = match;
    this.url = url;
    this.image = image;
    this.streamable = streamable;
  }
  image: Object;
  match: string;
  mbid: string;
  name: string;
  streamable: string;
  url: string;

  getName() {
    return this.name;
  }

  getUrl() {
    return this.url;
  }
}
