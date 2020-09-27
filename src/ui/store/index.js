import globalHook from '../../core/useStore';
import actions from '../actions';

const initialValues = {a: 1, b: 1};

export const useGlobal = globalHook(initialValues, actions);
