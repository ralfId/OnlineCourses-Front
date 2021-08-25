import { types } from "../../types/types";

const initState = {
  recordList: [],
  totalRecords: 0,
  pageNumber: 0,
};

export const courseReducer = (state = initState, action) => {

    switch (action.type) {
        case types.coursesPagination:
            return{
                ...state,
                ...action.payload
            }
    case types.coursesLogout:
        return{
            ...initState
        }
        default:
            return state;
    }
};
