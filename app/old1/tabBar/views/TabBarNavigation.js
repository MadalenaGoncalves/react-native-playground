import React from 'react'
//Redux
import { connect } from 'react-redux'
// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { TabBar } from '../navigationConfiguration'

const mapStateToProps = (state) => {
 return {
  navigationState: state.tabBar,
  }
}

class TabBarNavigation extends React.Component {
  render(){
      const { dispatch, navigationState } = this.props
      return (
        <TabBar
          navigation={
            addNavigationHelpers({
              dispatch: dispatch,
              state: navigationState,
            })
          }
        />
      )
    }
  }
export default connect(mapStateToProps)(TabBarNavigation)
