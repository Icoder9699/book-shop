import React from 'react'
import Select from 'react-select'

export default function ReactSelect(props) {
  const options = [
    { value: 'en', label: 'en' },
    { value: 'ru', label: 'ru' }
  ];

  const styles = {
    control: styles => ({
      ...styles, backgroundColor: '#fff',
      width: '100px',
      cursor: "pointer"
    }),
    option: (styles, state) => {
      return {
        ...styles,
        backgroundColor:  state.isDisabled
        ? 'rgb(64, 65, 95, .5)'
        : state.isSelected
        ? 'rgb(64, 65, 95, .8)'
        : state.isFocused
        ? 'rgb(64, 65, 95, .5)'
        : undefined,
        color: state.isDisabled
        ? "#000"
        : state.isSelected
        ? '#fff'
        : state.isFocused
        ? '#fff'
        : '#000',
        cursor: 'pointer',
        width: '100px',
      }
    }
  };

  return (
    <Select
      options={options}
      styles={styles}
      {...props}
    />
  )
}
