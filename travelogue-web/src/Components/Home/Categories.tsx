import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Home.css';

interface State {
    selectedItem: string,
    onClickCategory: (e: React.MouseEvent<HTMLHeadingElement>) => void
}

function Categories(props: State) {
    return (
        <Grid container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            className="categories-grid">
            <Grid item>
                <h6
                    onClick={props.onClickCategory}
                    className={
                        props.selectedItem === "New"
                            ? "categories-text-selected"
                            : "categories-text"
                    }>
                    New
                </h6>
            </Grid>
            <Grid item>
                <h6
                    onClick={props.onClickCategory}
                    className={
                        props.selectedItem === "Popular"
                            ? "categories-text-selected"
                            : "categories-text"
                    }>
                    Popular
                </h6>
            </Grid>
            <Grid item>
                <h6
                    onClick={props.onClickCategory}
                    className={
                        props.selectedItem === "Recommendations"
                            ? "categories-text-selected"
                            : "categories-text"
                    }>
                    Recommendations
                </h6>
            </Grid>
        </Grid>
    )
}

export default Categories;