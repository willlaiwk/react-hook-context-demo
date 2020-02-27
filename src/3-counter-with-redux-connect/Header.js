import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Header = ({ count }) => <h1>Counter: {count}</h1>

Header.propTypes = {
  count: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  count: state.counter.count
})

export default connect(mapStateToProps)(Header)
