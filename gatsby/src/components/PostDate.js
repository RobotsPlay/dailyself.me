import PropTypes from "prop-types"
import React from "react"

const PostDate = ({ month, day, year }) => (
    <div className="date">
        {`${month}/${day}/${year}`}
    </div>
)

PostDate.propTypes = {
  month: PropTypes.number,
  day: PropTypes.number,
  year: PropTypes.number,
}

PostDate.defaultProps = {
  month: 1,
  day: 1,
  year: 2019,
}

export default PostDate