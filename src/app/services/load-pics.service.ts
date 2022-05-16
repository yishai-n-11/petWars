import { Injectable } from "@angular/core";
import { environment as env } from "../../environments/environment";
@Injectable({
  providedIn: "root",
})
export class LoadPicsService {
  constructor() {}

  async loadDogImg() {
    const dogImageUrl = await fetch(env.dogsUrl).then((res) => res.json());
    return dogImageUrl.url;
  }
  async loadCatImg() {
    const catImage: string[] | any = await fetch(env.catsUrl).then((res) =>
      res.json()
    );
    return catImage[0];
  }
  async loadBirdImg() {
    const birdImg = await fetch(env.birdsUrl).then((res) => res.json());
    return birdImg[0];
  }
}
