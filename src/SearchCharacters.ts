import { ICharacter } from "./CharacterInterface";

class SearchCharacters {
    execute(data: ICharacter[], filters: ICharacter) {
        let dataFiltered: ICharacter[] = data;

        if (filters.species) {
            dataFiltered = dataFiltered.filter(
                (character: ICharacter): ICharacter => {
                    if (filters.species === character.species) {
                        return character;
                    }
                    return null;
                }
            );
        }

        if (filters.eyeColour) {
            dataFiltered = dataFiltered.filter(
                (character: ICharacter): ICharacter => {
                    if (filters.eyeColour === character.eyeColour) {
                        return character;
                    }
                    return null;
                }
            );
        }

        if (filters.hairColour) {
            dataFiltered = dataFiltered.filter(
                (character: ICharacter): ICharacter => {
                    if (filters.hairColour === character.hairColour) {
                        return character;
                    }
                    return null;
                }
            );
        }
        return dataFiltered;
    }
}

export default new SearchCharacters();
