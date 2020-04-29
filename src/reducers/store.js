export function repositoryReducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_SELECT_REPOSITORY': {
        return applyToggleSelectRepository(state, action);
        }
        default:
        return state;
    }
}

export default function applyToggleSelectRepository(state, action) {
    const { id, isSelected } = action;

    const selectedRepositoryIds = isSelected
        ? state.selectedRepositoryIds.filter(itemId => itemId !== id)
        : state.selectedRepositoryIds.concat(id);

    return { ...state, selectedRepositoryIds };
}