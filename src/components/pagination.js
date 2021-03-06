import React, {Component} from 'react'
import _ from 'lodash';
const defaultProps = {
  initialPage: 1
}

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {pager: {} };
    // this.initialPage = 1;
  }

  componentDidMount() {
    if (this.props.items && this.props.items.length) {
      this.setPage(this.props.initialPage)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // reset page if items array has changed
    if (this.props.items !== prevProps.items) {
      this.setPage(this.props.initialPage);
    }
  }

  setPage(page) {
    let items = this.props.items;
    let pager = this.state.pager;

    if(page < 1 || page > pager.totalPages) {
      return;
    }

    //get new pager object for specified pager
    pager = this.getPager(Object.keys(items).length, page);

    //update the state use action with redux instead of setState
    this.setState({pager: pager});

    //get a new page of iems from items array
    let pageOfItems = Object.keys(items).map(key => items[key])
      .filter(val => val.id >= pager.startIndex && val.id <= pager.endIndex);

    //call change page function from parent component
    this.props.onChangePage(pageOfItems);
  }

  getPager(totalItems, currentPage, pageSize) {
    currentPage = currentPage || 1;

    // default page size is 10
    pageSize = pageSize || 3;

    // calculate total pages
    var totalPages = Math.ceil(totalItems / pageSize);
    console.log(totalPages);
    var startPage, endPage;
    if (totalPages <= 10) {
        // less than 10 total pages so show all
        startPage = 1;
        endPage = totalPages;
    } else {
        // more than 10 total pages so calculate start and end pages
        if (currentPage <= 6) {
            startPage = 1;
            endPage = 10;
        } else if (currentPage + 4 >= totalPages) {
            startPage = totalPages - 9;
            endPage = totalPages;
        } else {
            startPage = currentPage - 5;
            endPage = currentPage + 4;
        }
    }

    // calculate start and end item indexes
    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    console.log(startIndex);
    // create an array of pages to ng-repeat in the pager control
    var pages = _.range(startPage, endPage + 1);

    // return object with all pager properties required by the view
    return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages
    };
  }

  render() {
    var pager = this.state.pager;

    if (!pager.pages || pager.pages.length <= 1) {
        // don't display pager if there is only 1 page
        return null;
    }

    return (
        <ul className="pagination">
            <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                <a onClick={() => this.setPage(1)}>First</a>
            </li>
            <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                <a onClick={() => this.setPage(pager.currentPage - 1)}>Previous</a>
            </li>
            {pager.pages.map((page, index) =>
                <li key={index} className={pager.currentPage === page ? 'active' : ''}>
                    <a onClick={() => this.setPage(page)}>{page}</a>
                </li>
            )}
            <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                <a onClick={() => this.setPage(pager.currentPage + 1)}>Next</a>
            </li>
            <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                <a onClick={() => this.setPage(pager.totalPages)}>Last</a>
            </li>
        </ul>
    );
  }

}
// Pagination.defaultProps;
export default Pagination;
