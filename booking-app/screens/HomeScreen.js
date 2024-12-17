import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import { TextInput } from "react-native-web";
import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from "@expo/vector-icons/Fontisto";
import DatePicker from "react-native-date-ranges";
import {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  SlideAnimation,
} from "react-native-modals";
import { ModalTitle } from "react-native-modals";
const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedDates, setSelectedDates] = useState();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [chlidren, setChiltren] = useState(0);
  const [modelVisibile, setModelVisibile] = useState(false);
  console.log(selectedDates);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking.com",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "blod",
        color: "white",
        textAlign: "center",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 90,
        borderBottomColor: "transparent",
        showdowColor: "transparent",
      },
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 12 }}
        />
      ),
    });
  }, []);
  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: { width: "80%", marginHorizontal: "3%" },
          text: { fontSize: 20 },
        }}
        primary
        title="submit"
      />
    );
  };
  return (
    <>
      <View>
        <Header />
        <ScrollView>
          <View
            style={{
              margin: 20,
              borderColor: "#FFC72C",
              borderWidth: 3,
              borderRadius: 6,
            }}
          >
            {/*  */}
            <Pressable
              style={{
                borderColor: "#FFC72C",
                flexDirection: "row",
                paddingHorizontal: 10,
                paddingVertical: 15,
                gap: 10,
                alignItems: "center",

                borderWidth: 2,
              }}
            >
              <AntDesign name="search1" size={24} color="black" />
              <TextInput placeholder="Enter your Destination" style={{}} />
            </Pressable>
            {/*  */}
            <Pressable
              style={{
                borderColor: "#FFC72C",
                borderWidth: 2,
                flexDirection: "row",
                paddingHorizontal: 10,
                paddingVertical: 15,
                gap: 10,
                alignItems: "center",
              }}
            >
              <Fontisto name="date" size={24} color="black" />
              <DatePicker
                style={{
                  width: 350,
                  height: 30,
                  borderRadius: 0,
                  borderWidth: 0,
                  borderColor: "transparent",
                }}
                customStyles={{
                  placeholderText: {
                    fontSize: 14,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                  headerStyle: {
                    backgroundColor: "#003580",
                  },
                  contentText: {
                    fontSize: 14,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                }}
                selectedColor="#0047AB"
                customButton={(onConfirm) => customButton(onConfirm)}
                onConfirm={(startDate, endDate) =>
                  setSelectedDates(startDate, endDate)
                }
                allowFontScaling={false}
                placeholder={"Apr 27, 2018 → Jul 10, 2018"}
                mode={"range"}
              />
            </Pressable>
            {/*  */}
            <Pressable
              onPress={() => setModelVisibile(!modelVisibile)}
              style={{
                borderColor: "#FFC72C",
                borderWidth: 2,
                flexDirection: "row",
                paddingHorizontal: 10,
                paddingVertical: 15,
                gap: 10,
                alignItems: "center",
              }}
            >
              <Ionicons name="person-outline" size={24} color="black" />

              <TextInput
                placeholderTextColor="red"
                placeholder={`${rooms} room - ${adults} adults - ${chlidren} chlidran`}
                style={{}}
              />
            </Pressable>
            {/*  */}
            <Pressable
              style={{
                borderColor: "#FFC72C",
                borderWidth: 2,
                flexDirection: "row",
                paddingHorizontal: 10,
                paddingVertical: 15,
                backgroundColor: "#2a52ba",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  margin: "auto",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Search
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
      <Text
        style={{
          marginHorizontal: 20,
          fontSize: 15,
          fontWeight: "500",
        }}
      >
        Travel More Speed Less
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Pressable
          style={{
            marginHorizontal: 20,
            width: 200,
            height: 150,
            marginTop: 10,
            padding: 20,
            paddingHorizontal: 20,
            borderRadius: 15,
            backgroundColor: "#003580",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontWeight: "bold",
              marginVertical: 7,
            }}
          >
            Gemius
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontWeight: "500",
            }}
          >
            You are ate grnius level one in our loyalty program
          </Text>
        </Pressable>
        <Pressable
          style={{
            marginHorizontal: 20,
            width: 200,
            height: 150,
            marginTop: 10,
            padding: 20,
            paddingHorizontal: 20,
            borderRadius: 15,
            backgroundColor: "#003580",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontWeight: "bold",
              marginVertical: 7,
            }}
          >
            Gemius
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontWeight: "500",
            }}
          >
            You are ate grnius level one in our loyalty program
          </Text>
        </Pressable>
        <Pressable
          style={{
            marginHorizontal: 20,
            width: 200,
            height: 150,
            marginTop: 10,
            padding: 20,
            paddingHorizontal: 20,
            borderRadius: 15,
            backgroundColor: "#003580",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontWeight: "bold",
              marginVertical: 7,
            }}
          >
            Gemius
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontWeight: "500",
            }}
          >
            You are ate grnius level one in our loyalty program
          </Text>
        </Pressable>
      </ScrollView>
      {/* model bottom */}
      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModelVisibile(!modelVisibile)}
        swipeDirection={["up", "down"]}
        // model  footer contant
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              textStyle={{
                color: "white",
                fontWeight: "bold",
              }}
              style={{
                backgroundColor: "#003580",
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 8,
              }}
              onPress={() => setModelVisibile(!modelVisibile)}
            />
          </ModalFooter>
        }
        // moddle header contant
        modalTitle={
          <ModalTitle
            title="Select rooms and guests"
            textStyle={{ fontSize: 18, fontWeight: "bold", color: "black" }}
          />
        }
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModelVisibile(!modelVisibile)}
        visible={modelVisibile}
        onTouchOutside={() => setModelVisibile(!modelVisibile)}
      >
        <ModalContent style={{ width: "100%", height: 310 }}>
          {/* model middle contant  */}
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 15,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: 500 }}>Rooms</Text>
              <Pressable
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <Pressable
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 15,
                    borderColor: "#BEBEBE",
                    backgroundColor: "#E0E0E0",
                  }}
                >
                  <Text
                    onPress={() => setRooms(Math.max(1, rooms - 1))}
                    style={{
                      paddingHorizontal: 6,
                      textAlign: "center",
                      fontWeight: "600",
                      fontSize: 20,
                      marginTop: -2,
                    }}
                  >
                    -
                  </Text>
                </Pressable>

                <Pressable
                  style={{
                    paddingHorizontal: 6,
                    textAlign: "center",
                    fontWeight: "600",
                    fontSize: 18,
                  }}
                >
                  {rooms}
                </Pressable>
                <Pressable
                  onPress={() => setRooms((c) => c + 1)}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 15,
                    borderColor: "#BEBEBE",
                    backgroundColor: "#E0E0E0",
                  }}
                >
                  <Text
                    style={{
                      paddingHorizontal: 6,
                      textAlign: "center",
                      fontWeight: "600",
                      fontSize: 20,
                      marginTop: -2,
                    }}
                  >
                    +
                  </Text>
                </Pressable>
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 15,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: 500 }}>Adults</Text>
              <Pressable
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <Pressable
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 15,
                    borderColor: "#BEBEBE",
                    backgroundColor: "#E0E0E0",
                  }}
                >
                  <Text
                    onPress={() => setAdults(Math.max(1, adults - 1))}
                    style={{
                      paddingHorizontal: 6,
                      textAlign: "center",
                      fontWeight: "600",
                      fontSize: 20,
                      marginTop: -2,
                    }}
                  >
                    -
                  </Text>
                </Pressable>

                <Pressable
                  style={{
                    paddingHorizontal: 6,
                    textAlign: "center",
                    fontWeight: "600",
                    fontSize: 18,
                  }}
                >
                  {adults}
                </Pressable>
                <Pressable
                  onPress={() => setAdults((c) => c + 1)}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 15,
                    borderColor: "#BEBEBE",
                    backgroundColor: "#E0E0E0",
                  }}
                >
                  <Text
                    style={{
                      paddingHorizontal: 6,
                      textAlign: "center",
                      fontWeight: "600",
                      fontSize: 20,
                      marginTop: -2,
                    }}
                  >
                    +
                  </Text>
                </Pressable>
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 15,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: 500 }}>chlidran</Text>
              <Pressable
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <Pressable
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 15,
                    borderColor: "#BEBEBE",
                    backgroundColor: "#E0E0E0",
                  }}
                >
                  <Text
                    onPress={() => setChiltren(Math.max(0, chlidren - 1))}
                    style={{
                      paddingHorizontal: 6,
                      textAlign: "center",
                      fontWeight: "600",
                      fontSize: 20,
                      marginTop: -2,
                    }}
                  >
                    -
                  </Text>
                </Pressable>

                <Pressable
                  style={{
                    paddingHorizontal: 6,
                    textAlign: "center",
                    fontWeight: "600",
                    fontSize: 18,
                  }}
                >
                  {chlidren}
                </Pressable>
                <Pressable
                  onPress={() => setChiltren((c) => c + 1)}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 15,
                    borderColor: "#BEBEBE",
                    backgroundColor: "#E0E0E0",
                  }}
                >
                  <Text
                    style={{
                      paddingHorizontal: 6,
                      textAlign: "center",
                      fontWeight: "600",
                      fontSize: 20,
                      marginTop: -2,
                    }}
                  >
                    +
                  </Text>
                </Pressable>
              </Pressable>
            </View>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
