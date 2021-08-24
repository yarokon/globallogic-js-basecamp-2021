import { createAsyncThunk } from '@reduxjs/toolkit';

import rolesApi from '../../api/rolesApi';

export const getRoles = createAsyncThunk('roles/getRoles', rolesApi.getRoles);
