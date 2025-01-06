import { View, Text } from "react-native";
import {Link} from "expo-router";

export default function Index() {

    // @ts-ignore
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Text className={"text-2xl text-blue-700 my-12 font-rubik font-bold"}>Home page</Text>
      <Link href={'/sign-in'}>Sign In</Link>
        <Link href={'/explore'}>Explore</Link>
        <Link href={'/profile'}>Profile</Link>
        <Link href={'/properties/1'}>Property1</Link>
    </View>
  );
}
