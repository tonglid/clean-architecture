import {
  Autocomplete,
  Box,
  Chip,
  FormControlLabel,
  TextField,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import * as React from 'react';
interface Props {
  options: any[];
}
export const Filter: React.FC<Props> = ({ options }) => {
  const [selectValue, setSelectValue] = React.useState<any[]>([]);
  return (
    <>
      <FormControlLabel
        sx={{ width: '100%', marginRight: '20px' }}
        labelPlacement="start"
        control={
          <Autocomplete
            multiple
            fullWidth
            size="small"
            options={options.map((option) => option.title)}
            freeSolo
            sx={{
              '& .MuiAutocomplete-root .MuiInput-root': {
                paddingBottom: 0,
              },
              '& .MuiInputBase-root:before': {
                borderBottom: 'none',
              },
            }}
            onChange={(event, value) => setSelectValue(value)}
            renderTags={(value: readonly string[], getTagProps) => {
              return value.map((option: string, index: number) => (
                <Chip
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ));
            }}
            renderInput={(params) => (
              <TextField
                variant="standard"
                {...params}
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
              />
            )}
          />
        }
        label={
          <>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                marginRight: '10px',
              }}
            >
              <FilterListIcon />
              Filter
            </Box>
          </>
        }
      />
    </>
  );
};
