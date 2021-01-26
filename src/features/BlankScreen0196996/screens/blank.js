import { connect } from "react-redux"
import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = { TextInput_97: "" }
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }

  render = () => (
    <View>
      <View style={styles.View_3}>
        <Image
          source={{
            uri:
              "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/24086/96934db2-726c-490d-b2a9-b07381e57516.jpg"
          }}
          style={styles.Image_95}
        />
      </View>
      <TextInput
        placeholder="Type an item to search"
        style={styles.TextInput_97}
        value={this.state.TextInput_97}
        onChangeText={nextValue => this.setState({ TextInput_97: nextValue })}
      />
      <View style={styles.View_101}>
        <View style={styles.View_102}>
          <Image
            source={{
              uri:
                "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/24086/24ddb62f-f45c-41ab-ba32-b05f67495a80.jpg"
            }}
            style={styles.Image_105}
          />
          <Text style={styles.Text_109}>Product 1</Text>
          <Text style={styles.Text_118}>$299</Text>
          <Button
            title="View More"
            color="#ffffff"
            style={styles.Button_124}
            onPress={() => alert("Pressed!")}
          />
        </View>
        <View style={styles.View_103}>
          <Image
            source={{
              uri:
                "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/24086/24ddb62f-f45c-41ab-ba32-b05f67495a80.jpg"
            }}
            style={styles.Image_107}
          />
          <Text style={styles.Text_114}>Product 2</Text>
          <Text style={styles.Text_121}>$199</Text>
          <Button
            title="View More"
            color="#ffffff"
            style={styles.Button_127}
            onPress={() => this.props.navigation.navigate("BlankScreen1197010")}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  View_3: { width: "100%", height: 200, alignItems: "center" },
  Image_95: { width: 800, paddingRight: 500 },
  TextInput_97: { marginBottom: 10, paddingBottom: 15 },
  View_101: {
    width: 280,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center"
  },
  View_102: {
    width: 140,
    height: 420,
    alignSelf: "center",
    alignItems: "center"
  },
  Image_105: { width: 130, height: 130, alignSelf: "center" },
  Text_109: {
    width: 130,
    alignSelf: "center",
    fontSize: 16,
    fontFamily: "Roboto-Bold",
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 2
  },
  Text_118: {
    width: 130,
    alignSelf: "center",
    fontSize: 16,
    color: "#64e6e8",
    fontFamily: "OpenSans-Bold",
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 2
  },
  Button_124: {
    alignSelf: "center",
    fontSize: 16,
    color: "#ff0000",
    fontWeight: "bold",
    borderColor: "#00f000",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderRadius: 9
  },
  View_103: {
    width: 140,
    height: 420,
    alignSelf: "center",
    alignItems: "center"
  },
  Image_107: { width: 130, height: 130, alignSelf: "center" },
  Text_114: {
    width: 130,
    alignSelf: "center",
    fontSize: 16,
    fontFamily: "Roboto-Bold",
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 2
  },
  Text_121: {
    width: 130,
    fontSize: 16,
    color: "#64e6e8",
    fontFamily: "OpenSans-Bold",
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 2
  },
  Button_127: {
    alignSelf: "center",
    fontSize: 16,
    color: "#ff0000",
    fontWeight: "bold",
    borderColor: "#00ff33",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderRadius: 9
  }
})

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blank)
