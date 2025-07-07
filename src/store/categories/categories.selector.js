import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories;

export const selectCategories= createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
)

//Memoized selector
//As long as categories doesn't change, do not re run this, just give back previous value
export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => categories.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
     }, {})
);
  