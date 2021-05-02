import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Categories.css';

interface State {
    selectedItem: string,
    onClickCategory: (e: React.MouseEvent<HTMLHeadingElement>) => void
}

function Categories(props: State) {
    return (
        <div className="categories-grid">
            <div>
                <h6
                    onClick={props.onClickCategory}
                    className={
                        props.selectedItem === "New"
                            ? "categories-text-selected"
                            : "categories-text"
                    }>
                    New
                </h6>
            </div>
            <div>
                <h6
                    onClick={props.onClickCategory}
                    className={
                        props.selectedItem === "Popular"
                            ? "categories-text-selected"
                            : "categories-text"
                    }>
                    Popular
                </h6>
            </div>
            <div>
                <h6
                    onClick={props.onClickCategory}
                    className={
                        props.selectedItem === "Recommendations"
                            ? "categories-text-selected"
                            : "categories-text"
                    }>
                    Recommendations
                </h6>
            </div>
        </div>
    )
}

export default Categories;