import React from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import { logout } from "../../Redux/auth-reducer";
import { RootType } from "../../Redux/redux-store";

export type HeaderPropsType = {
  logout: () => void
  isAuth: boolean
  login: string|null
};

class HeaderContainer extends React.Component<HeaderPropsType> {
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state: RootType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect(mapStateToProps, { logout })(HeaderContainer);
