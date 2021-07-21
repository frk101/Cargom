import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  return (
    <View style={styles.menu}>
      <TouchableOpacity style={styles.opacitys} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Image source={require("../assets/menu.png")} style={{ width: 30, height: 30 }} resizeMode="contain" />
      </TouchableOpacity>

      <Image source={require("../assets/shipgeldiLogo-v03-1.png")} style={{ width: 140, resizeMode: "contain" }} />
      <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
        <MaterialCommunityIcons name="account-circle" size={40} color={COLORS.gray} style={{ marginTop: 10 }} />
      </TouchableOpacity>
    </View>
  );
};

Header.propTypes = {};

export default Header;
