import React from 'react'
import Select from 'react-select'

export default function SelectOptions(props) {

    return (
        <Select
          isClearable={false}
          options={props.options}       
          onChange={(option) => props.handleChange(option)}
        />
    );
  }

