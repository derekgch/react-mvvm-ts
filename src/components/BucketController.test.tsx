import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BucketController from './BucketController';
import BucketViews from './BucketViews';
import EditForm from './UI/EditForm';
import CreateBucket from './UI/CreateBucket';
Enzyme.configure({ adapter: new Adapter() })

describe('BucketController', () => {
    let viewModel = null;
    let wrapper = null;


    beforeEach(() => {
        viewModel = {
            getBuckets() {},
            createBuckets() {},
            getFruits(){}
        }
        wrapper = Enzyme.shallow(<BucketController viewModel={viewModel}/>)
    })

    afterEach(() => {
        jest.resetAllMocks()
    }) 

    it('should render <BucketViews/> without errors', () => {
        expect(wrapper.find(BucketViews)).toHaveLength(1);
    })

    it('should render <EditForm /> modal', ()=>{
        expect(wrapper.find(EditForm)).toHaveLength(1);
    })
    it('should render <CreateBucket /> modal', ()=>{
        expect(wrapper.find(CreateBucket)).toHaveLength(1);
    })

    it('should render <EditForm/> modal after setting state.openEdit to be true', () =>{
        wrapper.instance().openEdit();
        expect(wrapper.state().openEdit).toEqual(true);
        expect(wrapper.find(EditForm)).toHaveLength(1);
    })

    it('should not render <EditForm/> modal after setting state.openEdit to be false', () =>{
        wrapper.instance().closeEdit();
        expect(wrapper.state().openEdit).toEqual(false);
        expect(wrapper.find(EditForm)).toHaveLength(1);
    })

    it('should render <CreateBucket/> modal after setting state.openEdit to be true', () =>{
        wrapper.instance().openCreate();
        expect(wrapper.state().openCreate).toEqual(true);
        expect(wrapper.find(CreateBucket)).toHaveLength(1);
    })

    // it('should set pokemon name in the component state', () => {
    //     const mock = faker.lorem.word()
    //     const e = { target: { value: mock }}

    //     wrapper.instance().setPokemonName(e)
    //     expect(wrapper.state().pokemonName).toBe(mock)
    // })

    // it('should clear pokemon name in the component state', () => {
    //     wrapper.instance().clearPokemonName()
    //     expect(wrapper.state().pokemonName).toBe('')
    // })

    // it('should call addPokemon method from the viewModel with valid params', () => {
    //     const spy = jest.spyOn(viewModel, 'addPokemon')
    //     wrapper.instance().savePokemon()

    //     expect(spy).toHaveBeenCalledWith({
    //         image: wrapper.state().pokemonImage,
    //         name: wrapper.state().pokemonName
    //     })
    // })

    // it('should save Pokemon and clear Pokemon name from state', () => {
    //     const spySave = jest.spyOn(wrapper.instance(), 'savePokemon')
    //     const spyClear = jest.spyOn(wrapper.instance(), 'clearPokemonName')

    //     wrapper.instance().addPokemon()

    //     expect(spySave).toHaveBeenCalled()
    //     expect(spyClear).toHaveBeenCalled()
    // })

    // it('should remove Pokemon', () => {
    //     const spy = jest.spyOn(viewModel, 'removePokemon')
    //     wrapper.instance().removePokemon(pokemonMock)

    //     expect(spy).toHaveBeenCalled()
    //     expect(spy).toHaveBeenCalledWith(pokemonMock)
    // })
})