//change text in fileters


export const setFilterText = (text)=>({
  type:"SET_TEXT",
  text
});

//sortBy
export const sortByDate =()=>({
  type:"SORT_BY_DATE",
  sortBy:'date'
})

export const sortByAmount =()=>({
  type:"SORT_BY_Amount",
  sortBy:'amount'
})

//set start endDate
export const setStartDate = (date)=>({
  type:"SET_STARTDATE",
  date
})

export const setEndDate = (date)=>({
  type:"SET_ENDDATE",
  date
})
