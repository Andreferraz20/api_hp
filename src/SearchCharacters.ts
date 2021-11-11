import { ICharacter } from "./CharacterInterface";

class SearchCharacters {
    execute(data: ICharacter[]) {
        const house = "Gryffindor";
        const dataFiltered: ICharacter[] = data.filter(
            (character: ICharacter) =>
                character.house === house && character.patronus === "stag"
        );

        return dataFiltered;
    }
}

export default new SearchCharacters();
