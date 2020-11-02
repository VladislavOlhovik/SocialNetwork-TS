import React from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import { setAuthUserData } from "../../Redux/auth-reducer";
import { RootType } from "../../Redux/redux-store";
import { authAPI } from "../../api/api";
export type HeaderPropsType = {
  setAuthUserData: (a: any) => void;
  isAuth: string;
  login: string;
};

class HeaderContainer extends React.Component<HeaderPropsType> {
  componentDidMount() {
    authAPI.getMe().then((data) => {
      if (data.resultCode === 0) {
        this.props.setAuthUserData(data.data);
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state: RootType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
