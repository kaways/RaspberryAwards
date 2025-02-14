import { Provider } from 'react-redux';
import { screen, render } from '@testing-library/react';
import allReducers from '../../utils/mockReducers';
import { thunk } from 'redux-thunk';
import { Input } from 'antd';
import configureMockStore from 'redux-mock-store';
import ListMovies from './index';

const mockStore = configureMockStore([thunk]);
let store;

describe('ListMovies Component', () => {

    beforeEach(() => {
        store = mockStore({
            ...allReducers,
        });

        store.dispatch = jest.fn();
    });

    it('renders the correct greeting message', () => {
        render(<Provider store={store}>
            <ListMovies />
        </Provider>);

        const greetingElement = screen.getByText("List movies");
        expect(greetingElement).toBeInTheDocument();
    });
});

describe('InputMask Component', () => {
    it('Should render', () => {
        const getByText = render(<Input placeholder="Filter by year" />);
        expect(getByText).toBeTruthy();
    });
});
