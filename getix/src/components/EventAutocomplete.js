import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';

const EventAutocomplete = ({ onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      const fetchOptions = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/events/search', {
            params: { query: searchTerm },
          });
          setOptions(response.data);
        } catch (error) {
          console.error('Error fetching autocomplete options:', error);
        }
      };

      const debounceTimeout = setTimeout(fetchOptions, 300); 
      return () => clearTimeout(debounceTimeout);
    } else {
      setOptions([]);
    }
  }, [searchTerm]);

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.Title}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Events"
          variant="outlined"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      )}
      onChange={(e, value) => onSelect(value)}
    />
  );
};

export default EventAutocomplete;
