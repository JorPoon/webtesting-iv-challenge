const db = require('../data/dbConfig.js');
const Characters = require('./charactersModel.js');

describe('characters model', () => {
    beforeEach(async () => {
        await db('characters').truncate();
    })

    describe('insert()', () => {
        it('should insert the characters', async () => {
            await Characters.insert({name: 'Bellona', class: 'Ranger', type: 'Earth'});
            await Characters.insert({name: 'Luna', class: 'Warrior', type: 'Ice'});
            await Characters.insert({name: 'Aramintha', class: 'Mage', type: 'Fire'});
            await Characters.insert({name: 'Cecilia', class: 'Knight', type: 'Fire'});
            await Characters.insert({name: 'Ruele', class: 'Soul Weaver', type: 'Light'});

            const characters = await db('characters');
            expect(characters).toHaveLength(5);
        })

        it('should insert the provided character', async () => {
            let character = await Characters.insert({name: 'Bellona', class: 'Ranger', type: 'Earth'});
            expect(character.name).toBe('Bellona');

            character = await Characters.insert({name: 'Luna', class: 'Warrior', type: 'Ice'});
            expect(character.name).toBe('Luna')
        })
    })

    describe('remove()', () => {
        it('should remove the character', async () => {
            await Characters.insert({name: 'Bellona', class: 'Ranger', type: 'Earth'});
            await Characters.insert({name: 'Luna', class: 'Warrior', type: 'Ice'});
            await Characters.remove(1)
            const characters = await db('characters');
            expect(characters).toHaveLength(1)
        })
    })
})