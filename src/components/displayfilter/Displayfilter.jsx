import { useSelector, useDispatch } from '../../store';
import { SET_RESULT_TYPE } from '../../store/actionTypes';
import './displayfilter.css';

const DisplayFilter = () => {
  const state = useSelector();
  const dispatch = useDispatch();

  const filter = state.resultType;

  const handleChange = ({ target }) => {
    const { value } = target;
    dispatch({ type: SET_RESULT_TYPE, payload: value });
  };

  return (
    <div className='displayoptions'>
      <label htmlFor='percentage' className='displayoptions--input'>
        <input
          type='radio'
          value='percentage'
          id='percentage'
          name='type'
          onChange={handleChange}
          checked={filter === 'percentage'}
          className='displayoptions--input'
        />
        <span>Total %</span>
      </label>
      <label htmlFor='total' className='displayoptions--input'>
        <input
          type='radio'
          value='total'
          id='total'
          name='type'
          onChange={handleChange}
          checked={filter === 'total'}
          className='displayoptions--input'
        />
        <span>Total</span>
      </label>
    </div>
  );
};

export default DisplayFilter;
