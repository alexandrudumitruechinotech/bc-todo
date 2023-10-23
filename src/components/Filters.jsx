import PropTypes from "prop-types";
import {filterTypes} from "../_shared/data.js";

const Filters = ({type, onTypeChange}) => {
    return (
        <div className="d-flex">
            <div className="form-check me-2">
                <input type="radio" className="form-check-input" id="all" name="view-options" value={filterTypes.ALL}
                       checked={type === filterTypes.ALL} onChange={onTypeChange}/>
                <label className="form-check-label" htmlFor="all">All</label>
            </div>
            <div className="form-check me-2">
                <input type="radio" className="form-check-input" id="completed" value={filterTypes.COMPLETED}
                       name="view-options" checked={type === filterTypes.COMPLETED}
                       onChange={onTypeChange}/>
                <label className="form-check-label" htmlFor="completed">Completed</label>
            </div>
            <div className="form-check me-2">
                <input type="radio" className="form-check-input" id="active" value={filterTypes.ACTIVE} name="view-options"
                       checked={type === filterTypes.ACTIVE}
                       onChange={onTypeChange}/>
                <label className="form-check-label" htmlFor="active">Active</label>
            </div>
        </div>
    )
}

Filters.propTypes = {
    type: PropTypes.string,
    onTypeChange: PropTypes.func
}

export default Filters