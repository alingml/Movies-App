import React from 'react';
import _ from 'lodash';
const Pagination = props => {
        const {itemsCount, pageSize} = props;

        // Math.Ceil to return the integer
        const pagesCount = Math.ceil(itemsCount / pageSize);

        // Generate an array using lodash
        const pages = _.range(1, pagesCount + 1); // + 1 To include the last page

    return (
        <nav>
            <ul className="pagination">
                {pages.map(page => (
                <li key={page} className="page-item">
                    <a className="page-link">{page}</a>
                        </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;