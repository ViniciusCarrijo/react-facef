import { action, makeAutoObservable, observable } from "mobx";
import { getFilms } from "../../apis/star-wars.api";

export default class StarWarsStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable films: any[] = [];

  @action buildFilms = async () => {
    try {
      const { data } = await getFilms();
      this.films = data;
    } catch (e) {
      console.log(e);
    }
  };
}
const starWars = new StarWarsStore();
export { starWars };
