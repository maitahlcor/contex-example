import { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';

const AppContext = createContext();

const initialState = {
  candidates: [
    {
      id: 1,
      name: 'Candidato generico #1',
      votes: 0,
      percentage: 0,
    },
    {
      id: 2,
      name: 'Candidato generico #2',
      votes: 0,
      percentage: 0,
    },
    {
      id: 3,
      name: 'Candidato generico #3',
      votes: 0,
      percentage: 0,
    },
    {
      id: 4,
      name: 'Candidato generico #4',
      votes: 0,
      percentage: 0,
    },
  ],
  totalVotes: 0,
  resultType: 'total',
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const store = {
    state,
    dispatch,
  };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};


export const useSelector = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error('useSelector must be used in a AppProvider');
  }

  return context.state;
};

export const useDispatch = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error('useDispatch must be used in a AppProvider');
  }

  return context.dispatch;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
