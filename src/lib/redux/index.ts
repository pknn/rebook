import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { ApplicationState, ApplicationDispatch } from '../../store/index';

export const useAppDispatch = (): ApplicationDispatch =>
  useDispatch<ApplicationDispatch>();
export const useAppSelector: TypedUseSelectorHook<ApplicationState> = useSelector;
