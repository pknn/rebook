import { createSlice } from '@reduxjs/toolkit';
import { Metadata } from '../../types/features';

const initialState: Metadata = {
  version: '1.0.0'
};

const MetadataSlice = createSlice({
  name: 'metadata',
  initialState,
  reducers: {}
});

export const { reducer, actions } = MetadataSlice;
