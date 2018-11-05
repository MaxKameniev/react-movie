export const putSearchInState = (event) => ({
    type: 'INPUT_SEARCH',
    searchstring: event.target.value,
})

export const clearInput = () => ({
    type: 'CLEAR_INPUT'
})