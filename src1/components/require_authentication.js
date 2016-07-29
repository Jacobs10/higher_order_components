import React from 'react'
import {connect} from 'react-redux'
export default function(ComposedComponent){
  class Authentication extends React.Component {
    //Authentication.contextTypes -- gives every other piece of code in application ability to access this
    //static keyword is defining a property (the object) on the classm class level property
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount(){ //fires every time the component about to be rendered to DOM
      if(!this.props.authenticated){
        this.context.router.push('/')
      }
    }

    componentWillUpdate(nextProps){ // gets called whenever component about be handed new set of props
                          // or in other words be rerendered
      if (!nextProps.authenticated){
        this.context.router.push('/')
      }
    }

    render(){
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }
  function mapStateToProps(state){
    return { authenticated: state.authenticated }
  }
  return connect(mapStateToProps)(Authentication)
}




// step 1 : figure out if user currently authenticated

// need to connect auth class to redux store, pull of authenticated prop

//step 2 - if not logged in- kick back to home link
