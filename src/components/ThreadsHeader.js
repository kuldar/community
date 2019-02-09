import React from 'react'
import styled from 'styled-components'
import Select from 'react-select'

// Locals
import theme from '../theme'

const typeOptions = [
  { value: 'popular', label: 'Popular' },
  { value: 'recent', label: 'Recent' },
  { value: 'most-commented', label: 'Most Commented' },
  { value: 'most-liked', label: 'Most Liked' }
]

const tagOptions = [
  { value: 'everything', label: 'Everything' },
  { value: 'questions', label: 'Questions' },
  { value: 'meetups', label: 'Meetups' },
  { value: 'feature-requests', label: 'Feature Requests' },
  { value: 'show-tell', label: 'Show and Tell' }
]

const timeOptions = [
  { value: 'now', label: 'Now' },
  { value: 'week', label: 'Past week' },
  { value: 'month', label: 'Past month' },
  { value: 'year', label: 'Past year' },
  { value: 'all-time', label: 'All time' }
]

const modeOptions = [
  { value: 'compact', label: 'Compact' },
  { value: 'comfortable', label: 'Comfortable' },
  { value: 'expanded', label: 'Expanded' },
]

// Locals
// import HeartIcon from '../vectors/heart'

const customStyles = {
  control: (provided) => ({
    ...provided,
    border: 'none',
    boxShadow: '0 2px 4px 0 rgba(8,34,51,0.075)',
    borderRadius: '6px',
    cursor: 'pointer'
  }),
  indicatorSeparator: () => ({ display: 'none' }),
  menu: (provided) => ({
    ...provided,
    boxShadow: '0 3px 6px 0 rgba(8,34,51,0.1)'
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? theme.blue : state.isFocused ? theme.lightGray1 : 'transparent',
    cursor: 'pointer',
    padding: '4px 8px'
  })
}

// Threads Header
const ThreadsHeader = ({ threadsMode, handleSetThreadsMode }) => {

  return (
    <Wrapper>
      <Item>
        <Select
          styles={customStyles}
          defaultValue={typeOptions[0]}
          options={typeOptions} />
      </Item>
      <Item>
        <Select
          styles={customStyles}
          defaultValue={tagOptions[0]}
          options={tagOptions} />
      </Item>
      <Item>
        <Select
          styles={customStyles}
          defaultValue={timeOptions[0]}
          options={timeOptions} />
      </Item>
      <Item>
        <Select
          styles={customStyles}
          defaultValue={modeOptions.find(o => o.value === threadsMode)}
          options={modeOptions}
          onChange={e => handleSetThreadsMode(e.value)}/>
      </Item>
    </Wrapper>
  )
}

// Styles
const Wrapper = styled.div`
  display: flex;
  margin-bottom: 24px;
`

const Item = styled.div`
  flex: 1;
  & + & { margin-left: 16px; }
`

export default ThreadsHeader