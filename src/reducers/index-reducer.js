function sortFunction(a, b, field) {
  if (a[field] < b[field]) {
    return -1;
  }
  if (a[field] > b[field]) {
    return 1;
  }
  return 0;
}

function getVisibleUsers({ users, query, sortField }) {
  return [].concat(users)
    .filter((x) => (query ? x.fullName.startsWith(query) : true))
    .sort((a, b) => sortFunction(a, b, sortField));
}

export default function reducer(state, action) {
  switch (action.type) {
    case 'USERS_FETCHED':
      const users = action.payload.map((x) => ({
        id: x.id,
        fullName: x.fullName,
        age: x.age,
        rating: x.rating,
        speciality: x.Group.Speciality.name,
        groupName: x.Group.name,
        color: x.Color.color,
      })).sort((a, b) => sortFunction(a, b, 'fullName'));
      return {
        ...state,
        users,
        visibleUsers: users,
      };
    case 'SORT': {
      const visibleUsers = getVisibleUsers(
        {
          users: state.users,
          query: state.query,
          sortField: action.payload,
        },
      );
      return {
        ...state,
        visibleUsers,
        sortField: action.payload,
      };
    }

    case 'SEARCH': {
      const visibleUsers = getVisibleUsers({
        users: state.users,
        query: action.payload,
        sortField: state.sortField,
      });
      return {
        ...state,
        visibleUsers,
        query: action.payload,
      };
    }

    case 'DELETE': {
      const id = action.payload;
      const index = state.users.findIndex((x) => x.id === id);
      const users = [...state.users.slice(0, index), ...state.users.slice(index + 1)];
      const visibleUsers = getVisibleUsers({
        users,
        query: state.query,
        sortField: state.sortField,
      });
      return {
        ...state,
        users,
        visibleUsers,
      };
    }

    default:
      return state;
  }
}
