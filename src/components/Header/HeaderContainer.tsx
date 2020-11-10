import React from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import { getAuthUserData } from "../../Redux/auth-reducer";
import { RootType } from "../../Redux/redux-store";

export type HeaderPropsType = {
  getAuthUserData: () => void;
  isAuth: string;
  login: string;
};

class HeaderContainer extends React.Component<HeaderPropsType> {
  componentDidMount() {
    this.props.getAuthUserData();
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state: RootType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);
