import { createSlice } from '@reduxjs/toolkit';
import { Metadata } from 'lib/types/metadata';

const initialState: Metadata = {
  version: '1.0.0'
};

const MetadataSlice = createSlice({
  name: 'metadata',
  initialState,
  reducers: {}
});

export const { reducer, actions } = MetadataSlice;
