import React from 'react'
import Select from 'react-select'

export default function ReactSelect(props) {
  const options = [
    { value: 'ru', label: 'ru' },
    { value: 'en', label: 'en' }
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
        ? 'rgb(64, 65, 95)'
        : state.isFocused
        ? 'rgb(64, 65, 95, .4)'
        : undefined,
        color: state.isDisabled
        ? "#000"
        : state.isSelected
        ? '#fff'
        : state.isFocused
        ? '#fff'
        : '#000',
        cursor: 'pointer',
        width: '100px'
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
