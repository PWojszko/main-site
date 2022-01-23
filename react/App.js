class App extends React.Component {
  state = {
    menuActive: "",
    boxOverlayActive: "",
    phoneIntervalQuene: 0,
  };

  handleDropdownClick = () => {
    this.setState({
      menuActive: !this.state.menuActive,
    });
  };

  handleBoxOverlayClick = () => {
    this.setState({
      boxOverlayActive: !this.state.boxOverlayActive,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Dropdown
          handleDropdownClick={this.handleDropdownClick}
          menuActive={this.state.menuActive}
        />
        <Menu menuActive={this.state.menuActive} />
        <AboutMe />
        <Boxes
          handleBoxOverlayClick={this.handleBoxOverlayClick}
          boxOverlayActive={this.state.boxOverlayActive}
        />
        <Socials />
        <Footer />
      </React.Fragment>
    );
  }
}
