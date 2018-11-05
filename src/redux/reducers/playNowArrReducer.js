export default function playNowArr (state = [], action){
    switch (action.type) {
        case 'GET_PLAYNOW':
           return action.playnow.reduce((acc,el) =>acc.concat(el.data.results),[]).map(el => ({
                ...el,   
                release_date: new Date(el.release_date).getTime()
           })).sort((a,b) => b.release_date - a.release_date)

        default:
            return state;
    }
}
